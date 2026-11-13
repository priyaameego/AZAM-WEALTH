import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Globe,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Video,
  Camera,
  Users,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/content';

export default function SocialMediaPage() {
  const socialChannels = [
    {
      id: 'website',
      name: 'Official Website',
      handle: 'azamwealth.com',
      status: 'Active',
      statusColor: 'bg-emerald-500',
      desc: 'The official digital platform for comprehensive financial services, market learning, and client consultation.',
      link: '/',
      actionLabel: 'Browse Platform',
      icon: Globe,
      badge: 'Official Domain'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Advisory Desk',
      handle: '+91 99734 86013',
      status: 'Active & Verified',
      statusColor: 'bg-emerald-500',
      desc: 'Direct consultation channel for portfolio inquiries, Demat account assistance, and SIP planning.',
      link: BRAND_INFO.whatsappLink,
      actionLabel: 'Chat on WhatsApp',
      icon: MessageCircle,
      badge: 'Instant Support'
    },
    {
      id: 'instagram',
      name: 'Instagram Official',
      handle: '@azamwealth (To be connected)',
      status: 'Upcoming / Reserved',
      statusColor: 'bg-amber-500',
      desc: 'Daily market insights, financial literacy carousels, SIP compounding charts, and founder updates.',
      link: '#',
      actionLabel: 'Connect in Future',
      icon: Camera,
      badge: 'Coming Soon'
    },
    {
      id: 'facebook',
      name: 'Facebook Page',
      handle: 'Azam Wealth Official (To be connected)',
      status: 'Upcoming / Reserved',
      statusColor: 'bg-amber-500',
      desc: 'Community financial awareness webinars, regional investor camps, and economic policy bulletins.',
      link: '#',
      actionLabel: 'Connect in Future',
      icon: Users,
      badge: 'Coming Soon'
    },
    {
      id: 'youtube',
      name: 'YouTube Learning Channel',
      handle: 'Azam Wealth Education (To be connected)',
      status: 'Upcoming / Reserved',
      statusColor: 'bg-amber-500',
      desc: 'Long-form video tutorials covering stock market basics, mutual fund comparisons, and risk management.',
      link: '#',
      actionLabel: 'Connect in Future',
      icon: Video,
      badge: 'Coming Soon'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Corporate',
      handle: 'Azam Wealth Financial Services (To be connected)',
      status: 'Upcoming / Reserved',
      statusColor: 'bg-amber-500',
      desc: 'Corporate developments, partnership announcements, institutional advisory, and career updates.',
      link: '#',
      actionLabel: 'Connect in Future',
      icon: Compass,
      badge: 'Coming Soon'
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 bg-[#fbfbf9] text-[#202733] min-h-screen">
      
      {/* 1. Header Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#f8f7f3] to-[#fbfbf9] border-b border-[#c6a45c]/25 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#c6a45c]/40 shadow-sm">
              <Share2 className="w-4 h-4 text-[#c6a45c]" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
                Digital & Social Hub
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#142b49] tracking-tight text-3d-title">
              Connect With <span className="text-3d-gold">Azam Wealth</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
              Official digital touchpoints and upcoming social channels. Connect with our advisory desk or bookmark future social handles.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Client Profile Regulatory Notice */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-white border border-[#c6a45c]/40 shadow-sm flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#142b49]">
            <Clock className="w-5 h-5 text-[#c6a45c] shrink-0" />
            <span>
              <strong>Official Notice:</strong> As listed in the Azam Wealth Business Profile, official social media handles will be connected in future releases.
            </span>
          </div>
          <span className="text-xs font-bold text-[#c6a45c] uppercase tracking-wider bg-[#f8f7f3] px-3 py-1 rounded-full border border-[#c6a45c]/30">
            Phase 1 Digital Hub
          </span>
        </div>
      </section>

      {/* 3. Social Media Cards Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {socialChannels.map((channel, idx) => {
            const Icon = channel.icon;
            const isExternal = channel.link.startsWith('http');
            const isClickable = channel.link !== '#';

            return (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group card-3d bg-white p-7 flex flex-col justify-between border border-[#c6a45c]/30 hover:border-[#c6a45c] shimmer-card rounded-2xl"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-[#f8f7f3] border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#142b49] group-hover:bg-[#142b49] group-hover:text-[#c6a45c] transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#fbfbf9] border border-slate-200 text-[11px] font-bold text-slate-700">
                      <span className={`w-2 h-2 rounded-full ${channel.statusColor}`} />
                      <span>{channel.status}</span>
                    </div>
                  </div>

                  {/* Title & Handle */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c6a45c] block mb-1">
                      {channel.badge}
                    </span>
                    <h3 className="text-xl font-serif font-black text-[#142b49] group-hover:text-[#c6a45c] transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-slate-500 mt-1">
                      {channel.handle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  {isClickable ? (
                    isExternal ? (
                      <a
                        href={channel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium-gold w-full py-2.5 text-xs flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                      >
                        <span>{channel.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to={channel.link}
                        className="btn-premium-gold w-full py-2.5 text-xs flex items-center justify-center space-x-2 shadow-md"
                      >
                        <span>{channel.actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )
                  ) : (
                    <div className="w-full py-2.5 text-xs font-bold text-center rounded-xl bg-slate-100 text-slate-500 border border-slate-200 cursor-not-allowed">
                      <span>{channel.actionLabel}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Direct Communication Strip */}
      <section className="py-16 bg-white border-t border-[#c6a45c]/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
            Need Direct Support Right Now?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our advisory desk at Gopalganj is accessible via phone, WhatsApp, and official email for immediate assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="btn-premium-gold px-7 py-3 text-xs flex items-center space-x-2 shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 99734 86013</span>
            </a>
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-white px-7 py-3 text-xs flex items-center space-x-2 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="px-7 py-3 text-xs font-bold rounded-xl bg-[#f8f7f3] text-[#142b49] border border-[#c6a45c]/40 hover:bg-[#c6a45c] hover:text-white transition-colors flex items-center space-x-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
