import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { Metadata } from "next";
import { Zap } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.slug === resolvedParams.slug);
  
  if (!study) {
    return { title: "Not Found" };
  }

  return {
    title: `${study.title} | Case Studies`,
    description: study.aboutCompany.substring(0, 160),
  };
}

export default async function CaseStudyDetail({ params }: Props) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          {study.title}
        </h1>
      </div>

      {/* Hero Image Area */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src={study.heroImage} 
            alt={study.companyName}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
          
          {/* Logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {study.slug === 'nexora' ? (
              <div className="flex items-center gap-3">
                <div className="text-white">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v-5"/></svg>
                </div>
                <span className="text-white text-5xl md:text-7xl font-bold tracking-tight">{study.companyName}</span>
              </div>
            ) : study.slug === 'fluxenta' ? (
              <div className="flex items-center gap-3">
                <div className="text-white">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className="text-white text-5xl md:text-7xl font-bold tracking-tight">{study.companyName}</span>
              </div>
            ) : study.slug === 'growthspark' ? (
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <Zap className="w-10 h-10 text-blue-500 fill-blue-500" />
                </div>
                <span className="text-white text-5xl md:text-7xl font-bold tracking-tight">{study.companyName}</span>
              </div>
            ) : (
              <span className="text-white text-5xl md:text-7xl font-extrabold tracking-tight italic">{study.companyName}</span>
            )}
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Intro */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-16 pb-16 border-b border-slate-100">
          {study.aboutCompany}
        </p>

        {/* Challenge */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
            The Challenge
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {study.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
            The Solution
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {study.companyName} partnered with Chatmagnet AI to unify its operations and automate sales-driven workflows. In just a few weeks, Chatmagnet AI helped:
          </p>
          <ul className="space-y-6">
            {study.solution.map((item, index) => {
              // Split text into bold start and rest for emphasis
              const words = item.split(' ');
              const boldPart = words.slice(0, 4).join(' ');
              const restPart = words.slice(4).join(' ');
              return (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-lg text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-bold">{boldPart}</strong> {restPart}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">
            The Results
          </h2>
          <ul className="space-y-6">
            {study.results.map((item, index) => {
              // Highlight numbers in bold
              const words = item.split(' ');
              return (
                <li key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-lg text-slate-700 leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Testimonial */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">
            Testimonial
          </h2>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic mb-8">
            "{study.testimonial.quote}"
          </blockquote>
          <p className="text-lg text-slate-500 font-semibold italic">
            — {study.testimonial.author}
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
