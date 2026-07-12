"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  PlayCircle,
  TrendingDown,
  Building2,
  Stethoscope,
  GraduationCap,
  MessageSquare,
  Bot,
  BrainCircuit,
  BarChart3,
  Smartphone,
  ChevronRight,
  Plane,
  Utensils,
  Hotel,
  ShieldCheck,
  Award,
  CircleDot,
  LayoutDashboard,
  LineChart,
  Wallet
} from 'lucide-react';
import { RoiCalculator } from '@/components/landing/roi-calculator';
import { useState } from 'react';

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
} as const;

const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-rose-200 text-slate-900 overflow-hidden">
      
      {/* ─── NAV ─── */}
      <nav className="absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            Hostbolt
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="#pain" className="hover:text-slate-900 transition-colors">How We Help</Link>
            <Link href="#ecosystem" className="hover:text-slate-900 transition-colors">Ecosystem</Link>
            <Link href="#proof" className="hover:text-slate-900 transition-colors">Our Work</Link>
            <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="#cta">
              <Button className="rounded-full bg-[#0A0A0A] hover:bg-black text-white font-semibold text-xs px-6 py-5 shadow-sm hidden md:flex">
                Book Audit
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* ─── HERO ─── */}
        <section className="relative pt-36 md:pt-48 pb-20 overflow-hidden bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div variants={STAGGER} initial="hidden" animate="show">
              
              {/* Pill Badge */}
              <motion.div variants={FADE_UP} className="mx-auto w-max mb-6">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  Built for Scaling SMBs
                </div>
              </motion.div>
              
              {/* Headline */}
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter mb-8 leading-[1.05]">
                You run Meta Ads.<br/>
                Leads hit WhatsApp.<br/>
                Then... silence.
              </motion.h1>
              
              {/* Subhead */}
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                Hostbolt plugs the leaks. We build interactive 3D Websites, custom AI operations, and a WhatsApp revenue platform (Closebot).
              </motion.p>
              
              {/* CTA */}
              <motion.div variants={FADE_UP} className="flex flex-col items-center justify-center">
                <Link href="#cta" className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <Button className="relative rounded-full bg-[#0A0A0A] hover:bg-black text-white font-semibold text-base px-8 h-14 w-full md:w-auto shadow-[0_4px_14px_0_rgb(0,0,0,0.15)] transition-all">
                    Fix My Revenue Leak
                  </Button>
                </Link>
                <span className="text-xs text-slate-400 mt-4 font-medium">No Credit Card Required</span>
              </motion.div>

            </motion.div>
          </div>

          {/* Hero Mockup (ROI Calculator as Dashboard) */}
          <div className="max-w-6xl mx-auto px-6 mt-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-[2rem] border border-slate-200/60 p-4 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
              
              <div className="relative bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                 <div className="border-b border-slate-100 bg-slate-50/50 p-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="text-xs font-semibold text-slate-400 tracking-widest uppercase">Revenue Audit Tool</div>
                    <div className="w-16"></div>
                 </div>
                 <div className="p-2 md:p-8">
                   <RoiCalculator />
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── LOGO TICKER (Monologue) ─── */}
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden flex flex-col items-center">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">The reality of Indian SMBs</div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start [&_div]:mx-8 animate-infinite-scroll w-max">
               <div className="flex items-center gap-12 text-sm font-medium text-slate-800">
                 <span>"I spent ₹40,000 on Meta ads. No idea which campaign brought a client."</span>
                 <CircleDot className="w-2 h-2 text-slate-300" />
                 <span>"My CRM is a WhatsApp group and an Excel file."</span>
                 <CircleDot className="w-2 h-2 text-slate-300" />
                 <span>"I know I'm losing revenue somewhere. Just don't know where."</span>
                 <CircleDot className="w-2 h-2 text-slate-300" />
                 <span>"Staff spends two hours every morning doing manual entry."</span>
               </div>
               <div className="flex items-center gap-12 text-sm font-medium text-slate-800">
                 <span>"I spent ₹40,000 on Meta ads. No idea which campaign brought a client."</span>
                 <CircleDot className="w-2 h-2 text-slate-300" />
                 <span>"My CRM is a WhatsApp group and an Excel file."</span>
                 <CircleDot className="w-2 h-2 text-slate-300" />
                 <span>"I know I'm losing revenue somewhere. Just don't know where."</span>
                 <CircleDot className="w-2 h-2 text-slate-300" />
                 <span>"Staff spends two hours every morning doing manual entry."</span>
               </div>
            </div>
          </div>
        </section>

        {/* ─── PAIN POINTS (Why businesses choose...) ─── */}
        <section id="pain" className="py-24 md:py-32 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-20">
              <div className="mx-auto w-max mb-6">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 flex items-center gap-2">
                  <TrendingDown className="w-3 h-3 text-rose-500" />
                  Where the money goes
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Three places your business is <br/>losing revenue right now
              </h2>
              <p className="text-slate-500 font-medium">We build tech products because we got tired of seeing these exact same leaks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 mb-8 flex items-center justify-center">
                  <div className="relative">
                    <MessageSquare className="w-12 h-12 text-slate-300" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">!</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">The WhatsApp Graveyard</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  You pay Zuckerberg for leads, but WhatsApp has no lead scoring or ROI tracking. Hot leads are quietly dying there.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 mb-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl shadow-sm rotate-[-6deg] absolute"></div>
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-xl shadow-sm rotate-[6deg] absolute flex items-center justify-center text-blue-500 font-bold">3D</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Flat 2D Photos</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  If you sell high-ticket properties, standard photos don't build enough trust. Remote buyers need to 'feel' the space.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 mb-8 flex flex-col gap-2 items-center justify-center p-6">
                  <div className="w-full h-3 bg-slate-200 rounded-full"></div>
                  <div className="w-3/4 h-3 bg-slate-200 rounded-full"></div>
                  <div className="w-5/6 h-3 bg-slate-200 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Manual Operations</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Check-in registers. Handwritten bills. Copy-pasting itineraries. Every hour spent on admin caps your growth.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ─── CLOSEBOT DEEP DIVE (Vertical Tabs) ─── */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="mb-16">
              <div className="w-max mb-6">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 flex items-center gap-2">
                  <Bot className="w-3 h-3 text-blue-500" />
                  Key Tools
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 max-w-2xl">
                AI that moves sales<br/>forward & faster
              </h2>
              <p className="text-slate-500 font-medium max-w-xl">Closebot is not a basic chatbot. It's a revenue intelligence layer that sits behind your WhatsApp.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
              
              {/* Left: Tabs */}
              <div className="flex flex-col gap-2">
                {['AI Lead Scoring', 'Ad Attribution', 'In-Chat Payments'].map((tab, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`text-left px-6 py-4 rounded-2xl text-sm font-semibold transition-all ${activeTab === idx ? 'bg-slate-50 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Right: Content */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {activeTab === 0 && 'AI Lead Scoring'}
                  {activeTab === 1 && 'Ad-to-WhatsApp Attribution'}
                  {activeTab === 2 && 'In-Chat Payment Links'}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-8">
                  {activeTab === 0 && 'Instantly flags hot buyers so your team chases money, not time-wasters. Automate repetitive tasks like follow-ups and data entry.'}
                  {activeTab === 1 && 'Finally know exactly which Meta Ad or Google Campaign sent the lead. Stop guessing where your marketing budget is going.'}
                  {activeTab === 2 && 'Strike while intent is high. Send secure payment links without leaving WhatsApp and close deals 45% faster.'}
                </p>

                {/* Mockup Card */}
                <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-6 md:p-10 shadow-sm relative overflow-hidden h-[300px]">
                  
                  {activeTab === 0 && (
                    <div className="space-y-3">
                      <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-center justify-between">
                        <div>
                          <div className="font-bold text-sm text-slate-900">Rahul Sharma</div>
                          <div className="text-xs text-slate-500">Looking for 3BHK...</div>
                        </div>
                        <div className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">🔥 Hot</div>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-center justify-between opacity-50">
                        <div>
                          <div className="font-bold text-sm text-slate-900">Priya Mehta</div>
                          <div className="text-xs text-slate-500">Just browsing...</div>
                        </div>
                        <div className="bg-slate-100 text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Cold</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-100 p-3 flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        <span>Campaign</span>
                        <span>Revenue</span>
                      </div>
                      <div className="p-3 flex justify-between items-center border-b border-slate-50">
                        <span className="text-sm font-bold text-slate-900">Summer Sale FB</span>
                        <span className="text-sm font-bold text-emerald-600">₹45,000</span>
                      </div>
                      <div className="p-3 flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-900">Google Search Brand</span>
                        <span className="text-sm font-bold text-emerald-600">₹12,500</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm max-w-xs mx-auto mt-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"><Wallet className="w-4 h-4"/></div>
                        <div>
                          <div className="font-bold text-sm text-slate-900">Hostbolt Invoice</div>
                          <div className="text-xs text-slate-500">₹14,999.00</div>
                        </div>
                      </div>
                      <Button className="w-full bg-[#0A0A0A] text-white rounded-lg h-10 text-xs font-bold">Pay Now</Button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── DARK SECTION (The Ecosystem) ─── */}
        <section id="ecosystem" className="py-24 md:py-32 bg-[#0A0A0A] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-20">
              <div className="mx-auto w-max mb-6">
                <div className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <LayoutDashboard className="w-3 h-3 text-white" />
                  Core Features
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                What's inside Hostbolt?
              </h2>
              <p className="text-slate-400 font-medium">You start where the leak is. We scale the rest.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Phase 1 */}
              <div className="bg-[#141414] rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-colors group">
                <div className="w-12 h-12 mb-6">
                  <GlobeIcon className="w-full h-full text-[#F43F5E] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Websites & 3D PropTech</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                  If they don't trust what they see, they won't buy. We build high-conversion digital assets.
                </p>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Phase 1: Foundation</div>
              </div>

              {/* Phase 2 */}
              <div className="bg-[#141414] rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-colors group">
                <div className="w-12 h-12 mb-6">
                  <WorkflowIcon className="w-full h-full text-[#F43F5E] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Custom Business AI</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                  Turning hours of manual work into automated flows that run while you sleep.
                </p>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Phase 2: Operations</div>
              </div>

              {/* Phase 3 */}
              <div className="bg-[#141414] rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-colors group">
                <div className="w-12 h-12 mb-6">
                  <LineChartIcon className="w-full h-full text-[#F43F5E] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Closebot Lead Engine</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                  Closing the loop. Ensuring every lead from every ad gets tracked and monetized.
                </p>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Phase 3: Revenue</div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── BENTO GRID (Social Proof) ─── */}
        <section id="proof" className="py-24 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-16">
              <div className="mx-auto w-max mb-6">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 flex items-center gap-2">
                  Customer Reviews
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Trusted by growing companies worldwide
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
              
              {/* Pink Box */}
              <div className="bg-[#E11D48] rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center md:col-span-1 md:row-span-1 shadow-sm">
                <div className="text-4xl font-black tracking-tight mb-2">Zero</div>
                <div className="text-xs font-bold uppercase tracking-widest text-rose-200">Lead Leakage</div>
              </div>

              {/* Black Box (Triloki) */}
              <div className="bg-[#171717] rounded-[2rem] p-8 text-white md:col-span-2 md:row-span-1 shadow-sm flex flex-col justify-center">
                <p className="text-lg font-bold leading-relaxed mb-6 tracking-tight">
                  "Losing hot leads in chaotic WhatsApp groups is a thing of the past. Custom AI CRM with itinerary generation."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold">TG</div>
                  <div>
                    <div className="text-sm font-bold">Triloki Group</div>
                    <div className="text-xs text-slate-400">Travel & Tourism</div>
                  </div>
                </div>
              </div>

              {/* White Box (Satyam) */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:col-span-1 md:row-span-1 shadow-sm flex flex-col justify-center items-center text-center">
                <div className="text-4xl font-black text-slate-900 tracking-tight mb-2">OTA</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Auto Sync</div>
              </div>

              {/* White Box (Classic Rest) */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:col-span-1 md:row-span-1 shadow-sm flex flex-col justify-center items-center text-center">
                <div className="text-4xl font-black text-slate-900 tracking-tight mb-2">QR</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">POS Menu</div>
              </div>

              {/* Blue Box */}
              <div className="bg-[#3B82F6] rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center md:col-span-1 md:row-span-1 shadow-sm">
                <div className="text-4xl font-black tracking-tight mb-2">3D</div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200">PropTech</div>
              </div>

              {/* White Box (Kartik) */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:col-span-2 md:row-span-1 shadow-sm flex flex-col justify-center">
                <p className="text-lg font-bold text-slate-900 leading-relaxed mb-6 tracking-tight">
                  "Needed a digital presence that communicated premium interior design quality before the first call. Clients arrive pre-sold."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                   <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">LT</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Lines and Thoughts</div>
                    <div className="text-xs text-slate-500">Design & Real Estate</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className="py-24 bg-[#FAFAFA] border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Clear ROI. No enterprise bloat.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Foundation */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Foundation</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Digital & 3D Assets</h3>
                <div className="text-4xl font-black text-slate-900 mb-6 tracking-tight">₹14,999</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0"/> Website</li>
                  <li className="flex gap-3 text-sm font-bold text-slate-900"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0"/> 3D Room Walkthroughs</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0"/> GMB & SEO setup</li>
                </ul>
                <Button className="w-full rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold h-12">Get Started</Button>
              </div>

              {/* Operations */}
              <div className="bg-[#0A0A0A] border border-slate-800 rounded-3xl p-8 flex flex-col shadow-lg relative transform md:-translate-y-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Chosen</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Operations</div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Custom AI Workflow</h3>
                <div className="text-4xl font-black text-white mb-6 tracking-tight">₹24,999</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm font-medium text-slate-300"><CheckCircle2 className="w-5 h-5 text-white shrink-0"/> Hotel/Travel Automation</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-300"><CheckCircle2 className="w-5 h-5 text-white shrink-0"/> Custom AI CRM</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-300"><CheckCircle2 className="w-5 h-5 text-white shrink-0"/> Automated Vouchers</li>
                </ul>
                <Button className="w-full rounded-xl bg-white hover:bg-slate-100 text-[#0A0A0A] font-bold h-12">Automate Business</Button>
              </div>

              {/* Closebot */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Revenue</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Closebot SaaS</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <div className="text-4xl font-black text-slate-900 tracking-tight">₹2,999</div>
                  <div className="text-sm font-semibold text-slate-500">/mo</div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0"/> Ad Attribution</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0"/> WhatsApp AI Scoring</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0"/> In-chat payments</li>
                </ul>
                <Button className="w-full rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold h-12">Deploy Closebot</Button>
              </div>

            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="cta" className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Stop guessing where the leak is.
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-8">
              We do a technical revenue audit based on our experience building for Indian SMBs. If we can't fix it, we'll tell you who can.
            </p>
            <a href="mailto:hello@hostbolt.in">
              <Button className="rounded-full bg-[#0A0A0A] hover:bg-black text-white font-semibold text-base px-10 h-14 shadow-[0_4px_14px_0_rgb(0,0,0,0.15)] transition-all">
                Book my free 20-minute audit
              </Button>
            </a>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <div className="w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center">
              <Zap className="w-3 h-3 text-white fill-white" />
            </div>
            Hostbolt
          </div>
          <div className="text-xs font-semibold text-slate-400">
            © {new Date().getFullYear()} Rivonic Solutions LLP.
          </div>
          <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>DPIIT</span>
            <span>MSME</span>
            <span>GST</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple line-art icons for the dark section
function GlobeIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
function WorkflowIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="8" y="2" width="8" height="8" rx="1"/>
      <path d="M12 10v4"/>
      <path d="M8 14H4v6h8v-6H8"/>
      <path d="M16 14h4v6h-8v-6h4"/>
    </svg>
  );
}
function LineChartIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v18h18"/>
      <path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  );
}
