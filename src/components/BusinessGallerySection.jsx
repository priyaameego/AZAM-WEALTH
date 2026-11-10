import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function BusinessGallerySection() {
  const images = [
    {
      title: "Corporate Office Front",
      category: "Office Front View",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      desc: "Near Indian Oil Petrol Pump, Miralipur, Barharia Road, Gopalganj, Bihar",
      icon: Building2
    },
    {
      title: "Advisory & Client Meeting Room",
      category: "Office Interior",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      desc: "Designed for confidential financial planning discussions and reviews",
      icon: Eye
    },
    {
      title: "Business & Financial Consulting Team",
      category: "Business / Team",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85",
      desc: "Dedicated support team assisting clients across Bihar and Pan-India",
      icon: Users
    },
    {
      title: "Services & Financial Markets Desk",
      category: "Services Promotional",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      desc: "Research, mutual funds, Demat, and tech-driven market solutions",
      icon: Briefcase
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fbfbf9] border-t border-[#c6a45c]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/35 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
              Azam Wealth Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Corporate <span className="text-3d-gold">Business Profile</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Institutional office space, modern advisory infrastructure, and customer-first support environment.
          </p>
        </div>

        {/* 4 Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-3d bg-white overflow-hidden flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.98]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#142b49] border border-[#c6a45c]/40 backdrop-blur-md shadow-sm">
                    {item.category}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 border border-[#c6a45c] flex items-center justify-center text-[#c6a45c] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#c6a45c]">
                    <span>AZAM WEALTH</span>
                    <span>Verified Infrastructure &rarr;</span>
                  </div>
                </div>

                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#dfc17b] via-[#c6a45c] to-[#9e7d36] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
