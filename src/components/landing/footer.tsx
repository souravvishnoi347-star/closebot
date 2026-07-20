import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Global CTA Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 mb-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to scale your sales?</h3>
            <p className="text-slate-400 text-lg">Start your 3-day free trial today. Book a quick meeting with our team to get your account fully setup and onboarded.</p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto mt-4 md:mt-0">
             <a href="https://calendar.app.google/X2JCTCkPaVpKnGgeA" target="_blank" rel="noopener noreferrer" className="relative group block w-full md:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white group-hover:bg-blue-600 group-hover:text-white text-slate-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-center whitespace-nowrap">
                  Book a Meeting for 3-Day Trial
                </div>
              </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-slate-900 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              Voltchat AI
            </div>
            <a href="mailto:hello@Voltchat.io" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors block mb-6">
              hello@Voltchat.io
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-900 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-slate-900 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-slate-900 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.393 0 0 5.392 0 12.03c0 2.115.551 4.184 1.597 5.998L.1 24l6.12-1.605A11.956 11.956 0 0 0 12.031 24c6.636 0 12.031-5.392 12.031-12.03C24.062 5.393 18.667 0 12.031 0zM17.5 16.712c-.22.617-1.282 1.15-1.761 1.222-.44.066-1.026.173-3.238-.744-2.71-1.124-4.453-3.879-4.588-4.06-.135-.181-1.096-1.461-1.096-2.784 0-1.323.687-1.979.932-2.247.244-.268.536-.335.711-.335.176 0 .351.002.505.009.16.008.375-.06.586.444.22.529.754 1.84.823 1.98.068.14.113.303.024.484-.09.18-.135.291-.269.447-.134.155-.285.342-.406.47-.132.14-.271.293-.117.558.155.265.688 1.135 1.472 1.83.896 1.76 1.42 2.025 1.558.265.138.419.117.575-.022.155-.138.67-.78.847-1.036.176-.255 1.122.531 1.316.626.193.096.321.144.368.224.047.08.047.466-.173 1.083z" /></svg>
              </a>
              <a href="#" className="text-slate-900 hover:text-[#0088cc] transition-colors" aria-label="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Info</h4>
            <ul className="space-y-4">

              <li><Link href="/features" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Features</Link></li>
              <li><Link href="/blogs" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Blogs</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/case-studies" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Case Studies</Link></li>
              <li><Link href="/blogs" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Blogs</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Contact Us</Link></li>
              <li><Link href="/integrations" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-400 font-medium">
            © 2026 Rivonic Solutions. Voltchat AI is a product of Rivonic Solutions. All rights reserved.
          </div>
          <div className="flex gap-3">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border border-slate-200 px-3 py-1 rounded">DPIIT</span>
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border border-slate-200 px-3 py-1 rounded">MSME</span>
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border border-slate-200 px-3 py-1 rounded">GST</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
