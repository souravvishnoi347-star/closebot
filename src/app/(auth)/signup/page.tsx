"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
import { MessageSquare, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!/\d/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          fullName,
          phone: phone || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSuccess(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  const renderFormOrSuccess = () => {
    if (success) {
      return (
        <div className="w-full max-w-[440px] px-8 animate-in fade-in zoom-in-95 duration-500">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-8 ring-emerald-500/5">
              <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-3">Check your email</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We&apos;ve sent a confirmation link to <span className="font-medium text-foreground">{email}</span>. 
              Please check your inbox and click the link to verify your account.
            </p>
          </div>
          <Link href="/login">
            <Button variant="outline" className="w-full h-11 rounded-lg">
              Back to sign in
            </Button>
          </Link>
        </div>
      );
    }

    return (
      <div className="w-full max-w-[440px] px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight mb-8 transition-colors hover:text-primary">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <MessageSquare className="h-4 w-4 text-primary-foreground" />
            </div>
            Closebot
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Create account</h1>
          <p className="text-muted-foreground text-sm">
            Get started with Closebot in seconds.
          </p>
        </div>

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

        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          {error && (
            <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-start gap-3 animate-in fade-in slide-in-from-top-1">
              <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Full name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone number <span className="text-muted-foreground font-normal">(optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Min 8 chars"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Repeat it"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="h-11 rounded-lg border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
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
                Create account
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Left side - Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-background py-12">
        {renderFormOrSuccess()}
      </div>

      {/* Right side - Visual/Marketing */}
      <div className="relative hidden w-1/2 lg:flex items-center justify-center bg-zinc-950 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-950 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Glowing orbs */}
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="relative z-10 w-full max-w-lg px-12 text-white">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Closebot is now open for early access
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-6 leading-tight">
            Supercharge your WhatsApp sales today.
          </h2>
          
          <div className="space-y-6 mt-10">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100">Lightning Fast</h3>
                <p className="text-zinc-400 text-sm mt-1">Automate responses and engage leads instantly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100">Team Collaboration</h3>
                <p className="text-zinc-400 text-sm mt-1">Shared inbox for your entire sales and support team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
