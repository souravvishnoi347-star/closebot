"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

/**
 * Social login buttons — currently Facebook only.
 *
 * Google OAuth requires a Google Cloud Console project with OAuth
 * credentials. It can be added later by:
 * 1. Creating credentials in Google Cloud Console
 * 2. Enabling the Google provider in Supabase Dashboard
 * 3. Uncommenting the Google button below
 */
export function SocialLoginButtons() {
  const [loading, setLoading] = useState<string | null>(null);
  const supabase = createClient();

  const handleOAuthLogin = async (provider: "facebook" | "google") => {
    setLoading(provider);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error(`OAuth error (${provider}):`, error.message);
      setLoading(null);
    }
    // On success, Supabase redirects to the provider's login page
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Facebook Login */}
      <Button
        type="button"
        variant="outline"
        className="h-10 w-full gap-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium"
        onClick={() => handleOAuthLogin("facebook")}
        disabled={loading !== null}
      >
        {loading === "facebook" ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
              fill="#1877F2"
            />
          </svg>
        )}
        Continue with Facebook
      </Button>

      {/* Google Login — uncomment when Google OAuth is configured
      <Button
        type="button"
        variant="outline"
        className="h-10 w-full gap-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium"
        onClick={() => handleOAuthLogin("google")}
        disabled={loading !== null}
      >
        {loading === "google" ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-red-500" />
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        )}
        Continue with Google
      </Button>
      */}
    </div>
  );
}
