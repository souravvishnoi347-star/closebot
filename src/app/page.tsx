"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  CircleDot
} from 'lucide-react';
import { RoiCalculator } from '@/components/landing/roi-calculator';
import { useRef, useState } from 'react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
} as const;

const STAGGER_CHILDREN_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [activeCtaOpt, setActiveCtaOpt] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 overflow-hidden text-slate-900">
      
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            Hostbolt
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <Link href="#pain" className="hover:text-blue-600 transition-colors">How We Help</Link>
            <Link href="#proof" className="hover:text-blue-600 transition-colors">Our Work</Link>
            <Link href="#closebot" className="hover:text-blue-600 transition-colors">Closebot</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="#cta">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6 shadow-md transition-all duration-300 hover:shadow-blue-500/25 hidden md:flex">
                Fix My Revenue Leak →
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* ─── HERO ─── */}
        <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
            <motion.div 
              style={{ y, opacity }}
              variants={STAGGER_CHILDREN_VARIANTS}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-6 h-[2px] bg-blue-600 block"></span>
                Built for Scaling SMBs
              </motion.div>
              
              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                You run Meta Ads. The leads come to WhatsApp.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-x">Then... silence.</span>
              </motion.h1>
              
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
                Hostbolt plugs the leaks. <strong className="text-slate-900 font-bold">We build interactive 3D Websites, custom AI operations, and a WhatsApp revenue platform (Closebot)</strong> — ensuring every rupee you spend on marketing actually turns into closed revenue.
              </motion.p>
              
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="#cta">
                  <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
                    Stop losing expensive leads →
                  </Button>
                </Link>
                <Link href="#proof" className="h-14 px-8 flex items-center justify-center font-bold text-slate-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300">
                  See our tech stack
                </Link>
              </motion.div>
            </motion.div>

            {/* Whisper Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="bg-white border border-slate-200 rounded-[2rem] p-10 relative overflow-hidden shadow-2xl shadow-blue-900/5">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full pointer-events-none" />
                
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">The reality of Indian SMBs</div>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-xl border border-y-slate-100 border-r-slate-100">
                    <p className="text-sm text-slate-600 italic font-medium leading-relaxed">"I spent <strong className="text-slate-900 not-italic">₹40,000 on Meta ads</strong>. I have no idea which campaign actually brought in a client."</p>
                  </div>
                  <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-xl border border-y-slate-100 border-r-slate-100">
                    <p className="text-sm text-slate-600 italic font-medium leading-relaxed">"A real estate buyer asked for property photos. We sent 2D JPEGs. <strong className="text-slate-900 not-italic">They bought from a competitor who sent a 3D walkthrough.</strong>"</p>
                  </div>
                  <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-xl border border-y-slate-100 border-r-slate-100">
                    <p className="text-sm text-slate-600 italic font-medium leading-relaxed">"My CRM is a WhatsApp group and an Excel file I stopped updating in March."</p>
                  </div>
                </div>
                
                <div className="text-xs text-center text-slate-400 mt-6 tracking-wider font-semibold uppercase">Sound familiar? You're in the right place.</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── MONOLOGUE STRIP ─── */}
        <section className="py-8 border-y border-slate-200/50 bg-white shadow-sm overflow-hidden flex items-center">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start [&_div]:mx-8 animate-infinite-scroll w-max">
               {/* Original items */}
               <div className="flex items-center gap-16">
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"I had 40 WhatsApp inquiries last week. I don't know how many converted."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"Clients want to see the property, but standard photos don't convert them."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"I'm running ads on Meta and Google. I couldn't tell you the real ROI."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"My staff spends two hours every morning doing manual entry."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"Guests Google us and find a website that looks nothing like our premium service."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"I know I'm losing revenue somewhere. I just don't know exactly where."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
               </div>
               
               {/* Duplicated for infinite scroll seamless loop */}
               <div className="flex items-center gap-16">
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"I had 40 WhatsApp inquiries last week. I don't know how many converted."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"Clients want to see the property, but standard photos don't convert them."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"I'm running ads on Meta and Google. I couldn't tell you the real ROI."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"My staff spends two hours every morning doing manual entry."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"Guests Google us and find a website that looks nothing like our premium service."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
                 <span className="text-lg font-medium italic text-slate-500 whitespace-nowrap">"I know I'm losing revenue somewhere. I just don't know exactly where."</span>
                 <CircleDot className="w-3 h-3 text-blue-600 fill-blue-600" />
               </div>
            </div>
          </div>
        </section>

        {/* ─── PAIN (Where money goes) ─── */}
        <section id="pain" className="py-24 md:py-32 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_CHILDREN_VARIANTS}
              className="mb-16"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                Where the money goes
              </motion.div>
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight max-w-2xl">
                Three places your business is <br/>losing revenue right now
              </motion.h2>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg text-slate-600 max-w-2xl">
                We build tech products because we got tired of seeing these exact same leaks in every service business we audited.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Pain 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group md:col-span-2"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">📱</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Your WhatsApp inbox is a graveyard of expensive Meta leads</h3>
                  <p className="text-slate-600 mb-6">You pay Zuckerberg for leads, but WhatsApp has no lead scoring or ROI tracking. It's just names and timestamps — and hot leads are quietly dying there.</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Inquiries that get a reply 8 hours too late</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> High-ticket clients buried under casual chats</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Zero visibility on which ad actually closed</li>
                  </ul>
                </motion.div>

                {/* Pain 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🏗️</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Flat 2D photos are killing real estate conversions</h3>
                  <p className="text-slate-600 mb-6 text-sm">If you sell high-ticket properties, standard photos don't build enough trust. Buyers need to 'feel' the space.</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Buyers drop off without visualizing the layout</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Competitors win with 3D experiences</li>
                  </ul>
                </motion.div>

                {/* Pain 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">⏱️</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Manual operations are capping your growth</h3>
                  <p className="text-slate-600 mb-6 text-sm">Check-in registers. Handwritten bills. Every hour spent on admin is an hour not spent on scaling.</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Front desk: 90+ mins daily on data entry</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Travel teams: 3 hours per itinerary</li>
                  </ul>
                </motion.div>

              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:mt-0 mt-8"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/40 rounded-full blur-3xl -z-10" />
                <RoiCalculator />
              </motion.div>

            </div>

          </div>
        </section>

        {/* ─── TRANSFORM (Before / After) ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">What changes</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Before Hostbolt. After Hostbolt.</h2>
              <p className="text-lg text-slate-600">We don't sell generic software. We deploy our proprietary micro-SaaS and AI models to change how your business operates.</p>
            </div>

            <div className="flex flex-col gap-0 border-y border-slate-200">
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12 py-10 border-b border-slate-100 last:border-0">
                <div className="text-lg text-slate-500 line-through decoration-slate-300">WhatsApp fills up with Meta ad inquiries that go cold by morning</div>
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mx-auto md:mx-0"><ArrowRight /></div>
                <div>
                  <div className="text-lg font-bold text-slate-900 mb-2">Every lead scored, assigned, and tracked to the exact ad campaign</div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest uppercase">Closebot (Micro-SaaS)</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12 py-10 border-b border-slate-100 last:border-0">
                <div className="text-lg text-slate-500 line-through decoration-slate-300">Sending 2D image galleries to high-ticket real estate buyers</div>
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mx-auto md:mx-0"><ArrowRight /></div>
                <div>
                  <div className="text-lg font-bold text-slate-900 mb-2">AI generates interactive 3D room walkthroughs from your standard photos</div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest uppercase">Supersplat 3D Engine</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12 py-10 border-b border-slate-100 last:border-0">
                <div className="text-lg text-slate-500 line-through decoration-slate-300">Front desk spends 90 minutes every morning on check-in registers</div>
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mx-auto md:mx-0"><ArrowRight /></div>
                <div>
                  <div className="text-lg font-bold text-slate-900 mb-2">Check-in, billing, and guest ID automated before the guest walks in</div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest uppercase">Hotel AI Automation</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM (The Journey) ─── */}
        <section id="how" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-900"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">The Hostbolt Ecosystem</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                You start where the leak is.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">We scale the rest.</span>
              </h2>
              <p className="text-lg text-slate-400">Most clients begin with one urgent fix. The rest follows when the system starts printing money.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Phase 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-10 flex flex-col transition-all duration-300"
              >
                <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">Phase 1: Foundation</div>
                <h3 className="text-2xl font-bold mb-4">Websites & 3D PropTech</h3>
                <p className="text-slate-400 text-sm mb-8 flex-1">If they don't trust what they see, they won't buy. We build high-conversion digital assets.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> AI-built websites in 48 hours</li>
                  <li className="flex gap-3 text-sm font-medium text-white"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> Supersplat AI 3D Room Generation</li>
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> OTA and GMB scaling</li>
                </ul>
                <div className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold py-3 px-4 rounded-xl text-center">
                  ₹14,999 onwards · Delivered in days
                </div>
              </motion.div>

              {/* Phase 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-10 flex flex-col transition-all duration-300"
              >
                <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">Phase 2: Operations</div>
                <h3 className="text-2xl font-bold mb-4">Custom Business AI</h3>
                <p className="text-slate-400 text-sm mb-8 flex-1">Turning hours of manual work into automated flows that run while you sleep.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> Hotel check-in & billing automation</li>
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> AI CRM for Travel & Real Estate</li>
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> QR-POS for Restaurants</li>
                </ul>
                <div className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold py-3 px-4 rounded-xl text-center">
                  ₹24,999 one-time · Or ₹7,999/mo
                </div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-10 flex flex-col transition-all duration-300"
              >
                <div className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">Phase 3: Revenue</div>
                <h3 className="text-2xl font-bold mb-4">Closebot Lead Engine</h3>
                <p className="text-slate-400 text-sm mb-8 flex-1">Closing the loop. Ensuring every lead from every ad gets tracked and monetized.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> Meta/Google Ad attribution</li>
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> AI Lead Scoring in WhatsApp</li>
                  <li className="flex gap-3 text-sm font-medium"><ArrowRight className="w-5 h-5 text-blue-500 shrink-0"/> In-chat instant payments</li>
                </ul>
                <div className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold py-3 px-4 rounded-xl text-center">
                  From ₹2,999/mo · Scalable SaaS
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── CLOSEBOT DEEP DIVE ─── */}
        <section id="closebot" className="py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="flex items-center gap-3 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-6 h-[1px] bg-emerald-600 block"></span>
                Our Proprietary SaaS — Closebot
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Built because standard tools couldn't handle our own Meta Ad volumes.</h2>
              <p className="text-lg text-slate-600 mb-10">Closebot is not a basic chatbot. It's a revenue intelligence layer that sits behind your WhatsApp. We built it to score every lead from Meta/Google, route it, and secure payments instantly.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">🎯</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">AI Lead Scoring</h4>
                    <p className="text-sm text-slate-600">Instantly flags hot buyers so your team chases money, not time-wasters.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">📊</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Ad-to-WhatsApp Attribution</h4>
                    <p className="text-sm text-slate-600">Finally know exactly which Meta Ad or Google Campaign sent the lead.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100">💳</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">In-Chat Payment Links</h4>
                    <p className="text-sm text-slate-600">Strike while intent is high. Send secure payment links without leaving WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Comparison UI */}
            <div>
              <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Your WhatsApp — Before vs After</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Without Closebot */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-white border-b border-slate-200 p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Without Closebot</div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-slate-900">Rahul Sharma</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">2 days ago</span>
                      </div>
                      <p className="text-xs text-slate-500">Hum aayenge... (no follow-up)</p>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-slate-900">+91 98XXX XXXXX</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Yesterday</span>
                      </div>
                      <p className="text-xs text-slate-500">Rates? (replied 11hrs later)</p>
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-slate-900">Priya Mehta</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">3 days</span>
                      </div>
                      <p className="text-xs text-slate-500">Availability? (seen, no reply)</p>
                    </div>
                  </div>
                </div>

                {/* With Closebot */}
                <div className="bg-slate-50 border border-emerald-200 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/5 relative">
                  <div className="bg-white border-b border-slate-200 p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">With Closebot</div>
                  </div>
                  <div className="p-4 space-y-3">
                    
                    <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm text-slate-900">Rahul Sharma</span>
                        <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wide">🔥 HOT</span>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">Source: Meta Ad (Campaign #4)</p>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100/50 inline-block px-2 py-1 rounded">→ Auto-Assigned: Ravi</div>
                    </div>
                    
                    <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm text-slate-900">Priya Mehta</span>
                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wide">◉ WARM</span>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">Source: Google Search Ad</p>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100/50 inline-block px-2 py-1 rounded">→ Payment link sent ₹12,600</div>
                    </div>

                    <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm text-slate-900">Suresh Kapoor</span>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">✓ CLOSED</span>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">Source: GMB Organic</p>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100/50 inline-block px-2 py-1 rounded">Booking confirmed via WhatsApp</div>
                    </div>

                  </div>
                </div>

              </div>
              <p className="text-center text-xs text-slate-400 mt-6 italic">Illustrative example — not actual client data</p>
            </div>

          </div>
        </section>

        {/* ─── PROOF / OUR WORK ─── */}
        <section id="proof" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <div className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">Real work. Real clients.</div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Tech deployed across <br/>North India</h2>
                <p className="text-lg text-slate-600">Every project below is live. Built by founders, for founders.</p>
              </div>
              <div className="flex gap-8 md:justify-end flex-wrap">
                <div>
                  <div className="text-4xl font-black text-blue-600 tracking-tight">4</div>
                  <div className="text-sm font-semibold text-slate-500 mt-1">Industries Transformed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-blue-600 tracking-tight">North India</div>
                  <div className="text-sm font-semibold text-slate-500 mt-1">Region Served</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-blue-600 tracking-tight">100%</div>
                  <div className="text-sm font-semibold text-slate-500 mt-1">Founder-built, founder-run</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-colors shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">🎨 Design & Real Estate</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Lines and Thoughts (Kartik)</h3>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Problem</div>
                    <div className="text-slate-600">Needed a digital presence that communicated premium interior design quality before the first call.</div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Solution</div>
                    <div className="text-slate-900 font-medium">Visually immersive portfolio website tailored for high-ticket clients.</div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-slate-900 font-bold">Impact: Clients arrive pre-sold on the quality.</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-colors shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">✈️ Travel & Tourism</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Triloki Group</h3>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Problem</div>
                    <div className="text-slate-600">Losing hot leads in chaotic WhatsApp groups.</div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Solution</div>
                    <div className="text-slate-900 font-medium">Custom AI CRM with itinerary generation and full revenue pipeline tracking.</div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-slate-900 font-bold">Impact: Zero lead leakage across 3 apps.</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-colors shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">🏨 Hospitality</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Hotel Satyam Swagat</h3>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Problem</div>
                    <div className="text-slate-600">Manual billing and insecure guest ID storage slowing down check-ins.</div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Solution</div>
                    <div className="text-slate-900 font-medium">Custom software + OTA sync replacing manual registers completely.</div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-colors shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">🍽️ Food & Beverage</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Classic Restaurant, Mussoorie</h3>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Problem</div>
                    <div className="text-slate-600">Wrong orders from verbal table-to-kitchen relay in high footfall.</div>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-xs pt-1">The Solution</div>
                    <div className="text-slate-900 font-medium">Fully integrated QR-menu POS with direct kitchen flow.</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── PRICING SECTION ─── */}
        <section id="pricing" className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
              <div>
                <div className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">Pricing</div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Clear ROI.<br/>No enterprise bloat.
                </h2>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 text-lg text-slate-600">
                Priced for real Indian SMBs. Start with what you need right now. Add the ecosystem when the first solution starts paying for itself.
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Foundation */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100 flex flex-col"
              >
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Foundation</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Digital & 3D Assets</h3>
                <div className="text-sm font-semibold text-slate-500 mb-1">From</div>
                <div className="text-5xl font-black text-slate-900 mb-2 tracking-tight">₹14,999</div>
                <p className="text-sm text-slate-500 mb-8 font-medium">One-time · Live in 48–72 hours</p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> High-conversion mobile-first website</li>
                  <li className="flex items-start gap-3 text-sm text-slate-900 font-bold"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> AI 3D Room Walkthroughs (PropTech)</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> WhatsApp & booking integrations</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> GMB & SEO setup</li>
                </ul>
                <Link href="#cta" className="mt-auto">
                  <Button variant="outline" className="w-full h-14 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:bg-transparent font-bold text-lg rounded-2xl transition-all duration-300">
                    Get Started →
                  </Button>
                </Link>
              </motion.div>
              
              {/* Operations (Featured) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-600 p-10 rounded-[2.5rem] border border-blue-500 shadow-2xl shadow-blue-900/20 flex flex-col relative z-10 md:-mx-4 my-8 md:my-0"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-900 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Most Chosen
                </div>
                
                <div className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-2 relative z-10">Operations</div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Custom AI Workflow</h3>
                <div className="text-sm font-semibold text-blue-200 mb-1 relative z-10">From</div>
                <div className="text-5xl font-black text-white mb-2 tracking-tight relative z-10">₹24,999</div>
                <p className="text-sm text-blue-200 mb-8 font-medium relative z-10">Setup · Or ₹7,999/month ongoing</p>
                
                <ul className="space-y-4 mb-10 flex-1 relative z-10">
                  <li className="flex items-start gap-3 text-sm text-white font-medium"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> End-to-end automation for Hotel/Travel</li>
                  <li className="flex items-start gap-3 text-sm text-white font-medium"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> Custom AI CRM (Not a template)</li>
                  <li className="flex items-start gap-3 text-sm text-white font-medium"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> Automated Vouchers & Invoicing</li>
                  <li className="flex items-start gap-3 text-sm text-white font-medium"><CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> Full staff training included</li>
                </ul>
                <Link href="#cta" className="mt-auto relative z-10">
                  <Button className="w-full h-14 bg-white hover:bg-slate-50 text-blue-600 font-bold text-lg rounded-2xl shadow-lg shadow-blue-900/30 transition-all duration-300 hover:scale-[1.02]">
                    Automate my business →
                  </Button>
                </Link>
              </motion.div>
              
              {/* Revenue / Closebot */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100 flex flex-col"
              >
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Revenue</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Closebot SaaS</h3>
                <div className="text-sm font-semibold text-slate-500 mb-1">From</div>
                <div className="text-5xl font-black text-slate-900 mb-2 tracking-tight">₹2,999</div>
                <p className="text-sm text-slate-500 mb-8 font-medium">
                  Per month · AI trained on your data
                  <span className="block mt-2 text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">[TODO: specify — e.g. up to X leads/month, 1 WhatsApp number, X team seats]</span>
                </p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Meta Ads & Google ROI tracking</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> AI lead scoring on WhatsApp</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> Team routing & agent handoffs</li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> In-chat payment processing</li>
                </ul>
                <Link href="#cta" className="mt-auto">
                  <Button variant="outline" className="w-full h-14 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:bg-transparent font-bold text-lg rounded-2xl transition-all duration-300">
                    Deploy Closebot →
                  </Button>
                </Link>
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* ─── COMMON QUESTIONS (FAQ) ─── */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Common Questions
              </h2>
            </div>
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-bold text-slate-900">Do I need a WhatsApp Business API account for Closebot to work?</AccordionTrigger>
                <AccordionContent className="text-slate-600 font-medium leading-relaxed mt-2">
                  [ANSWER NEEDED: clarify API account requirement]
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-bold text-slate-900">Is there any risk of my WhatsApp number getting banned?</AccordionTrigger>
                <AccordionContent className="text-slate-600 font-medium leading-relaxed mt-2">
                  [ANSWER NEEDED: explain compliance and ban risks]
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-bold text-slate-900">Who has access to my customer data and how is it stored?</AccordionTrigger>
                <AccordionContent className="text-slate-600 font-medium leading-relaxed mt-2">
                  [ANSWER NEEDED: detail data privacy policy]
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-bold text-slate-900">What payment gateway processes the in-chat payment links?</AccordionTrigger>
                <AccordionContent className="text-slate-600 font-medium leading-relaxed mt-2">
                  [ANSWER NEEDED: specify supported gateways]
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="cta" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Stop guessing where the leak is.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Let's find it in 20 minutes.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-lg">
                We don't do aggressive sales pitches. We do a technical revenue audit based on our experience building Micro-SaaS and operations for Indian SMBs. If we can't fix it, we'll tell you who can.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-2xl shadow-blue-900/5">
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-6">What is your biggest bottleneck?</div>
              
              <div className="space-y-3 mb-8">
                {[
                  { icon: "🚀", title: "Meta Ads ROI & WhatsApp Leaks", desc: "I need Closebot to track and score my ad leads.", waMsg: "Hi, I need Closebot to track and score my ad leads." },
                  { icon: "🏗️", title: "3D Visuals & Website Conversion", desc: "I need better digital assets to close high-ticket clients.", waMsg: "Hi, I need better digital assets to close high-ticket clients." },
                  { icon: "⚙️", title: "Manual Operations (CRM/Billing)", desc: "I need to automate my daily workflows.", waMsg: "Hi, I need to automate my daily workflows." }
                ].map((opt, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveCtaOpt(idx)}
                    className={`p-4 border rounded-xl flex gap-4 cursor-pointer transition-all ${activeCtaOpt === idx ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'}`}
                  >
                    <div className="text-2xl mt-1">{opt.icon}</div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{opt.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TODO: Replace 91XXXXXXXXXX with actual WhatsApp Business number */}
              <a 
                href={`https://wa.me/91XXXXXXXXXX?text=${activeCtaOpt === 0 ? '%40Hi%2C%20I%20need%20Closebot%20to%20track%20and%20score%20my%20ad%20leads.' : activeCtaOpt === 1 ? '%40Hi%2C%20I%20need%20better%20digital%20assets%20to%20close%20high-ticket%20clients.' : '%40Hi%2C%20I%20need%20to%20automate%20my%20daily%20workflows.'}`.replace('%40', '')} 
                target="_blank" rel="noopener noreferrer" 
                className="block w-full"
              >
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300">
                  Book my free 20-minute audit →
                </Button>
              </a>
            </div>

          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-slate-900 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                Hostbolt
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Building the tech layer for Indian SMBs. From 3D PropTech to AI automation and WhatsApp revenue intelligence.
              </p>
              <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                RIVONIC SOLUTIONS LLP · DPIIT · MSME · GST
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Products & Solutions</h4>
              <ul className="space-y-4">
                <li><Link href="#how" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Supersplat 3D Engine</Link></li>
                <li><Link href="#closebot" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Closebot (Micro-SaaS)</Link></li>
                <li><Link href="#how" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Custom AI CRM</Link></li>
                <li><Link href="#pricing" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Industries</h4>
              <ul className="space-y-4">
                <li><Link href="#proof" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Real Estate & Design</Link></li>
                <li><Link href="#proof" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Hotels & Hospitality</Link></li>
                <li><Link href="#proof" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Travel & Tourism</Link></li>
                <li><Link href="#proof" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">B2B Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href="mailto:hello@hostbolt.in" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">hello@hostbolt.in</a></li>
                <li><a href="https://closebot.hostbolt.in" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">closebot.hostbolt.in</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs text-slate-400 font-medium">
              © {new Date().getFullYear()} Rivonic Solutions LLP. Hostbolt and Closebot are products of Rivonic Solutions LLP. All rights reserved.
            </div>
            <div className="flex gap-3">
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border border-slate-200 px-3 py-1 rounded">DPIIT</span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border border-slate-200 px-3 py-1 rounded">MSME</span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border border-slate-200 px-3 py-1 rounded">GST</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
