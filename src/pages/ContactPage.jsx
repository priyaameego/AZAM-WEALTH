import React from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function ContactPage({ prefilledService }) {
  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 3D Header Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <Building2 className="w-4 h-4 text-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
                Direct Advisory Desk
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Contact <span className="text-3d-gold">Azam Wealth</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Connect with our advisory desk in Gopalganj, Bihar or initiate a confidential discussion via phone, WhatsApp, or email.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section with validated form & map */}
      <ContactSection prefilledService={prefilledService} />

    </div>
  );
}

