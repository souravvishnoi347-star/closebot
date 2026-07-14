"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans px-4">
      
      <div className="relative mb-8 mt-12 group">
        {/* Shadow for the clock */}
        <div className="absolute top-10 left-4 w-48 h-12 bg-slate-200/60 blur-md skew-x-12 -z-10 rounded-full"></div>
        
        {/* Digital Clock Box */}
        <div className="bg-slate-800 text-white rounded-xl w-48 h-20 flex items-center justify-center relative overflow-hidden shadow-lg border border-slate-700">
          <div className="text-4xl font-mono italic tracking-widest font-bold opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            04:04
          </div>
          
          {/* Signal rings (top right) */}
          <div className="absolute -top-1 -right-1 flex gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <path d="M18.36 6.64a9 9 0 0 1 0 12.73" />
              <path d="M22 2.2a14 14 0 0 1 0 19.6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter mb-4">
        <span className="text-slate-900">4</span>
        <span className="text-rose-500 mx-2">0</span>
        <span className="text-slate-900">4</span>
      </div>

      <h1 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
        Sorry! Page not found
      </h1>
      
      <p className="text-slate-500 font-medium text-sm md:text-base text-center mb-10 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link 
        href="/" 
        className="bg-slate-900 text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:bg-slate-800 hover:scale-105 transition-all text-sm"
      >
        Go Back To Home
      </Link>

    </div>
  );
}
