import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FOUNDER_INFO, BRAND_INFO } from '../data/content';

export default function FounderSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#f8f7f3] to-white border-y border-[#c6a45c]/25 overflow-hidden">
      
      {/* Background Gold Ambient */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#c6a45c]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#142b49]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
              Leadership & Vision
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Meet Our <span className="text-3d-gold">Founder & Proprietor</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Driving the mission to simplify financial services through accessibility, transparency, and education.
          </p>
        </div>

        {/* 2-Column Luxury Split: Founder Image & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Founder Portrait (azam.jpeg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer 3D Gold Accent Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#c6a45c]/40 via-transparent to-[#142b49]/15 blur-sm" />
              
              <div className="card-3d relative rounded-3xl overflow-hidden border-2 border-[#c6a45c]/60 shadow-2xl bg-white p-2">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                  <img
                    src={FOUNDER_INFO.image}
                    alt={`${FOUNDER_INFO.name} - Founder & Proprietor of Azam Wealth`}
                    className="w-full h-full object-cover object-top hover:scale-104 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="p-4 bg-gradient-to-t from-white via-white/95 to-transparent flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-black text-[#142b49]">
                      {FOUNDER_INFO.name}
                    </h3>
                    <p className="text-xs font-bold text-[#c6a45c] uppercase tracking-wider">
                      {FOUNDER_INFO.role}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#f8f7f3] text-[#142b49] border border-[#c6a45c]/40">
                    AZAM WEALTH
                  </span>
                </div>
              </div>

              {/* Conclave Recognition Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border-2 border-[#c6a45c] rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xs hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f8f7f3] border border-[#c6a45c] flex items-center justify-center text-[#c6a45c] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-[#c6a45c]">
                      Global Business Conclave 2026
                    </p>
                    <p className="text-xs font-bold text-[#142b49]">
                      The LaLiT, Mumbai
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      8 October 2026 • Certificate of Participation
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Founder Vision & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#c6a45c]">
                The Vision Behind Azam Wealth
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#142b49] leading-tight">
                "Building Meaningful Financial Partnerships on the Foundations of Trust."
              </h3>
            </div>

            {/* Exact Founder Description */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#c6a45c]/35 shadow-md space-y-4 text-slate-700 leading-relaxed font-normal">
              <p className="text-base sm:text-lg text-[#142b49] font-medium italic border-l-4 border-[#c6a45c] pl-4">
                "{FOUNDER_INFO.bio}"
              </p>
              <p className="text-sm text-slate-600">
                Under Farhan Azam's stewardship, Azam Wealth bridges financial market services, wealth solutions, insurance, taxation, and structured investor education into one trusted destination.
              </p>
            </div>

            {/* Key Directives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#c6a45c]/30 shadow-sm flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#c6a45c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#142b49]">Accessible Platform</h4>
                  <p className="text-xs text-slate-500 mt-1">Connecting clients to multiple financial avenues under one roof.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#c6a45c]/30 shadow-sm flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#c6a45c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#142b49]">Continuous Education</h4>
                  <p className="text-xs text-slate-500 mt-1">Empowering families to make confident, informed decisions.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-premium-gold px-8 py-3.5 text-xs flex items-center space-x-2 shadow-lg"
              >
                <span>Connect With Farhan Azam</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="btn-premium-white px-7 py-3.5 text-xs flex items-center space-x-2"
              >
                <span>Call Directly: {BRAND_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

