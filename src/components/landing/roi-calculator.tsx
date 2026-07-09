"use client";

import { useState } from "react";

export function RoiCalculator() {
  const [adSpend, setAdSpend] = useState(50000);

  const leads = Math.floor(adSpend / 1000); // 1 lead per 1000 Rs roughly
  const lostLeads = Math.floor(leads * 0.6); // 60% lost
  const lostAdSpend = adSpend * 0.6;

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl max-w-md mx-auto w-full">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">📊</span> ROI Calculator
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
            <span>Monthly Ad Spend</span>
            <span className="font-bold text-blue-600">₹{adSpend.toLocaleString('en-IN')}</span>
          </label>
          <input 
            type="range" 
            min="10000" 
            max="500000" 
            step="5000"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Total Leads Generated:</span>
            <span className="font-bold text-slate-900">~{leads.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Leads Lost to Slow Replies:</span>
            <span className="font-bold text-rose-500">~{lostLeads.toLocaleString('en-IN')} (60%)</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <p className="text-sm font-medium text-slate-500 mb-1">Ad Spend Wasted (Lost Revenue Potential)</p>
          <p className="text-3xl font-black text-rose-600">
            ₹{lostAdSpend.toLocaleString('en-IN')}
          </p>
        </div>
        
        <div className="bg-emerald-50 text-emerald-700 text-sm font-medium p-3 rounded-lg border border-emerald-100 text-center">
          Closebot recovers this lost revenue.
        </div>
      </div>
    </div>
  );
}
