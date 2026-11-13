import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Users,
  Briefcase,
  Eye,
  Sparkles,
  MapPin,
  CheckCircle2,
  X,
  Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/content';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: "Corporate Office Front View",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
      location: "Near Indian Oil Petrol Pump, Miralipur, Barharia Road, Gopalganj, Bihar",
      desc: "Prime corporate location designed for seamless accessibility and client walk-in consultations.",
      icon: Building2
    },
    {
      id: 2,
      title: "Advisory & Private Consultation Lounge",
      category: "Advisory Desks",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
      location: "Corporate Office Floor 1",
      desc: "Confidential and secure space for family portfolio reviews and private wealth planning.",
      icon: Eye
    },
    {
      id: 3,
      title: "Business & Financial Consulting Team",
      category: "Team & Advisory",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=85",
      location: "Gopalganj Headquarters",
      desc: "Professional consultants dedicated to investor education, compliance, and multi-service facilitation.",
      icon: Users
    },
    {
      id: 4,
      title: "Financial Markets & Research Terminal",
      category: "Market Infrastructure",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
      location: "Trading & Analysis Desk",
      desc: "Advanced real-time market tracking, Demat assistance, and algorithmic execution workstations.",
      icon: Briefcase
    },
    {
      id: 5,
      title: "Executive Conference & Boardroom",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1400&q=85",
      location: "Corporate Boardroom",
      desc: "Equipped for institutional partner briefings, investor seminars, and regulatory review panels.",
      icon: Building2
    },
    {
      id: 6,
      title: "Client Relationship Management Desk",
      category: "Advisory Desks",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
      location: "Customer Success Hub",
      desc: "Dedicated desks ensuring rapid response times, paperless KYC, and active investor support.",
      icon: Users
    },
    {
      id: 7,
      title: "Investor Literacy & Learning Suite",
      category: "Market Infrastructure",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
      location: "Knowledge & Education Center",
      desc: "Hosting investor awareness workshops, financial literacy camps, and market orientation sessions.",
      icon: Sparkles
    },
    {
      id: 8,
      title: "Statutory Documentation & Compliance Archive",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1400&q=85",
      location: "Audit & Compliance Wing",
      desc: "Secured maintenance of customer verification documentation, GST records, and tax filings.",
      icon: Briefcase
    }
  ];

  const categories = ['All', 'Infrastructure', 'Advisory Desks', 'Team & Advisory', 'Market Infrastructure'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
                Official Gallery & Infrastructure
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Our Workspaces & <span className="text-3d-gold">Facility Gallery</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
              Explore Azam Wealth's corporate headquarters, consultation lounges, financial market terminals, and advisory infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#dfc17b] via-[#c6a45c] to-[#9e7d36] text-[#142b49] shadow-md border-2 border-[#c6a45c]'
                  : 'bg-white text-slate-700 hover:text-[#c6a45c] hover:bg-[#faf8f4] border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Image Grid with 3D Hover & Shimmer (Mawai/ZisanTech style) */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                onClick={() => setSelectedImage(item)}
                className="group card-3d bg-white overflow-hidden flex flex-col justify-between cursor-pointer shimmer-card border border-[#c6a45c]/35 hover:border-[#c6a45c]"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-64 overflow-hidden zisan-image-wrapper bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.98]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142b49]/70 via-black/10 to-transparent transition-opacity group-hover:opacity-90" />

                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#142b49] border border-[#c6a45c]/40 backdrop-blur-md shadow-sm">
                    {item.category}
                  </span>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Icon */}
                  <div className="absolute bottom-3.5 left-3.5 flex items-center space-x-2 text-white">
                    <div className="w-8 h-8 rounded-lg bg-[#c6a45c] flex items-center justify-center text-[#142b49] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-100 line-clamp-1">{item.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#c6a45c]">
                    <span>View Image &rarr;</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Azam Wealth</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-[#c6a45c]"
            >
              <div className="relative flex-1 bg-slate-900 min-h-[300px] sm:min-h-[460px] overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-white space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#c6a45c]">
                  <span>{selectedImage.category}</span>
                  <span>•</span>
                  <span>{selectedImage.location}</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-[#142b49]">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-[#c6a45c]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
            Visit Our Office In <span className="text-3d-gold">Gopalganj, Bihar</span>
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            {BRAND_INFO.address}
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-premium-gold px-8 py-3.5 text-xs inline-flex items-center space-x-2 shadow-lg">
              <span>Schedule Office Appointment</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

