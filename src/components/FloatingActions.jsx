import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pointer-events-auto">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-11 h-11 rounded-full bg-white border-2 border-[#c6a45c]/50 text-[#142b49] hover:bg-[#f8f7f3] hover:text-[#c6a45c] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href={BRAND_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with AZAM WEALTH"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.6)] hover:scale-108 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3.5 py-1.5 rounded-lg bg-[#142b49] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp (+91 99734 86013)
        </span>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-25 animate-ping -z-10" />
      </a>
    </div>
  );
}
