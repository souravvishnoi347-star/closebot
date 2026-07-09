"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  PlayCircle,
  TrendingDown,
  LineChart,
  CalendarCheck,
  Bot,
  BrainCircuit,
  MessageSquare,
  Building2,
  Stethoscope,
  GraduationCap
} from 'lucide-react';
import { RoiCalculator } from '@/components/landing/roi-calculator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-slate-900">
            <Zap className="w-7 h-7 text-blue-600 fill-blue-600" />
            Closebot.ai
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <Link href="#problem" className="hover:text-blue-600 transition-colors">Problem</Link>
            <Link href="#solution" className="hover:text-blue-600 transition-colors">How it works</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block font-medium text-slate-600 hover:text-slate-900">
              Dashboard
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 shadow-sm shadow-blue-200">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              The Revenue Layer for Meta Ads
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto">
              Stop Losing Meta Ads Leads to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Slow WhatsApp Response</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Meta Ads → WhatsApp CRM. AI responds in 60 seconds. Books your meetings. You close more deals.
            </p>
            
            <Link href="/signup">
              <Button className="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                Try Free for 14 Days (No Card)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 500+ businesses</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 15,000 deals closed</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 90% faster</span>
            </div>

            {/* Embedded Loom Video Placeholder */}
            <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white aspect-video group cursor-pointer flex items-center justify-center group">
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors z-10" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" 
                alt="Dashboard Demo" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-10 h-10" />
                </div>
                <p className="mt-4 font-bold text-slate-900 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-sm">
                  Watch 2-min Demo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section id="problem" className="py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Your Meta Ads Spend is <span className="text-rose-500">Hemorrhaging</span></h2>
                
                <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-8 space-y-6">
                  <p className="font-semibold text-slate-800 text-lg">Scenario: You run ₹50K/month on Meta Ads → Dental clinic leads</p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">50 leads land on your WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">Your response: 3 hours later (because you&apos;re busy)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingDown className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">30 leads have gone silent (they checked a competitor)</span>
                    </li>
                  </ul>
                  
                  <div className="pt-4 border-t border-rose-200">
                    <p className="text-xl font-black text-rose-600 flex items-center gap-2">
                      = ₹30K in ad spend → ₹0 in revenue
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <RoiCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section id="solution" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Here&apos;s What Happens With Closebot</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 text-blue-400 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Minute 1: Lead lands on WhatsApp</h3>
                    <p className="text-slate-400">Instantly captured into your visual CRM pipeline from your Meta Ad click.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 text-blue-400 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Minute 2: AI replies</h3>
                    <p className="text-slate-400">Our AI (trained on your FAQs and brand tone) engages the lead immediately.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 text-blue-400 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Minute 3: AI qualifies</h3>
                    <p className="text-slate-400">Gathers budget, timeline, and specific needs without you lifting a finger.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 text-emerald-400 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Minute 4: Meeting booked</h3>
                    <p className="text-slate-400">Appointment scheduled directly in your calendar.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30 text-amber-400 font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Minute 5: You close deals</h3>
                    <p className="text-slate-400">You log in to a calendar full of qualified leads ready to buy. Focus on closing, not chasing.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80" 
                    alt="Closebot Interface" 
                    className="rounded-xl opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">Built for Businesses that Value Speed</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Dental Clinics</h3>
                <p className="text-slate-600 italic font-medium">"Closebot added 15 new patients. Same ad spend."</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Real Estate Agents</h3>
                <p className="text-slate-600 italic font-medium">"90-second response time. 40% leads book without me."</p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">EdTech / Tutoring</h3>
                <p className="text-slate-600 italic font-medium">"Replaced 2 VAs. Closed 8 more deals. Still cheaper."</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Simple Pricing. No Hidden Fees.</h2>
              <p className="text-lg text-slate-600">Invest in revenue tracking, not just a bot.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-500 mb-6">For freelancers & solos</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-slate-900">₹999</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <div className="font-semibold text-slate-700 mb-6 border-b pb-6">1 user</div>
                <Link href="/signup" className="mt-auto">
                  <Button variant="outline" className="w-full h-12 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 font-bold text-base rounded-xl transition-all">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
              
              {/* Growth */}
              <div className="bg-blue-600 p-8 rounded-3xl border border-blue-600 shadow-2xl flex flex-col relative transform md:-translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                <p className="text-blue-200 mb-6">For growing SMBs</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white">₹2,499</span>
                  <span className="text-blue-200 font-medium">/mo</span>
                </div>
                <div className="font-semibold text-blue-100 mb-6 border-b border-blue-500 pb-6">Up to 3 users</div>
                <Link href="/signup" className="mt-auto">
                  <Button className="w-full h-12 bg-white text-blue-600 hover:bg-slate-50 font-bold text-base rounded-xl transition-all">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
              
              {/* Agency */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Agency</h3>
                <p className="text-slate-500 mb-6">For marketing agencies</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-slate-900">₹6,999</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <div className="font-semibold text-slate-700 mb-6 border-b pb-6">Unlimited users</div>
                <Link href="mailto:sales@closebot.ai" className="mt-auto">
                  <Button variant="outline" className="w-full h-12 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 font-bold text-base rounded-xl transition-all">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 text-center text-lg">All plans include:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Unlimited AI conversations
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Meta Ads integration
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Visual CRM pipeline
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Zapier/Make integration
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Email support
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="inline-flex text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
                  Compare with Superfone: <span className="text-slate-800 ml-1">We are 3x simpler, 2x cheaper.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">Trusted by 500+ Businesses Across India</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">{'★'.repeat(5)}</div>
                  <p className="text-slate-700 italic font-medium text-lg mb-8">"Added Closebot in July. Same ad spend. +₹18L in revenue."</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Rohan Sharma</p>
                  <p className="text-sm text-slate-500">Smart Dental, Mumbai</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">{'★'.repeat(5)}</div>
                  <p className="text-slate-700 italic font-medium text-lg mb-8">"90-second response time. 40% of leads book without my input."</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Priya Desai</p>
                  <p className="text-sm text-slate-500">Urban Estates, Pune</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">{'★'.repeat(5)}</div>
                  <p className="text-slate-700 italic font-medium text-lg mb-8">"Replaced 2 part-time VAs. Closed 8 more deals. Still cheaper."</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Amit Patel</p>
                  <p className="text-sm text-slate-500">Learn & Thrive EdTech, Bangalore</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="#" className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
                View more case studies <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
            
            <Accordion className="w-full">
              <AccordionItem value="item-1" className="bg-white border border-slate-200 rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  Does Closebot replace my CRM?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                  No. It can act as your main CRM, but it also integrates with your existing CRM (HubSpot, Pipedrive, etc.) via Zapier or Make.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white border border-slate-200 rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  How different is it from Superfone?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                  Closebot is built specifically for Meta Ads lead conversion. Superfone is a general phone system. We're 3x cheaper, 10x simpler, and 2x better at actual WhatsApp conversions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white border border-slate-200 rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  Can I use it for other platforms (Google Ads, etc)?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                  Currently we focus on Meta Ads because that's where 80% of your leads are generated. We're building multi-channel support in Q3 2026.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white border border-slate-200 rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                  What if the AI replies are bad?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                  You train it with your own FAQs and business info. It learns your specific tone. And you can always jump in and take over the conversation or use pre-approved templates instead.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">Ready to stop losing leads?</h2>
            
            <Link href="/signup">
              <Button className="h-16 px-10 bg-white hover:bg-slate-50 text-blue-600 text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-transform mb-12">
                Start Your Free Trial (14 Days)
              </Button>
            </Link>
            
            <div className="bg-blue-700/50 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto text-left">
              <p className="text-blue-100 font-semibold mb-6 text-center">14-day trial, up to 14 connected numbers, no credit card.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  See real ROI before you pay
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  Integrate with your Meta Ads in 10 minutes
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  Your AI is live and responding in 30 minutes
                </li>
              </ul>
            </div>
            
            <p className="mt-10 font-bold text-blue-200">
              Join 500+ businesses already closing deals on Closebot.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-600 fill-blue-600" />
            Closebot
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-medium text-slate-500">
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
