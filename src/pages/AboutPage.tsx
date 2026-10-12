import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Laptop, Database, RefreshCw, CheckCircle2, MessageSquare, 
  ArrowRight, ShieldCheck, Globe, Sparkles, TrendingUp, Layers, Target
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';

export const AboutPage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-nexa-teal" />
            <span>Digital Studio Profile & Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-nexa-navy tracking-tight">
            About Nexa Web Studio
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We engineer custom, high-converting business websites, interactive booking engines, and digital client portals for established enterprises, African diaspora entrepreneurs, and growing businesses worldwide.
          </p>
        </div>

        {/* Narrative & Agency Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-nexa-navy">
              Engineering Websites That Drive Real Business Growth
            </h2>
            
            <p>
              In today's competitive landscape, your website is the primary foundation of your company's credibility. Prospective clients evaluate your professionalism, reliability, and capability within seconds of landing on your page.
            </p>

            <p>
              At Nexa Web Studio, we focus on commercial outcomes rather than generic templates. Whether you are a construction contractor showcasing major civil works to win tenders, a boutique hotel maximizing direct commission-free bookings, or a real estate agency connecting international buyers with premium homes, we design platforms that actively convert traffic into paying inquiries.
            </p>

            <p>
              Our delivery framework is structured, transparent, and milestone-driven. We provide regular video walk-throughs, clear staging previews, and robust post-launch support to ensure your digital asset consistently delivers results.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-nexa-navy">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Mobile-First Conversion Design
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Direct Lead Funnels & WhatsApp
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                M-Pesa & Payment Readiness
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Transparent Remote Collaboration
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-7 text-white space-y-6 shadow-premium">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-nexa-teal flex items-center justify-center text-white">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base">Nairobi, Kenya</h3>
                <p className="text-xs text-slate-400">Serving Local & International Clients</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Core Specialty:</span>
                <span className="font-semibold text-white">Business Websites & Client Portals</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Collaboration Model:</span>
                <span className="font-semibold text-white">Staged Milestones & Video Previews</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hosting Infrastructure:</span>
                <span className="font-semibold text-white">High-Speed Global Cloud Hosting</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direct Consultation:</span>
                <span className="font-semibold text-emerald-400">WhatsApp & Direct Email</span>
              </div>
            </div>

            <button
              onClick={() => openRequestModal()}
              className="w-full py-3 rounded-xl bg-nexa-teal hover:bg-nexa-teal-light text-white font-bold text-xs transition-colors shadow-sm"
            >
              Request a Consultation
            </button>
          </div>

        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-nexa-navy">Core Development Pillars</h2>
            <p className="text-xs text-slate-500 mt-1">What your business can expect from every website we build:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-nexa-teal flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Custom Design & Architecture</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Bespoke layouts tailored specifically to your industry requirements, brand identity, and customer acquisition path—completely free of template bloat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Responsive, Mobile-First UX</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Over 75% of your customers browse on smartphones. Every screen size is engineered for instant tap responses, rapid navigation, and seamless browsing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Conversion Psychology</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We position clear calls-to-action, quotation calculators, and direct WhatsApp links where potential clients naturally expect them, maximizing inquiries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Database & Portals Integration</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                When your business requires live inventory catalogs, tenant rent logs, or automated reporting, we connect secure, high-concurrency database systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card md:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Ongoing Maintenance & Optimization</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                A website is an active business investment. We offer scheduled performance audits, security monitoring, and continuous feature expansion as your company scales.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-nexa-navy hover:bg-nexa-navy-light text-white font-semibold text-sm shadow-card transition-all"
          >
            <span>Explore All 12 Business Website Showcases</span>
            <ArrowRight className="w-4 h-4 text-nexa-teal" />
          </Link>
        </div>

      </div>
    </div>
  );
};
