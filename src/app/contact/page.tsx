"use client";

import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 overflow-x-clip text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-md">
              We&apos;d love to hear from you! Whether you have questions, need support
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mb-8">
              <a href="#" className="text-slate-900 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-slate-900 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-slate-900 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.393 0 0 5.392 0 12.03c0 2.115.551 4.184 1.597 5.998L.1 24l6.12-1.605A11.956 11.956 0 0 0 12.031 24c6.636 0 12.031-5.392 12.031-12.03C24.062 5.393 18.667 0 12.031 0zM17.5 16.712c-.22.617-1.282 1.15-1.761 1.222-.44.066-1.026.173-3.238-.744-2.71-1.124-4.453-3.879-4.588-4.06-.135-.181-1.096-1.461-1.096-2.784 0-1.323.687-1.979.932-2.247.244-.268.536-.335.711-.335.176 0 .351.002.505.009.16.008.375-.06.586.444.22.529.754 1.84.823 1.98.068.14.113.303.024.484-.09.18-.135.291-.269.447-.134.155-.285.342-.406.47-.132.14-.271.293-.117.558.155.265.688 1.135 1.472 1.83.896 1.76 1.42 2.025 1.558.265.138.419.117.575-.022.155-.138.67-.78.847-1.036.176-.255 1.122.531 1.316.626.193.096.321.144.368.224.047.08.047.466-.173 1.083z" /></svg>
              </a>
              <a href="#" className="text-slate-900 hover:text-[#0088cc] transition-colors" aria-label="Telegram">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>

            {/* Email Links */}
            <div className="flex flex-col gap-2 mb-16 mt-4">
              <a href="mailto:contact@closebot.io" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                contact@closebot.io
              </a>
              <a href="mailto:nikhil@closebot.io" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors">
                nikhil@closebot.io
              </a>
            </div>

            {/* Steps */}
            <div className="mt-auto space-y-8 relative">
              <div className="absolute top-4 bottom-4 left-4 w-px bg-slate-200 -z-10" />
              
              <div className="flex items-center gap-4 bg-white">
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-sm font-semibold text-slate-900 z-10">1</div>
                <p className="font-medium text-slate-900">Leave us your details</p>
              </div>
              <div className="flex items-center gap-4 bg-white">
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-sm font-semibold text-slate-900 z-10">2</div>
                <p className="font-medium text-slate-900">We will reach out within 24 hours</p>
              </div>
              <div className="flex items-center gap-4 bg-white">
                <div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-sm font-semibold text-slate-900 z-10">3</div>
                <p className="font-medium text-slate-900">Meet us at our office</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name</label>
                  <input type="text" id="firstName" placeholder="Robert" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name</label>
                  <input type="text" id="lastName" placeholder="Fox" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                <input type="email" id="email" placeholder="demo@mail.com" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                <input type="text" id="subject" placeholder="Sales" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                <textarea id="message" placeholder="Example Text" rows={5} className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400 resize-y" />
              </div>

              <Button type="submit" className="w-full h-14 mt-2 bg-[#121212] hover:bg-black text-white font-bold rounded-2xl shadow-md transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
