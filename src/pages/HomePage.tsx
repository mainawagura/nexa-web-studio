import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Laptop, Smartphone, CheckCircle2, ShieldCheck, 
  Zap, Globe, Database, Building2, Utensils, Hotel, ShoppingBag, 
  MessageSquare, Star, Layers, Code, HeartHandshake
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';

export const HomePage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 6);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-white pattern-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nexa-navy/5 border border-nexa-navy/10 text-nexa-navy text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-nexa-teal animate-pulse"></span>
              <span>Nexa Web Studio • Professional Business Websites</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-nexa-navy tracking-tight leading-[1.15]">
              Beautiful Websites That Help <br className="hidden sm:inline" />
              <span className="text-nexa-teal">Businesses Grow</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore our website demos and discover how a professional online presence can help your business attract customers, build trust, and grow.
            </p>

            {/* Two Main CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-nexa-navy hover:bg-nexa-navy-light text-white font-semibold text-base shadow-elevated hover:shadow-premium transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-nexa-teal" />
              </Link>

              <button
                onClick={() => openRequestModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-nexa-teal/50"
              >
                <Sparkles className="w-4 h-4 text-nexa-teal" />
                <span>Request a Website</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                12 Interactive Industry Demos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Direct WhatsApp Inquiries
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Vercel & Fast Cloud Hosting
              </span>
            </div>

          </div>

          {/* Hero Visual Mockup: Laptop + Smartphone Preview */}
          <div className="mt-14 relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-premium border border-slate-200/80 p-3 sm:p-5 relative z-10">
              
              {/* Fake Browser Toolbar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                    https://nexawebstudio.com/demos/haven-property-management
                  </span>
                </div>
                <span className="hidden sm:inline font-medium text-nexa-teal">Live Responsive Demos</span>
              </div>

              {/* Main Laptop Screen Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80"
                  alt="Haven Property Management Demo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-nexa-teal">
                    Featured Demo Preview
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">Haven Property Management</h3>
                  <p className="text-sm text-slate-300 max-w-lg mt-1 hidden sm:block">
                    Interactive rental listings, automated tenant rent reconciliation, and diaspora landlord financial reports.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      to="/demos/haven-property-management"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nexa-teal hover:bg-nexa-teal-light text-white text-xs font-bold shadow-md transition-colors"
                    >
                      <span>Launch Interactive Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Mobile Phone Preview (overlapping) */}
            <div className="hidden lg:block absolute -bottom-10 -right-6 w-64 bg-slate-950 rounded-3xl p-2.5 shadow-2xl border-4 border-slate-800 z-20 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="w-full h-80 rounded-2xl overflow-hidden bg-white relative">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80"
                  alt="Mobile Serenity Hotels"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold text-amber-400">Mobile Optimized</span>
                  <p className="text-xs font-bold">Serenity Luxury Hotels</p>
                  <p className="text-[10px] text-slate-300">Fast 1-tap booking flow</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. FEATURED DEMO WEBSITES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
              Realistic Sample Demos
            </span>
            <h2 className="text-3xl font-extrabold text-nexa-navy mt-1 tracking-tight">
              Featured Website Demos
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Click any demo to test its real layout, navigation, filters, and booking interactions before requesting a custom build.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-nexa-teal hover:text-nexa-teal-dark group"
          >
            <span>View All 12 Industry Demos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.previewImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/80 text-white backdrop-blur-sm">
                    Demo Project
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-nexa-navy group-hover:text-nexa-teal transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{project.industry}</p>

                <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed flex-1">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={project.route}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-nexa-navy hover:bg-nexa-navy-light text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <span>Preview Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-nexa-teal" />
                  </Link>

                  <button
                    onClick={() => openRequestModal(project.name, project.category)}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-slate-200 hover:border-nexa-teal text-slate-700 hover:text-nexa-teal text-xs font-semibold transition-colors"
                  >
                    <span>Request Similar</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BENEFITS OF WORKING WITH NEXA WEB STUDIO */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-extrabold text-nexa-navy mt-1 tracking-tight">
              Engineered for Real Business Growth
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We don't build cookie-cutter templates. We craft tailored, high-performance web solutions that position your brand as a market leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-nexa-teal flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">Lightning Fast & Modern</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Built with React, Vite, and clean HTML. Rapid page loads keep visitors engaged and dramatically boost Google rankings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">Diaspora & Local Friendly</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Seamless collaboration with overseas clients across UK, US, EU, and Gulf timezones via transparent video demos and milestones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">Conversion & WhatsApp Ready</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Direct WhatsApp CTAs, inquiry capture forms, and clean mobile flows designed to turn visitors into phone calls and paid clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">Enterprise Reliability</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Clean TypeScript code, zero hidden vulnerabilities, secure form handoffs, and 1-click modern hosting on Vercel or cloud servers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SIMPLE THREE-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
            How It Works
          </span>
          <h2 className="text-3xl font-extrabold text-nexa-navy mt-1 tracking-tight">
            From Demo to Live Website in 3 Steps
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A frictionless, transparent process designed to get your business online quickly and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative">
            <span className="text-4xl font-black text-slate-200 font-mono">01</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Choose Your Website Style</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Explore our 12 interactive demos. Pick the design structure, typography, and interactive features that match your vision.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative">
            <span className="text-4xl font-black text-nexa-teal/30 font-mono">02</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Customize for Your Business</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We tailor your branding, color palette, custom copy, photography, services, WhatsApp links, and payment or booking flows.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative">
            <span className="text-4xl font-black text-nexa-navy/20 font-mono">03</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Launch Your Website</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We deploy your site to high-speed cloud hosting (Vercel/custom domain), configure SEO indexing, and provide launch support.
            </p>
          </div>

        </div>
      </section>

      {/* 5. SERVICES OFFERED */}
      <section className="bg-nexa-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-extrabold mt-1 tracking-tight">
              Comprehensive Web Solutions
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From landing pages to complex database-driven portals, we build systems that solve real business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-nexa-teal transition-colors">
              <Layers className="w-8 h-8 text-nexa-teal mb-4" />
              <h3 className="text-lg font-bold">Custom Business Websites</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Modern, responsive corporate websites that establish credibility, showcase your services, and generate qualified customer inquiries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-nexa-teal transition-colors">
              <Database className="w-8 h-8 text-nexa-teal mb-4" />
              <h3 className="text-lg font-bold">Portals & Custom Business Systems</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Database-driven platforms, client portals, property management dashboards, and automated reporting systems built with React & C#/SQL.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-nexa-teal transition-colors">
              <Code className="w-8 h-8 text-nexa-teal mb-4" />
              <h3 className="text-lg font-bold">M-Pesa & API Integrations</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Connect your website directly to Safaricom Daraja M-Pesa STK push, SMS gateways, WhatsApp Business API, and automated receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE CLIENT TESTIMONIALS (Clearly Marked) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold mb-2">
            <span>Illustrative Sample Testimonials</span>
          </div>
          <h2 className="text-3xl font-extrabold text-nexa-navy tracking-tight">
            What Clients Value
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Representative feedback reflecting our remote collaboration, delivery quality, and responsiveness:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Being in the UK managing apartments in Nairobi was stressful until we launched our property portal. Tenants pay directly, M-Pesa reconciles automatically, and I view statements in real time."
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-nexa-navy">Diaspora Property Investor</span>
              <span className="text-slate-400">London, UK</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "Our construction firm needed a website that looked authoritative to international tender committees. Nexa Studio delivered an incredible showcase within 10 days."
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-nexa-navy">Managing Director</span>
              <span className="text-slate-400">Nairobi, Kenya</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "The table reservation and menu features doubled our weekend online reservations. Fast, modern, and effortless to update."
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-nexa-navy">Boutique Restaurant Owner</span>
              <span className="text-slate-400">Karen, Nairobi</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STRONG FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-nexa-navy via-nexa-navy-light to-nexa-navy rounded-3xl p-8 sm:p-14 text-white text-center shadow-premium relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Business Website?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Tell us about your project or schedule a free 15-minute consultation. We'll show you how a custom website can transform your customer acquisition.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openRequestModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-nexa-teal hover:bg-nexa-teal-light text-white font-bold text-base shadow-lg transition-all"
              >
                <span>Request a Website Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
