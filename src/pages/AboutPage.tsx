import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Code, Laptop, Database, RefreshCw, CheckCircle2, MessageSquare, 
  ArrowRight, ShieldCheck, Globe, Cpu, Sparkles 
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
            <span>Developer Profile & Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-nexa-navy tracking-tight">
            About Nexa Web Studio
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I am a software engineer and web developer building custom, high-impact business websites, web applications, and database-driven solutions for local enterprises, African diaspora entrepreneurs, and international clients.
          </p>
        </div>

        {/* Narrative & Developer Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-nexa-navy">
              Engineering Websites That Drive Real Business Results
            </h2>
            
            <p>
              In today's digital economy, your website is often the very first touchpoint a customer, investor, or partner experiences. A slow, generic, or outdated website immediately erodes trust.
            </p>

            <p>
              At Nexa Web Studio, I bridge the gap between world-class modern frontends and robust, secure backend architecture. Whether you run a property management firm in Nairobi needing remote diaspora tenant tracking, a boutique hotel seeking direct bookings, or a consulting practice requiring corporate authority, I engineer websites that inspire confidence and convert visitors into paying clients.
            </p>

            <p>
              My development philosophy centers on clean code, transparent milestone collaboration, fast cloud deployments on platforms like Vercel, and deep localization with payment systems such as Safaricom M-Pesa.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-nexa-navy">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Modern React & TypeScript
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                C# .NET & SQL Databases
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Safaricom Daraja M-Pesa
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Remote Diaspora Delivery
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
                <p className="text-xs text-slate-400">Serving Local & International Markets</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Primary Focus:</span>
                <span className="font-semibold text-white">Custom Business Systems & Web Apps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Collaboration:</span>
                <span className="font-semibold text-white">Zoom / Loom / GitHub Milestones</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hosting & DevOps:</span>
                <span className="font-semibold text-white">Vercel, Cloudflare & Cloud SQL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direct Inquiries:</span>
                <span className="font-semibold text-emerald-400">WhatsApp & Direct Email</span>
              </div>
            </div>

            <button
              onClick={() => openRequestModal()}
              className="w-full py-3 rounded-xl bg-nexa-teal hover:bg-nexa-teal-light text-white font-bold text-xs transition-colors shadow-sm"
            >
              Start a Conversation
            </button>
          </div>

        </div>

        {/* 5 Core Highlights Requested by Prompt */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-nexa-navy">Core Engineering Pillars</h2>
            <p className="text-xs text-slate-500 mt-1">What you can expect from every project built with Nexa Studio:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-nexa-teal flex items-center justify-center mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Custom Website Development</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Handcrafted code built from the ground up to match your brand's specific identity, layout requirements, and business goals—no sluggish page builder bloat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Responsive, Mobile-First Design</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Over 75% of African and international users browse on mobile devices. Every screen size—from smartphones to large 4K desktop monitors—looks crisp and intuitive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Business-Focused UX & Conversions</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We design with conversion psychology: strategic call-to-actions, clear value propositions, interactive calculators, and frictionless WhatsApp lead funnels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Database & Backend Integration</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                When your project requires dynamic data, secure authentication, or automated reporting, we integrate SQL Server, PostgreSQL, or C# APIs with precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card md:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-nexa-navy">Ongoing Maintenance & Improvements</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                A website is a living digital asset. We provide continuous support, performance audits, security patching, and iterative feature enhancements as your business expands.
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
            <span>Explore Our 12 Website Demos</span>
            <ArrowRight className="w-4 h-4 text-nexa-teal" />
          </Link>
        </div>

      </div>
    </div>
  );
};
