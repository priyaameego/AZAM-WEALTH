import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { EDUCATION_ARTICLES } from '../data/content';

export default function FinancialEducationSection({ onOpenConsultation }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="education" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#c6a45c]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#f8f7f3] border border-[#c6a45c]/30 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              Investor Empowerment
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Financial <span className="gold-gradient-text">Education & Insights</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Informed investors make the most resilient financial decisions. Explore our foundational guides on asset allocation, mutual funds, direct equities, emergency liquidity, and tax optimization.
          </p>
        </div>

        {/* 6 Editorial Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDUCATION_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[#c6a45c]/25 hover:border-[#c6a45c] p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[0_15px_30px_rgba(20,43,73,0.08)] hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#f8f7f3] text-[#142b49] font-bold tracking-wider uppercase border border-[#c6a45c]/30 text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {article.summary}
                </p>

                {/* Key takeaway pill */}
                <div className="p-3.5 rounded-xl bg-[#f8f7f3] border border-slate-200 text-xs text-slate-700">
                  <span className="text-[#c6a45c] font-bold block mb-0.5">Key Insight:</span>
                  {article.keyTakeaway}
                </div>
              </div>

              {/* Read More button */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{article.date}</span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-bold text-[#142b49] hover:text-[#c6a45c] transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Education Disclaimers */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-400 italic">
            * All educational materials are provided for investor awareness and literacy purposes only and do not constitute formal investment advice or a solicitation to buy or sell securities.
          </p>
        </div>

      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border-2 border-[#c6a45c]/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f8f7f3] text-[#142b49] border border-[#c6a45c]/40">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-slate-500 flex items-center space-x-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedArticle.readTime}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49] mb-4">
              {selectedArticle.title}
            </h3>

            <div className="p-4 rounded-xl bg-[#f8f7f3] border-2 border-[#c6a45c]/30 mb-6 text-sm text-[#142b49] flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-[#c6a45c] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#142b49] font-bold">Core Investor Takeaway:</strong>
                {selectedArticle.keyTakeaway}
              </div>
            </div>

            <div className="text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed font-normal">
              <p>{selectedArticle.content}</p>
              <p>
                At Azam Wealth, our primary responsibility is ensuring clients clearly understand the characteristics of every asset class before allocating capital. Sustainable wealth is built not through speculative impulses, but through structured diversification, disciplined accumulation, and patience across economic market cycles.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Back to Articles
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c6a45c] to-[#9e7d36] hover:shadow-lg hover:shadow-[#c6a45c]/30 cursor-pointer transition-all"
              >
                Discuss This With Our Advisor
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
