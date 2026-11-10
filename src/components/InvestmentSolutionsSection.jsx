import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { INVESTMENT_SOLUTIONS } from '../data/content';

export default function InvestmentSolutionsSection({ onSelectSolution }) {
  return (
    <section
      id="investment-solutions"
      className="relative py-24 sm:py-32 bg-[#f8f7f3] overflow-hidden"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c6a45c]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#142b49]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#c6a45c]/30 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              Wealth Accumulation & Growth
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Comprehensive <span className="gold-gradient-text">Investment Solutions</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every investor moves on a distinct timeline. We curate balanced portfolios across equity, debt, and liquid avenues aligned with your risk tolerance and financial aspirations.
          </p>
        </div>

        {/* Investment Cards Grid (SIP & MF, SWP, SIF, PMS, FD, Stock Market, AI & Algo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INVESTMENT_SOLUTIONS.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[#c6a45c]/25 hover:border-[#c6a45c] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[0_15px_30px_rgba(20,43,73,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#142b49] border border-[#c6a45c]/40 backdrop-blur-md shadow-sm">
                  {sol.tagline}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 py-3 border-t border-slate-100">
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c6a45c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectSolution(sol.title)}
                  className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold text-[#142b49] bg-[#f8f7f3] hover:bg-[#142b49] hover:text-white border border-[#c6a45c]/40 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                >
                  <span>{sol.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Regulatory & Market Risk Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-white border-2 border-amber-200 text-center max-w-4xl mx-auto space-y-2 shadow-sm">
          <div className="flex items-center justify-center space-x-2 text-[#142b49] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#c6a45c]" />
            <span>Statutory Investment Risk Disclosure</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Investments in mutual funds, stocks, and market-linked instruments are subject to market risks. Please read all scheme-related and offer documents carefully before investing. Past performance is not indicative of future returns. Azam Wealth facilitates advisory and execution support and does not guarantee fixed returns or risk-free profits on any market instruments.
          </p>
        </div>

      </div>
    </section>
  );
}
