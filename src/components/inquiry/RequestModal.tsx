import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Send, ArrowRight, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { InquiryFormData } from '../../types/portfolio';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDemo?: string;
  preselectedIndustry?: string;
}

export const RequestModal: React.FC<RequestModalProps> = ({
  isOpen,
  onClose,
  preselectedDemo,
  preselectedIndustry
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    industry: preselectedIndustry || 'Property Management & Real Estate',
    websiteType: preselectedDemo ? `Similar to ${preselectedDemo}` : 'Business Website',
    budgetRange: 'Request an Indicative Quotation',
    projectDescription: '',
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedDemo || preselectedIndustry) {
      setFormData(prev => ({
        ...prev,
        industry: preselectedIndustry || prev.industry,
        websiteType: preselectedDemo ? `Similar to ${preselectedDemo}` : prev.websiteType
      }));
    }
  }, [preselectedDemo, preselectedIndustry]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business or project name';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Please briefly describe your requirements';
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
    const message = `Hello Nexa Web Studio,\n\nI'm requesting a website consultation:\n- *Name:* ${formData.fullName}\n- *Business:* ${formData.businessName}\n- *Industry:* ${formData.industry}\n- *Website Type:* ${formData.websiteType}\n- *Budget Scope:* ${formData.budgetRange}\n- *Details:* ${formData.projectDescription}\n\nPlease let me know your availability for a brief consultation.`;
    window.open(siteConfig.getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-nexa-navy p-6 sm:p-7 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-black text-nexa-lime">
              Nexa Web Studio • Project Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1">Start Your Custom Website Project</h3>
            <p className="text-xs text-slate-300 mt-1">
              Tell us about your objectives. We will deliver an itemized scope and proposal within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-nexa-navy">Brief Prepared Successfully!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Since this is an interactive demo portfolio, no backend is needed—you can immediately send this complete brief directly to our lead developer on WhatsApp:
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp Now</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider"
                >
                  Close Dialog
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Direct WhatsApp: {siteConfig.whatsappDisplay}</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Mwangi"
                    className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.fullName && <p className="text-rose-500 text-[10px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. david@business.com"
                    className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                      errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-rose-500 text-[10px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Business Name *</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Mara Luxury Camp"
                    className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                      errors.businessName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.businessName && <p className="text-rose-500 text-[10px] mt-1">{errors.businessName}</p>}
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexa-lime"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Industry Sector</label>
                  <select
                    value={formData.industry}
                    onChange={e => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexa-lime bg-white"
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
                  <label className="font-bold text-slate-700 block mb-1">Desired Scope / Style</label>
                  <input
                    type="text"
                    value={formData.websiteType}
                    onChange={e => setFormData({ ...formData, websiteType: e.target.value })}
                    placeholder="e.g. Similar to Havenstone Properties"
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexa-lime"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Website Requirements & Details *</label>
                <textarea
                  rows={3}
                  value={formData.projectDescription}
                  onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Outline key pages, features (e.g., booking form, M-Pesa, gallery), and desired launch timeline..."
                  className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-nexa-lime ${
                    errors.projectDescription ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                  }`}
                ></textarea>
                {errors.projectDescription && <p className="text-rose-500 text-[10px] mt-1">{errors.projectDescription}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-nexa-navy hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Format & Submit Project Brief</span>
                  <ArrowUpRight className="w-4 h-4 text-nexa-lime stroke-[2.5]" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-1">
                Direct WhatsApp assistance available at {siteConfig.whatsappDisplay}
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
