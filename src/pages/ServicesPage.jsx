import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  LineChart,
  ShieldCheck,
  FileSpreadsheet,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  X,
  Search,
  Filter
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../data/content';
import PremiumCtaBanner from '../components/PremiumCtaBanner';

const CATEGORY_ICONS = {
  "Investment & Wealth Solutions": TrendingUp,
  "Financial Market Services": LineChart,
  "Insurance & Financial Assistance": ShieldCheck,
  "Taxation & Business Services": FileSpreadsheet,
  "Financial Education": GraduationCap
};

export default function ServicesPage({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const navigate = useNavigate();

  const handleEnquire = (title) => {
    if (onSelectService) onSelectService(title);
    navigate('/contact');
  };

  const displayedCategories = activeCategory === 'All'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(c => c.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 3D Header Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
                Multiple Financial Solutions Under One Roof
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Our Financial <span className="text-3d-gold">Services</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Azam Wealth brings multiple financial solutions, market services, and professional assistance together under one trusted roof.
            </p>

            {/* Category Filter Tabs */}
            <div className="pt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === 'All'
                    ? 'btn-premium-gold shadow-md'
                    : 'bg-white text-slate-600 hover:text-[#142b49] border border-slate-200'
                }`}
              >
                All 5 Sectors
              </button>

              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat.category
                      ? 'btn-premium-gold shadow-md'
                      : 'bg-white text-slate-600 hover:text-[#142b49] border border-slate-200'
                  }`}
                >
                  {cat.category.split(' ')[0]} {cat.category.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structured Service Sectors Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {displayedCategories.map((sect, sIdx) => {
          const Icon = CATEGORY_ICONS[sect.category] || TrendingUp;
          return (
            <div key={sIdx} className="space-y-8">
              
              {/* Sector Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-[#c6a45c]/30 gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#c6a45c] flex items-center justify-center text-[#c6a45c] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
                      {sect.category}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {sect.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleEnquire(sect.category)}
                  className="btn-premium-white px-5 py-2 text-xs self-start sm:self-auto cursor-pointer"
                >
                  Consult on this Sector
                </button>
              </div>

              {/* Services in this Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sect.services.map((srv, idx) => (
                  <div
                    key={idx}
                    className="card-3d p-6 bg-white flex flex-col justify-between space-y-4 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#c6a45c]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {sect.category.split(' ')[0]}
                        </span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors">
                        {srv.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedServiceModal({ ...srv, category: sect.category })}
                        className="text-xs font-bold text-[#142b49] hover:text-[#c6a45c] flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleEnquire(srv.name)}
                        className="btn-premium-gold px-3.5 py-1.5 text-[10px] cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </section>

      {/* Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border-2 border-[#c6a45c]/50 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f8f7f3] text-[#142b49] border border-[#c6a45c]/40">
              {selectedServiceModal.category}
            </span>

            <h3 className="text-2xl font-serif font-black text-[#142b49] mt-3">
              {selectedServiceModal.name}
            </h3>

            <p className="text-slate-700 mt-3 text-sm leading-relaxed">
              {selectedServiceModal.desc}
            </p>

            <div className="my-5 p-4 rounded-xl bg-[#f8f7f3] border border-slate-200 text-xs text-slate-600 space-y-2">
              <strong className="block text-[#142b49]">Azam Wealth Service Delivery:</strong>
              <p>• Client-aligned assistance with verified documentation and compliance support.</p>
              <p>• Digital onboarding, portfolio monitoring, and responsive customer guidance.</p>
            </div>

            <div className="flex justify-end space-x-3 pt-3 border-t border-slate-200">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-xs uppercase font-bold text-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedServiceModal.name;
                  setSelectedServiceModal(null);
                  handleEnquire(s);
                }}
                className="btn-premium-gold px-5 py-2 text-xs"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <PremiumCtaBanner />

    </div>
  );
}
