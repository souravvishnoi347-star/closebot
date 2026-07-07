import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { isDisposableEmail, isValidEmailFormat } from '@/lib/email-validator'
import { isDisposablePhone, isValidPhoneFormat } from '@/lib/phone-validator'
import { checkRateLimit, rateLimitResponse } from '@/lib/rate-limit'

/**
 * Server-side signup endpoint with validation and rate limiting.
 *
 * Why not call `supabase.auth.signUp()` directly from the client?
 * Because client-side validation can be bypassed — a spammer can
 * just POST to the Supabase auth endpoint directly. This route
 * acts as a gatekeeper: it validates email / phone / rate limits
 * on the server before forwarding to Supabase.
 */

const SIGNUP_RATE_LIMIT = { limit: 5, windowMs: 3600_000 } // 5 per hour per IP

export async function POST(request: Request) {
  // --- Rate limiting by IP ---
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown'
  const rl = checkRateLimit(`signup:${ip}`, SIGNUP_RATE_LIMIT)
  if (!rl.success) {
    return rateLimitResponse(rl)
  }

  // --- Parse body ---
  let body: {
    email?: string
    password?: string
    fullName?: string
    phone?: string
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }

  const { email, password, fullName, phone } = body

  // --- Validate required fields ---
  if (!email || !password || !fullName) {
    return NextResponse.json(
      { error: 'Email, password, and full name are required' },
      { status: 400 }
    )
  }

  // --- Email validation ---
  if (!isValidEmailFormat(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address' },
      { status: 400 }
    )
  }

  if (isDisposableEmail(email)) {
    return NextResponse.json(
      { error: 'Temporary or disposable email addresses are not allowed. Please use a permanent email.' },
      { status: 400 }
    )
  }

  // --- Phone validation ---
  if (phone) {
    if (!isValidPhoneFormat(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number (7-15 digits)' },
        { status: 400 }
      )
    }

    if (isDisposablePhone(phone)) {
      return NextResponse.json(
        { error: 'Virtual or temporary phone numbers are not allowed. Please use a real phone number.' },
        { status: 400 }
      )
    }
  }

  // --- Password validation ---
  if (password.length < 8) {
    return NextResponse.json(
      { error: 'Password must be at least 8 characters long' },
      { status: 400 }
    )
  }

  if (!/\d/.test(password)) {
    return NextResponse.json(
      { error: 'Password must contain at least one number' },
      { status: 400 }
    )
  }

  // --- Create user via Supabase Admin ---
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: false, // They still need to confirm via email
    user_metadata: {
      full_name: fullName,
      phone: phone || undefined,
    },
  })

  if (error) {
    // Map Supabase error messages to user-friendly ones
    if (error.message.includes('already been registered') ||
        error.message.includes('already exists')) {
      return NextResponse.json(
        { error: 'An account with this email already exists. Try signing in instead.' },
        { status: 409 }
      )
    }
    console.error('[signup] Error creating user:', error.message)
    return NextResponse.json(
      { error: 'Failed to create account. Please try again.' },
      { status: 500 }
    )
  }

  // Send confirmation email (admin.createUser doesn't auto-send)
  // We use the regular signUp flow's invite mechanism
  try {
    const { error: inviteError } = await supabaseAdmin.auth.admin.generateLink({
      type: 'signup',
      email,
      password,
    })
    if (inviteError) {
      console.error('[signup] Error generating confirmation link:', inviteError.message)
    }
  } catch (e) {
    console.error('[signup] Error sending confirmation:', e)
  }

  return NextResponse.json(
    {
      message: 'Account created successfully. Please check your email to verify your account.',
      userId: data.user?.id,
    },
    { status: 201 }
  )
}
