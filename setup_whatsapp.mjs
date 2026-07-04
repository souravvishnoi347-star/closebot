import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const encryptionKey = process.env.ENCRYPTION_KEY;

if (!supabaseUrl || !supabaseKey || !encryptionKey) {
  console.error("Missing env vars in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(encryptionKey, 'utf8'), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

async function run() {
  try {
    const { data: { users }, error: userErr } = await supabase.auth.admin.listUsers();
    if (userErr || !users || users.length === 0) {
      console.error("No users found in auth.users.");
      return;
    }
    const userId = users[0].id;
    console.log("Found User ID:", userId, "Email:", users[0].email);

    const phoneNumberId = "1163304356874717";
    const wabaId = "2931801387170937";
    const accessToken = "EAAOT7zHPrGABRZCaZAtZBdvdptPh3SeoIX3jV2EU52IoZBbdAg2Qmi8JpPnH2Aiutal0bhOjRYXRHoQY8XNo0CHYoxZBHTx75li3urau0DLeX8CcCI1S91TPKNxFerK3p3uUhvYUZBKgQ7IP69gDbryRGUFAcqovrjHtnZAlZBYsW04YnEFii5ZBIeX1wfwm4jhZA2gzcwZBemWjbqRGZCNuFm4BK16NT1kJzZAb9aRJg9dg2Yqssb2lxEqEpTZCuQ7elUYYikTALmO7HZCZBBaDpVaQg1CNMpLo";
    const verifyToken = "closebot12345"; 

    const encryptedAccessToken = encrypt(accessToken);
    const encryptedVerifyToken = encrypt(verifyToken);

    await supabase.from('whatsapp_config').delete().eq('user_id', userId);

    const { error: insertErr } = await supabase.from('whatsapp_config').insert({
      user_id: userId,
      phone_number_id: phoneNumberId,
      waba_id: wabaId,
      access_token: encryptedAccessToken,
      verify_token: encryptedVerifyToken,
      status: 'connected',
      connected_at: new Date().toISOString()
    });

    if (insertErr) {
      console.error("Error inserting config:", insertErr);
    } else {
      console.log("SUCCESS! WhatsApp credentials injected directly into Database.");
      console.log("Verify Token for Meta Webhook:", verifyToken);
    }
  } catch (err) {
    console.error("Script error:", err);
  }
}

run();
