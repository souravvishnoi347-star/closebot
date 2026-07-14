"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import Link from 'next/link';
import { blogs } from '@/data/blogs';

export default function BlogsPage() {
  // Use the first blog as the featured one
  const featuredBlog = blogs[0];
  // The rest as recent blogs
  const recentBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-40 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ─── FEATURED BLOG ─── */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-slate-900 tracking-tight mb-12">
            Latest articles & insights
          </h1>

          <Link href={`/blogs/${featuredBlog.slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center bg-slate-50/50 rounded-[2.5rem] p-4 lg:p-6 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors">
              
              <div className="relative w-full h-[300px] lg:h-[450px] rounded-[2rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="py-6 lg:py-12 lg:pr-12">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                  {featuredBlog.category}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-base text-slate-500 font-medium mb-12 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-slate-900">{featuredBlog.author}</span>
                  <span className="text-slate-400">,</span>
                  <span className="text-slate-500 font-medium">{featuredBlog.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ─── RECENT NEWS ─── */}
        <section>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-12">
            Recent News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {recentBlogs.map((blog, idx) => (
              <Link href={`/blogs/${blog.slug}`} key={idx} className="group flex flex-col">
                <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {blog.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
