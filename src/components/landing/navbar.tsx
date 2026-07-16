"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, ChevronDown } from 'lucide-react';

export function Navbar() {
  return (
    <>
      {/* ─── TOP GRADIENT BAR ─── */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-[60]" />

      {/* ─── NAV ─── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full transition-all duration-300 shadow-sm shadow-slate-200/20">
        <div className="h-14 flex items-center justify-between px-3 lg:px-4">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-900 hover:opacity-80 transition-opacity pl-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            Chatmagnet AI
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 ml-4">
            <Link href="/about" className="hover:text-slate-900 transition-colors">Our Story</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                Resources <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {/* Invisible bridge to prevent hover loss */}
              <div className="absolute top-full left-0 w-full h-4"></div>
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-40 bg-white border border-slate-100 rounded-xl shadow-lg shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link href="#" className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Case Studies</Link>
                <Link href="/blogs" className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-600 transition-colors">Blogs</Link>
              </div>
            </div>

            <Link href="/integrations" className="hover:text-slate-900 transition-colors">Integrations</Link>
            <Link href="/features" className="hover:text-slate-900 transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors px-2">
              Sign In
            </Link>
            <Link href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer" className="relative group">
              {/* Colorful drop shadow behind the button on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
              <Button className="relative bg-[#0a0a0a] group-hover:bg-blue-600 text-white font-bold rounded-full px-6 py-2 shadow-sm transition-all duration-300 hidden md:flex h-10 text-xs tracking-wide">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
