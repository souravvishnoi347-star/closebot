import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { checkRateLimit, rateLimitResponse } from '@/lib/rate-limit'

const LOGIN_RATE_LIMIT = { limit: 10, windowMs: 3600_000 } // 10 attempts per hour

export async function POST(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown'
  const rl = checkRateLimit(`login:${ip}`, LOGIN_RATE_LIMIT)
  if (!rl.success) {
    return rateLimitResponse(rl)
  }

  let body: {
    identifier?: string
    password?: string
  }
  
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }

  const { identifier, password } = body

  if (!identifier || !password) {
    return NextResponse.json(
      { error: 'Email/Phone and password are required' },
      { status: 400 }
    )
  }

  let loginEmail = identifier

  // If it doesn't look like an email, treat it as a phone number
  if (!identifier.includes('@')) {
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    )
    
    // Clean up the phone number input (remove spaces, etc.)
    const cleanPhone = identifier.replace(/\s+/g, '')

    const { data: email, error: rpcError } = await supabaseAdmin.rpc('get_user_email_by_phone', { p_phone: cleanPhone })
    
    if (rpcError || !email) {
      return NextResponse.json(
        { error: 'No account found with this phone number' },
        { status: 404 }
      )
    }
    loginEmail = email
  }

  // Now perform the actual login using the SSR client so cookies are set properly
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignore if called from a Server Component
          }
        },
      },
    }
  )

  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginEmail,
    password,
  })

  if (error) {
    // Give a generic error to prevent enumeration
    return NextResponse.json(
      { error: 'Invalid login credentials' },
      { status: 401 }
    )
  }

  return NextResponse.json({ success: true, userId: data.user.id })
}
