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
  CircleDot,
  Rocket
} from 'lucide-react';
import { RoiCalculator } from '@/components/landing/roi-calculator';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { useRef, useState, useEffect } from 'react';

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
  const [activeTool, setActiveTool] = useState('tool-1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTool(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const tools = ['tool-1', 'tool-2', 'tool-3', 'tool-4'];
    tools.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      
      <Navbar />

      <main>
        {/* ─── HERO ─── */}
        <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center text-center">
          {/* Subtle background gradient to match clean UI */}
          <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-slate-50 to-white -z-10" />

          <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
            
            <motion.div 
              style={{ y, opacity }}
              variants={STAGGER_CHILDREN_VARIANTS}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center"
            >
              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-[4.5rem] font-medium text-slate-900 tracking-tight mb-6 leading-[1.05]">
                The Smarter Way to<br /> Bring Best ROI for Sales
              </motion.h1>
              
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl font-medium">
                Chatmagnet AI automatically captures Meta Ad leads on WhatsApp, scores them via AI, and routes them directly to your team. 
                Streamlining every step of your sales process to stop revenue leaks.
              </motion.p>
              
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col items-center gap-3 relative">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                  <Link href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer" className="relative block">
                    <Button className="h-14 px-8 bg-slate-950 group-hover:bg-blue-600 text-white text-lg font-semibold rounded-full shadow-xl transition-all duration-300">
                      Get 3 Days Free Trial
                    </Button>
                  </Link>
                </div>
                <span className="text-sm font-medium text-slate-400 mt-2">No Credit Card Required</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Dashboard Mockup - Outside max-w-4xl for wider landscape */}
          <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full mt-24 relative"
            >
              <div className="bg-white border border-slate-200/60 rounded-3xl p-2 md:p-4 shadow-2xl shadow-slate-200/50">
                <div className="aspect-[16/9] w-full bg-slate-900 rounded-2xl overflow-hidden relative group cursor-pointer border border-slate-100">
                  {/* Random Video Placeholder */}
                  <video 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    autoPlay muted loop playsInline
                    src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5228/1080p.mp4"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <PlayCircle className="w-7 h-7 text-slate-900 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── LOGO TICKER ─── */}
        <section className="py-12 border-y border-slate-200/50 bg-white shadow-sm flex flex-col items-center justify-center">
          <p className="text-sm font-medium text-slate-500 mb-8">Trusted by 20+ scaling businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* Nexora */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-800 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="text-red-500"><BrainCircuit className="w-7 h-7" /></div>
              Nexora
            </div>
            {/* Trivexa */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-800 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="text-indigo-600"><Zap className="w-7 h-7 fill-indigo-600" /></div>
              Trivexa
            </div>
            {/* Veltriq */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-800 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="text-blue-500"><BarChart3 className="w-7 h-7" /></div>
              Veltriq
            </div>
            {/* Fluxenta */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-800 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="text-emerald-500"><Bot className="w-7 h-7" /></div>
              Fluxenta
            </div>
            {/* Fyntra */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-800 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="text-orange-500"><Building2 className="w-7 h-7" /></div>
              Fyntra
            </div>
          </div>
        </section>

        {/* ─── PAIN (Where money goes) ─── */}
        <section id="pain" className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Left Column (Pain Points) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Pain 1 (Full Width) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 shadow-sm"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-xl border border-slate-100 shadow-sm">📱</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Your WhatsApp inbox is a graveyard of expensive Meta leads</h3>
                  <p className="text-slate-500 mb-8 font-medium">You pay Zuckerberg for leads, but WhatsApp has no lead scoring or ROI tracking. It's just names and timestamps — and hot leads are quietly dying there.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Inquiries that get a reply 8 hours too late</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> High-ticket clients buried under casual chats</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Zero visibility on which ad actually closed</li>
                  </ul>
                </motion.div>

                {/* Bottom Row (2 Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pain 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm h-full flex flex-col"
                  >
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 text-lg border border-slate-100 shadow-sm">🙈</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Zero visibility into your sales team's chats</h3>
                    <p className="text-slate-500 mb-6 text-sm font-medium">When leads are handled on personal numbers or scattered across devices, you can't track performance or save cold deals.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex gap-3 text-xs text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> No central dashboard to monitor agent replies</li>
                      <li className="flex gap-3 text-xs text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Reps leaving the company with your customer data</li>
                    </ul>
                  </motion.div>

                  {/* Pain 3 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm h-full flex flex-col"
                  >
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-5 text-lg border border-slate-100 shadow-sm">⏱️</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">Manual operations are capping your growth</h3>
                    <p className="text-slate-500 mb-6 text-sm font-medium">Check-in registers. Handwritten bills. Every hour spent on admin is an hour not spent on scaling.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex gap-3 text-xs text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Front desk: 90+ mins daily on data entry</li>
                      <li className="flex gap-3 text-xs text-slate-600 font-medium italic"><span className="text-blue-600 font-bold not-italic">"</span> Travel teams: 3 hours per itinerary</li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Right Column (ROI Calculator) */}
              <div className="lg:col-span-1 h-full">
                <RoiCalculator />
              </div>

            </div>
          </div>
        </section>

        {/* ─── POWER PACK FEATURES ─── */}
        <section id="features" className="py-24 md:py-32 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_CHILDREN_VARIANTS}
              className="flex flex-col items-center text-center mb-16"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 mb-6 shadow-sm">
                <Rocket className="w-3.5 h-3.5 text-slate-500" />
                Power Pack
              </motion.div>
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
                Why businesses choose Chatmagnet AI
              </motion.h2>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg text-slate-500 max-w-2xl font-medium">
                Businesses choose Chatmagnet AI because it simplifies the complexity of sales management on WhatsApp.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="bg-white border border-slate-200/60 rounded-3xl p-4 mb-6 aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/50">
                  <img src="/features/automation.png" alt="Visual Flow Builder" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Flow Builder</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Build powerful chat automations without writing a single line of code. Drag, drop, and connect nodes to route leads instantly.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="bg-white border border-slate-200/60 rounded-3xl p-4 mb-6 aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/50">
                  <img src="/features/kanban.png" alt="Kanban CRM Pipeline" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kanban CRM Pipeline</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Track every lead in a visual pipeline. Move deals seamlessly from new inquiry to closed revenue, all within a shared team workspace.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="bg-white border border-slate-200/60 rounded-3xl p-4 mb-6 aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/50">
                  <img src="/features/analytics.png" alt="Reporting & Analytics" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Reporting & Analytics</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Know exactly which Meta Ad campaign closed on WhatsApp. Track agent performance and track real ROI on your marketing spend.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── KEY TOOLS (Sticky Scroll Layout) ─── */}
        <section className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              
              {/* Left Column (Sticky Sidebar) */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 flex flex-col justify-start pb-12 lg:pb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 mb-8 shadow-sm self-start">
                    <Rocket className="w-3.5 h-3.5 text-slate-500" />
                    Key Tools
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-12 tracking-tight leading-[1.1]">
                    Automate your WhatsApp<br/> sales engine
                  </h2>
                  
                  <nav className="hidden lg:flex flex-col gap-6 font-medium text-lg text-slate-400 relative border-l-2 border-slate-100 pl-6">
                    <a href="#tool-1" className={`transition-all duration-300 relative ${activeTool === 'tool-1' ? 'text-blue-600 font-bold drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] scale-[1.02]' : 'hover:text-slate-600'}`}>
                      {activeTool === 'tool-1' && <span className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>}
                      AI Chatbots
                    </a>
                    <a href="#tool-2" className={`transition-all duration-300 relative ${activeTool === 'tool-2' ? 'text-blue-600 font-bold drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] scale-[1.02]' : 'hover:text-slate-600'}`}>
                      {activeTool === 'tool-2' && <span className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>}
                      Smart Lead Routing
                    </a>
                    <a href="#tool-3" className={`transition-all duration-300 relative ${activeTool === 'tool-3' ? 'text-blue-600 font-bold drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] scale-[1.02]' : 'hover:text-slate-600'}`}>
                      {activeTool === 'tool-3' && <span className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>}
                      Multi-Agent Workspace
                    </a>
                    <a href="#tool-4" className={`transition-all duration-300 relative ${activeTool === 'tool-4' ? 'text-blue-600 font-bold drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] scale-[1.02]' : 'hover:text-slate-600'}`}>
                      {activeTool === 'tool-4' && <span className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>}
                      Automated Follow-ups
                    </a>
                  </nav>
                </div>
              </div>

              {/* Right Column (Scrollable Content) */}
              <div className="lg:col-span-8 flex flex-col gap-24 lg:gap-40">
                
                {/* Item 1 */}
                <div id="tool-1" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Chatbots</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
                    Let AI handle the basic questions instantly on WhatsApp so your team focuses on closing high-value deals.
                  </p>
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-2 md:p-4 shadow-xl shadow-slate-200/50 aspect-[4/3] md:aspect-[16/10] group">
                    <img src="/features/ai_chatbot.png" alt="AI Chatbot" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                </div>

                {/* Item 2 */}
                <div id="tool-2" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Lead Routing</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
                    Automatically assign high-value leads to the right sales agent based on availability, language, or product interest.
                  </p>
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-2 md:p-4 shadow-xl shadow-slate-200/50 aspect-[4/3] md:aspect-[16/10] group">
                    <img src="/features/lead_routing.png" alt="Lead Routing" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                </div>

                {/* Item 3 */}
                <div id="tool-3" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Agent Workspace</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
                    Your whole team can collaborate on one WhatsApp number without crossing wires. Leave internal notes and transfer chats easily.
                  </p>
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-2 md:p-4 shadow-xl shadow-slate-200/50 aspect-[4/3] md:aspect-[16/10] group">
                    <img src="/features/multi_agent.png" alt="Multi-Agent Workspace" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                </div>

                {/* Item 4 */}
                <div id="tool-4" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Follow-ups</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
                    Schedule automated WhatsApp sequences so leads never fall through the cracks. Drip marketing right in their pocket.
                  </p>
                  <div className="bg-white border border-slate-200/60 rounded-3xl p-2 md:p-4 shadow-xl shadow-slate-200/50 aspect-[4/3] md:aspect-[16/10] group">
                    <img src="/features/auto_followup.png" alt="Automated Follow-ups" className="w-full h-full object-cover rounded-2xl border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </section>

        {/* ─── CORE FEATURES (Dark Grid) ─── */}
        <section id="core-features" className="py-24 md:py-32 bg-[#111111] text-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-semibold text-slate-300 mb-6 shadow-sm">
                <Rocket className="w-3.5 h-3.5 text-slate-400" />
                Core Features
              </div>
              
              <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
                What's inside Chatmagnet AI?
              </h2>
              
              <p className="text-lg text-slate-400 max-w-2xl font-medium">
                Automate your daily sales workflows, manage agent performance, and centralize your customer communications to increase output.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Feature 1 */}
              <div className="bg-[#1a1a1a] border border-slate-800 hover:border-slate-700 transition-colors rounded-3xl p-8 flex flex-col group cursor-default">
                <div className="mb-6 text-rose-500">
                  <Smartphone className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-50">Official API Access</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Connect multiple WhatsApp Business numbers via the official Meta Cloud API with 100% stability.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#1a1a1a] border border-slate-800 hover:border-slate-700 transition-colors rounded-3xl p-8 flex flex-col group cursor-default">
                <div className="mb-6 text-rose-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-50">Broadcast Messaging</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Send bulk promotional messages, offers, and updates to opted-in users without the risk of bans.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#1a1a1a] border border-slate-800 hover:border-slate-700 transition-colors rounded-3xl p-8 flex flex-col group cursor-default">
                <div className="mb-6 text-rose-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-50">Template Management</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Create, submit, and manage Meta-approved message templates instantly from a single dashboard.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#1a1a1a] border border-slate-800 hover:border-slate-700 transition-colors rounded-3xl p-8 flex flex-col group cursor-default">
                <div className="mb-6 text-rose-500">
                  <BarChart3 className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-50">Agent Analytics</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Track response times, resolution rates, and sales closed by individual agents in real-time.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-[#1a1a1a] border border-slate-800 hover:border-slate-700 transition-colors rounded-3xl p-8 flex flex-col group cursor-default">
                <div className="mb-6 text-rose-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-50">No-Code Webhooks</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Connect Chatmagnet AI to Zapier, Make, or any custom software with our simple and secure webhooks.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-[#1a1a1a] border border-slate-800 hover:border-slate-700 transition-colors rounded-3xl p-8 flex flex-col group cursor-default">
                <div className="mb-6 text-rose-500">
                  <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-50">Role-Based Access</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Set distinct permissions for admins, managers, and agents to protect your customer data.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ─── CHATMAGNET AI DEEP DIVE ─── */}
        <section id="chatmagnet" className="py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="flex items-center gap-3 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-6 h-[1px] bg-emerald-600 block"></span>
                Our Proprietary SaaS — Chatmagnet AI
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Built because standard tools couldn't handle our own Meta Ad volumes.</h2>
              <p className="text-lg text-slate-600 mb-10">Chatmagnet AI is not a basic chatbot. It's a revenue intelligence layer that sits behind your WhatsApp. We built it to score every lead from Meta/Google, route it, and secure payments instantly.</p>
              
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
                
                {/* Without Chatmagnet AI */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-white border-b border-slate-200 p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Without Chatmagnet AI</div>
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

                {/* With Chatmagnet AI */}
                <div className="bg-slate-50 border border-emerald-200 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/5 relative">
                  <div className="bg-white border-b border-slate-200 p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">With Chatmagnet AI</div>
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



        {/* ─── COMMON QUESTIONS (FAQ) ─── */}
        <section id="faq" className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 mb-6 shadow-sm">
                  <Rocket className="w-3.5 h-3.5 text-slate-500" />
                  FAQ
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">
                  Frequently Asked<br/>Questions
                </h2>
                <p className="text-lg text-slate-500 font-medium">
                  Get answers to common questions here
                </p>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7">
                <Accordion className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-5">
                      Is my data safe on Chatmagnet AI?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-5 pt-0 text-base">
                      Yes. We use industry-grade encryption, secure servers, and role-based access controls to protect your data at all times.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-5">
                      How do I get started?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-5 pt-0 text-base">
                      You can get started by booking a 20-minute free audit. We'll understand your requirements and set up the WhatsApp API for you.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-5">
                      Does it work with my CRM?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-5 pt-0 text-base">
                      Yes. Chatmagnet AI supports no-code webhooks, allowing seamless integration with Zapier, Make, and almost any custom software or CRM you currently use.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-5">
                      Can I track sales goals?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-5 pt-0 text-base">
                      Absolutely. Our Agent Analytics dashboard gives you real-time insights into response times, resolution rates, and total sales closed by each agent.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-5">
                      Do I need a WhatsApp Business API account?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-5 pt-0 text-base">
                      Yes, you do. But don't worry—our team handles the entire Meta Cloud API approval and setup process for you within 48 hours.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm">
                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-5">
                      Is there a risk of my WhatsApp number getting banned?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-5 pt-0 text-base">
                      No. Since Chatmagnet AI operates purely on the official Meta Cloud API, your number is 100% safe from the bans that usually plague unofficial WhatsApp extensions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="cta" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-tight">
                Stop losing leads.<br />
                <span className="text-blue-600">Find the leak in 20 mins.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-md mb-8">
                Skip the sales pitch. Get a technical audit of your WhatsApp funnel and see exactly where you're losing money.
              </p>
              
              <div className="flex items-center gap-4 text-sm font-bold text-slate-700">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=11" alt="Avatar" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=32" alt="Avatar" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=68" alt="Avatar" /></div>
                </div>
                <div>Joined by 100+ scaling businesses</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-6">What is your biggest bottleneck?</div>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <MessageSquare className="w-5 h-5" />, title: "Meta Ads ROI & WhatsApp Leaks", desc: "I need Chatmagnet AI to track and score my ad leads.", waMsg: "Hi, I need Chatmagnet AI to track and score my ad leads." },
                  { icon: <Bot className="w-5 h-5" />, title: "Automating Sales Follow-ups", desc: "My team forgets to follow up with hot leads.", waMsg: "Hi, my team forgets to follow up with leads, I need automation." },
                  { icon: <Zap className="w-5 h-5" />, title: "CRM & Payment Integration", desc: "I need to collect payments directly inside WhatsApp.", waMsg: "Hi, I need to collect payments directly inside WhatsApp." }
                ].map((opt, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveCtaOpt(idx)}
                    className={`p-5 rounded-2xl flex gap-4 cursor-pointer transition-all border-2 ${activeCtaOpt === idx ? 'border-blue-600 bg-blue-50/50 shadow-md' : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50 shadow-sm'}`}
                  >
                    <div className={`mt-0.5 shrink-0 ${activeCtaOpt === idx ? 'text-blue-600' : 'text-slate-400'}`}>
                      {opt.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-base ${activeCtaOpt === idx ? 'text-blue-900' : 'text-slate-900'}`}>{opt.title}</div>
                      <div className="text-sm text-slate-500 mt-1">{opt.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 mt-1 shrink-0 flex items-center justify-center transition-colors ${activeCtaOpt === idx ? 'border-blue-600' : 'border-slate-300'}`}>
                      {activeCtaOpt === idx && <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* TODO: Replace 91XXXXXXXXXX with actual WhatsApp Business number */}
              <a 
                href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" 
                target="_blank" rel="noopener noreferrer" 
                className="block w-full"
              >
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 group">
                  Book my free 20-minute audit 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <p className="text-center text-xs text-slate-400 font-medium mt-4">
                No credit card required. 100% free consultation.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
