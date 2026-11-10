import React from 'react';
import { Home, Phone, ArrowLeft, ShieldAlert } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function NotFoundPage({ onGoHome }) {
  return (
    <div className="min-h-screen bg-white text-[#202733] flex flex-col justify-between selection:bg-[#c6a45c]/25 selection:text-[#142b49]">
      {/* Header Bar */}
      <header className="py-6 px-4 sm:px-8 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#c6a45c]/40 p-0.5 bg-white">
            <img
              src={BRAND_INFO.logoUrl}
              alt="AZAM WEALTH Logo"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <span className="text-xl font-serif font-black tracking-wider text-[#142b49]">
              AZAM <span className="gold-gradient-text">WEALTH</span>
            </span>
          </div>
        </div>

        <a
          href={`tel:${BRAND_INFO.phoneRaw}`}
          className="text-xs font-bold text-[#142b49] hover:text-[#c6a45c] flex items-center space-x-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#c6a45c]" />
          <span>{BRAND_INFO.phone}</span>
        </a>
      </header>

      {/* Main 404 Visual Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f7f3] border border-[#c6a45c]/30 text-xs font-bold uppercase tracking-widest text-[#c6a45c]">
            <span>Error 404 • Page Not Found</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-serif font-black text-[#142b49] tracking-tight">
            4<span className="gold-gradient-text">0</span>4
          </h1>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142b49]">
            The requested page is unavailable.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            The link you followed may be outdated or mistyped. Our client advisory portal and financial solutions remain fully accessible on our homepage.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onGoHome}
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#c6a45c] via-[#b8954b] to-[#9e7d36] hover:shadow-lg hover:shadow-[#c6a45c]/30 transition-all cursor-pointer flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>

            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#142b49] bg-[#f8f7f3] border border-slate-300 hover:border-[#c6a45c] transition-all flex items-center space-x-2"
            >
              <span>Contact Support</span>
            </a>
          </div>

        </div>
      </main>

      {/* Mini Footer */}
      <footer className="py-6 px-4 border-t border-slate-100 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} AZAM WEALTH. Your Trusted Financial Partner.
      </footer>
    </div>
  );
}

