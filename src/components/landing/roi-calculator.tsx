"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, Info } from "lucide-react";

export function RoiCalculator() {
  const [adSpend, setAdSpend] = useState(50000);

  const leads = Math.floor(adSpend / 1000); // 1 lead per 1000 Rs roughly
  const lostLeads = Math.floor(leads * 0.6); // 60% lost
  const lostAdSpend = adSpend * 0.6;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-2xl shadow-blue-900/10 max-w-md mx-auto w-full relative z-10"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shadow-inner">
          <Calculator className="w-5 h-5 text-blue-600" />
        </div>
        ROI Calculator
      </h3>
      
      <div className="space-y-8">
        <div>
          <label className="flex justify-between items-end mb-4">
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Monthly Ad Spend</span>
            <span className="text-2xl font-black text-blue-600">₹{adSpend.toLocaleString('en-IN')}</span>
          </label>
          <input 
            type="range" 
            min="10000" 
            max="500000" 
            step="5000"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600 shadow-inner"
          />
        </div>

        <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 space-y-4 shadow-inner">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium flex items-center gap-2">
              Total Leads Generated
              <Info className="w-4 h-4 text-slate-400" />
            </span>
            <span className="font-bold text-slate-900 text-lg">~{leads.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-200">
            <span className="text-slate-500 font-medium">Leads Lost to Slow Replies</span>
            <span className="font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-md">~{lostLeads.toLocaleString('en-IN')} (60%)</span>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Ad Spend Wasted
          </p>
          <motion.p 
            key={lostAdSpend}
            initial={{ scale: 1.1, color: '#f43f5e' }}
            animate={{ scale: 1, color: '#e11d48' }}
            className="text-5xl font-black tracking-tight"
          >
            ₹{lostAdSpend.toLocaleString('en-IN')}
          </motion.p>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-[1px] rounded-xl overflow-hidden shadow-lg shadow-emerald-500/20">
          <div className="bg-white px-4 py-3 rounded-xl flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-slate-800 font-bold text-sm">Chatmagnet AI recovers this lost revenue.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
