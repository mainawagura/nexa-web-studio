import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  CheckCircle2, MessageSquare, ArrowUpRight, ShieldCheck, Globe, 
  Sparkles, Layers, Target, Award, Code2, Users
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';

export const AboutPage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();

  return (
    <div className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-nexa-lime" />
            <span>Studio Profile & Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-nexa-navy tracking-tight">
            About Nexa Web Studio
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We design and build bespoke, high-converting business websites, interactive booking engines, and digital client portals that earn trust, establish authority, and scale companies.
          </p>
        </div>

        {/* Narrative & Agency Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-nexa-navy">
              Engineering Websites That Drive Real Business Growth
            </h2>
            
            <p>
              In today's digital landscape, your website is the primary foundation of your company's market credibility. Prospective clients evaluate your professionalism, reliability, and capability within seconds of landing on your page.
            </p>

            <p>
              At Nexa Web Studio, we focus on commercial outcomes rather than generic templates. Whether you are a construction contractor showcasing major civil works to win institutional tenders, a boutique hotel maximizing direct commission-free reservations, or a property manager serving international diaspora owners, we build platforms that actively convert traffic into paying inquiries.
            </p>

            <p>
              Our collaboration model is structured, transparent, and milestone-driven. We provide regular video walk-throughs, staged working previews, and robust post-launch support to ensure your digital asset consistently delivers results.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-nexa-navy">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Mobile-First Conversion Design
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Direct WhatsApp Lead Funnels
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                M-Pesa & Payment Readiness
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Frictionless Remote Delivery
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-nexa-navy rounded-3xl p-8 text-white space-y-6 shadow-2xl border border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-nexa-lime flex items-center justify-center text-nexa-navy font-black text-xl shadow-glow-lime">
                <span>N</span>
              </div>
              <div>
                <h3 className="font-black text-lg text-white">Nairobi, Kenya</h3>
                <p className="text-xs text-slate-400">Serving Local & International Clients</p>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-slate-800 pt-5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Core Specialty:</span>
                <span className="font-bold text-white">Business Websites & Client Portals</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Collaboration Model:</span>
                <span className="font-bold text-white">Staged Milestones & Video Previews</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hosting Infrastructure:</span>
                <span className="font-bold text-white">High-Speed Global Edge CDN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direct Consultation:</span>
                <span className="font-bold text-emerald-400">{siteConfig.whatsappDisplay}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openRequestModal()}
                className="w-full py-3.5 rounded-xl bg-nexa-lime hover:bg-[#bcf054] text-nexa-navy font-black text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Start a Project with Us
              </button>
            </div>
          </div>

        </div>

        {/* Factual Standards Pillars */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <h3 className="text-xl font-black text-white">Our Engineering Commitments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2">
              <strong className="text-nexa-lime block text-sm">No Template Lock-In</strong>
              <p className="leading-relaxed">We write clean, bespoke React and TypeScript code that you own completely without recurring page-builder licensing fees.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-nexa-lime block text-sm">Transparent Timelines</strong>
              <p className="leading-relaxed">Every milestone has a fixed delivery window and interactive staging URL where you can test progress in real time.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-nexa-lime block text-sm">Direct Developer Access</strong>
              <p className="leading-relaxed">You communicate directly with experienced software engineers who understand architecture, business logic, and conversions.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
