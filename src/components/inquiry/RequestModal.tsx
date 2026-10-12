import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Send, ArrowRight, ShieldCheck } from 'lucide-react';
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
    industry: preselectedIndustry || 'Property Management',
    websiteType: preselectedDemo ? `Similar to ${preselectedDemo}` : 'Business Website',
    budgetRange: '$500 - $1,000 (KES 65k - 130k)',
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
    const message = `Hello Nexa Web Studio,\n\nI'm requesting a website consultation:\n- *Name:* ${formData.fullName}\n- *Business:* ${formData.businessName}\n- *Industry:* ${formData.industry}\n- *Website Type:* ${formData.websiteType}\n- *Budget Range:* ${formData.budgetRange}\n- *Details:* ${formData.projectDescription}\n\nPlease let me know your availability for a brief discussion.`;
    window.open(siteConfig.getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-nexa-navy p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-nexa-teal">
              Nexa Web Studio • Consultation
            </span>
            <h3 className="text-xl font-bold mt-0.5">Request Your Custom Business Website</h3>
            <p className="text-xs text-slate-300 mt-1">
              Tell us about your business goals. We'll respond with a detailed proposal and timeline within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-teal-50 text-nexa-teal rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-nexa-navy">Inquiry Received Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Since this is an interactive demo portfolio, no backend is required—you can instantly open this complete brief in WhatsApp directly with our lead developer:
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-lg mx-auto text-left text-xs space-y-1.5 font-mono text-slate-700">
                <p><strong>Business:</strong> {formData.businessName}</p>
                <p><strong>Selected Style:</strong> {formData.websiteType}</p>
                <p><strong>Industry:</strong> {formData.industry}</p>
                <p><strong>Budget:</strong> {formData.budgetRange}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send This Brief via WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {preselectedDemo && (
                <div className="p-3 bg-teal-50/80 border border-teal-200 rounded-xl flex items-center justify-between text-xs text-teal-800">
                  <span>Selected Demo Inspiration: <strong>{preselectedDemo}</strong></span>
                  <span className="font-semibold text-nexa-teal">Pre-filled</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Kimani"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal ${
                      errors.fullName ? 'border-rose-500 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-rose-600 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. david@mybusiness.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal ${
                      errors.email ? 'border-rose-500 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-rose-600 text-[11px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Safari Crest Properties"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal ${
                      errors.businessName ? 'border-rose-500 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.businessName && <p className="text-rose-600 text-[11px] mt-1">{errors.businessName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 712 345 678"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Industry Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={e => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal bg-white"
                  >
                    <option value="Property Management">Property Management</option>
                    <option value="Real Estate">Real Estate & Brokerage</option>
                    <option value="Construction">Construction & Contracting</option>
                    <option value="Hotels">Hotels & Hospitality</option>
                    <option value="Restaurants">Restaurants & Dining</option>
                    <option value="Consultancies">Business Consulting & Advisory</option>
                    <option value="Clinics">Healthcare & Clinics</option>
                    <option value="Small Businesses">Cleaning & Home Services</option>
                    <option value="Education">Education & Academies</option>
                    <option value="Travel and Tourism">Travel, Tours & Safaris</option>
                    <option value="E-commerce">E-commerce & Retail</option>
                    <option value="Logistics">Logistics & Transport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal bg-white"
                  >
                    <option value="Starter: $300 - $500 (KES 40k - 65k)">Starter: $300 - $500 (KES 40k - 65k)</option>
                    <option value="Growth: $500 - $1,000 (KES 65k - 130k)">Growth: $500 - $1,000 (KES 65k - 130k)</option>
                    <option value="Premium: $1,000 - $2,500+ (KES 130k - 300k+)">Premium: $1,000 - $2,500+ (KES 130k - 300k+)</option>
                    <option value="Undecided / Need Advice">Undecided / Need Advice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tell Us About Your Project & Desired Features *
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDescription}
                  onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="e.g. We need a modern website for our property management business with rental listings, tenant payment links, and an inquiry form for diaspora owners."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal ${
                    errors.projectDescription ? 'border-rose-500 bg-rose-50' : 'border-slate-300'
                  }`}
                />
                {errors.projectDescription && (
                  <p className="text-rose-600 text-[11px] mt-1">{errors.projectDescription}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4 text-xs">
                  {['WhatsApp', 'Email', 'Phone Call'].map(method => (
                    <label key={method} className="flex items-center gap-1.5 cursor-pointer text-slate-700">
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={formData.preferredContact === method}
                        onChange={() => setFormData({ ...formData, preferredContact: method as any })}
                        className="text-nexa-teal focus:ring-nexa-teal"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-nexa-navy hover:bg-nexa-navy-light text-white font-semibold text-sm shadow-md transition-all"
                >
                  <Send className="w-4 h-4 text-nexa-teal" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-nexa-teal" />
            No spam. We strictly respect your privacy and business details.
          </span>
          <span>Nexa Web Studio</span>
        </div>

      </div>
    </div>
  );
};
