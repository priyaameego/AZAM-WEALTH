import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data/content';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [isPaused, current]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AZAM WEALTH Hero Banner"
    >
      {/* FULL WIDTH IMAGE SLIDES WITH LUXURY KEN BURNS EFFECT */}
      <AnimatePresence mode="sync">
        {HERO_SLIDES.map((s, index) => {
          if (index !== current) return null;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-0 overflow-hidden"
            >
              {/* Ken Burns Animated Image */}
              <motion.div
                initial={{ scale: 1.05, x: 0 }}
                animate={{ 
                  scale: 1.18, 
                  x: index % 2 === 0 ? -25 : 25,
                  y: index % 2 === 0 ? -15 : 15 
                }}
                transition={{ 
                  duration: 8, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />

              {/* Multi-layered luxury white-ivory gradient overlay for readable dark navy typography */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#c6a45c]/5 to-transparent" />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#c6a45c]/10 blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#142b49]/5 blur-[120px] pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16 sm:py-20 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl space-y-6 text-left"
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#c6a45c]/50 shadow-md">
              <Sparkles className="w-4 h-4 text-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
                {slide.tag} • {slide.badge}
              </span>
            </div>

            {/* Main Heading with 3D Effect & Gold Highlights */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#142b49] tracking-tight leading-[1.12]">
              {slide.heading.includes(slide.highlightWord) ? (
                <>
                  {slide.heading.replace(slide.highlightWord, '')}
                  <span className="text-3d-gold block sm:inline">
                    {slide.highlightWord}
                  </span>
                </>
              ) : (
                slide.heading
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-normal max-w-2xl bg-white/60 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-lg">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to={slide.ctaLink && slide.ctaLink.startsWith('#') ? (slide.ctaLink === '#investment-solutions' ? '/investment-solutions' : (slide.ctaLink === '#contact' ? '/contact' : '/services')) : '/services'}
                className="btn-premium-gold px-9 py-4 text-xs sm:text-sm flex items-center space-x-2.5 cursor-pointer shadow-xl"
              >
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="btn-premium-white px-9 py-4 text-xs sm:text-sm flex items-center space-x-2 cursor-pointer shadow-md bg-white/95"
              >
                <span>{slide.ctaSecondary}</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-t border-slate-300/60">
              <div className="flex items-center space-x-2 font-semibold text-[#142b49]">
                <ShieldCheck className="w-4 h-4 text-[#c6a45c]" />
                <span>Comprehensive Financial Solutions Under One Roof</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-medium text-slate-700">Transparency & Trust</span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Controls: Arrows & Slide Indicators */}
        <div className="mt-14 flex items-center justify-between border-t border-slate-300/60 pt-6">
          
          {/* Indicators */}
          <div className="flex items-center space-x-3">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="py-2 cursor-pointer focus:outline-none"
              >
                <div
                  className={`h-2 transition-all duration-500 rounded-full ${
                    idx === current
                      ? 'w-12 bg-gradient-to-r from-[#dfc17b] via-[#c6a45c] to-[#9e7d36] shadow-sm'
                      : 'w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Previous / Next Arrows */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full bg-white/90 hover:bg-white border-2 border-[#c6a45c]/50 text-[#142b49] hover:text-[#c6a45c] flex items-center justify-center transition-all shadow-md cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full bg-white/90 hover:bg-white border-2 border-[#c6a45c]/50 text-[#142b49] hover:text-[#c6a45c] flex items-center justify-center transition-all shadow-md cursor-pointer backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
