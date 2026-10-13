import React, { useState } from 'react';
import { 
  MessageSquare, Mail, MapPin, Send, CheckCircle2, ShieldCheck, 
  Sparkles, Phone, ArrowUpRight 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { InquiryFormData } from '../types/portfolio';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    industry: 'Property Management & Real Estate',
    websiteType: 'Custom Business Website',
    budgetRange: 'Request an Indicative Quotation',
    projectDescription: '',
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business or project name';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Please briefly outline your website requirements';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hello Nexa Web Studio,\n\nI'm requesting a website consultation:\n- *Name:* ${formData.fullName}\n- *Business:* ${formData.businessName}\n- *Industry:* ${formData.industry}\n- *Website Type:* ${formData.websiteType}\n- *Budget Scope:* ${formData.budgetRange}\n- *Project Description:* ${formData.projectDescription}\n- *Preferred Contact:* ${formData.preferredContact}\n\nLooking forward to discussing this project.`;
    window.open(siteConfig.getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-nexa-lime" />
            <span>Consultation & Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-nexa-navy tracking-tight">
            Start Your Project With Us
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ready to build or upgrade your business website? Submit your project brief below, or connect directly on WhatsApp with our lead developer for immediate consultation.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-nexa-navy rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-2xl border border-slate-800">
              <div>
                <span className="text-xs uppercase font-black tracking-wider text-nexa-lime">
                  Direct Communication
                </span>
                <h3 className="text-2xl font-black mt-1">Let's Discuss Your Vision</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  We specialize in crafting custom digital assets for companies in Kenya, African diaspora founders, and international clients seeking world-class web execution.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3.5 pt-2 text-xs">
                
                <a
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 hover:bg-emerald-900 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-black text-white text-sm">WhatsApp (Fastest Response)</p>
                    <p className="text-emerald-400 font-mono">{siteConfig.whatsappDisplay}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-nexa-lime shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Direct Project Email</p>
                    <p className="text-slate-400 font-mono">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
                  <MapPin className="w-5 h-5 text-nexa-lime shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Studio Base</p>
                    <p className="text-slate-400">{siteConfig.location} • Serving Global Clients</p>
                  </div>
                </div>

              </div>

              {/* Factual Reassurance */}
              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2.5 text-slate-400 text-xs">
                <ShieldCheck className="w-4 h-4 text-nexa-lime shrink-0 mt-0.5" />
                <span>
                  No obligation consultation. We'll review your scope and provide a structured proposal with itemized deliverables within 24 hours.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Inquiry Brief Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card">
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-black text-nexa-navy">
                  Inquiry Brief Formatted Successfully!
                </h3>
                
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Since this is an interactive demo portfolio without third-party email tracking, you can instantly transmit this complete brief directly to our lead engineer on WhatsApp:
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Brief via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-sm transition-colors"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-nexa-navy">Project Specification Brief</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the essential requirements to receive an accurate timeline and itemized quotation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Mwangi"
                      className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@yourbusiness.com"
                      className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                        errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Business / Brand Name *</label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Mara Luxury Safaris"
                      className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                        errors.businessName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                      }`}
                    />
                    {errors.businessName && <p className="text-rose-500 text-[11px] mt-1">{errors.businessName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Industry Sector</label>
                    <select
                      value={formData.industry}
                      onChange={e => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime bg-white"
                    >
                      <option>Property Management & Real Estate</option>
                      <option>Construction & Engineering</option>
                      <option>Hotels & Hospitality</option>
                      <option>Restaurants & Cafés</option>
                      <option>Consulting & Professional Services</option>
                      <option>Clinics & Healthcare</option>
                      <option>Retail & E-commerce</option>
                      <option>Schools & Education</option>
                      <option>Beauty, Salons & Wellness</option>
                      <option>Logistics & Transport</option>
                      <option>Travel & Tourism</option>
                      <option>Nonprofits & Community Organizations</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Desired Package / Solution</label>
                    <select
                      value={formData.websiteType}
                      onChange={e => setFormData({ ...formData, websiteType: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime bg-white"
                    >
                      <option>Starter Website</option>
                      <option>Business Website</option>
                      <option>Ecommerce Website</option>
                      <option>Custom Web Application / Client Portal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Project Scope & Requirements *</label>
                  <textarea
                    rows={4}
                    value={formData.projectDescription}
                    onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Briefly describe what your business does, key features needed (e.g. WhatsApp booking, online quotes, gallery), and target launch date..."
                    className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                      errors.projectDescription ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                    }`}
                  ></textarea>
                  {errors.projectDescription && <p className="text-rose-500 text-[11px] mt-1">{errors.projectDescription}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-nexa-navy hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Submit Project Brief</span>
                  <ArrowUpRight className="w-4 h-4 text-nexa-lime stroke-[2.5]" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
