"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Don't show the widget on dashboard/app routes
  const isAppRoute = ['/dashboard', '/inbox', '/contacts', '/pipelines', '/broadcasts', '/automations', '/flows', '/settings'].some(p => pathname?.startsWith(p));
  if (isAppRoute) return null;

  const phoneNumber = "919876543210"; // TODO: Replace with actual WhatsApp Business number
  const defaultMessage = "Hi! I'm interested in Voltchat AI. Can you tell me more?";

  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

      {/* Chat Popup */}
      {isOpen && (
        <div className="w-[340px] bg-white rounded-3xl shadow-2xl shadow-slate-300/50 border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#075E54] px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.393 0 0 5.392 0 12.03c0 2.115.551 4.184 1.597 5.998L.1 24l6.12-1.605A11.956 11.956 0 0 0 12.031 24c6.636 0 12.031-5.392 12.031-12.03C24.062 5.393 18.667 0 12.031 0zM17.5 16.712c-.22.617-1.282 1.15-1.761 1.222-.44.066-1.026.173-3.238-.744-2.71-1.124-4.453-3.879-4.588-4.06-.135-.181-1.096-1.461-1.096-2.784 0-1.323.687-1.979.932-2.247.244-.268.536-.335.711-.335.176 0 .351.002.505.009.16.008.375-.06.586.444.22.529.754 1.84.823 1.98.068.14.113.303.024.484-.09.18-.135.291-.269.447-.134.155-.285.342-.406.47-.132.14-.271.293-.117.558.155.265.688 1.135 1.472 1.83.896 1.76 1.42 2.025 1.558.265.138.419.117.575-.022.155-.138.67-.78.847-1.036.176-.255 1.122.531 1.316.626.193.096.321.144.368.224.047.08.047.466-.173 1.083z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Voltchat AI</div>
                <div className="text-emerald-200 text-xs font-medium">Typically replies within minutes</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#ECE5DD] p-5">
            <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-slate-800 text-sm leading-relaxed">
                Hey there! 👋 Welcome to Voltchat AI. How can we help you today?
              </p>
              <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">just now</div>
            </div>
          </div>

          {/* Chat Action */}
          <div className="px-5 py-4 bg-white border-t border-slate-100">
            <button
              onClick={handleChat}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-emerald-200/50 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.393 0 0 5.392 0 12.03c0 2.115.551 4.184 1.597 5.998L.1 24l6.12-1.605A11.956 11.956 0 0 0 12.031 24c6.636 0 12.031-5.392 12.031-12.03C24.062 5.393 18.667 0 12.031 0zM17.5 16.712c-.22.617-1.282 1.15-1.761 1.222-.44.066-1.026.173-3.238-.744-2.71-1.124-4.453-3.879-4.588-4.06-.135-.181-1.096-1.461-1.096-2.784 0-1.323.687-1.979.932-2.247.244-.268.536-.335.711-.335.176 0 .351.002.505.009.16.008.375-.06.586.444.22.529.754 1.84.823 1.98.068.14.113.303.024.484-.09.18-.135.291-.269.447-.134.155-.285.342-.406.47-.132.14-.271.293-.117.558.155.265.688 1.135 1.472 1.83.896 1.76 1.42 2.025 1.558.265.138.419.117.575-.022.155-.138.67-.78.847-1.036.176-.255 1.122.531 1.316.626.193.096.321.144.368.224.047.08.047.466-.173 1.083z" />
              </svg>
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110"
      >
        {/* Ping animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>

        {isOpen ? (
          <X className="w-7 h-7 text-white relative z-10" />
        ) : (
          <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.393 0 0 5.392 0 12.03c0 2.115.551 4.184 1.597 5.998L.1 24l6.12-1.605A11.956 11.956 0 0 0 12.031 24c6.636 0 12.031-5.392 12.031-12.03C24.062 5.393 18.667 0 12.031 0zM17.5 16.712c-.22.617-1.282 1.15-1.761 1.222-.44.066-1.026.173-3.238-.744-2.71-1.124-4.453-3.879-4.588-4.06-.135-.181-1.096-1.461-1.096-2.784 0-1.323.687-1.979.932-2.247.244-.268.536-.335.711-.335.176 0 .351.002.505.009.16.008.375-.06.586.444.22.529.754 1.84.823 1.98.068.14.113.303.024.484-.09.18-.135.291-.269.447-.134.155-.285.342-.406.47-.132.14-.271.293-.117.558.155.265.688 1.135 1.472 1.83.896 1.76 1.42 2.025 1.558.265.138.419.117.575-.022.155-.138.67-.78.847-1.036.176-.255 1.122.531 1.316.626.193.096.321.144.368.224.047.08.047.466-.173 1.083z" />
          </svg>
        )}
      </button>
    </div>
  );
}
