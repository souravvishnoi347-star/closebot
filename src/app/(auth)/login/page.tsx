"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
import { Zap, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-purple-50/80"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px]"></div>

      {/* Main Layout: Form Left + 3D Illustration Right */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-center lg:justify-between gap-8 px-6 py-12">

        {/* Left: Sign In Card */}
        <div className="w-full max-w-[480px] shrink-0">
          <div className="bg-white/80 backdrop-blur-2xl rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-white/60 p-10 md:p-12">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/30">
                  <Zap className="w-4 h-4 text-white fill-white" />
                </div>
                Chatmagnet AI
              </Link>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">Sign in</h1>
            <p className="text-slate-400 font-medium mb-10">Welcome back! Enter your credentials to continue.</p>

            {/* OAuth error banner */}
            {authError === "auth" && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 flex items-start gap-3 font-medium">
                <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <p>Authentication failed or was canceled. Please try again.</p>
              </div>
            )}

            {/* Social Login */}
            <SocialLoginButtons />

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/80 backdrop-blur-sm px-4 text-slate-400 font-semibold tracking-widest">
                  or
                </span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-6">
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 flex items-start gap-3 font-medium animate-in fade-in slide-in-from-top-1">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="identifier" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Email or Phone Number
                </Label>
                <Input
                  id="identifier"
                  type="text"
                  placeholder="you@example.com"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  className="h-13 rounded-xl border-slate-200 bg-white/60 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-300 font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-400 hover:border-slate-300"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-13 rounded-xl border-slate-200 bg-white/60 px-4 py-3.5 pr-12 text-base text-slate-900 placeholder:text-slate-300 font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-400 hover:border-slate-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="mt-2 h-13 w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-base font-bold shadow-xl shadow-slate-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/30 group"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

          </div>

          {/* Bottom text */}
          <p className="text-center text-sm text-slate-400 font-medium mt-8">
            Protected by enterprise-grade encryption.
          </p>
        </div>

        {/* Right: 3D Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          {/* Floating geometric decorations */}
          <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500/20 rounded-2xl rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 left-5 w-10 h-10 bg-indigo-400/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute top-32 right-0 w-12 h-12 bg-purple-400/25 rounded-xl -rotate-12 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 bg-blue-300/30 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}></div>
          
          {/* Main 3D Image */}
          <img 
            src="/signin-3d.png" 
            alt="3D Illustration" 
            className="w-full max-w-lg drop-shadow-2xl animate-float"
            style={{
              animation: 'float 6s ease-in-out infinite',
            }}
          />

          {/* Inline float animation */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="h-8 w-8 animate-spin text-blue-600" /></div>}>
      <LoginForm />
    </Suspense>
  );
}
