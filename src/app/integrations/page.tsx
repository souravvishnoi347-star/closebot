"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import Link from 'next/link';
import { integrations } from '@/data/integrations';
import * as Icons from 'lucide-react';

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight">
            Integrations
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => {
            // Dynamically render the correct Lucide icon
            // @ts-ignore
            const IconComponent = Icons[integration.iconName] || Icons.Box;

            return (
              <Link 
                key={index}
                href={`/integrations/${integration.slug}`}
                className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-500/20 transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-6 h-6 ${integration.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {integration.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {integration.description}
                </p>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
