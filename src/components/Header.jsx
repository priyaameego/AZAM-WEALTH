import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Investment Solutions', path: '/investment-solutions' },
    { name: 'Financial Education', path: '/financial-education' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. TOP ALERT BAR: Mobile Responsive me ONLY Mobile No. & Email ek line me cleanly dikhega */}
      <div className="bg-gradient-to-r from-[#142b49] via-[#0d1d33] to-[#142b49] text-white py-1.5 sm:py-2 px-3 sm:px-6 border-b border-[#c6a45c]/40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Mobile Friendly Email: Icon + Short Text on Mobile */}
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs font-semibold">
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-[#c6a45c] transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-[#c6a45c]/20 flex items-center justify-center text-[#c6a45c] shrink-0">
                <Mail className="w-3 h-3" />
              </div>
              <span className="hidden sm:inline font-mono">{BRAND_INFO.email}</span>
              <span className="sm:hidden font-mono text-[10px] tracking-tight">{BRAND_INFO.email}</span>
            </a>

            {/* Desktop Only Extra Info */}
            <span className="hidden md:flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#c6a45c]" />
              <span>Gopalganj, Bihar</span>
            </span>

            <span className="hidden lg:flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#c6a45c]" />
              <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
            </span>
          </div>

          {/* Right: Phone Number & Consultation CTA (Desktop CTA button, Mobile me Phone click-to-call) */}
          <div className="flex items-center space-x-2.5 sm:space-x-4 shrink-0">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 font-bold text-white hover:text-[#c6a45c] transition-colors"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#c6a45c]/25 border border-[#c6a45c] flex items-center justify-center text-[#c6a45c] shrink-0">
                <Phone className="w-3 h-3" />
              </div>
              <span className="font-mono text-[11px] sm:text-xs tracking-wider">{BRAND_INFO.phone}</span>
            </a>

            {/* Button only on larger screens to keep mobile alert bar clean and uncrowded */}
            <Link
              to="/contact"
              className="hidden sm:flex btn-premium-gold px-3.5 py-1 text-[11px] items-center space-x-1 shadow-sm"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR: Mobile First Responsive with Big Logo */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-[#c6a45c]/30 ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* BIGGER LOGO: Responsive height */}
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={BRAND_INFO.logoUrl}
                alt="AZAM WEALTH"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_6px_rgba(20,43,73,0.12)]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest font-extrabold transition-all relative py-1 duration-200 ${
                      isActive
                        ? 'text-[#c6a45c] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-gradient-to-r after:from-[#dfc17b] after:to-[#c6a45c] after:rounded-full drop-shadow-[0_1px_2px_rgba(198,164,92,0.3)]'
                        : 'text-[#142b49] hover:text-[#c6a45c] hover:-translate-y-0.5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Consultation Button (visible on md screens up) */}
            <div className="hidden md:flex lg:hidden items-center">
              <Link
                to="/contact"
                className="btn-premium-gold px-4 py-1.5 text-xs font-bold"
              >
                Get Consultation
              </Link>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#f8f7f3] text-[#142b49] hover:text-[#c6a45c] border-2 border-[#c6a45c]/40 shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#c6a45c]" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer (Smooth, high-end styling) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b-2 border-[#c6a45c] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all ${
                    isActive
                      ? 'bg-[#f8f7f3] text-[#c6a45c] border-l-4 border-[#c6a45c] shadow-sm'
                      : 'text-[#142b49] hover:bg-[#f8f7f3] hover:text-[#c6a45c]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#142b49] px-2">
              <span className="text-slate-500 font-normal">Direct Helpline:</span>
              <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-[#c6a45c] font-mono">
                {BRAND_INFO.phone}
              </a>
            </div>

            <Link
              to="/contact"
              className="btn-premium-gold w-full py-3 text-xs uppercase font-bold text-center flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
