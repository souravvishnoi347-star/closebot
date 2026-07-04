import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function DebugPage() {
  const supabase = await createClient();
  
  const { data: configs } = await supabase.from('whatsapp_config').select('*');
  const { data: conversations } = await supabase.from('conversations').select('*');
  const { data: messages } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(10);
  const { data: contacts } = await supabase.from('contacts').select('*');

  // get env vars to verify
  const env = {
    hasEncryptionKey: !!process.env.ENCRYPTION_KEY,
    encryptionKeyLength: process.env.ENCRYPTION_KEY?.length,
    hasMetaSecret: !!process.env.META_APP_SECRET,
    metaSecretLength: process.env.META_APP_SECRET?.length,
  }

  return (
    <div style={{ padding: 20, fontFamily: 'monospace' }}>
      <h1>Debug Info</h1>
      
      <h2>Environment Variables</h2>
      <pre>{JSON.stringify(env, null, 2)}</pre>
      
      <h2>Configs</h2>
      <pre>{JSON.stringify(configs, null, 2)}</pre>
      
      <h2>Contacts</h2>
      <pre>{JSON.stringify(contacts, null, 2)}</pre>
      
      <h2>Conversations</h2>
      <pre>{JSON.stringify(conversations, null, 2)}</pre>
      
      <h2>Messages</h2>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
}
