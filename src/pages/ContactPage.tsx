import React, { useState } from 'react';
import { 
  MessageSquare, Mail, MapPin, Send, CheckCircle2, ShieldCheck, 
  Sparkles, Phone, HelpCircle 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { InquiryFormData } from '../types/portfolio';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    industry: 'Property Management',
    websiteType: 'Custom Business Website',
    budgetRange: '$500 - $1,000 (KES 65k - 130k)',
    projectDescription: '',
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business name';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Please briefly outline your requirements';
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
    const message = `Hello Nexa Web Studio,\n\nI'm requesting a website consultation:\n- *Name:* ${formData.fullName}\n- *Business:* ${formData.businessName}\n- *Industry:* ${formData.industry}\n- *Type:* ${formData.websiteType}\n- *Budget:* ${formData.budgetRange}\n- *Project Details:* ${formData.projectDescription}\n- *Contact Preference:* ${formData.preferredContact}\n\nLooking forward to your response.`;
    window.open(siteConfig.getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-nexa-teal" />
            <span>Consultation & Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-nexa-navy tracking-tight">
            Request Your Website Consultation
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ready to establish or upgrade your business website? Submit your project brief below, or connect directly on WhatsApp for immediate discussion.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-nexa-navy rounded-3xl p-8 text-white space-y-6 shadow-premium">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-nexa-teal">
                  Direct Communication
                </span>
                <h3 className="text-2xl font-bold mt-1">Let's Discuss Your Vision</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  We specialize in helping Kenyan businesses, African diaspora founders, and international clients launch high-performing web platforms.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4 pt-2 text-xs">
                
                <a
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 hover:bg-emerald-900 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">WhatsApp (Fastest Response)</p>
                    <p className="text-emerald-400">{siteConfig.whatsappDisplay}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                  <Mail className="w-5 h-5 text-nexa-teal shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Email Address</p>
                    <p className="text-slate-400">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                  <MapPin className="w-5 h-5 text-nexa-teal shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Location & Delivery</p>
                    <p className="text-slate-400">{siteConfig.location} • Worldwide Remote</p>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-nexa-teal shrink-0" />
                <span>NDA & business idea confidentiality guaranteed.</span>
              </div>

            </div>

            {/* Quick Consultation Process */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-nexa-navy text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-nexa-teal" />
                What Happens Next?
              </h4>
              <p>
                1. <strong>Review:</strong> We review your project scope within 24 hours.
              </p>
              <p>
                2. <strong>Consultation:</strong> We schedule a quick WhatsApp or Zoom call to align on design style, features, and timeline.
              </p>
              <p>
                3. <strong>Milestone Proposal:</strong> You receive a clear, fixed-price milestone agreement before any commitment.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-teal-50 text-nexa-teal rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-nexa-navy">Thank You, {formData.fullName}!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your project consultation details have been recorded. To receive an immediate response without waiting for email, dispatch your prefilled brief directly to our lead developer via WhatsApp:
                </p>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left text-xs space-y-1 font-mono text-slate-700">
                  <p><strong>Business:</strong> {formData.businessName}</p>
                  <p><strong>Industry:</strong> {formData.industry}</p>
                  <p><strong>Type:</strong> {formData.websiteType}</p>
                  <p><strong>Budget:</strong> {formData.budgetRange}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Brief on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <h3 className="text-xl font-bold text-nexa-navy">Project Request Form</h3>
                  <p className="text-xs text-slate-500 mt-1">Fill out the details below to receive a custom proposal.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Grace Wambui"
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
                      placeholder="grace@company.com"
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
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Living Properties"
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
                      placeholder="+254 712 000 000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={e => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal bg-white"
                    >
                      <option value="Property Management">Property Management</option>
                      <option value="Real Estate">Real Estate & Brokerage</option>
                      <option value="Construction">Construction & Civil Contracting</option>
                      <option value="Hotels">Hotels & Hospitality</option>
                      <option value="Restaurants">Restaurants & Dining</option>
                      <option value="Consultancies">Business Consulting</option>
                      <option value="Clinics">Clinics & Healthcare</option>
                      <option value="Small Businesses">Cleaning & Home Services</option>
                      <option value="Education">Education & Academies</option>
                      <option value="Travel and Tourism">Travel, Tours & Safaris</option>
                      <option value="E-commerce">E-commerce & Retail Store</option>
                      <option value="Logistics">Transport & Logistics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal bg-white"
                    >
                      <option value="Starter: $300 - $500 (KES 40k - 65k)">Starter: $300 - $500 (KES 40k - 65k)</option>
                      <option value="Growth: $500 - $1,000 (KES 65k - 130k)">Growth: $500 - $1,000 (KES 65k - 130k)</option>
                      <option value="Premium: $1,000 - $2,500+ (KES 130k - 300k+)">Premium: $1,000 - $2,500+ (KES 130k - 300k+)</option>
                      <option value="Undecided / Flexible">Undecided / Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Description & Desired Features *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDescription}
                    onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe what you want to achieve, your target clients, and any specific integrations (e.g. M-Pesa STK push, booking calendars, property search)..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal ${
                      errors.projectDescription ? 'border-rose-500 bg-rose-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-rose-600 text-[11px] mt-1">{errors.projectDescription}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4 text-xs">
                    {['WhatsApp', 'Email', 'Phone Call'].map(method => (
                      <label key={method} className="flex items-center gap-1.5 cursor-pointer text-slate-700">
                        <input
                          type="radio"
                          name="contactMethod"
                          checked={formData.preferredContact === method}
                          onChange={() => setFormData({ ...formData, preferredContact: method as any })}
                          className="text-nexa-teal focus:ring-nexa-teal"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Response within 24 business hours</span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-nexa-navy hover:bg-nexa-navy-light text-white font-bold text-sm shadow-card transition-all"
                  >
                    <Send className="w-4 h-4 text-nexa-teal" />
                    <span>Submit Project Brief</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
