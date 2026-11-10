import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, HeartHandshake, Laptop, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, ABOUT_CONTENT } from '../data/content';

export default function AboutSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      desc: "Open disclosures and ethical standards across all client relationships."
    },
    {
      icon: HeartHandshake,
      title: "Customer Support",
      desc: "Dedicated guidance tailored to individual and business aspirations through every market cycle."
    },
    {
      icon: Laptop,
      title: "Technology-Driven Solutions",
      desc: "Paperless onboarding, rapid digital execution, and periodic portfolio updates."
    },
    {
      icon: Target,
      title: "Under-One-Roof Solutions",
      desc: "From Demat & mutual funds to taxation, insurance, and loan advisory in one place."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c6a45c]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Split: Premium Office / Founder Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#c6a45c]/30 via-transparent to-[#142b49]/10 blur-sm" />
              
              <div className="card-3d relative rounded-3xl overflow-hidden border-2 border-[#c6a45c]/50 shadow-2xl bg-white p-2">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                    alt="Azam Wealth Corporate Office Space"
                    className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay Badge */}
                <div className="p-4 bg-gradient-to-t from-white via-white/95 to-transparent flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#c6a45c] p-0.5 bg-white shadow-md shrink-0">
                    <img
                      src={BRAND_INFO.logoUrl}
                      alt="AZAM WEALTH Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[#142b49] font-serif font-black text-lg leading-tight">
                      AZAM WEALTH
                    </p>
                    <p className="text-xs text-[#c6a45c] tracking-wider uppercase font-extrabold">
                      Founder: {BRAND_INFO.founder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Value Card */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white border-2 border-[#c6a45c] rounded-2xl p-4 sm:p-5 shadow-xl hidden sm:block">
                <p className="text-[10px] tracking-widest uppercase font-extrabold text-[#c6a45c]">
                  Our Commitment
                </p>
                <p className="text-sm font-bold text-[#142b49] mt-0.5">
                  100% Client-Aligned Advisory
                </p>
                <div className="flex items-center space-x-1.5 mt-1.5 text-emerald-600 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Trust, Transparency & Technology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Split: Editorial Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#f8f7f3] border-2 border-[#c6a45c]/35 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
                About Azam Wealth
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#142b49] tracking-tight leading-tight">
              Your Trusted <span className="text-3d-gold">Financial Partner.</span>
            </h2>

            {/* Official Description */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p className="p-4 rounded-2xl bg-[#f8f7f3] border-l-4 border-[#c6a45c] text-[#142b49] font-medium italic">
                "{ABOUT_CONTENT.p1}"
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                "{ABOUT_CONTENT.p2}"
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                "{ABOUT_CONTENT.p3}"
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="card-3d p-4 bg-white border border-[#c6a45c]/30 hover:border-[#c6a45c] transition-all"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2.5 rounded-xl bg-[#f8f7f3] border border-[#c6a45c]/40 text-[#c6a45c] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[#142b49] font-serif font-bold text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/about"
                className="btn-premium-gold px-8 py-3.5 text-xs flex items-center space-x-2 shadow-lg"
              >
                <span>Read Full Story & Credentials</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="text-xs uppercase tracking-wider font-extrabold text-[#142b49] hover:text-[#c6a45c] transition-colors py-3 px-2"
              >
                Explore All 5 Sectors &rarr;
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
