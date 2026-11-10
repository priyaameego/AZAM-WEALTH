import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { INVESTMENT_SOLUTIONS } from '../data/content';
import FinancialCalculators from '../components/FinancialCalculators';
import PremiumCtaBanner from '../components/PremiumCtaBanner';

export default function InvestmentSolutionsPage({ onSelectSolution }) {
  const navigate = useNavigate();

  const handleAction = (title) => {
    if (onSelectSolution) onSelectSolution(title);
    navigate('/contact');
  };

  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 3D Header Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <BarChart3 className="w-4 h-4 text-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
                Structured Wealth Architecture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Investment <span className="text-3d-gold">Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Curated investment portfolios spanning SIPs, mutual funds, SWP regular income, PMS, fixed deposits, direct equities, and algorithmic trading tools.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INVESTMENT_SOLUTIONS.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="card-3d bg-white overflow-hidden flex flex-col justify-between group"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#142b49] border border-[#c6a45c]/40 backdrop-blur-md shadow-sm">
                  {sol.tagline}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                <div className="space-y-2 py-3 border-t border-slate-100">
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c6a45c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleAction(sol.title)}
                  className="btn-3d-gold w-full py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{sol.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-[2.5px] w-0 group-hover:w-full bg-gradient-to-r from-[#dfc17b] via-[#c6a45c] to-[#9e7d36] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Regulatory Disclosure Card */}
        <div className="mt-16 p-7 rounded-3xl bg-white border-2 border-amber-200/80 text-center max-w-4xl mx-auto space-y-2 shadow-sm">
          <div className="flex items-center justify-center space-x-2 text-[#142b49] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#c6a45c]" />
            <span>Statutory Investment Risk Disclosure</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Investments in mutual funds, stocks, and market-linked instruments are subject to market risks. Please read all scheme-related and offer documents carefully before investing. Past performance is not indicative of future returns. Azam Wealth facilitates advisory and execution support and does not guarantee fixed returns or risk-free profits on any market instruments.
          </p>
        </div>
      </section>

      {/* Interactive Calculators Embedded */}
      <FinancialCalculators onOpenConsultation={handleAction} />

      {/* CTA */}
      <PremiumCtaBanner />

    </div>
  );
}

