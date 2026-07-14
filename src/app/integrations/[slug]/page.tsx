import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { notFound } from 'next/navigation';
import { integrations } from '@/data/integrations';
import * as Icons from 'lucide-react';

interface IntegrationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IntegrationDetailPage({ params }: IntegrationPageProps) {
  const resolvedParams = await params;
  const integration = integrations.find((i) => i.slug === resolvedParams.slug);

  if (!integration) {
    notFound();
  }

  // @ts-ignore
  const IconComponent = Icons[integration.iconName] || Icons.Box;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
            <IconComponent className={`w-8 h-8 ${integration.color}`} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-slate-900 tracking-tight leading-none mb-6">
            {integration.title}
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            {integration.description}
          </p>
        </div>

        {/* Content Section (Steps) */}
        <div 
          className="
            text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto
            [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6 
            [&>p]:mb-10
            [&>strong]:text-slate-900 [&>strong]:font-bold
          "
          dangerouslySetInnerHTML={{ __html: integration.content }}
        />
        
      </main>

      <Footer />
    </div>
  );
}
