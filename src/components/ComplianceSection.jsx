import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck2, Award, ExternalLink, AlertCircle, Building2 } from 'lucide-react';
import { CREDENTIALS } from '../data/content';

export default function ComplianceSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#c6a45c]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#f8f7f3] border-2 border-[#c6a45c]/35 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
              Regulatory Transparency & Standards
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Government Registrations & <span className="text-3d-gold">Credentials</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Azam Wealth maintains a focus on business formalisation, regulatory compliance, quality management, and professional credibility.
          </p>
        </div>

        {/* 3 Main Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Trademark Application */}
          <div className="card-3d p-7 bg-[#fbfbf9] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-white border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c] shadow-sm">
                <FileCheck2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c6a45c] block mb-1">
                  Government of India
                </span>
                <h3 className="text-xl font-serif font-bold text-[#142b49]">
                  Trademark Application
                </h3>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Authority:</span>
                  <strong className="text-[#142b49]">Trade Marks Registry</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Name:</span>
                  <strong className="text-[#142b49]">{CREDENTIALS.trademark.trademarkName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Application No:</span>
                  <strong className="font-mono text-[#c6a45c]">{CREDENTIALS.trademark.applicationNumber}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Class:</span>
                  <strong className="font-mono text-[#142b49]">{CREDENTIALS.trademark.class}</strong>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-emerald-700 font-bold">{CREDENTIALS.trademark.status}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic leading-normal">
                * {CREDENTIALS.trademark.note}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-[#142b49] flex items-center space-x-1">
              <span>Trade Marks Registry, Govt. of India</span>
            </div>
          </div>

          {/* 2. ISO 9001:2015 */}
          <div className="card-3d p-7 bg-[#fbfbf9] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-white border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c] shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c6a45c] block mb-1">
                  Quality Management System
                </span>
                <h3 className="text-xl font-serif font-bold text-[#142b49]">
                  ISO 9001:2015
                </h3>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-500 block mb-0.5">Scope of Certification:</span>
                  <strong className="text-[#142b49] font-medium text-xs">
                    {CREDENTIALS.iso.scope}
                  </strong>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  Focus on process rigor, documentation, and customer satisfaction standards.
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic leading-normal">
                * {CREDENTIALS.iso.note}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-[#142b49]">
              Quality Assurance Standards
            </div>
          </div>

          {/* 3. Global Business Conclave 2026 */}
          <div className="card-3d p-7 bg-[#fbfbf9] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-white border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c] shadow-sm">
                <Award className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c6a45c] block mb-1">
                  Executive Participation
                </span>
                <h3 className="text-xl font-serif font-bold text-[#142b49]">
                  Global Business Conclave 2026
                </h3>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <strong className="text-[#142b49]">{CREDENTIALS.conclave.location}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date:</span>
                  <strong className="text-[#142b49]">{CREDENTIALS.conclave.date}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Certificate Holder:</span>
                  <strong className="text-[#c6a45c]">{CREDENTIALS.conclave.holder}</strong>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500">Recognition:</span>
                  <span className="text-[#142b49] font-bold">{CREDENTIALS.conclave.recognition}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic leading-normal">
                Participation in leadership dialogues on emerging financial market trends and business formalisation.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-[#142b49]">
              The LaLiT, Mumbai Recognition
            </div>
          </div>

        </div>

        {/* Regulatory Note / Transparency Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f8f7f3] border border-[#c6a45c]/30 text-xs text-slate-600 space-y-2">
          <div className="flex items-center space-x-2 text-[#142b49] font-bold">
            <AlertCircle className="w-4 h-4 text-[#c6a45c]" />
            <span className="uppercase tracking-wider">Statutory Regulatory Clarification:</span>
          </div>
          <p>
            • {CREDENTIALS.regulatoryNotes.sebi}
          </p>
          <p>
            • {CREDENTIALS.regulatoryNotes.nse}
          </p>
          <p>
            • {CREDENTIALS.regulatoryNotes.statutory}
          </p>
        </div>

      </div>
    </section>
  );
}

