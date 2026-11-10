import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/content';

export default function ContactSection({ prefilledService = '', onClearPrefilled }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: prefilledService || 'Mutual Funds – SIP, SWP & SIF',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceInterest: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.serviceInterest) {
      errs.serviceInterest = 'Please select a service interest';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or query';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save data to localStorage so enquiries are permanently saved on the device
    const enquiry = {
      ...formData,
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      id: 'AW-' + Date.now()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('azam_wealth_enquiries') || '[]');
      existing.unshift(enquiry);
      localStorage.setItem('azam_wealth_enquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage save error', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData(enquiry);
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceInterest: 'Mutual Funds – SIP, SWP & SIF',
        message: '',
      });
    }, 600);
  };

  const handleResetForNew = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#c6a45c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#f8f7f3] border-2 border-[#c6a45c]/35 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#c6a45c]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#142b49]">
              Corporate Desk & Consultation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#142b49] tracking-tight">
            Consult With <span className="text-3d-gold">Azam Wealth</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Visit our corporate office in Gopalganj, Bihar or connect directly via phone, WhatsApp, or through our consultation form below.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols): Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="card-3d p-6 bg-[#fbfbf9] hover:bg-white transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-white border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c] shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#c6a45c]">
                    Corporate Office Address
                  </h4>
                  <p className="text-base font-serif font-bold text-[#142b49]">
                    Azam Wealth
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Click-to-Call */}
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="card-3d block p-6 bg-[#fbfbf9] hover:bg-white transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-white border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c] group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#c6a45c]">
                    Direct Phone (Click to Call)
                  </h4>
                  <p className="text-base font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors">
                    {BRAND_INFO.phone}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Mon – Sat: 9:30 AM – 6:30 PM IST
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d block p-6 bg-[#fbfbf9] hover:bg-white transition-all group border-emerald-500/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-white border-2 border-emerald-500/40 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-emerald-700">
                    WhatsApp Enquiry Desk
                  </h4>
                  <p className="text-base font-bold text-[#142b49] group-hover:text-emerald-700 transition-colors">
                    {BRAND_INFO.phone}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Instant advisory with pre-filled message
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="card-3d block p-6 bg-[#fbfbf9] hover:bg-white transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-white border-2 border-[#c6a45c]/40 flex items-center justify-center text-[#c6a45c] group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#c6a45c]">
                    Clickable Email
                  </h4>
                  <p className="text-base font-bold text-[#142b49] group-hover:text-[#c6a45c] transition-colors break-all">
                    {BRAND_INFO.email}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Confidential portfolio inquiries
                  </p>
                </div>
              </div>
            </a>

            {/* Google Maps Embed */}
            <div className="card-3d overflow-hidden bg-white p-2">
              <div className="p-3 bg-[#f8f7f3] rounded-t-xl border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center space-x-1.5 font-bold text-[#142b49]">
                  <MapPin className="w-3.5 h-3.5 text-[#c6a45c]" />
                  <span>Azam Wealth • Gopalganj, Bihar</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Near+Indian+Oil+Petrol+Pump+Miralipur+Barharia+Road+Gopalganj+Bihar+841428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c6a45c] font-bold hover:underline text-[11px]"
                >
                  Open in Maps &rarr;
                </a>
              </div>
              <div className="w-full h-56 bg-slate-100 rounded-b-xl overflow-hidden">
                <iframe
                  title="Azam Wealth Location Map"
                  src={BRAND_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Contact Form or Clean Success Saved State */}
          <div className="lg:col-span-7">
            <div className="card-3d bg-white p-8 sm:p-10 shadow-2xl relative">
              
              {/* SUCCESS VIEW (When form is submitted) */}
              {isSubmitted && submittedData ? (
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-[#c6a45c]">
                      Enquiry Saved & Logged
                    </span>
                    <h3 className="text-3xl font-serif font-black text-[#142b49]">
                      Thank You, {submittedData.name}!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your consultation request for <strong className="text-[#142b49]">{submittedData.serviceInterest}</strong> has been successfully received and saved.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-[#f8f7f3] border-2 border-[#c6a45c]/40 text-left space-y-2 text-xs text-slate-700 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Reference ID:</span>
                      <strong className="font-mono text-[#c6a45c]">{submittedData.id}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone:</span>
                      <strong className="text-[#142b49] font-mono">{submittedData.phone}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email:</span>
                      <strong className="text-[#142b49]">{submittedData.email}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Service:</span>
                      <strong className="text-[#142b49]">{submittedData.serviceInterest}</strong>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-slate-500">
                      Our advisory desk in Gopalganj, Bihar will reach out to you shortly.
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a
                      href={`https://wa.me/919973486013?text=${encodeURIComponent(`Hello AZAM WEALTH, I have submitted an enquiry on your website.\n\nName: ${submittedData.name}\nPhone: ${submittedData.phone}\nService: ${submittedData.serviceInterest}\nMessage: ${submittedData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium-gold px-7 py-3 text-xs flex items-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-800" />
                      <span>Chat Directly on WhatsApp</span>
                    </a>

                    <button
                      onClick={handleResetForNew}
                      className="btn-premium-white px-6 py-3 text-xs cursor-pointer"
                    >
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* DEFAULT FORM VIEW */
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#142b49]">
                      Schedule A <span className="text-3d-gold">Consultation</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
                      Please complete the form below. We will review your goals and prepare tailored guidance for our discussion.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-[#142b49] mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#f8f7f3] border-2 ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 focus:border-[#c6a45c]'
                        } text-[#142b49] placeholder-slate-400 text-sm focus:outline-none focus:bg-white transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-extrabold text-[#142b49] mb-2">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#f8f7f3] border-2 ${
                            errors.phone ? 'border-rose-500' : 'border-slate-200 focus:border-[#c6a45c]'
                          } text-[#142b49] placeholder-slate-400 text-sm focus:outline-none focus:bg-white transition-all`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-extrabold text-[#142b49] mb-2">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#f8f7f3] border-2 ${
                            errors.email ? 'border-rose-500' : 'border-slate-200 focus:border-[#c6a45c]'
                          } text-[#142b49] placeholder-slate-400 text-sm focus:outline-none focus:bg-white transition-all`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Interested In */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-[#142b49] mb-2">
                        Service Interested In <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#f8f7f3] border-2 border-slate-200 focus:border-[#c6a45c] text-[#142b49] text-sm focus:outline-none focus:bg-white transition-all cursor-pointer font-bold"
                      >
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title} className="text-[#142b49]">
                            {srv.title}
                          </option>
                        ))}
                        <option value="Complete Portfolio Review & Advisory" className="text-[#142b49]">
                          Complete Portfolio Review & Advisory
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-[#142b49] mb-2">
                        Message / Investment Goals <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your investment horizon, goals, or financial requirements..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#f8f7f3] border-2 ${
                          errors.message ? 'border-rose-500' : 'border-slate-200 focus:border-[#c6a45c]'
                        } text-[#142b49] placeholder-slate-400 text-sm focus:outline-none focus:bg-white transition-all`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-premium-gold w-full py-4 text-xs sm:text-sm flex items-center justify-center space-x-2.5 cursor-pointer shadow-xl disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting ? 'Saving Your Consultation Request...' : 'Submit Consultation Request'}
                      </span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center font-medium">
                      We respect your privacy. Your information is kept strictly confidential.
                    </p>

                  </form>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
