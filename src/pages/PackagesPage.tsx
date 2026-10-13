import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Check, Sparkles, MessageSquare, ArrowRight, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';

export const PackagesPage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();

  return (
    <div className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-nexa-lime" />
            <span>Indicative Investment Guidelines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-nexa-navy tracking-tight">
            Website Packages Built for Business Growth
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business has unique commercial objectives. Below are our structured package scopes to provide a clear roadmap. All quotations are custom-crafted to your specific deliverables.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.packages.map(pkg => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? 'bg-white border-2 border-nexa-navy shadow-2xl ring-4 ring-nexa-navy/5'
                  : 'bg-white border border-slate-200/90 shadow-card hover:shadow-elevated'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-nexa-lime text-nexa-navy shadow-sm">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black text-nexa-navy">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.tagline}</p>

                {/* Price Display */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block">
                    Pricing:
                  </span>
                  <span className="text-xl font-black text-nexa-navy mt-0.5 block font-mono">
                    {pkg.priceNote}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Customized proposal based on your specific requirements
                  </span>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 text-[11px] text-slate-600">
                  <strong className="text-slate-800">Ideal For:</strong> {pkg.idealFor}
                </div>

                {/* What's Included */}
                <div className="mt-6 space-y-3 text-xs text-slate-600">
                  <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">What's Included:</p>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                <button
                  onClick={() => openRequestModal(pkg.name, 'Website Package')}
                  className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-sm ${
                    pkg.popular
                      ? 'bg-nexa-navy hover:bg-slate-800 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Request a Quote
                </button>

                <a
                  href={siteConfig.getWhatsAppLink(`Hello Nexa Web Studio, I would like to request an indicative quote for the ${pkg.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="bg-slate-900 text-slate-300 p-6 rounded-3xl border border-slate-800 flex items-start gap-3.5 max-w-4xl mx-auto text-xs leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-nexa-lime shrink-0 mt-0.5" />
          <p>
            <strong>Factual Scope Assurance:</strong> We never invent fixed arbitrary prices without reviewing your exact content, page volume, and integration complexity. Every quotation is delivered with an itemized breakdown, transparent milestone deliverables, and agreed completion dates.
          </p>
        </div>

      </div>
    </div>
  );
};
