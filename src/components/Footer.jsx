import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  FileText,
  Lock,
  AlertTriangle,
  X,
  Globe,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, SERVICES } from '../data/content';

export default function Footer({ onSelectService }) {
  const [activePolicyModal, setActivePolicyModal] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Investment Solutions', path: '/investment-solutions' },
    { name: 'Financial Education', path: '/financial-education' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#f8f7f3] text-slate-700 border-t-2 border-[#c6a45c]/30 overflow-hidden">
      
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center space-x-3.5 group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#c6a45c]/70 p-1 bg-white shadow-md shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="AZAM WEALTH Official Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="text-2xl font-serif font-black tracking-wider text-[#142b49]">
                  AZAM <span className="text-3d-gold">WEALTH</span>
                </span>
                <p className="text-[10px] tracking-widest text-[#8e6820] font-bold uppercase">
                  {BRAND_INFO.tagline}
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                  Founder & Proprietor: {BRAND_INFO.founder}
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Azam Wealth is a financial services brand established with the vision of bringing multiple financial solutions under one roof. Helping individuals, families, and businesses build and preserve wealth through disciplined, transparent advisory.
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-[#c6a45c]/30 text-xs text-[#142b49] font-medium flex items-center space-x-2 shadow-sm">
              <ShieldAlert className="w-4 h-4 text-[#c6a45c] shrink-0" />
              <span>Dedicated to investor transparency and compliance.</span>
            </div>

            {/* Social Media Presence Section */}
            <div className="pt-2 space-y-2">
              <p className="text-xs uppercase tracking-widest font-extrabold text-[#142b49] flex items-center space-x-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#c6a45c]" />
                <span>Digital & Social Media Presence:</span>
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-white border border-[#c6a45c]/40 font-bold text-[#142b49]">
                  Official Website: Active
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/70 border border-slate-200 text-slate-400">
                  Instagram: To be added
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/70 border border-slate-200 text-slate-400">
                  LinkedIn: To be added
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/70 border border-slate-200 text-slate-400">
                  YouTube: To be added
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-[#c6a45c] font-medium transition-colors flex items-center space-x-1.5"
                  >
                    <span>&rsaquo;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All Financial Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              All Services
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(srv.title);
                    }}
                    className="text-slate-600 hover:text-[#c6a45c] transition-colors text-left flex items-center space-x-1.5 cursor-pointer font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c6a45c]" />
                    <span className="line-clamp-1">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#142b49]">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c6a45c] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-normal">{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c6a45c] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="hover:text-[#c6a45c] text-[#142b49] font-bold transition-colors font-mono"
                >
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c6a45c] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-[#c6a45c] text-[#142b49] font-bold transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Operating Hours: Mon – Sat (09:30 AM – 06:30 PM IST)
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Risk Disclaimer Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 space-y-3 text-[11px] text-slate-600 leading-relaxed font-normal">
          <div className="flex items-center space-x-2 text-[#142b49] font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-[#c6a45c]" />
            <span className="uppercase tracking-wider">Investment Risk Disclaimer:</span>
          </div>
          <p>
            Mutual fund investments and securities are subject to market risks, including the potential loss of principal. Please read all scheme information and offer documents carefully before investing. Historical performance does not guarantee future results. Azam Wealth operates as an independent financial solutions facilitator and does not guarantee fixed capital returns or risk-free profits on any market-linked instrument.
          </p>
          <p>
            Algorithmic and rule-based software tools assist in execution discipline and do not eliminate market volatility or guarantee profitability.
          </p>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-[#142b49]">AZAM WEALTH</strong>. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-[11px] font-semibold">
            <button
              onClick={() => setActivePolicyModal('privacy')}
              className="hover:text-[#c6a45c] transition-colors cursor-pointer text-[#142b49]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicyModal('terms')}
              className="hover:text-[#c6a45c] transition-colors cursor-pointer text-[#142b49]"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActivePolicyModal('disclaimer')}
              className="hover:text-[#c6a45c] transition-colors cursor-pointer text-[#142b49]"
            >
              Investment Risk Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modals */}
      {activePolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border-2 border-[#c6a45c]/40 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activePolicyModal === 'privacy' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center space-x-2 text-[#c6a45c]">
                  <Lock className="w-5 h-5" />
                  <h3 className="text-xl font-serif font-black text-[#142b49]">Privacy Policy</h3>
                </div>
                <p>
                  At <strong>AZAM WEALTH</strong>, client privacy and data confidentiality are fundamental principles. When you request a consultation, we collect necessary contact information strictly to provide personalized financial guidance.
                </p>
                <p>
                  We do not sell, rent, or trade your personal information to third-party commercial marketing entities. Data is maintained securely and transmitted exclusively through sanctioned regulatory or platform partner channels required for servicing your Demat, mutual fund, or taxation queries.
                </p>
              </div>
            )}

            {activePolicyModal === 'terms' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center space-x-2 text-[#c6a45c]">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-xl font-serif font-black text-[#142b49]">Terms & Conditions</h3>
                </div>
                <p>
                  The information provided on the <strong>AZAM WEALTH</strong> website is for educational and informational purposes. Engagement with our advisory team does not create an implicit guarantee of capital growth.
                </p>
                <p>
                  Clients are encouraged to evaluate their personal risk profile, cash flows, and time horizon before entering into any mutual fund scheme, PMS arrangement, or direct equity holding. Official product prospectuses and application documents govern all actual financial product purchases.
                </p>
              </div>
            )}

            {activePolicyModal === 'disclaimer' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center space-x-2 text-[#c6a45c]">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="text-xl font-serif font-black text-[#142b49]">Investment Risk Disclaimer</h3>
                </div>
                <p>
                  All investments in financial markets (Mutual Funds, Equities, Bonds, PMS) carry inherent risks of fluctuation in value, including possible loss of capital.
                </p>
                <p>
                  Azam Wealth does not offer guaranteed returns or risk-free market investments. Algorithmic and technology tools represent systematic execution aids and do not assure profit.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="btn-premium-gold px-6 py-2 text-xs uppercase font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
