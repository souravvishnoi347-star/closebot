import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 mb-6">{blog.date}</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 tracking-tight leading-tight mb-10">
            {blog.title}
          </h1>
          
          <div className="w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden mb-16 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div 
          className="
            text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto
            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-6 
            [&>p]:mb-6
            [&>strong]:text-slate-900 [&>strong]:font-bold
            [&>img]:w-full [&>img]:h-auto [&>img]:rounded-2xl [&>img]:my-12 [&>img]:shadow-sm border-slate-100
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
      </main>

      <Footer />
    </div>
  );
}
