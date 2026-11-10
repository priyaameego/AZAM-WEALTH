import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { EDUCATION_ARTICLES } from '../data/content';
import PremiumCtaBanner from '../components/PremiumCtaBanner';

const ARTICLE_MAP = {
  "investment-basics": "edu-1",
  "mutual-funds": "edu-2",
  "stock-market": "edu-3",
  "investor-awareness": "edu-4",
  "risk-management": "edu-5",
  "financial-planning": "edu-6"
};

export default function FinancialEducationPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      const targetId = ARTICLE_MAP[hash] || hash;
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 3D Header Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <BookOpen className="w-4 h-4 text-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
                Investor Literacy & Knowledge
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Financial <span className="text-3d-gold">Education</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Empowering individuals and business owners with factual, transparent insights into asset allocation, risk mitigation, and compounding mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDUCATION_ARTICLES.map((article, index) => (
            <motion.article
              id={article.id}
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="card-3d bg-white p-7 flex flex-col justify-between group scroll-mt-36"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#f8f7f3] text-[#142b49] font-bold tracking-wider uppercase border border-[#c6a45c]/40 text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {article.summary}
                </p>

                <div className="p-4 rounded-2xl bg-[#f8f7f3] border border-slate-200 text-xs text-slate-700">
                  <span className="text-[#c6a45c] font-bold block mb-1">Key Insight:</span>
                  {article.keyTakeaway}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{article.date}</span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="btn-premium-white px-4 py-2 text-xs uppercase tracking-wider font-bold flex items-center space-x-1.5 cursor-pointer shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
            * All educational materials are provided solely for investor awareness and literacy. They do not constitute personalized investment advice or an endorsement to buy or sell securities.
          </p>
        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border-2 border-[#c6a45c]/50 rounded-3xl shadow-2xl p-6 sm:p-9 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f8f7f3] text-[#142b49] border border-[#c6a45c]/40">
              {selectedArticle.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49] mt-3 mb-4">
              {selectedArticle.title}
            </h3>

            <div className="p-4 rounded-2xl bg-[#f8f7f3] border-2 border-[#c6a45c]/30 mb-6 text-sm text-[#142b49] flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-[#c6a45c] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#142b49] font-bold">Core Investor Takeaway:</strong>
                {selectedArticle.keyTakeaway}
              </div>
            </div>

            <div className="text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed font-normal">
              <p>{selectedArticle.content}</p>
              <p>
                At Azam Wealth, our primary responsibility is ensuring clients clearly understand the characteristics of every asset class before allocating capital. Sustainable wealth is built through structured diversification, disciplined accumulation, and patience across economic market cycles.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Back to Articles
              </button>
              <Link
                to="/contact"
                className="btn-premium-gold px-6 py-2.5 text-xs uppercase tracking-wider font-bold cursor-pointer"
              >
                Discuss This With Our Advisor
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <PremiumCtaBanner />

    </div>
  );
}
