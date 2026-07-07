import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

/**
 * OAuth callback handler.
 *
 * Supabase redirects here after a successful OAuth flow (Google,
 * Facebook, etc.) with a `code` query parameter. We exchange it for
 * a session, then redirect the user to the dashboard (or wherever
 * the `next` param says).
 *
 * This route also fixes the forgotten-password flow which was broken
 * because `/auth/callback` didn't exist before.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
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
              // The `cookies()` API can only set cookies in a Server
              // Component context. In middleware / edge functions the
              // setter might throw — safe to swallow here because the
              // redirect below will carry the Set-Cookie headers anyway.
            }
          },
        },
      }
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const forwardUrl = `${origin}${next}`
      return NextResponse.redirect(forwardUrl)
    }
  }

  // Auth error — redirect to login with a generic error hint
  return NextResponse.redirect(`${origin}/login?error=auth`)
}
