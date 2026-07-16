"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Lightbulb, Leaf, ShieldCheck, Star } from 'lucide-react';
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
                {/* Founder Image */}
                <img 
                  src="/founders.png" 
                  alt="Founders"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Mission</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                Our mission is to simplify and accelerate the sales process through smart automation, real-time insights, and intuitive tools. We aim to help sales teams close more deals with less effort on WhatsApp.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Vision</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                Our Vision is to boost productivity and improve outcomes with seamless automation, clear insights, and user-friendly systems. We help sales teams build a smarter, more efficient future.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-[#1C1C1E] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our core values</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Value 1 */}
              <div className="bg-white rounded-[2rem] p-10 hover:shadow-xl transition-shadow">
                <div className="text-[#E1306C] mb-8">
                  <Lightbulb className="w-10 h-10" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation</h3>
                <p className="text-slate-500 leading-relaxed font-medium mt-12">
                  Innovation is at the heart of everything we do at Chatmagnet AI. We're constantly pushing boundaries to build a smarter future for sales.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-[2rem] p-10 hover:shadow-xl transition-shadow">
                <div className="text-[#E1306C] mb-8">
                  <Leaf className="w-10 h-10" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Sustainability</h3>
                <p className="text-slate-500 leading-relaxed font-medium mt-12">
                  At Chatmagnet AI, we're committed to building a smarter future—not just in sales efficiency, but for long-term sustainable growth.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-[2rem] p-10 hover:shadow-xl transition-shadow">
                <div className="text-[#E1306C] mb-8">
                  <ShieldCheck className="w-10 h-10" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrity</h3>
                <p className="text-slate-500 leading-relaxed font-medium mt-12">
                  From concept to code, our agile process ensures smooth delivery with measurable outcomes, maintaining transparency and trust always.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="bg-slate-50 py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-4 tracking-tight">1200+</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Users</div>
              <p className="text-sm text-slate-500 leading-relaxed">This growing community reflects the reliability, performance, and trust we've built.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-4 tracking-tight">5x</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Faster</div>
              <p className="text-sm text-slate-500 leading-relaxed">Our system cuts down delays and manual effort, boosting your overall team productivity.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-4 tracking-tight">24/7</div>
              <div className="text-xl font-bold text-slate-900 mb-2">Support</div>
              <p className="text-sm text-slate-500 leading-relaxed">Whether it's day or night, our support system is always on to assist your business.</p>
            </div>
          </div>
        </section>

        {/* Scrolling Reviews Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Trusted by 20+ growing companies</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex bg-yellow-100 p-1 rounded-full">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <span className="font-bold text-slate-900 text-lg">4.9</span>
              <span className="text-slate-500 font-medium">by 20+ founders</span>
            </div>
          </div>

          <div className="relative h-[600px] w-full max-w-7xl mx-auto px-6 lg:px-12">
            {/* Top/Bottom Fade Overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-hidden">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-6 animate-marquee-vertical hover:[animation-play-state:paused]">
                {/* Duplicate the array twice so it loops seamlessly */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    {[
                      { name: "Rahul S.", text: "Chatmagnet AI completely transformed how we handle WhatsApp leads. The ROI is incredible." },
                      { name: "Priya M.", text: "The automated routing saved us 20 hours a week. Best CRM investment ever." },
                      { name: "Amit K.", text: "Simple to use, no code required, and it just works flawlessly with our Meta ads." },
                    ].map((review, j) => (
                      <div key={j} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, star) => <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed mb-6">"{review.text}"</p>
                        <div className="font-bold text-slate-900">{review.name}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Column 2 (Offset Animation) */}
              <div className="hidden md:flex flex-col gap-6 animate-marquee-vertical hover:[animation-play-state:paused]" style={{ animationDelay: '-10s' }}>
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    {[
                      { name: "Sneha R.", text: "We were losing track of chats before Chatmagnet. Now everything is in one clean pipeline." },
                      { name: "Vikram D.", text: "The Smart Replies feature is basically an extra employee that works 24/7." },
                      { name: "Anjali T.", text: "Outstanding support team. They helped us set up our first visual flow in 10 minutes." },
                    ].map((review, j) => (
                      <div key={j} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, star) => <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed mb-6">"{review.text}"</p>
                        <div className="font-bold text-slate-900">{review.name}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Column 3 (Offset Animation) */}
              <div className="hidden lg:flex flex-col gap-6 animate-marquee-vertical hover:[animation-play-state:paused]" style={{ animationDelay: '-20s' }}>
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    {[
                      { name: "Karan B.", text: "Game changer for our e-commerce store. Abandoned cart recovery through WhatsApp is massive." },
                      { name: "Rohan V.", text: "Our sales team loves the multi-agent inbox. No more sharing a single phone!" },
                      { name: "Nisha P.", text: "The analytics dashboard gives me a perfect overview of my team's performance." },
                    ].map((review, j) => (
                      <div key={j} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, star) => <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 font-medium leading-relaxed mb-6">"{review.text}"</p>
                        <div className="font-bold text-slate-900">{review.name}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
