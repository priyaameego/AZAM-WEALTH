import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Umbrella,
  LineChart,
  Smartphone,
  Banknote,
  FileSpreadsheet,
  Compass,
  Search,
  Cpu,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES } from '../data/content';

const ICON_MAP = {
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Umbrella,
  LineChart,
  Smartphone,
  Banknote,
  FileSpreadsheet,
  Compass,
  Search,
  Cpu,
  GraduationCap,
};

export default function ServicesSection({ onSelectServiceForConsultation }) {
  const [activeModal, setActiveModal] = useState(null);

  const openServiceDetails = (service) => {
    setActiveModal(service);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#f8f7f3] text-[#202733] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c6a45c]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#142b49]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#c6a45c]/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              Our Financial Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Comprehensive Solutions <span className="gold-gradient-text">Under One Roof</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From systematic wealth accumulation and bespoke portfolios to risk hedging, credit guidance, and taxation filings — our services are designed to protect, grow, and simplify your financial life.
          </p>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || TrendingUp;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative rounded-2xl bg-white border border-[#c6a45c]/25 hover:border-[#c6a45c] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(20,43,73,0.08)] hover:-translate-y-1.5"
              >
                {/* Image Header with Light Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-[0.98]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-[#142b49] border border-[#c6a45c]/40 backdrop-blur-md shadow-sm">
                    {service.category}
                  </span>

                  {/* Icon floating */}
                  <div className="absolute -bottom-4 right-6 w-12 h-12 rounded-xl bg-white border-2 border-[#c6a45c] shadow-md flex items-center justify-center text-[#142b49] group-hover:bg-[#142b49] group-hover:text-[#c6a45c] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.details.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c6a45c] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <button
                      onClick={() => openServiceDetails(service)}
                      className="text-xs uppercase tracking-wider font-bold text-[#142b49] hover:text-[#c6a45c] flex items-center space-x-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onSelectServiceForConsultation(service.title)}
                      className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg bg-[#f8f7f3] hover:bg-[#c6a45c] hover:text-white text-[#142b49] border border-[#c6a45c]/40 transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>

                {/* Bottom Gold Accent Bar */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border-2 border-[#c6a45c]/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f8f7f3] text-[#142b49] border border-[#c6a45c]/40">
                {activeModal.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">AZAM WEALTH Solution</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
              {activeModal.title}
            </h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              {activeModal.summary}
            </p>

            <div className="my-6 p-5 rounded-xl bg-[#f8f7f3] border border-slate-200">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#142b49] mb-3">
                Key Features & Capabilities:
              </h4>
              <ul className="space-y-2.5">
                {activeModal.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c6a45c] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 mb-6">
              * Note: All investment and financial products are subject to their respective risk profiles, statutory terms, and regulatory provisions. Azam Wealth facilitates advisory and execution support with complete transparency.
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = activeModal.title;
                  closeModal();
                  onSelectServiceForConsultation(s);
                }}
                className="px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] hover:shadow-lg hover:shadow-[#c6a45c]/30 cursor-pointer transition-all"
              >
                Schedule Consultation For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
