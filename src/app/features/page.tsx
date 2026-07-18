"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Zap, Share2, ShoppingBag, ShoppingCart, CreditCard, Cloud, Database, BarChart, Box, Cpu, FileText, Globe, Key, Target, TrendingUp, Workflow, BrainCircuit, ShieldCheck, Users } from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24">
        
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-6 lg:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight mb-6"
          >
            AI that moves sales forward
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 font-medium"
          >
            Our AI is built to automate WhatsApp sales—qualify, route, and close deals.
          </motion.p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-2xl aspect-[4/3] w-full mb-8 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Mockup visual for Chat Analytics */}
                <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">W</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">WhatsApp Analytics</div>
                      <div className="text-xs text-slate-500">Live Traffic</div>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">12,490</div>
                  <div className="text-sm text-emerald-500 font-medium flex items-center gap-1">
                    ↑ 14% vs last week
                  </div>
                  <div className="flex gap-2 mt-6 h-2">
                    <div className="bg-blue-500 w-1/2 rounded-full"></div>
                    <div className="bg-indigo-400 w-1/4 rounded-full"></div>
                    <div className="bg-pink-400 w-1/4 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Real-Time Chat Analytics</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Generate detailed reports on sales performance, team productivity, and WhatsApp campaign ROI in real time.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-2xl aspect-[4/3] w-full mb-8 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Mockup visual for Pipeline */}
                <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 p-4 text-sm">
                  <div className="font-bold text-slate-900 mb-4">Manage Your Pipeline</div>
                  <div className="flex justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="text-slate-500">Lead</span>
                    <span className="text-slate-500">Value</span>
                    <span className="text-slate-500">Stage</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-900">TechCorp</span>
                    <span className="text-slate-900">$12,000</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold">Proposal</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-900">Acme Inc</span>
                    <span className="text-slate-900">$5,500</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">Discovery</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-900">GlobalNet</span>
                    <span className="text-slate-900">$21,000</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold">Closed Won</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Lead Tracking & Pipeline</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Automate repetitive tasks like follow-ups, reminders, and data entry with our intuitive Kanban pipelines.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-2xl aspect-[4/3] w-full mb-8 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Mockup visual for Integration */}
                <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center text-center">
                  <div className="flex gap-4 items-center mb-6">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.393 0 0 5.392 0 12.03c0 2.115.551 4.184 1.597 5.998L.1 24l6.12-1.605A11.956 11.956 0 0 0 12.031 24c6.636 0 12.031-5.392 12.031-12.03C24.062 5.393 18.667 0 12.031 0zM17.5 16.712c-.22.617-1.282 1.15-1.761 1.222-.44.066-1.026.173-3.238-.744-2.71-1.124-4.453-3.879-4.588-4.06-.135-.181-1.096-1.461-1.096-2.784 0-1.323.687-1.979.932-2.247.244-.268.536-.335.711-.335.176 0 .351.002.505.009.16.008.375-.06.586.444.22.529.754 1.84.823 1.98.068.14.113.303.024.484-.09.18-.135.291-.269.447-.134.155-.285.342-.406.47-.132.14-.271.293-.117.558.155.265.688 1.135 1.472 1.83.896 1.76 1.42 2.025 1.558.265.138.419.117.575-.022.155-.138.67-.78.847-1.036.176-.255 1.122.531 1.316.626.193.096.321.144.368.224.047.08.047.466-.173 1.083z" /></svg>
                    </div>
                    <div className="text-slate-400 font-bold text-xl">⇄</div>
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.868 11.231l-9.102-9.1A2.99 2.99 0 0 0 11.642 1.25H2.983A2.987 2.987 0 0 0 0 4.237v8.65a3.003 3.003 0 0 0 .882 2.124l9.102 9.1a2.982 2.982 0 0 0 4.223 0l8.661-8.66a2.982 2.982 0 0 0 0-4.22zm-3.033 2.15l-8.66 8.66-8.084-8.086v-8.65h8.658l8.086 8.077zm-11.833-6.6a1.992 1.992 0 1 1-3.984 0 1.992 1.992 0 0 1 3.984 0z"/></svg>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 bg-slate-100 px-4 py-2 rounded-full">
                    HubSpot • Zapier • Salesforce
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Seamless CRM Sync</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Connect your existing tools to automatically sync contacts, deals, and WhatsApp chat history across platforms.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-2xl aspect-[4/3] w-full mb-8 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Mockup visual for Performance */}
                <div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-end justify-between gap-4">
                  <div className="w-full bg-blue-100 rounded-t-md relative h-[80%]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600">+9.9%</span>
                  </div>
                  <div className="w-full bg-indigo-500 rounded-t-md relative h-[60%]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-600">+7.9%</span>
                  </div>
                  <div className="w-full bg-pink-400 rounded-t-md relative h-[45%]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-pink-500">+5.9%</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Team Performance & ROI</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Monitor team response times and measure the exact ROI of your WhatsApp marketing efforts in a single dashboard.
              </p>
            </motion.div>
            
          </div>
        </div>


        {/* Interactive Tabbed Features Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 pt-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
              AI that moves sales forward
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              Our AI is built to do more than just automate—it learns, predicts, and accelerates your pipeline.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-xl shadow-slate-200/50 overflow-hidden mb-12 relative h-[450px]">
             
             {/* Mockup 1: Smart Routing */}
             <AnimatePresence mode="wait">
               {activeTab === 0 && (
                 <motion.div 
                   key="tab0"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 bg-slate-50 flex p-8"
                 >
                    {/* Sidebar */}
                    <div className="w-64 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col mr-6">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                        <div className="font-bold text-slate-900">Voltchat AI</div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-8 bg-slate-100 rounded flex items-center px-3"><div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div><div className="w-16 h-2 bg-slate-200 rounded"></div></div>
                        <div className="h-8 flex items-center px-3"><div className="w-2 h-2 rounded-full bg-slate-300 mr-3"></div><div className="w-20 h-2 bg-slate-200 rounded"></div></div>
                        <div className="h-8 flex items-center px-3"><div className="w-2 h-2 rounded-full bg-slate-300 mr-3"></div><div className="w-12 h-2 bg-slate-200 rounded"></div></div>
                      </div>
                      <div className="mt-auto">
                        <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">Agents Online</div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-slate-200 rounded-full border-2 border-white relative"><div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div></div>
                          <div className="text-sm font-medium text-slate-700">Sarah M.</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-slate-200 rounded-full border-2 border-white relative"><div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div></div>
                          <div className="text-sm font-medium text-slate-700">Alex K.</div>
                        </div>
                      </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col">
                      <h3 className="font-bold text-slate-900 mb-6 text-xl">Routing Logic</h3>
                      <div className="flex-1 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-slate-50/50">
                        <div className="flex flex-col items-center gap-4">
                          <div className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm">New WhatsApp Lead</div>
                          <div className="w-1 h-8 bg-slate-300"></div>
                          <div className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-lg font-medium text-sm">Is Language = Spanish?</div>
                          <div className="flex gap-16 mt-2 relative">
                            <div className="absolute top-[-8px] left-[20%] w-1 h-8 bg-slate-300"></div>
                            <div className="absolute top-[-8px] right-[20%] w-1 h-8 bg-slate-300"></div>
                            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-xs mt-6">Yes: Route to Maria</div>
                            <div className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-bold text-xs mt-6">No: Round Robin</div>
                          </div>
                        </div>
                      </div>
                    </div>
                 </motion.div>
               )}
               
               {/* Mockup 2: Centralized Lead Profiles */}
               {activeTab === 1 && (
                 <motion.div 
                   key="tab1"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 bg-slate-50 flex p-8"
                 >
                    {/* Chat view */}
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col mr-6 overflow-hidden">
                      <div className="h-16 border-b border-slate-100 flex items-center px-6">
                        <div className="font-bold text-slate-900">Tech Innovators Inc.</div>
                        <div className="ml-auto text-xs bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full">Proposal Sent</div>
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-end gap-4 bg-[#f8f9fa]">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[70%] border border-slate-100 text-sm text-slate-600">
                          Hi, we are interested in upgrading our plan. Can we get a demo?
                        </div>
                        <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[70%] self-end text-sm">
                          Absolutely! I see you're currently on the Pro plan. I can schedule a demo for the Enterprise tier this Thursday.
                        </div>
                      </div>
                    </div>
                    {/* CRM Profile Sidebar */}
                    <div className="w-80 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
                      <div className="flex flex-col items-center mb-8 pt-4">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4">TI</div>
                        <div className="font-bold text-lg text-slate-900">Tech Innovators</div>
                        <div className="text-sm text-slate-500">techinnovators.com</div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <div className="text-xs font-bold text-slate-400 mb-2 uppercase">Contact Details</div>
                          <div className="text-sm font-medium text-slate-700">+1 (555) 019-2834</div>
                          <div className="text-sm font-medium text-slate-700">hello@techinnovators.com</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-400 mb-2 uppercase">CRM Data</div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-500">Lifetime Value</span>
                            <span className="font-bold text-slate-900">$12,500</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Lead Source</span>
                            <span className="font-bold text-slate-900">Meta Ads</span>
                          </div>
                        </div>
                      </div>
                    </div>
                 </motion.div>
               )}

               {/* Mockup 3: Automated Follow-ups */}
               {activeTab === 2 && (
                 <motion.div 
                   key="tab2"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 bg-slate-50 flex flex-col p-8 items-center"
                 >
                    <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                        <h3 className="font-bold text-slate-900 text-xl">Abandoned Cart Sequence</h3>
                        <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded text-xs">Active</div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-lg p-4 flex gap-4 items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-xl">🛒</div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">Trigger: Cart Abandoned</div>
                            <div className="text-xs text-slate-500">Waits 30 minutes before proceeding</div>
                          </div>
                        </div>
                        
                        <div className="w-1 h-8 bg-blue-200"></div>
                        
                        <div className="w-full max-w-md bg-blue-50 border border-blue-200 shadow-sm rounded-lg p-4 flex gap-4 items-center relative">
                          <div className="absolute -left-3 -top-3 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center">💬</div>
                          <div>
                            <div className="font-bold text-blue-900 text-sm">Send WhatsApp Template</div>
                            <div className="text-xs text-blue-700/70">"cart_recovery_10_percent"</div>
                          </div>
                        </div>
                        
                        <div className="w-1 h-8 bg-blue-200"></div>
                        
                        <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-lg p-4 flex gap-4 items-center relative">
                          <div className="absolute -left-3 -top-3 bg-slate-200 text-slate-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                          <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-xl">⏳</div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">Wait condition</div>
                            <div className="text-xs text-slate-500">Wait for 24 hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
             
             {/* Fade gradient overlay to blend bottom if needed (optional) */}
             <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
          </div>

          {/* 3 Interactive Tabs Below the Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative border-t border-slate-200/60">
            {/* The animated active blue line */}
            <motion.div 
              className="absolute top-[-1px] h-[2px] bg-blue-600"
              initial={false}
              animate={{ 
                left: `${(activeTab * 100) / 3}%`, 
                width: '33.333333%' 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {[
              { title: "Smart Chat Routing", desc: "Automatically route incoming WhatsApp leads to the right sales agent based on availability or language." },
              { title: "Centralized Lead Profiles", desc: "View complete customer history, past conversations, and CRM data in one unified sidebar." },
              { title: "Automated Follow-ups", desc: "Set up intelligent drip campaigns and auto-replies to nurture leads without manual effort." }
            ].map((tab, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pt-8 pb-4 px-4 cursor-pointer transition-colors ${activeTab === idx ? '' : 'opacity-60 hover:opacity-100 hover:bg-slate-50/50'}`}
              >
                <h4 className={`text-xl font-bold mb-4 tracking-tight transition-colors ${activeTab === idx ? 'text-blue-600' : 'text-slate-900'}`}>
                  {tab.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {tab.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Integration Section */}
        <section className="bg-slate-900 py-24 md:py-32 w-full mt-12 rounded-[3rem] mx-auto max-w-[96%] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
            
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6 text-center">
              Integrate 15+ favorite tools
            </h2>
            
            <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto text-center mb-10">
              Businesses choose Voltchat AI because it seamlessly connects WhatsApp with your entire sales ecosystem.
            </p>
            
            <Link href="/integrations" className="relative group mb-20 block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white group-hover:bg-blue-600 group-hover:text-white text-slate-900 font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg text-center">
                Explore All Integrations
              </div>
            </Link>

            {/* Logo Grid */}
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6">
              {/* Row 1 (7 items) */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                {[
                  { icon: <Zap className="w-8 h-8 text-orange-500" /> },
                  { icon: <Share2 className="w-8 h-8 text-rose-500" /> },
                  { icon: <ShoppingBag className="w-8 h-8 text-green-500" /> },
                  { icon: <CreditCard className="w-8 h-8 text-blue-500" /> },
                  { icon: <Cloud className="w-8 h-8 text-sky-500" /> },
                  { icon: <Database className="w-8 h-8 text-indigo-500" /> },
                  { icon: <BarChart className="w-8 h-8 text-pink-500" /> }
                ].map((item, idx) => (
                  <div key={`r1-${idx}`} className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl shadow-black/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    {item.icon}
                  </div>
                ))}
              </div>
              
              {/* Row 2 (6 items) */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                {[
                  { icon: <ShoppingCart className="w-8 h-8 text-purple-600" /> },
                  { icon: <Box className="w-8 h-8 text-emerald-500" /> },
                  { icon: <Cpu className="w-8 h-8 text-violet-500" /> },
                  { icon: <Globe className="w-8 h-8 text-cyan-500" /> },
                  { icon: <FileText className="w-8 h-8 text-amber-500" /> },
                  { icon: <Key className="w-8 h-8 text-red-500" /> }
                ].map((item, idx) => (
                  <div key={`r2-${idx}`} className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl shadow-black/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Capabilities Grid Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
              Unlock limitless possibilities
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
              Automate your WhatsApp sales pipeline, manage leads effortlessly, and close deals faster with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Target className="w-7 h-7" />,
                title: "Lead Scoring & Tracking",
                desc: "Automatically score every incoming WhatsApp lead based on intent, source, and engagement to prioritize high-value prospects."
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Revenue Analytics",
                desc: "Track your team's WhatsApp-driven revenue, conversion rates, and pipeline velocity in a single real-time dashboard."
              },
              {
                icon: <Workflow className="w-7 h-7" />,
                title: "Visual Flow Builder",
                desc: "Design no-code WhatsApp automation flows — from welcome sequences to cart recovery — with our drag-and-drop builder."
              },
              {
                icon: <BrainCircuit className="w-7 h-7" />,
                title: "AI Smart Replies",
                desc: "Let AI handle routine queries, qualify leads, and schedule meetings automatically while your agents focus on closing."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Multi-Agent Inbox",
                desc: "Assign WhatsApp conversations to specific team members with round-robin routing, tags, and internal notes."
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Role-Based Access",
                desc: "Control who can view, reply, or manage conversations with granular permission levels for agents, managers, and admins."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white border border-slate-200/80 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-400 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors duration-300 mb-6 border border-slate-100 group-hover:border-blue-100">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
