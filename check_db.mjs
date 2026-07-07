import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role for admin access

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkDatabase() {
  console.log('--- Checking Conversations ---')
  const { data: convos, error: err1 } = await supabase.from('conversations').select('*').order('created_at', { ascending: false }).limit(5)
  if (err1) console.error(err1)
  else console.log(convos)

  console.log('\n--- Checking Messages ---')
  const { data: msgs, error: err2 } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(5)
  if (err2) console.error(err2)
  else console.log(msgs)
}

checkDatabase()
