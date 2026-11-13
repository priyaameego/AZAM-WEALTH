import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  ChevronDown
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const dropdownTimerRef = useRef(null);
  const navContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  }, [location.pathname, location.hash]);

  // Click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (name) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileAccordion = (name) => {
    setMobileAccordion(prev => (prev === name ? null : name));
  };

  // Structured Dropdown Navigation Menus (Clean, Elegant, Without Icons as requested)
  const navStructure = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      name: 'About Us',
      path: '/about',
      hasDropdown: true,
      items: [
        { label: 'About Azam Wealth', path: '/about#overview' },
        { label: 'Founder – Farhan Azam', path: '/about#founder' },
        { label: 'Our Vision & Mission', path: '/about#vision-mission' },
        { label: 'Core Values', path: '/about#core-values' },
        { label: 'Government Registrations', path: '/about#registrations' },
        { label: 'Certifications & Achievements', path: '/about#registrations' }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      items: [
        { label: 'Investment & Wealth Solutions', path: '/services#investment-wealth' },
        { label: 'Financial Market Services', path: '/services#financial-market' },
        { label: 'Insurance & Financial Assistance', path: '/services#insurance-assistance' },
        { label: 'Taxation & Business Services', path: '/services#taxation-business' },
        { label: 'Financial Education', path: '/services#financial-education' }
      ]
    },
    {
      name: 'Investment Solutions',
      path: '/investment-solutions',
      hasDropdown: true,
      items: [
        { label: 'Mutual Funds', path: '/investment-solutions#mutual-funds' },
        { label: 'SIP / SWP / SIF', path: '/investment-solutions#sip-swp-sif' },
        { label: 'Portfolio Management Services (PMS)', path: '/investment-solutions#pms' },
        { label: 'Fixed Deposit Solutions', path: '/investment-solutions#fixed-deposits' },
        { label: 'Stock Market Investments', path: '/investment-solutions#stock-market' },
        { label: 'Demat & Trading Account Assistance', path: '/investment-solutions#demat-trading' },
        { label: 'AI & Algo Trading Solutions', path: '/investment-solutions#algo-trading' }
      ]
    },
    {
      name: 'Financial Education',
      path: '/financial-education',
      hasDropdown: true,
      items: [
        { label: 'Investment Basics', path: '/financial-education#investment-basics' },
        { label: 'Mutual Fund Education', path: '/financial-education#mutual-funds' },
        { label: 'Stock Market Learning', path: '/financial-education#stock-market' },
        { label: 'Investor Awareness', path: '/financial-education#investor-awareness' },
        { label: 'Financial Planning', path: '/financial-education#financial-planning' },
        { label: 'Risk Management', path: '/financial-education#risk-management' }
      ]
    },
    {
      name: 'Gallery',
      path: '/gallery',
      hasDropdown: false
    },
    {
      name: 'Social Media',
      path: '/social-media',
      hasDropdown: false
    },
    {
      name: 'Contact Us',
      path: '/contact',
      hasDropdown: false
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* 1. TOP ALERT BAR (Mobile Responsive: only Email & Phone on mobile) */}
      <div className="bg-gradient-to-r from-[#142b49] via-[#0d1d33] to-[#142b49] text-white py-1.5 sm:py-2 px-3 sm:px-6 border-b border-[#c6a45c]/40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs font-semibold">
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-[#c6a45c] transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-[#c6a45c]/20 flex items-center justify-center text-[#c6a45c] shrink-0">
                <Mail className="w-3 h-3" />
              </div>
              <span className="font-mono text-[10px] sm:text-xs">{BRAND_INFO.email}</span>
            </a>

            <span className="hidden md:flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#c6a45c]" />
              <span>Gopalganj, Bihar</span>
            </span>

            <span className="hidden lg:flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#c6a45c]" />
              <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
            </span>
          </div>

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

      {/* 2. MAIN NAVBAR with Original Premium Substantial Height */}
      <div
        ref={navContainerRef}
        className={`bg-white/98 backdrop-blur-md transition-all duration-300 border-b border-[#c6a45c]/30 ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO - Full prominent space without being cropped, perfectly proportioned */}
            <Link to="/" className="flex items-center shrink-0 group mr-4">
              <img
                src={BRAND_INFO.logoUrl}
                alt="AZAM WEALTH - Growing Wealth, Building Futures"
                className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-102"
              />
            </Link>

            {/* DESKTOP NAV WITH CLEAN PREMIUM DROPDOWNS */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navStructure.map((item) => (
                <div
                  key={item.name}
                  className="relative group py-2"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  {item.hasDropdown ? (
                    <div
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center space-x-1.5 cursor-pointer group/link py-1"
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `text-xs uppercase tracking-widest font-extrabold transition-all relative duration-200 whitespace-nowrap ${
                            isActive && location.pathname === item.path
                              ? 'text-[#c6a45c] after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-gradient-to-r after:from-[#dfc17b] after:to-[#c6a45c] after:rounded-full drop-shadow-[0_1px_2px_rgba(198,164,92,0.3)]'
                              : 'text-[#142b49] hover:text-[#c6a45c]'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#142b49] group-hover/link:text-[#c6a45c] transition-transform duration-200 shrink-0 ${
                          activeDropdown === item.name ? 'rotate-180 text-[#c6a45c]' : ''
                        }`}
                      />
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className={({ isActive }) =>
                        `text-xs uppercase tracking-widest font-extrabold transition-all relative py-1 duration-200 whitespace-nowrap block ${
                          isActive && location.pathname === item.path
                            ? 'text-[#c6a45c] after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2.5px] after:bg-gradient-to-r after:from-[#dfc17b] after:to-[#c6a45c] after:rounded-full drop-shadow-[0_1px_2px_rgba(198,164,92,0.3)]'
                            : 'text-[#142b49] hover:text-[#c6a45c]'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {/* DESKTOP DROPDOWN MENUS: Clean, simple, premium, without icons */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full -left-2 pt-2.5 z-50 min-w-[270px] max-w-[320px]"
                      >
                        <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(20,43,73,0.12)] border border-[#e5e1d8] py-2.5 px-1.5 divide-y divide-slate-100">
                          <div className="space-y-0.5">
                            {item.items.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-4 py-2.5 text-[13px] font-semibold text-[#1e3452] hover:text-[#c6a45c] hover:bg-[#faf9f5] rounded-lg transition-colors tracking-wide leading-snug"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

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

      {/* 3. MOBILE ACCORDION DRAWER NAVIGATION (Clean without icons) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b-2 border-[#c6a45c] px-4 pt-3 pb-7 shadow-2xl max-h-[80vh] overflow-y-auto animate-fadeIn">
          <div className="space-y-1">
            {navStructure.map((item) => (
              <div key={item.name} className="border-b border-slate-100 last:border-b-0 pb-1">
                {item.hasDropdown ? (
                  <div>
                    <div className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#f8f7f3]">
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs uppercase tracking-wider font-extrabold text-[#142b49] hover:text-[#c6a45c]"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => toggleMobileAccordion(item.name)}
                        className="p-1 rounded-md text-slate-500 hover:text-[#c6a45c] focus:outline-none"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === item.name ? 'rotate-180 text-[#c6a45c]' : ''}`} />
                      </button>
                    </div>

                    {/* Accordion Expandable Content (Clean without icons) */}
                    {mobileAccordion === item.name && (
                      <div className="pl-4 pr-2 py-1.5 space-y-0.5 bg-[#fbfbf9] rounded-xl my-1 border border-slate-100 animate-fadeIn">
                        {item.items.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 text-[12.5px] font-semibold text-[#1e3452] hover:text-[#c6a45c] hover:bg-white rounded-md transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all ${
                        isActive
                          ? 'bg-[#f8f7f3] text-[#c6a45c] border-l-4 border-[#c6a45c]'
                          : 'text-[#142b49] hover:bg-[#f8f7f3] hover:text-[#c6a45c]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#142b49] px-2">
              <span className="text-slate-500 font-normal">Direct Helpline:</span>
              <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-[#c6a45c] font-mono">
                {BRAND_INFO.phone}
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
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
