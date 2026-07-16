"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            
            {/* Left Content */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
                Our Story
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                From lead tracking to closing deals, our platform was designed to remove the noise, automate the busywork and help sales teams thrive.
              </p>
              
              <a href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-[1rem] shadow-xl shadow-slate-900/20 transition-all duration-300">
                  Get 3 Days Free Trial
                </Button>
              </a>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-xl">
              <div className="relative aspect-square md:aspect-[4/4] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 border border-slate-200/50">
                {/* 
                  TODO: Replace the src below with your actual image path.
                  Upload your picture to the "public" folder in your project and name it "founder.jpg", 
                  then change src="https://images.unsplash.com/..." to src="/founder.jpg"
                */}
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1000&q=80" 
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
