import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Check, Sparkles, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';

export const PackagesPage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-nexa-teal" />
            <span>Transparent Pricing Guidelines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-nexa-navy tracking-tight">
            Website Development Packages
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business has unique needs. Below are our illustrative package scopes to give you a clear roadmap. All quotes are customized based on your exact requirements.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.packages.map(pkg => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? 'bg-white border-2 border-nexa-teal shadow-premium ring-4 ring-nexa-teal/10'
                  : 'bg-white border border-slate-200 shadow-card hover:shadow-elevated'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nexa-teal text-white shadow-sm">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-nexa-navy">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.tagline}</p>

                {/* Price Display */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                    Pricing:
                  </span>
                  <span className="text-xl font-extrabold text-nexa-navy mt-0.5 block">
                    {pkg.priceNote}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Customized proposal based on your specific requirements
                  </span>
                </div>

                <div className="mt-4 text-xs font-semibold text-nexa-teal">
                  Ideal for: <span className="text-slate-700 font-normal">{pkg.idealFor}</span>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">What's Included:</p>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-teal-50 text-nexa-teal flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                <button
                  onClick={() => openRequestModal(pkg.name, 'Website Package')}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-nexa-teal hover:bg-nexa-teal-light text-white'
                      : 'bg-nexa-navy hover:bg-nexa-navy-light text-white'
                  }`}
                >
                  <span>Request a Quote for {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={siteConfig.getWhatsAppLink(`Hi Nexa Web Studio, I am interested in learning more about the "${pkg.name}" package.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Discuss via WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* FAQ & Custom Scopes Note */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-card max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <HelpCircle className="w-6 h-6 text-nexa-teal" />
            <h3 className="text-lg font-bold text-nexa-navy">Custom Scopes & Milestone Payments</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">How do milestone payments work?</h4>
              <p>
                We operate on structured, transparent milestones: 30% project kickoff deposit, 40% upon staging demo approval, and 30% final balance upon production domain launch and code handover.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Can I customize a package?</h4>
              <p>
                Absolutely. Every business is unique. We can add M-Pesa STK push, SMS booking notifications, multi-currency display, or custom portals to any package.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
