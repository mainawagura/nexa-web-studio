import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Laptop, Smartphone, CheckCircle2, ShieldCheck, 
  Zap, Globe, Database, Building2, Utensils, Hotel, ShoppingBag, 
  MessageSquare, Star, Layers, Code, HeartHandshake, HardHat, Compass, 
  Check, Eye, Compass as CompassIcon
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
                12 Fully Interactive Industry Showcases
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Direct WhatsApp Lead Funnels
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexa-teal" />
                Sub-Second Fast Cloud Hosting
              </span>
            </div>

          </div>

          {/* Hero Visual Showcase: 3 Top Industry Mockup Cards */}
          <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Construction Mockup Pill */}
            <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-800 shadow-elevated hover:border-orange-500/50 transition-all group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=700&q=80"
                  alt="Construction Website Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-bold bg-orange-600 text-white uppercase">
                  Contractor Model
                </span>
              </div>
              <h3 className="font-bold text-base text-white">Construction Companies</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                "Build with Confidence": Showcase civil projects, plant machinery, safety accreditations, and quotation RFP requests.
              </p>
              <Link
                to="/demos/buildstrong-construction"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300"
              >
                <span>Preview Construction Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Hotel & Tour Mockup Pill */}
            <div className="bg-[#064E3B] text-white rounded-2xl p-5 border border-emerald-900 shadow-elevated hover:border-amber-400/50 transition-all group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"
                  alt="Hotel Website Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase">
                  Hospitality Model
                </span>
              </div>
              <h3 className="font-bold text-base text-white">Hotels & Tour Operators</h3>
              <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                Stunning oceanfront suites, safari itineraries, HD galleries, and interactive booking date & guest stay calculators.
              </p>
              <Link
                to="/demos/serenity-hotels"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200"
              >
                <span>Preview Hotel & Tour Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Real Estate & Property Mockup Pill */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-elevated hover:border-teal-400/50 transition-all group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                  alt="Real Estate Website Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-bold bg-nexa-teal text-white uppercase">
                  Property Model
                </span>
              </div>
              <h3 className="font-bold text-base text-white">Real Estate & Property Tech</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                "Find Your Dream Home": Filter listings by neighborhood, inspection photo modals, agent leads, and diaspora rent tracking.
              </p>
              <Link
                to="/demos/primenest-realty"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-teal-200"
              >
                <span>Preview Real Estate Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THREE CORE HIGH-CONVERTING CLIENT CATEGORIES (Directly from Strategy Reference) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-premium relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-nexa-teal">
              Strategic Industry Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 tracking-tight text-white">
              Three Core Business Sectors Designed for Immediate Client Acquisition
            </h2>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Rather than advertising generic websites, we provide specialized, production-ready website systems with the exact workflows required by your industry:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Construction Companies */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-orange-500/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">1. Construction Companies</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Websites can showcase completed civil projects, plant services, safety credentials, and online quotation requests. These businesses benefit from an authoritative online presence to win tenders.
                </p>

                <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Completed project galleries by sector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Online BOQ & quotation inquiry form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Safety certifications & NCA accreditation badges</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800">
                <Link
                  to="/demos/buildstrong-construction"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Launch Construction Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Hotels and Tour Operators */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-amber-400/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                  <Hotel className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">2. Hotels & Tour Operators</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Offer attractive, commission-free booking websites featuring luxury room suites, national park wildlife safaris, day-by-day itineraries, high-resolution galleries, and direct booking inquiries.
                </p>

                <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>Interactive room date & guest stay calculator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>Wildlife safari packages with multi-day itineraries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>Direct WhatsApp guest concierge link</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800">
                <Link
                  to="/demos/serenity-hotels"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Launch Hotel & Tour Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Real Estate Agencies & Property Managers */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-teal-400/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">3. Real Estate & Property Managers</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Demonstrate modern property listings, neighborhood search, valuation appraisal forms, and transparent ways to connect prospective buyers or tenants directly with lead agents.
                </p>

                <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                    <span>Property search by location, bedrooms & price</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                    <span>Complimentary home valuation appraisal forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                    <span>Diaspora landlord rent & remittance overview</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800">
                <Link
                  to="/demos/primenest-realty"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Launch Real Estate Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Expansion note directly echoing user's guidance */}
          <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-nexa-teal/20 text-nexa-teal font-bold">💡 Expansion:</span>
              <span>
                <strong>Need other industries?</strong> We also build custom platforms for Clinics, Restaurants, Consultancies, E-Commerce, and Small Businesses.
              </span>
            </div>
            <Link
              to="/portfolio"
              className="font-bold text-nexa-teal hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Browse All 12 Showcases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. FEATURED WEBSITE DEMOS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
              Production-Grade Showcases
            </span>
            <h2 className="text-3xl font-extrabold text-nexa-navy mt-1 tracking-tight">
              Featured Client Website Models
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Experience the actual look, page speed, interactive filters, and booking flow before requesting your tailored build.
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
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/85 text-teal-300 backdrop-blur-sm border border-teal-500/20">
                    Live Model
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

                {/* Business Key Capabilities (NO code languages) */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.keyCapabilities.slice(0, 3).map((cap, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nexa-teal"></span>
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={project.route}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-nexa-navy hover:bg-nexa-navy-light text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <span>Preview Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-nexa-teal" />
                  </Link>

                  <button
                    onClick={() => openRequestModal(project.name, project.category)}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg border border-slate-200 hover:border-nexa-teal text-slate-700 hover:text-nexa-teal text-xs font-semibold transition-colors"
                  >
                    <span>Request Similar</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENEFITS OF WORKING WITH NEXA WEB STUDIO */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
              Why Partner With Us
            </span>
            <h2 className="text-3xl font-extrabold text-nexa-navy mt-1 tracking-tight">
              Engineered for Real Business Growth
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We do not build generic templates. We craft high-performance business websites designed to turn visitors into paying customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-nexa-teal flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">Sub-Second Load Speeds</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Clean, optimized architecture delivers near-instant page loading, eliminating customer bounce rates and elevating your Google search rankings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">Local & Diaspora Friendly</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Trusted by Kenyan business owners and diaspora entrepreneurs across the UK, US, Canada, and the Gulf with milestone video check-ins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">High-Converting WhatsApp CTAs</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Direct WhatsApp contact triggers, smart quotation calculators, and automated contact captures turn web traffic into active business inquiries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-nexa-navy">99.9% Cloud Uptime</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Enterprise cloud hosting infrastructure with continuous SSL certificates, automatic backups, and zero maintenance headaches.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SIMPLE THREE-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
            The Process
          </span>
          <h2 className="text-3xl font-extrabold text-nexa-navy mt-1 tracking-tight">
            From Demo to Live Launch in 3 Simple Steps
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A transparent, collaborative workflow designed to launch your business website smoothly without technical stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative">
            <span className="text-4xl font-black text-slate-200 font-mono">01</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Select Your Model Style</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Explore our working showcases. Pick the layout structure, photo gallery style, and booking interactions that fit your business goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative">
            <span className="text-4xl font-black text-nexa-teal/30 font-mono">02</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Bespoke Customization</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We integrate your real branding, logo, services, photography, pricing packages, WhatsApp links, and payment or quotation flows.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative">
            <span className="text-4xl font-black text-nexa-navy/20 font-mono">03</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Domain Launch & Handover</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We connect your custom domain (`.com`, `.co.ke`), optimize your Google SEO profile, and provide post-launch support.
            </p>
          </div>

        </div>
      </section>

      {/* 6. SAMPLE CLIENT TESTIMONIALS (Clearly Marked) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold mb-2">
            <span>Client Feedback Examples</span>
          </div>
          <h2 className="text-3xl font-extrabold text-nexa-navy tracking-tight">
            What Business Owners Appreciate
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Representative reviews reflecting our remote delivery, speed, and client conversion focus:
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
              <span className="font-bold text-nexa-navy">Managing Director, Civil Engineering</span>
              <span className="text-slate-400">Nairobi, Kenya</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "The table reservation and menu features doubled our weekend online reservations. Fast, modern, and effortless for our guests on mobile."
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
