"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
import { MessageSquare, ArrowRight, Loader2 } from "lucide-react";

function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Show error from OAuth callback failure
  const authError = searchParams.get("error");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Network error. Please check your connection.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[440px] px-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight mb-8 transition-colors hover:text-primary">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <MessageSquare className="h-4 w-4 text-primary-foreground" />
          </div>
          Closebot
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Welcome back</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email or phone number to sign in to your account.
        </p>
      </div>

      {/* OAuth error banner */}
      {authError === "auth" && (
        <div className="mb-6 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-start gap-3">
          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
          <p>Authentication failed or was canceled. Please try again.</p>
        </div>
      )}

      {/* Social Login */}
      <SocialLoginButtons />

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-4 text-muted-foreground font-medium tracking-wider">
            or continue with
          </span>
        </div>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        {error && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-start gap-3 animate-in fade-in slide-in-from-top-1">
            <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <div className="flex flex-col gap-2.5">
          <Label htmlFor="identifier" className="text-sm font-medium">
            Email or Phone Number
          </Label>
          <Input
            id="identifier"
            type="text"
            placeholder="you@example.com or +1234567890"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 h-11 w-full rounded-lg text-base font-medium shadow-sm transition-all hover:shadow-md"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Left side - Visual/Marketing */}
      <div className="relative hidden w-1/2 lg:flex items-center justify-center bg-zinc-950 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-950 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="relative z-10 w-full max-w-lg px-12 text-white">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <MessageSquare className="h-8 w-8 text-indigo-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            The smartest way to manage WhatsApp conversations.
          </h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            Closebot helps you convert leads, automate replies, and manage your entire sales pipeline directly from WhatsApp.
          </p>
          
          <div className="flex items-center gap-4 text-sm font-medium text-zinc-300 bg-white/5 w-fit px-5 py-3 rounded-full border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-3">
              <div className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-800"></div>
              <div className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-700"></div>
              <div className="h-8 w-8 rounded-full border-2 border-zinc-900 bg-zinc-600"></div>
            </div>
            <span>Join 10,000+ businesses</span>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-background">
        <Suspense fallback={<div className="flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
