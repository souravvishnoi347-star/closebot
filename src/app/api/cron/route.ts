import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Requires service role key to bypass RLS and process all users' broadcasts
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * Cron job endpoint to process scheduled broadcasts.
 * Expected to be called every minute (e.g. by Vercel Cron or external service).
 */
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    // Basic protection against random hits (can be replaced by Vercel Cron Secret)
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 1. Fetch pending scheduled broadcasts
    const { data: broadcasts, error: fetchErr } = await supabaseAdmin
      .from('broadcasts')
      .select('*')
      .eq('status', 'scheduled')
      .lte('scheduled_at', new Date().toISOString());

    if (fetchErr) {
      console.error('Failed to fetch scheduled broadcasts:', fetchErr);
      return NextResponse.json({ error: fetchErr.message }, { status: 500 });
    }

    if (!broadcasts || broadcasts.length === 0) {
      return NextResponse.json({ message: 'No scheduled broadcasts found.' });
    }

    console.log(`Found ${broadcasts.length} scheduled broadcasts to process.`);

    for (const broadcast of broadcasts) {
      // Mark as sending to prevent duplicate runs
      await supabaseAdmin
        .from('broadcasts')
        .update({ status: 'sending' })
        .eq('id', broadcast.id);

      // We'll kick off processing asynchronously so the cron request doesn't timeout
      processBroadcast(broadcast).catch((err) => {
        console.error(`Error processing broadcast ${broadcast.id}:`, err);
      });
    }

    return NextResponse.json({ message: `Started processing ${broadcasts.length} broadcasts.` });
  } catch (err) {
    console.error('Cron error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function processBroadcast(broadcast: any) {
  try {
    const { user_id, id, audience_filter, template_name, template_language, template_variables } = broadcast;

    // 1. Resolve Contacts
    let contacts: any[] = [];
    if (audience_filter.type === 'all') {
      const { data } = await supabaseAdmin.from('contacts').select('*').eq('user_id', user_id);
      contacts = data ?? [];
    } else if (audience_filter.type === 'tags' && audience_filter.tagIds?.length > 0) {
      const { data: contactTags } = await supabaseAdmin
        .from('contact_tags')
        .select('contact_id')
        .in('tag_id', audience_filter.tagIds);
      
      const uniqueIds = [...new Set((contactTags ?? []).map(ct => ct.contact_id))];
      if (uniqueIds.length > 0) {
        const { data } = await supabaseAdmin.from('contacts').select('*').eq('user_id', user_id).in('id', uniqueIds);
        contacts = data ?? [];
      }
    } else if (audience_filter.type === 'csv' && audience_filter.csvContacts) {
      // For CSV, they were inserted into contacts table during step 4 theoretically. 
      // We will look them up by phone.
      const phones = audience_filter.csvContacts.map((c: any) => c.phone);
      if (phones.length > 0) {
        const { data } = await supabaseAdmin.from('contacts').select('*').eq('user_id', user_id).in('phone', phones);
        contacts = data ?? [];
      }
    }

    // Apply excludes
    if (audience_filter.excludeTagIds && audience_filter.excludeTagIds.length > 0) {
      const { data: excludeRows } = await supabaseAdmin
        .from('contact_tags')
        .select('contact_id')
        .in('tag_id', audience_filter.excludeTagIds);
      const excludedIds = new Set((excludeRows ?? []).map((r) => r.contact_id));
      contacts = contacts.filter((c) => !excludedIds.has(c.id));
    }

    if (contacts.length === 0) {
      await supabaseAdmin.from('broadcasts').update({ status: 'failed' }).eq('id', id);
      return;
    }

    // 2. Insert Recipients
    const INSERT_BATCH_SIZE = 200;
    const recipientRows = contacts.map(c => ({
      broadcast_id: id,
      contact_id: c.id,
      status: 'pending'
    }));

    for (let i = 0; i < recipientRows.length; i += INSERT_BATCH_SIZE) {
      const batch = recipientRows.slice(i, i + INSERT_BATCH_SIZE);
      await supabaseAdmin.from('broadcast_recipients').insert(batch);
    }

    // 3. Send messages directly using Meta API (bypassing internal HTTP route due to auth)
    const { data: config } = await supabaseAdmin
      .from('whatsapp_config')
      .select('*')
      .eq('user_id', user_id)
      .single();

    if (!config) {
      await supabaseAdmin.from('broadcasts').update({ status: 'failed' }).eq('id', id);
      return;
    }
    
    // We import dynamically or at top level to use decrypt and sendTemplateMessage
    const { decrypt } = await import('@/lib/whatsapp/encryption');
    const { sendTemplateMessage } = await import('@/lib/whatsapp/meta-api');
    const { sanitizePhoneForMeta, isValidE164, phoneVariants } = await import('@/lib/whatsapp/phone-utils');

    const accessToken = decrypt(config.access_token);
    const phoneNumberId = config.phone_number_id;

    // Fetch newly created recipients to get their IDs
    const { data: recipients } = await supabaseAdmin
      .from('broadcast_recipients')
      .select('*, contact:contacts(*)')
      .eq('broadcast_id', id);

    if (!recipients) return;

    const SEND_BATCH_SIZE = 10;
    let failedCount = 0;

    for (let i = 0; i < recipients.length; i += SEND_BATCH_SIZE) {
      const batch = recipients.slice(i, i + SEND_BATCH_SIZE);
      
      for (const r of batch) {
        if (!r.contact?.phone) {
          failedCount++;
          await supabaseAdmin.from('broadcast_recipients').update({ status: 'failed', error_message: 'No phone' }).eq('id', r.id);
          continue;
        }

        const sanitized = sanitizePhoneForMeta(r.contact.phone);
        if (!isValidE164(sanitized)) {
          failedCount++;
          await supabaseAdmin.from('broadcast_recipients').update({ status: 'failed', error_message: 'Invalid phone' }).eq('id', r.id);
          continue;
        }

        const params: string[] = [];
        if (template_variables) {
          const keys = Object.keys(template_variables).sort((a,b) => Number(a)-Number(b));
          for (const k of keys) {
            const v = template_variables[k];
            if (v.type === 'static') params.push(v.value);
            else if (v.type === 'field') {
              const f = v.value;
              params.push((r.contact as any)[f] || '');
            } else {
              params.push(''); // fallback for custom fields
            }
          }
        }

        const variants = phoneVariants(sanitized);
        let sentMessageId: string | null = null;
        let lastError = null;

        for (const variant of variants) {
          try {
            const res = await sendTemplateMessage({
              phoneNumberId,
              accessToken,
              to: variant,
              templateName: template_name,
              languageCode: template_language ?? 'en_US',
              components: params.length > 0 ? [
                {
                  type: 'body',
                  parameters: params.map(p => ({ type: 'text', text: String(p) }))
                }
              ] : []
            });
            sentMessageId = res.messages[0].id;
            break;
          } catch (e: any) {
            lastError = e.message;
            if (!e.message?.includes('not in allowed list') && !e.message?.includes('Invalid parameter')) {
               break; 
            }
          }
        }

        if (sentMessageId) {
          await supabaseAdmin.from('broadcast_recipients').update({
            status: 'sent', sent_at: new Date().toISOString(), whatsapp_message_id: sentMessageId
          }).eq('id', r.id);
        } else {
          failedCount++;
          await supabaseAdmin.from('broadcast_recipients').update({
            status: 'failed', error_message: lastError || 'Unknown error'
          }).eq('id', r.id);
        }
      }
      
      // Delay between batches to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    await supabaseAdmin.from('broadcasts').update({
      status: failedCount === recipients.length ? 'failed' : 'sent',
      total_recipients: recipients.length
    }).eq('id', id);

  } catch (err) {
    console.error(`Broadcast processing failed for ${broadcast.id}`, err);
    await supabaseAdmin.from('broadcasts').update({ status: 'failed' }).eq('id', broadcast.id);
  }
}
