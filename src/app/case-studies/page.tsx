import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { Zap } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
          Chatmagnet AI Drives Results
        </h1>
        <p className="text-xl text-slate-500 font-medium">
          Chatmagnet AI empowers your team to work smarter, close faster
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 pb-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm tracking-wide mb-8">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  {study.year}
                </div>
                <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 tracking-tight leading-tight mb-8 group-hover:text-blue-600 transition-colors line-clamp-3">
                  {study.title}
                </h2>
                
                {/* Visual Area */}
                <div className={`mt-auto w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl ${study.color} flex flex-col items-center justify-center p-8 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                  {/* Subtle background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex items-center gap-3 md:gap-4">
                    {study.slug === 'nexora' ? (
                      <div className="flex items-center gap-3">
                        <div className="text-white">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v-5"/></svg>
                        </div>
                        <span className="text-white text-4xl md:text-5xl font-bold tracking-tight">{study.companyName}</span>
                      </div>
                    ) : study.slug === 'fluxenta' ? (
                      <div className="flex items-center gap-3">
                        <div className="text-white">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        </div>
                        <span className="text-white text-4xl md:text-5xl font-bold tracking-tight">{study.companyName}</span>
                      </div>
                    ) : study.slug === 'growthspark' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <Zap className="w-6 h-6 text-blue-500 fill-blue-500" />
                        </div>
                        <span className="text-white text-4xl md:text-5xl font-bold tracking-tight">{study.companyName}</span>
                      </div>
                    ) : (
                      <span className="text-white text-4xl md:text-5xl font-extrabold tracking-tight italic">{study.companyName}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
