import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Check if the current user is authorized (must be admin)
    const supabaseClient = createRouteHandlerClient({ cookies });
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check role in profiles
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can invite members' }, { status: 403 });
    }

    // 2. Initialize Supabase Admin client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    if (!supabaseServiceKey || supabaseServiceKey === 'dummy-service-role-key') {
      console.warn('Using dummy service role key. Invite will fail in production without real key.');
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    // 3. Invite the user
    // This sends an invite email via Supabase Auth
    const { data: inviteData, error: inviteError } = await supabaseAdmin.auth.admin.inviteUserByEmail(
      email,
      {
        data: {
          role: 'agent',
          invited_by: user.id
        }
      }
    );

    if (inviteError) {
      // If user already exists, we could just link them
      if (inviteError.message.includes('already registered')) {
         return NextResponse.json({ error: 'User is already registered. Have them sign in and contact support to link accounts.' }, { status: 400 });
      }
      return NextResponse.json({ error: inviteError.message }, { status: 400 });
    }

    // 4. Create the profile for the invited user
    // Even though they haven't accepted the invite, creating a profile lets the admin assign chats to them immediately
    if (inviteData.user) {
      const { error: profileError } = await supabaseAdmin
        .from('profiles')
        .insert({
          id: inviteData.user.id,
          email: email,
          role: 'agent',
          invited_by: user.id
        })
        // On conflict do nothing in case they already exist
        .select()
        .single();
        
      if (profileError && profileError.code !== '23505') { // Ignore unique constraint violation
         console.error('Error creating profile for invited user:', profileError);
      }
    }

    return NextResponse.json({ success: true, message: 'Invitation sent' });
    
  } catch (error: any) {
    console.error('Invite error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
