import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, HeartHandshake, Laptop, Award, ArrowRight, CheckCircle2, Eye, Compass, Quote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_INFO, ABOUT_CONTENT, FOUNDER_INFO } from '../data/content';
import FounderSection from '../components/FounderSection';
import ComplianceSection from '../components/ComplianceSection';
import PremiumCtaBanner from '../components/PremiumCtaBanner';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 1. Page Title Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c6a45c] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
                About AZAM WEALTH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Your Trusted <span className="text-3d-gold">Financial Partner.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
              {ABOUT_CONTENT.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive About Azam Wealth Content */}
      <section id="overview" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="card-3d p-4 rounded-3xl bg-white border-2 border-[#c6a45c]/40 shadow-2xl relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Azam Wealth Corporate Advisory"
                  className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-white border-2 border-[#c6a45c] shadow-2xl flex items-center space-x-3.5 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-[#f8f7f3] border border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c]">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#c6a45c] uppercase tracking-wider">Multi-Service Platform</p>
                  <p className="text-sm font-bold text-[#142b49]">Comprehensive Advisory</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#142b49] tracking-tight">
              Bringing Financial Solutions <span className="text-3d-gold">Under One Roof</span>
            </h2>

            <div className="p-6 rounded-2xl bg-white border-2 border-[#c6a45c]/30 shadow-md space-y-4">
              <p className="text-base sm:text-lg text-[#142b49] font-medium leading-relaxed italic border-l-4 border-[#c6a45c] pl-4">
                "{ABOUT_CONTENT.p1}"
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                "{ABOUT_CONTENT.p2}"
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                "{ABOUT_CONTENT.p3}"
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {ABOUT_CONTENT.p4}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {ABOUT_CONTENT.p5}
            </p>
          </div>

        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section id="vision-mission" className="py-20 bg-white border-y border-[#c6a45c]/20 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Vision */}
            <div className="card-3d p-8 sm:p-10 bg-[#fbfbf9] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#c6a45c] flex items-center justify-center text-[#c6a45c] shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium italic border-l-4 border-[#c6a45c] pl-4">
                  "{ABOUT_CONTENT.vision}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-[#c6a45c] uppercase tracking-wider">
                Azam Wealth Strategic Direction
              </div>
            </div>

            {/* Mission */}
            <div className="card-3d p-8 sm:p-10 bg-[#fbfbf9] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#c6a45c] flex items-center justify-center text-[#c6a45c] shadow-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
                  Our Mission
                </h3>
                <ul className="space-y-2.5">
                  {ABOUT_CONTENT.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c6a45c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-[#c6a45c] uppercase tracking-wider">
                Everyday Operational Commitment
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Grid (7 Values) */}
      <section id="core-values" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#c6a45c]">
            Foundational Tenets
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#142b49]">
            Our Core Values
          </h3>
          <p className="text-slate-600 text-sm">
            Seven guiding principles that govern every client interaction, service delivery, and business decision at Azam Wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ABOUT_CONTENT.coreValues.map((val, idx) => (
            <div key={idx} className="card-3d p-6 bg-white flex flex-col justify-between space-y-3">
              <span className="font-serif text-2xl font-black text-[#c6a45c]/50">0{idx + 1}</span>
              <div>
                <h4 className="text-base font-serif font-bold text-[#142b49] mb-1.5">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{val.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[10px] font-bold uppercase tracking-wider text-[#c6a45c]">
                Core Value
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Dedicated Founder Section (Farhan Azam + azam.jpeg) */}
      <div id="founder" className="scroll-mt-36">
        <FounderSection />
      </div>

      {/* 6. Government Registrations & Quality Management */}
      <div id="registrations" className="scroll-mt-36">
        <ComplianceSection />
      </div>

      {/* 7. Our Commitment Banner */}
      <section className="py-16 bg-[#f8f7f3] border-t border-[#c6a45c]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Quote className="w-10 h-10 text-[#c6a45c] mx-auto opacity-60" />
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
            Our Commitment to You
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium italic">
            "{ABOUT_CONTENT.commitment}"
          </p>
          <div className="pt-4">
            <Link to="/contact" className="btn-premium-gold px-8 py-3.5 text-xs inline-flex items-center space-x-2">
              <span>Start Your Financial Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <PremiumCtaBanner />

    </div>
  );
}
