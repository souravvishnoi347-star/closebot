"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Check, Minus, BrainCircuit, Bot, Zap, Rocket, Building2, Plus, Tag, MessageSquare, UserPlus } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Helper to calculate price based on cycle
  const getPrice = (monthlyPrice: number) => {
    return billingCycle === 'yearly' ? Math.floor(monthlyPrice * 0.8 * 12) : monthlyPrice;
  };

  const getCycleText = () => billingCycle === 'yearly' ? '/year' : '/month';

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-40 pb-20 max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tight mb-6">
            Choose the Perfect Plan
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Our plans ensure that businesses can access tools for High-Conversion WhatsApp Sales Teams.
          </p>
        </div>

        {/* Toggle Section */}
        <div className="flex justify-center items-center gap-4 mb-20">
          <span className={`text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
          
          <button 
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-7 rounded-full bg-slate-900 relative flex items-center px-1 transition-all"
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>Yearly</span>
            <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
          </div>
        </div>

        {/* ─── PRICING CARDS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch mb-32">
          
          {/* STARTER */}
          <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-sm font-medium text-slate-500 mb-8 min-h-[40px]">Perfect for individual brokers & micro-teams looking to digitize.</p>
            <div className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">₹{getPrice(1499).toLocaleString()}<span className="text-lg font-medium text-slate-400">{getCycleText()}</span></div>
            <p className="text-xs font-medium text-slate-400 mb-8">billed {billingCycle}</p>
            
            <Link href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
              <Button variant="outline" className="w-full h-12 rounded-xl border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-slate-900 font-bold">
                Get Started Now
              </Button>
            </Link>
            
            <div className="text-sm font-bold text-slate-900 mb-4">What do you get:</div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Up to 1,000 Unique Leads/mo</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> 1 Connected WhatsApp Number</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Up to 2 Agent Seats included</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Shared Team Inbox (Real-time Sync)</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Basic Contact Tagging</li>
            </ul>
          </div>
          
          {/* GROWTH (Featured) */}
          <div className="bg-blue-600 p-8 lg:p-10 rounded-[2rem] border border-blue-600 shadow-2xl shadow-blue-900/20 flex flex-col relative md:-mt-4 md:-mb-4 z-10">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-slate-900 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">
              MOST POPULAR
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
            <p className="text-sm font-medium text-blue-100 mb-8 min-h-[40px]">Designed for growing teams and multi-channel operations.</p>
            <div className="text-5xl font-extrabold text-white mb-2 tracking-tight">₹{getPrice(2999).toLocaleString()}<span className="text-lg font-medium text-blue-200">{getCycleText()}</span></div>
            <p className="text-xs font-medium text-blue-200 mb-8">billed {billingCycle}</p>
            
            <Link href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
              <Button className="w-full h-12 rounded-xl bg-white hover:bg-slate-50 text-blue-900 font-bold shadow-lg">
                Get Started Now
              </Button>
            </Link>
            
            <div className="text-sm font-bold text-white mb-4">What do you get:</div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-sm text-blue-50 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" /> Up to 5,000 Unique Leads/mo</li>
              <li className="flex items-start gap-3 text-sm text-blue-50 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" /> 1 Official WhatsApp Business API No.</li>
              <li className="flex items-start gap-3 text-sm text-blue-50 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" /> Up to 5 Agent Seats included</li>
              <li className="flex items-start gap-3 text-sm text-blue-50 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" /> AI Lead Scoring (Hot/Warm/Cold)</li>
              <li className="flex items-start gap-3 text-sm text-blue-50 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" /> Meta Ads & Google Ads ROI Tracking</li>
            </ul>
          </div>
          
          {/* SCALE */}
          <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Premium</h3>
            <p className="text-sm font-medium text-slate-500 mb-8 min-h-[40px]">For large-scale businesses needing full control & customization.</p>
            <div className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">₹{getPrice(6999).toLocaleString()}<span className="text-lg font-medium text-slate-400">{getCycleText()}</span></div>
            <p className="text-xs font-medium text-slate-400 mb-8">billed {billingCycle}</p>
            
            <Link href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
              <Button variant="outline" className="w-full h-12 rounded-xl border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-slate-900 font-bold">
                Get Started Now
              </Button>
            </Link>
            
            <div className="text-sm font-bold text-slate-900 mb-4">What do you get:</div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Up to 25,000 Unique Leads/mo</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Up to 3 WhatsApp API Numbers</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Up to 15 Agent Seats included</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Unlimited Custom Pipelines</li>
              <li className="flex items-start gap-3 text-sm text-slate-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Advanced AI Training</li>
            </ul>
          </div>
        </div>

        {/* ─── LOGOS ─── */}
        <div className="py-16 flex flex-col items-center justify-center border-b border-slate-200/50 mb-24">
          <p className="text-sm font-semibold text-slate-500 mb-10 text-center">Trusted by 17,000+ founders & business owners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-75">
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-800">
              <div className="text-rose-500"><BrainCircuit className="w-6 h-6" /></div>
              Nexora
            </div>
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-800">
              <div className="text-orange-500"><Rocket className="w-6 h-6" /></div>
              Fyntra
            </div>
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-800">
              <div className="text-blue-500"><Zap className="w-6 h-6" /></div>
              Veltriq
            </div>
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-800">
              <div className="text-purple-500"><Bot className="w-6 h-6" /></div>
              Trivexa
            </div>
            <div className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-800">
              <div className="text-emerald-500"><Building2 className="w-6 h-6" /></div>
              Fluxenta
            </div>
          </div>
        </div>

        {/* ─── COMPARE OUR PLANS ─── */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-slate-900 tracking-tight">Compare Our Plans</h2>
          </div>

          <div className="w-full overflow-x-auto pb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-1/3 py-6 px-4 text-sm font-extrabold text-slate-900 align-bottom border-b-2 border-slate-900">Plan Features</th>
                  <th className="w-1/5 py-6 px-4 text-sm font-extrabold text-slate-900 text-center align-bottom border-b border-slate-200">Starter Plan</th>
                  <th className="w-1/5 py-6 px-4 text-sm font-extrabold text-slate-900 text-center align-bottom bg-slate-50 rounded-t-2xl border-b border-slate-200">Growth Plan</th>
                  <th className="w-1/5 py-6 px-4 text-sm font-extrabold text-slate-900 text-center align-bottom border-b border-slate-200">Premium Plan</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                
                {/* Core CRM */}
                <tr><td colSpan={4} className="py-4 px-4 font-bold text-slate-400 uppercase text-[10px] tracking-widest pt-8">Core CRM</td></tr>
                
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">WhatsApp Connected Numbers</td>
                  <td className="py-5 px-4 text-center text-slate-600">1</td>
                  <td className="py-5 px-4 text-center text-slate-900 font-semibold bg-slate-50">1 API No.</td>
                  <td className="py-5 px-4 text-center text-slate-600">Up to 3 API Nos.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">Agent Seats</td>
                  <td className="py-5 px-4 text-center text-slate-600">2</td>
                  <td className="py-5 px-4 text-center text-slate-900 font-semibold bg-slate-50">5</td>
                  <td className="py-5 px-4 text-center text-slate-600">15</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">Unique Leads per Month</td>
                  <td className="py-5 px-4 text-center text-slate-600">1,000</td>
                  <td className="py-5 px-4 text-center text-slate-900 font-semibold bg-slate-50">5,000</td>
                  <td className="py-5 px-4 text-center text-slate-600">25,000</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">Pipelines</td>
                  <td className="py-5 px-4 text-center text-slate-600">1</td>
                  <td className="py-5 px-4 text-center text-slate-900 font-semibold bg-slate-50">Unlimited</td>
                  <td className="py-5 px-4 text-center text-slate-600">Unlimited</td>
                </tr>

                {/* AI & Automation */}
                <tr><td colSpan={4} className="py-4 px-4 font-bold text-slate-400 uppercase text-[10px] tracking-widest pt-12">AI & Automation</td></tr>

                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">Node-Based Automation Flows</td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                  <td className="py-5 px-4 text-center bg-slate-50"><div className="flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></div></td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">AI Lead Scoring (Hot/Warm/Cold)</td>
                  <td className="py-5 px-4 text-center flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-5 px-4 text-center bg-slate-50"><div className="flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></div></td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">Advanced AI Training on Custom Data</td>
                  <td className="py-5 px-4 text-center flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-5 px-4 text-center bg-slate-50"><div className="flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></div></td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                </tr>

                {/* Integrations */}
                <tr><td colSpan={4} className="py-4 px-4 font-bold text-slate-400 uppercase text-[10px] tracking-widest pt-12">Integrations</td></tr>

                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">Meta Ads & Google Ads ROI Tracking</td>
                  <td className="py-5 px-4 text-center flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-5 px-4 text-center bg-slate-50"><div className="flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></div></td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">In-Chat Payment Processing (Razorpay)</td>
                  <td className="py-5 px-4 text-center flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-5 px-4 text-center bg-slate-50"><div className="flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></div></td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-5 px-4 text-slate-600 font-medium">API & Webhook Access</td>
                  <td className="py-5 px-4 text-center flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></td>
                  <td className="py-5 px-4 text-center bg-slate-50"><div className="flex justify-center"><Minus className="w-5 h-5 text-slate-300" /></div></td>
                  <td className="py-5 px-4 text-center flex justify-center"><CheckCircle2 className="w-5 h-5 text-rose-500 fill-rose-500/20" /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* ─── CUSTOMER JOURNEY SECTION ─── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
              Craft a respectful customer journey
            </h2>
          </div>

          <div className="bg-slate-50/80 p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-slate-200">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Streamline Your Sales Process
              </h3>
              <p className="text-slate-500 font-medium">
                From initial onboarding to re-engaging inactive users, automate every step with WhatsApp sales management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <h4 className="text-lg font-bold text-slate-900 mb-10 w-full text-left">1. Connect Your CRM</h4>
                <div className="flex-1 w-full flex items-center justify-center relative min-h-[160px]">
                  {/* Faint connecting lines graphic */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 20 50 Q 100 0, 180 50" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M 20 50 Q 100 100, 180 50" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                  <div className="bg-slate-900 text-white font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 z-10 shadow-lg hover:scale-105 transition-transform cursor-default">
                    <Zap className="w-4 h-4 text-blue-400" />
                    Connect Chatmagnet AI
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <h4 className="text-lg font-bold text-slate-900 mb-10 w-full text-left">2. Customize Your Pipeline</h4>
                <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 min-h-[160px]">
                  <div className="bg-slate-50 border border-slate-100 py-2.5 px-5 rounded-full inline-flex items-center gap-3 w-full max-w-[220px]">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Tag className="w-3.5 h-3.5" /></div>
                    <span className="text-xs font-bold text-slate-700">Tag as Hot Lead</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 py-2.5 px-5 rounded-full inline-flex items-center gap-3 w-full max-w-[220px]">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><MessageSquare className="w-3.5 h-3.5" /></div>
                    <span className="text-xs font-bold text-slate-700">Auto Follow-up</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 py-2.5 px-5 rounded-full inline-flex items-center gap-3 w-full max-w-[220px]">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><UserPlus className="w-3.5 h-3.5" /></div>
                    <span className="text-xs font-bold text-slate-700">Assign to Agent</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                <h4 className="text-lg font-bold text-slate-900 mb-10 w-full text-left">3. Start Closing Deals</h4>
                <div className="flex-1 w-full flex flex-col items-center justify-center min-h-[160px] relative z-10">
                  <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-5 w-full text-left mb-6 relative">
                    <div className="absolute -bottom-2 inset-x-4 h-2 bg-slate-50 rounded-b-xl border-x border-b border-slate-100 -z-10"></div>
                    <div className="absolute -bottom-4 inset-x-8 h-2 bg-slate-50 rounded-b-xl border-x border-b border-slate-100 -z-20"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-1">Welcome to Chatmagnet AI</div>
                        <div className="text-[10px] leading-relaxed text-slate-500">Thanks for using Chatmagnet AI. Let&apos;s jump to make some profit!</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400 mt-auto">
                    No Credit Card Required
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
