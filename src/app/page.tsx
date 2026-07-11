"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
  BarChart3
} from 'lucide-react';
import { RoiCalculator } from '@/components/landing/roi-calculator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from 'react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

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

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            Closebot
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <Link href="#problem" className="hover:text-blue-600 transition-colors">The Problem</Link>
            <Link href="#solution" className="hover:text-blue-600 transition-colors">How it Works</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block font-semibold text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Log in
            </Link>
            <Link href="/signup">
              <Button className="bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-full px-6 shadow-md transition-all duration-300 hover:shadow-blue-500/25">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 rounded-full blur-[120px]" />
          </div>
          
          <motion.div 
            style={{ y, opacity }}
            className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10"
            variants={STAGGER_CHILDREN_VARIANTS}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 text-slate-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              The Revenue Layer for Meta Ads
            </motion.div>
            
            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto">
              Stop Losing Meta Ads Leads to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-x">Slow WhatsApp Response</span>
            </motion.h1>
            
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Meta Ads → WhatsApp CRM. AI responds in 60 seconds. Books your meetings. You close more deals.
            </motion.p>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-xl shadow-blue-500/30 hover:scale-105 transition-all duration-300">
                  Try Free for 14 Days
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-8 bg-white/50 backdrop-blur-sm border-slate-200 text-slate-700 text-lg font-bold rounded-full hover:bg-white transition-all duration-300">
                <PlayCircle className="mr-2 w-5 h-5 text-blue-600" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Floating UI Elements Mockup */}
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-20 relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/40 shadow-2xl bg-white/40 backdrop-blur-xl aspect-[16/9] group cursor-pointer flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" 
                alt="Dashboard Demo" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Chat Bubble */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-12 right-12 z-20 bg-white p-4 rounded-2xl rounded-tr-none shadow-xl border border-slate-100 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-900">AI Assistant</p>
                </div>
                <p className="text-sm text-slate-600">Great! I've booked your appointment for tomorrow at 2 PM. 🎉</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* LOGO TICKER */}
        <section className="py-10 border-y border-slate-200/50 bg-white/50 backdrop-blur-sm overflow-hidden flex items-center">
          <div className="w-full inline-flex flex-nowrap">
            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
               {/* Just text logos for premium feel */}
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">Smart Dental</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">Urban Estates</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">LearnTech</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">FitStudio</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">AutoCare</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">Smart Dental</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">Urban Estates</h3>
               <h3 className="text-xl font-black text-slate-300 px-8 uppercase tracking-widest">LearnTech</h3>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section id="problem" className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_CHILDREN_VARIANTS}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  The Silent Killer
                </motion.div>
                <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Your Meta Ads Spend is <span className="text-rose-500 relative">
                    Hemorrhaging
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
                  </span>
                </motion.h2>
                
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 space-y-6 mt-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                  <p className="font-bold text-slate-800 text-lg relative z-10">Scenario: You run ₹50K/month on Meta Ads → Dental clinic leads</p>
                  
                  <ul className="space-y-5 relative z-10">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-lg pt-1">50 leads land on your WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-rose-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-lg pt-1">Your response: 3 hours later (because you&apos;re busy)</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <TrendingDown className="w-5 h-5 text-rose-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-lg pt-1">30 leads have gone silent (they checked a competitor)</span>
                    </li>
                  </ul>
                  
                  <div className="pt-6 mt-6 border-t border-rose-200 relative z-10">
                    <p className="text-2xl font-black text-rose-600 flex items-center gap-2">
                      = ₹30K in ad spend → ₹0 in revenue
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex justify-center relative">
                {/* Glow behind calculator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />
                <RoiCalculator />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID / FEATURES */}
        <section id="solution" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-900"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 border border-blue-700/50 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
              >
                The Solution
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              >
                An intelligent system that <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">works while you sleep</span>
              </motion.h2>
            </div>
            
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-32 h-32 text-blue-400" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">60-Second Response</h3>
                  <p className="text-slate-400 text-lg">Lead clicks your Meta Ad. Within 60 seconds, our AI engages them. No more cold leads.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 overflow-hidden relative group"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center mb-6">
                    <BrainCircuit className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Smart AI</h3>
                  <p className="text-slate-400 text-lg">Trained on your business data to answer FAQs accurately.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 overflow-hidden relative group"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Shared Inbox</h3>
                  <p className="text-slate-400 text-lg">Your whole team in one place.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 overflow-hidden relative group"
              >
                <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BarChart3 className="w-32 h-32 text-amber-400" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Visual CRM Pipeline</h3>
                  <p className="text-slate-400 text-lg">Track revenue. Know exactly which Meta Ad generated the lead and which stage they are in. Total visibility.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 md:py-32 bg-slate-50 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
              >
                Simple Pricing. No Hidden Fees.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 mb-4 font-medium"
              >
                Invest in revenue tracking, not just a bot.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Starter */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-500 mb-6 font-medium">For freelancers & solos</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-slate-900">₹999</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <div className="font-semibold text-slate-700 mb-8 border-b border-slate-100 pb-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600" /> 1 user</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Basic AI Responses</li>
                  </ul>
                </div>
                <Link href="/signup" className="mt-auto">
                  <Button variant="outline" className="w-full h-14 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:bg-transparent font-bold text-lg rounded-2xl transition-all duration-300">
                    Start Free Trial
                  </Button>
                </Link>
              </motion.div>
              
              {/* Growth */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl shadow-blue-900/20 flex flex-col relative z-10 md:-mx-4 my-8 md:my-0"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent rounded-[2.5rem] pointer-events-none" />
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-1.5 rounded-full text-sm font-black uppercase tracking-widest shadow-lg shadow-blue-500/25">
                  Most Popular
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Growth</h3>
                <p className="text-blue-200 mb-6 font-medium relative z-10">For growing SMBs</p>
                <div className="flex items-baseline gap-1 mb-8 relative z-10">
                  <span className="text-5xl font-black text-white">₹2,499</span>
                  <span className="text-blue-200 font-medium">/mo</span>
                </div>
                <div className="font-semibold text-blue-100 mb-8 border-b border-slate-700 pb-8 relative z-10">
                   <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Up to 3 users</li>
                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Advanced AI Training</li>
                    <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Pipeline Tracking</li>
                  </ul>
                </div>
                <Link href="/signup" className="mt-auto relative z-10">
                  <Button className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02]">
                    Start 14-Day Free Trial
                  </Button>
                </Link>
              </motion.div>
              
              {/* Agency */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Agency</h3>
                <p className="text-slate-500 mb-6 font-medium">For marketing agencies</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-slate-900">₹6,999</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <div className="font-semibold text-slate-700 mb-8 border-b border-slate-100 pb-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Unlimited users</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Custom integrations</li>
                  </ul>
                </div>
                <Link href="mailto:sales@closebot.ai" className="mt-auto">
                  <Button variant="outline" className="w-full h-14 border-2 border-slate-200 hover:border-slate-900 hover:text-slate-900 hover:bg-transparent font-bold text-lg rounded-2xl transition-all duration-300">
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 md:py-32 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-10 tracking-tight"
            >
              Ready to stop losing leads?
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/signup">
                <Button className="h-16 px-12 bg-white hover:bg-slate-50 text-blue-600 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform mb-12">
                  Start Your Free Trial (14 Days)
                </Button>
              </Link>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-bold text-blue-200 text-lg"
            >
              Join 500+ businesses already closing deals on Closebot.
            </motion.p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            Closebot
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-semibold text-slate-500 text-sm">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact Support</Link>
          </div>
          
          <div className="font-medium text-slate-400 text-sm">
            © {new Date().getFullYear()} Closebot AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
