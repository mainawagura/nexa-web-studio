import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Laptop, Smartphone, CheckCircle2, ShieldCheck, 
  Zap, Globe, Database, Building2, Utensils, Hotel, Search, 
  MessageSquare, Star, Check, HelpCircle, HardHat, HeartPulse, X,
  Clock, Award, ChevronRight, Sliders, Send, ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';
import { ProjectCategory } from '../types/portfolio';

export const HomePage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();
  
  // Interactive Filter state
  const homeCategories: { label: ProjectCategory; icon?: React.ReactNode }[] = [
    { label: "All Projects" },
    { label: "Construction", icon: <HardHat className="w-3.5 h-3.5" /> },
    { label: "Hotels", icon: <Hotel className="w-3.5 h-3.5" /> },
    { label: "Real Estate", icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: "Property Management", icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: "Restaurants", icon: <Utensils className="w-3.5 h-3.5" /> },
    { label: "Clinics", icon: <HeartPulse className="w-3.5 h-3.5" /> },
    { label: "Consultancies", icon: <Globe className="w-3.5 h-3.5" /> },
    { label: "Small Businesses", icon: <Sparkles className="w-3.5 h-3.5" /> }
  ];

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  // Interactive Scope Estimator state
  const [estimatorIndustry, setEstimatorIndustry] = useState("Construction");
  const [estimatorFeatures, setEstimatorFeatures] = useState<string[]>([
    "Instant Quotation / RFP Form",
    "Direct WhatsApp Integration",
    "High-Resolution Photo Gallery"
  ]);

  const toggleEstimatorFeature = (feature: string) => {
    if (estimatorFeatures.includes(feature)) {
      setEstimatorFeatures(estimatorFeatures.filter(f => f !== feature));
    } else {
      setEstimatorFeatures([...estimatorFeatures, feature]);
    }
  };

  const getRecommendedPackage = () => {
    if (estimatorFeatures.length >= 4 || estimatorFeatures.includes("M-Pesa / Payment Integration") || estimatorFeatures.includes("Interactive Calculator / Booking")) {
      return {
        name: "Premium Website",
        turnaround: "10 - 14 Days",
        desc: "Advanced custom workflows, dynamic calculations, and client portal readiness."
      };
    }
    if (estimatorFeatures.length >= 2) {
      return {
        name: "Business Website",
        turnaround: "7 - 10 Days",
        desc: "Multi-page corporate website with custom portfolio, lead forms, and Google SEO foundations."
      };
    }
    return {
      name: "Starter Website",
      turnaround: "5 - 7 Days",
      desc: "Fast, essential high-impact online presence with WhatsApp lead generation."
    };
  };

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

  // Fallback image handler to prevent any broken image display
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl: string) => {
    const target = e.currentTarget;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-slate-950 via-[#082B4C] to-[#05192D] text-white overflow-hidden border-b border-slate-800">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines, CTAs & Indicators */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Nexa Web Studio • High-Impact Web Solutions</span>
              </div>

              {/* Exact Required Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-white">
                Beautiful, Modern Websites for <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-200">
                  Every Business
                </span>
              </h1>

              {/* Exact Required Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Explore our demo websites and discover how we can help your business build trust, attract customers, and grow online.
              </p>

              {/* Two Required Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#demos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base shadow-elevated transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Website Demos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openRequestModal()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-sm shadow-sm transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  <span>Request a Website</span>
                </button>
              </div>

              {/* Instant WhatsApp Quick Connect Indicator */}
              <div className="pt-1">
                <a
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Direct consultation available on WhatsApp: <strong>{siteConfig.whatsappDisplay}</strong></span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Four Required Feature Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-500/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-500/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Fast Loading</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-500/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>SEO Friendly</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-500/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Mobile Optimized</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Mockup Featuring Laptop & Smartphone */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-5 -left-3 sm:-left-6 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl px-3.5 py-2 shadow-2xl flex items-center gap-2.5 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Live Client Showcase</p>
                  <p className="text-xs font-bold text-white">12 Interactive Demos Ready</p>
                </div>
              </div>

              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Laptop Mockup */}
                <div className="bg-slate-900 rounded-2xl p-3 shadow-2xl border-2 border-slate-700/80 group">
                  
                  {/* Laptop Top Toolbar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 font-mono text-slate-300 bg-slate-950 px-2.5 py-0.5 rounded text-[9px] border border-slate-800">
                        nexawebstudio.com/demos/buildstrong-construction
                      </span>
                    </div>
                    <Link 
                      to="/demos/buildstrong-construction"
                      className="text-teal-400 font-semibold hover:text-teal-300 flex items-center gap-1"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Laptop Screen Content - Construction Showcase (Image Fixed & Fallback Protected) */}
                  <Link 
                    to="/demos/buildstrong-construction"
                    className="block relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 cursor-pointer"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                      onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80")}
                      alt="BuildStrong Construction Contractor Showcase Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent p-5 flex flex-col justify-end text-white text-left">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-600/90 text-[10px] uppercase font-bold tracking-wider text-white w-fit mb-1">
                        <HardHat className="w-3 h-3" />
                        <span>Contractor Showcase</span>
                      </div>
                      <p className="text-lg font-black tracking-tight text-white">BuildStrong Construction</p>
                      <p className="text-xs text-slate-300 line-clamp-1">Civil infrastructure, plant capabilities & online quotation RFP.</p>
                      
                      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-teal-300">
                        <span className="underline">Click to test full live website demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>

                </div>

                {/* Smartphone Mockup (Overlapping right) */}
                <Link
                  to="/demos/serenity-hotels"
                  className="absolute -bottom-8 -right-4 sm:-right-6 w-44 bg-slate-950 rounded-2xl p-2 shadow-2xl border-2 border-slate-700 hidden sm:block transform rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-pointer z-10"
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 relative">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80"
                      onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80")}
                      alt="Serenity Hotels Mobile Demo Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-2.5 flex flex-col justify-end text-white text-left">
                      <span className="text-[9px] font-bold text-amber-300">Mobile Flow</span>
                      <p className="text-[11px] font-extrabold text-white">Serenity Hotels</p>
                      <p className="text-[9px] text-slate-300">Direct booking suite</p>
                      <div className="mt-1 px-2 py-0.5 rounded bg-emerald-600 text-white text-[8px] font-bold text-center">
                        WhatsApp Active
                      </div>
                    </div>
                  </div>
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. VALUE & TRUST RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevated p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-nexa-teal shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-nexa-navy">Blazing Fast Speed</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Optimized for mobile connections across Kenya and international browsers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-nexa-navy">Direct WhatsApp Leads</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Turn website visitors directly into qualified customer phone and chat conversations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-nexa-navy">Payment Ready</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Prepared for M-Pesa Daraja 2.0 STK push and international card gateways.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-nexa-navy">Diaspora Collaboration</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Milestone-based previews, video check-ins, and frictionless remote delivery.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INDUSTRY CATEGORIES & SEARCH FILTER SECTION */}
      <section id="demos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-nexa-teal border border-teal-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nexa-navy tracking-tight">
            Industry Website Demos
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select an industry or search to explore our fully functional website models. Every demo features realistic layouts, forms, and business flows.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card space-y-6">
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search website demos by business name, category, or capability..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal focus:border-transparent shadow-sm text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Horizontal Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {homeCategories.map(cat => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.label
                    ? 'bg-nexa-navy text-white shadow-card scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span>Showing <strong>{filteredDemos.length}</strong> website showcases</span>
            {(selectedCategory !== "All Projects" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-nexa-teal font-semibold hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>

        </div>

        {/* 4. RESPONSIVE GRID OF DEMO PROJECT CARDS */}
        {filteredDemos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                {/* Visual Preview Screenshot / Mockup */}
                <Link to={project.route} className="relative aspect-[16/10] overflow-hidden bg-slate-900 block cursor-pointer">
                  <img
                    src={project.previewImage}
                    onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80")}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-950/85 text-teal-300 backdrop-blur-sm border border-teal-500/20">
                      Live Demo
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-nexa-navy group-hover:text-nexa-teal transition-colors">
                      <Link to={project.route}>{project.name}</Link>
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
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-nexa-navy hover:bg-nexa-navy-light text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                    >
                      <span>Preview Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-nexa-teal" />
                    </Link>

                    <button
                      onClick={() => openRequestModal(project.name, project.category)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-nexa-teal text-slate-700 hover:text-nexa-teal text-xs font-semibold transition-all active:scale-95"
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

      {/* 5. INTERACTIVE PROJECT SCOPE & INSTANT QUOTE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-nexa-navy to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-premium border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-semibold">
                <Sliders className="w-3.5 h-3.5" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Calculate Your Ideal Website Scope
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Select your industry and must-have features to see the recommended package structure and turnaround timeline for your business.
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>No obligation consultation & transparent breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Direct WhatsApp and phone assistance</span>
                </div>
              </div>
            </div>

            {/* Interactive Selector */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-6">
              
              {/* Industry Select */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-2">
                  1. Your Business Industry:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Construction", "Hotels & Lodges", "Real Estate", "Property Management", "Dining & Food", "Medical & Clinics"].map(ind => (
                    <button
                      key={ind}
                      onClick={() => setEstimatorIndustry(ind)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                        estimatorIndustry === ind 
                          ? 'bg-teal-500 text-slate-950 font-bold shadow-sm' 
                          : 'bg-white/10 text-slate-200 hover:bg-white/15'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature checkboxes */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-2">
                  2. Select Desired Features:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "Instant Quotation / RFP Form",
                    "Direct WhatsApp Integration",
                    "High-Resolution Photo Gallery",
                    "Google Maps & SEO Foundations",
                    "Interactive Calculator / Booking",
                    "M-Pesa / Payment Integration"
                  ].map(feat => {
                    const isChecked = estimatorFeatures.includes(feat);
                    return (
                      <button
                        key={feat}
                        onClick={() => toggleEstimatorFeature(feat)}
                        className={`flex items-center gap-2 p-2.5 rounded-lg text-left transition-all ${
                          isChecked 
                            ? 'bg-teal-500/20 border border-teal-500/50 text-white' 
                            : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${isChecked ? 'bg-teal-400 text-slate-950' : 'border border-slate-500'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{feat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Result Summary Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Recommended Solution:</span>
                  <p className="text-base font-extrabold text-teal-300">{getRecommendedPackage().name}</p>
                  <p className="text-xs text-slate-300">Est. Timeline: {getRecommendedPackage().turnaround}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openRequestModal(`${getRecommendedPackage().name} (${estimatorIndustry})`, estimatorIndustry)}
                    className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Request Quote
                  </button>
                  <a
                    href={siteConfig.getWhatsAppLink(`Hi Nexa Web Studio, I used your scope calculator for my ${estimatorIndustry} business (${estimatorFeatures.length} features selected). Could you provide a formal quote?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    title="Send specs to WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. WEBSITE PACKAGES SECTION (Configurable, Request a Quote) */}
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
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
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

      {/* 7. SIMPLE THREE-STEP PROCESS */}
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
              We deploy your site to high-speed cloud hosting, configure your custom domain, optimize Google SEO, and provide post-launch support.
            </p>
          </div>
        </div>
      </section>

      {/* 8. STRONG FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-nexa-navy via-[#0B3A64] to-nexa-navy rounded-3xl p-8 sm:p-14 text-white text-center shadow-premium relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Build a Website That Inspires Trust?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Tell us about your project or schedule a free consultation. Connect directly with our team in Nairobi serving businesses in Kenya and international diaspora owners worldwide.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openRequestModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-nexa-teal hover:bg-nexa-teal-light text-white font-bold text-base shadow-lg transition-all active:scale-95"
              >
                <span>Request a Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp ({siteConfig.whatsappDisplay})</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Or email our lead engineer directly at <a href={`mailto:${siteConfig.email}`} className="text-teal-300 underline font-medium">{siteConfig.email}</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
