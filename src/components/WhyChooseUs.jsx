import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Eye,
  HeartHandshake,
  Cpu,
  Target,
  Anchor,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

const ICON_MAP = {
  Layers,
  Eye,
  HeartHandshake,
  Cpu,
  Target,
  Anchor,
};

export default function WhyChooseUs({ onOpenConsultation }) {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c6a45c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Specified Exact Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#f8f7f3] border border-[#c6a45c]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              The Azam Wealth Difference
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Financial Solutions <span className="gold-gradient-text">Built Around You.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We combine high-touch private advisory principles with robust digital convenience to deliver a trustworthy, seamless financial experience for you and your business.
          </p>
        </div>

        {/* 6 Luxury Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Layers;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white border border-[#c6a45c]/25 hover:border-[#c6a45c] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[0_15px_30px_rgba(20,43,73,0.08)] hover:-translate-y-1"
              >
                {/* Numeric Index */}
                <span className="absolute top-6 right-6 font-serif text-3xl font-black text-slate-200 group-hover:text-[#c6a45c]/30 transition-colors pointer-events-none select-none">
                  0{index + 1}
                </span>

                {/* Icon in navy & gold frame */}
                <div className="w-14 h-14 rounded-xl bg-[#f8f7f3] border border-[#c6a45c]/40 flex items-center justify-center text-[#142b49] mb-6 group-hover:scale-110 group-hover:bg-[#142b49] group-hover:text-[#c6a45c] transition-all shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#c6a45c] transition-colors">
                  <span className="tracking-wider uppercase font-semibold text-[11px]">Azam Wealth Standard</span>
                  <span className="text-[#c6a45c] font-bold">&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#f8f7f3] border-2 border-[#c6a45c]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-[#c6a45c] font-bold">
              Our Core Commitment
            </p>
            <h4 className="text-xl sm:text-2xl font-serif font-black text-[#142b49]">
              Transparent, objective guidance without conflicts of interest.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              We operate with full disclosure of terms and regulatory frameworks. Your long-term financial security is our only benchmark.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#c6a45c] via-[#b8954b] to-[#9e7d36] hover:shadow-lg hover:shadow-[#c6a45c]/30 cursor-pointer transition-all"
          >
            Connect With An Advisor
          </button>
        </motion.div>

      </div>
    </section>
  );
}
