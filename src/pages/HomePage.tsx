import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Laptop, Smartphone, CheckCircle2, ShieldCheck, 
  Zap, Globe, Database, Building2, Utensils, Hotel, Search, 
  MessageSquare, Star, Check, HelpCircle, HardHat, HeartPulse, X
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';
import { ProjectCategory } from '../types/portfolio';

export const HomePage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();
  
  // Interactive Filter state
  const homeCategories: ProjectCategory[] = [
    "All Projects",
    "Construction",
    "Hotels",
    "Real Estate",
    "Property Management",
    "Restaurants",
    "Clinics",
    "Consultancies",
    "Small Businesses"
  ];

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDemos = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCat = 
        selectedCategory === "All Projects" || project.category === selectedCategory;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.industry.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-slate-950 via-[#082B4C] to-[#05192D] text-white pattern-grid overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines, CTAs & Indicators */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Nexa Web Studio • Premium Business Websites</span>
              </div>

              {/* Exact Required Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Beautiful, Modern Websites for <br className="hidden sm:inline" />
                <span className="text-teal-400">Every Business</span>
              </h1>

              {/* Exact Required Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Explore our demo websites and discover how we can help your business build trust, attract customers, and grow online.
              </p>

              {/* Two Required Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#demos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base shadow-elevated transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Website Demos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openRequestModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 shadow-sm transition-all"
                >
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  <span>Request a Website</span>
                </button>
              </div>

              {/* Four Required Feature Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Fast Loading</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>SEO Friendly</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Mobile Optimized</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Mockup Featuring Laptop & Smartphone */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Laptop Mockup */}
                <div className="bg-slate-900 rounded-2xl p-3 shadow-2xl border-2 border-slate-700/80">
                  {/* Laptop Top Toolbar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded text-[9px]">
                        nexawebstudio.com/demos/buildstrong
                      </span>
                    </div>
                    <span className="text-teal-400 font-semibold">Live Preview</span>
                  </div>

                  {/* Laptop Screen Content */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80"
                      alt="Construction Showcase Laptop Mockup"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end text-white text-left">
                      <span className="text-[10px] uppercase font-bold text-orange-400">Contractor Showcase</span>
                      <p className="text-base font-extrabold mt-0.5">BuildStrong Construction</p>
                      <p className="text-[11px] text-slate-300 line-clamp-1">Civil projects, fleet capacity & instant quotation RFP.</p>
                    </div>
                  </div>
                </div>

                {/* Smartphone Mockup (Overlapping right) */}
                <div className="absolute -bottom-8 -right-4 sm:-right-6 w-44 bg-slate-950 rounded-2xl p-2 shadow-2xl border-2 border-slate-700 hidden sm:block transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 relative">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
                      alt="Hotel Smartphone Mockup"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent p-2.5 flex flex-col justify-end text-white text-left">
                      <span className="text-[9px] font-bold text-amber-300">Hospitality Model</span>
                      <p className="text-[11px] font-bold">Serenity Hotels</p>
                      <p className="text-[9px] text-slate-300">Direct booking suite flow</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. INDUSTRY CATEGORIES & SEARCH FILTER SECTION */}
      <section id="demos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
            Browse By Sector
          </span>
          <h2 className="text-3xl font-extrabold text-nexa-navy tracking-tight">
            Industry Website Demos
          </h2>
          <p className="text-sm text-slate-600">
            Select an industry or search to explore our functional website models. Every demo features realistic layouts, forms, and navigation.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-6">
          
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search website demos by name, industry, or feature..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal shadow-sm text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Horizontal Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {homeCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-nexa-navy text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>Showing <strong>{filteredDemos.length}</strong> website showcases</span>
            {(selectedCategory !== "All Projects" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-nexa-teal font-semibold hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

        </div>

        {/* 3. RESPONSIVE GRID OF DEMO PROJECT CARDS */}
        {filteredDemos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                {/* Visual Preview Screenshot / Mockup */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.previewImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-950/85 text-teal-300 backdrop-blur-sm border border-teal-500/20">
                      Demo Project
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-nexa-navy group-hover:text-nexa-teal transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{project.industry}</p>

                    <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Capabilities Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.keyCapabilities.slice(0, 3).map((cap, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-nexa-teal"></span>
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Two Action Buttons: Preview Demo & Request Similar */}
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
                      <Sparkles className="w-3 h-3 text-nexa-teal" />
                      <span>Request Similar</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <h3 className="text-base font-bold text-nexa-navy">No Demos Matched "{searchQuery}"</h3>
            <p className="text-xs text-slate-500">Try clearing the search or choosing another category.</p>
            <button
              onClick={() => { setSelectedCategory("All Projects"); setSearchQuery(""); }}
              className="px-4 py-2 bg-nexa-navy text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* 4. WEBSITE PACKAGES SECTION (Configurable, Request a Quote) */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-nexa-teal">
              Website Solutions
            </span>
            <h2 className="text-3xl font-extrabold text-nexa-navy tracking-tight">
              Website Packages for Every Growth Stage
            </h2>
            <p className="text-sm text-slate-600">
              Clear deliverables tailored to your scope. Every quote is custom-crafted to your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.packages.map(pkg => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-8 border flex flex-col justify-between shadow-card transition-all ${
                  pkg.popular ? 'border-2 border-nexa-teal ring-4 ring-nexa-teal/10 shadow-elevated' : 'border-slate-200'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-nexa-teal text-white mb-3">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-nexa-navy">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[30px]">{pkg.tagline}</p>

                  <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Pricing:</span>
                    <span className="text-sm font-bold text-nexa-navy">{pkg.priceNote}</span>
                  </div>

                  <div className="mt-6 space-y-2.5 text-xs text-slate-600">
                    <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">Package Scope:</p>
                    {pkg.features.map((f, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-nexa-teal shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => openRequestModal(pkg.name, 'Website Package')}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm ${
                      pkg.popular ? 'bg-nexa-teal hover:bg-nexa-teal-light text-white' : 'bg-nexa-navy hover:bg-nexa-navy-light text-white'
                    }`}
                  >
                    Request a Quote
                  </button>
                  <a
                    href={siteConfig.getWhatsAppLink(`Hi Nexa Web Studio, I would like to request a quote for the ${pkg.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SIMPLE THREE-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
            <span className="text-4xl font-black text-slate-200 font-mono">01</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Choose Your Website Style</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Explore our working demos. Pick the design structure, photo gallery style, and interactive features that match your vision.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
            <span className="text-4xl font-black text-nexa-teal/30 font-mono">02</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Customize for Your Business</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We tailor your branding, color scheme, real services, photography, WhatsApp buttons, and quotation or booking flows.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
            <span className="text-4xl font-black text-nexa-navy/20 font-mono">03</span>
            <h3 className="text-lg font-bold text-nexa-navy mt-2">Launch Your Website</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              We deploy your site to high-speed cloud hosting, configure your custom domain, optimize Google SEO, and provide support.
            </p>
          </div>
        </div>
      </section>

      {/* 6. STRONG FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-nexa-navy via-[#0B3A64] to-nexa-navy rounded-3xl p-8 sm:p-14 text-white text-center shadow-premium relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Build a Website That Inspires Trust?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Tell us about your project or schedule a free consultation. We'll show you how a custom website can transform your customer acquisition.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openRequestModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-nexa-teal hover:bg-nexa-teal-light text-white font-bold text-base shadow-lg transition-all"
              >
                <span>Request a Website</span>
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
