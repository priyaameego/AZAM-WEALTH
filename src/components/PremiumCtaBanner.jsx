import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/content';

export default function PremiumCtaBanner() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-[#ffffff] via-[#f8f7f3] to-[#f5f3ec] border-y-2 border-[#c6a45c]/35 overflow-hidden">
      {/* Background Gold Ambient Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#c6a45c]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#142b49]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Accent Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-[#c6a45c]" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
            Start Your Financial Journey
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#142b49] tracking-tight leading-tight max-w-4xl mx-auto">
          Let's Build Your <span className="text-3d-gold">Financial Future Together.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
          Connect with Azam Wealth and explore financial solutions designed around your needs.
        </p>

        {/* Buttons: Get In Touch | WhatsApp Us with Ultra-Premium Gradients */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="btn-premium-gold px-9 py-4 text-xs sm:text-sm flex items-center space-x-2.5 cursor-pointer shadow-xl"
          >
            <Phone className="w-4 h-4" />
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={BRAND_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium-white px-9 py-4 text-xs sm:text-sm flex items-center space-x-2.5 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Location & Quick Contact Sub-bar */}
        <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span>Direct Helpline: <strong className="text-[#142b49] font-mono">{BRAND_INFO.phone}</strong></span>
          <span className="hidden sm:inline">•</span>
          <span>Email: <strong className="text-[#142b49]">{BRAND_INFO.email}</strong></span>
          <span className="hidden sm:inline">•</span>
          <span>Office: Gopalganj, Bihar – 841428</span>
        </div>

      </div>
    </section>
  );
}
