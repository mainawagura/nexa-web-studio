import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, 
  Zap, Globe, Search, MessageSquare, Check, HelpCircle, HardHat, 
  HeartPulse, Hotel, Building2, Utensils, X, ChevronDown, ChevronRight,
  ShoppingBag, GraduationCap, Flower2, Truck, Compass, HeartHandshake,
  Layers, Palette, Code2, RefreshCw, Rocket, Settings, Gauge
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { siteConfig } from '../config/siteConfig';
import { MainLayoutContext } from '../layouts/MainLayout';
import { ProjectCategory } from '../types/portfolio';

export const HomePage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();
  
  // 12 Industry Categories strictly defined in Master Prompt
  const masterCategories: { label: ProjectCategory; short: string; icon: React.ReactNode }[] = [
    { label: "All Projects", short: "All (12)", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: "Property Management & Real Estate", short: "Property & Realty", icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: "Construction & Engineering", short: "Construction", icon: <HardHat className="w-3.5 h-3.5" /> },
    { label: "Hotels & Hospitality", short: "Hotels & Lodges", icon: <Hotel className="w-3.5 h-3.5" /> },
    { label: "Restaurants & Cafés", short: "Restaurants", icon: <Utensils className="w-3.5 h-3.5" /> },
    { label: "Consulting & Professional Services", short: "Consulting", icon: <Globe className="w-3.5 h-3.5" /> },
    { label: "Clinics & Healthcare", short: "Clinics", icon: <HeartPulse className="w-3.5 h-3.5" /> },
    { label: "Retail & E-commerce", short: "Retail & E-comm", icon: <ShoppingBag className="w-3.5 h-3.5" /> },
    { label: "Schools & Education", short: "Education", icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { label: "Beauty, Salons & Wellness", short: "Beauty & Spa", icon: <Flower2 className="w-3.5 h-3.5" /> },
    { label: "Logistics & Transport", short: "Logistics", icon: <Truck className="w-3.5 h-3.5" /> },
    { label: "Travel & Tourism", short: "Travel & Safaris", icon: <Compass className="w-3.5 h-3.5" /> },
    { label: "Nonprofits & Community Organizations", short: "Nonprofits", icon: <HeartHandshake className="w-3.5 h-3.5" /> }
  ];

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filtered projects
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

  // Featured 6 projects for Section C
  const featuredProjects = useMemo(() => {
    return projectsData.filter(p => p.featured).slice(0, 6);
  }, []);

  // 9 Agency Services from Section 3.E
  const agencyServices = [
    {
      title: "Business Website Design",
      desc: "Art-directed, conversion-focused visual design that captures your unique brand prestige and immediately earns customer trust.",
      icon: <Palette className="w-6 h-6 text-nexa-lime" />,
      benefit: "Distinguishes your company from generic competitor templates."
    },
    {
      title: "Custom Website Development",
      desc: "Modern, high-performance web engineering built with clean code architecture, instant load speeds, and fluid responsiveness.",
      icon: <Code2 className="w-6 h-6 text-nexa-lime" />,
      benefit: "Flawless rendering across phones, tablets, and desktops."
    },
    {
      title: "Ecommerce Development",
      desc: "Seamless digital storefronts featuring structured catalogs, dynamic shopping carts, M-Pesa STK push, and card payment readiness.",
      icon: <ShoppingBag className="w-6 h-6 text-nexa-lime" />,
      benefit: "Turns online visitors into paying customer transactions 24/7."
    },
    {
      title: "Website Redesign & Upgrades",
      desc: "Transforming slow, outdated websites into contemporary, mobile-first assets that command higher perceived authority.",
      icon: <RefreshCw className="w-6 h-6 text-nexa-lime" />,
      benefit: "Restores relevance and dramatically reduces visitor bounce rates."
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Laser-focused single-purpose landing pages engineered specifically for digital ad campaigns, promotions, or product launches.",
      icon: <Rocket className="w-6 h-6 text-nexa-lime" />,
      benefit: "Maximizes return on advertising spend with clear inquiry funnels."
    },
    {
      title: "Cloud Hosting & Domain Setup",
      desc: "End-to-end guidance deploying to global high-speed edge networks, SSL certificates, custom .com/.co.ke domains, and business email.",
      icon: <Globe className="w-6 h-6 text-nexa-lime" />,
      benefit: "Zero technical friction from development to public launch."
    },
    {
      title: "SEO Foundations & Indexing",
      desc: "Structured semantic schema, mobile usability optimization, OpenGraph social preview tags, and Google Search Console registration.",
      icon: <Gauge className="w-6 h-6 text-nexa-lime" />,
      benefit: "Helps local and international clients find your business online."
    },
    {
      title: "Website Maintenance & Support",
      desc: "Proactive security patching, asset updates, backup routines, and rapid turnaround for seasonal content additions.",
      icon: <Settings className="w-6 h-6 text-nexa-lime" />,
      benefit: "Keeps your digital presence reliable and fresh without downtime."
    },
    {
      title: "Performance Optimization",
      desc: "Modern asset compression, next-gen WebP formatting, code-splitting, and edge CDN caching ensuring rapid speeds on mobile networks.",
      icon: <Zap className="w-6 h-6 text-nexa-lime" />,
      benefit: "Prevents customer drop-off on mobile 3G/4G connections."
    }
  ];

  // 5-Step Process from Section 3.F
  const agencyProcess = [
    {
      step: "01",
      title: "Discover",
      desc: "We understand your core business, target clientele, commercial goals, and primary competitive positioning."
    },
    {
      step: "02",
      title: "Plan",
      desc: "We define page architecture, content hierarchy, conversion touchpoints, and intuitive user journeys."
    },
    {
      step: "03",
      title: "Design",
      desc: "We develop the bespoke visual direction, editorial typography, photography curation, and layout mockups."
    },
    {
      step: "04",
      title: "Build",
      desc: "We implement responsive components, test cross-browser compatibility, and optimize loading speeds."
    },
    {
      step: "05",
      title: "Launch",
      desc: "We deploy to secure global cloud infrastructure, configure your custom domain, and provide ongoing support."
    }
  ];

  // Factual Trust Pillars from Section 3.H
  const trustPillars = [
    { title: "Responsive Design", desc: "Pixel-perfect touch navigation tested across iOS, Android, laptops, and ultra-wide displays." },
    { title: "Professional Presentation", desc: "Editorial visual hierarchy and typography that reflects the true caliber of your enterprise." },
    { title: "Clear Calls to Action", desc: "Strategic WhatsApp buttons, quote request forms, and inquiry triggers that maximize leads." },
    { title: "Performance-Conscious", desc: "Lightweight script bundles and optimized assets built for fast loading on Kenyan and international networks." },
    { title: "SEO-Friendly Foundations", desc: "Proper semantic headings, OpenGraph social cards, clean URLs, and Google indexing readiness." },
    { title: "Secure Deployment", desc: "Automatic HTTPS/SSL encryption and modern edge CDN infrastructure with 99.9% uptime." },
    { title: "Ongoing Support Options", desc: "Reliable post-launch maintenance, content additions, and developer assistance when needed." }
  ];

  // FAQs strictly defined in Section 3.I
  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Most bespoke business websites take between 7 to 14 business days from content finalization to launch. Starter websites can be completed in 5 to 7 days, while complex platforms with custom workflows or large catalogs typically require 2 to 3 weeks."
    },
    {
      q: "Can you design a website for my industry?",
      a: "Yes. As showcased in our live interactive demos, we design custom websites tailored for property managers, contractors, hotels, medical clinics, corporate advisors, restaurants, e-commerce retailers, schools, and service firms."
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Absolutely. Over 75% of web traffic in Kenya and international markets arrives via smartphones. Every website we build is mobile-first, ensuring smooth thumb navigation, fast loading, and tap-to-call or tap-to-WhatsApp capabilities."
    },
    {
      q: "Can I update the content later?",
      a: "Yes. We structure your site with clean, maintainable content files or integrate your preferred content workflow so updating services, phone numbers, prices, or photo galleries is straightforward."
    },
    {
      q: "Can you help with hosting and domain setup?",
      a: "Yes. We provide complete setup assistance, connecting your custom domain (such as .com or .co.ke), deploying on high-speed cloud hosting with SSL security, and configuring professional business email addresses."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We frequently modernize older, slow, or template-heavy websites, retaining your established domain authority while transforming the visual design, mobile speed, and customer conversion flow."
    },
    {
      q: "How do I request a quotation?",
      a: "You can click 'Start a Project' anywhere on this site to submit your project requirements, or message our lead developer directly on WhatsApp at +254 706 059 826 for an immediate consultation."
    }
  ];

  // Image fallback handler
  const handleImgFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl: string) => {
    const target = e.currentTarget;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-24 text-slate-800">
      
      {/* =========================================================================
          B. HERO SECTION (Exact Master Prompt Requirements)
          ========================================================================= */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 bg-nexa-navy text-white overflow-hidden border-b border-slate-800">
        
        {/* Subtle Ambient Atmosphere */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-nexa-lime/10 rounded-full blur-[140px] pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & Dual CTAs */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-nexa-lime text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-nexa-lime animate-pulse"></span>
                <span>Nexa Web Studio • Premium Digital Agency</span>
              </div>

              {/* Exact Required Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
                Your Business <br />
                Deserves a <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexa-lime via-[#d8f88a] to-emerald-300">
                  Better Website.
                </span>
              </h1>

              {/* Exact Required Supporting Text */}
              <p className="text-base sm:text-xl text-slate-300 max-w-xl leading-relaxed font-normal">
                We design and build modern websites that help businesses stand out, earn trust, and turn visitors into customers.
              </p>

              {/* Two Required Calls to Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nexa-lime hover:bg-[#bcf054] text-nexa-navy font-black text-sm uppercase tracking-wider shadow-glow-lime hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  onClick={() => openRequestModal()}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 backdrop-blur-sm shadow-sm transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-nexa-lime" />
                  <span>Start a Project</span>
                </button>
              </div>

              {/* Subtle Animated Detail: Marquee Capabilities Ticker */}
              <div className="pt-6 border-t border-slate-800/80">
                <p className="text-[11px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">
                  Bespoke Industry Solutions:
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  {["Property Portals", "Construction Showcase", "Hotel Booking Flows", "Artisanal Dining", "Corporate Advisory", "Clinic Portals"].map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nexa-lime"></span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Art-Directed Overlapping Previews in Desktop & Mobile Frames */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Desktop Browser Frame: Havenstone Properties Preview */}
                <div className="bg-slate-900 rounded-2xl p-3 shadow-2xl border-2 border-slate-700/80 group">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded text-[9px]">
                        nexawebstudio.com/demos/property
                      </span>
                    </div>
                    <span className="text-nexa-lime font-mono text-[9px] font-semibold">Havenstone Properties</span>
                  </div>

                  <Link to="/demos/property" className="block relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 group/img">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                      onError={(e) => handleImgFallback(e, "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80")}
                      alt="Havenstone Properties Desktop Demo Preview"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white text-left">
                      <span className="text-[10px] uppercase font-bold text-amber-300">Property & Real Estate</span>
                      <p className="text-lg font-black tracking-tight mt-0.5">Havenstone Properties</p>
                      <p className="text-xs text-slate-300 line-clamp-1">Luxury rentals, search filters, and diaspora owner remittance.</p>
                      <span className="text-xs font-bold text-nexa-lime mt-2 flex items-center gap-1">
                        <span>Click to explore live demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Overlapping Mobile Smartphone Frame: The Alder House Hotel */}
                <Link
                  to="/demos/hotel"
                  className="absolute -bottom-8 -right-4 sm:-right-8 w-44 bg-slate-950 rounded-2xl p-2 shadow-2xl border-2 border-slate-700 hidden sm:block transform rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-pointer z-20 group/mob"
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 relative">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80"
                      onError={(e) => handleImgFallback(e, "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80")}
                      alt="The Alder House Hotel Mobile Demo"
                      className="w-full h-full object-cover group-hover/mob:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-end text-white text-left">
                      <span className="text-[9px] font-bold text-amber-300">Hospitality Flow</span>
                      <p className="text-xs font-black">The Alder House</p>
                      <p className="text-[9px] text-slate-300">Live stay calculator</p>
                      <div className="mt-1 px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[8px] font-bold text-center">
                        Direct Booking Ready
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Overlapping Floating Tag: Ironwood Construction */}
                <Link
                  to="/demos/construction"
                  className="absolute -top-6 -left-4 sm:-left-8 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-2xl hidden md:flex items-center gap-3 z-20 hover:scale-105 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-white">Ironwood Construction</p>
                    <p className="text-[10px] text-orange-400 font-semibold">Tender RFP Estimator Demo</p>
                  </div>
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          C. SELECTED WORK: "Websites Built Around Business Goals" (Section 3.C)
          ========================================================================= */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Curated Demonstrations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-nexa-navy tracking-tight">
              Websites Built Around Business Goals.
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mt-2">
              Every website we build is intentionally architected around measurable commercial outcomes—from winning high-value tenders to capturing direct reservations.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-nexa-navy hover:text-emerald-700 transition-colors"
          >
            <span>View All 12 Showcases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Varied Editorial Layout: 6 Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
            >
              {/* Dual Visual Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.previewImage}
                  onError={(e) => handleImgFallback(e, "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80")}
                  alt={`${project.name} Desktop Preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Mobile Preview Badge Floating in Corner */}
                {project.mobilePreviewImage && (
                  <div className="absolute bottom-3 right-3 w-16 aspect-[9/16] rounded-lg overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                    <img 
                      src={project.mobilePreviewImage} 
                      alt={`${project.name} Mobile Preview`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 shadow-sm">
                    {project.categoryDisplay || project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-nexa-lime border border-slate-800">
                    Demo Project
                  </span>
                </div>
              </div>

              {/* Card Contextual Information */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-black text-nexa-navy group-hover:text-emerald-800 transition-colors">
                    <Link to={project.route}>{project.name}</Link>
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{project.industry}</p>
                  
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.keyCapabilities.slice(0, 3).map((cap, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-nexa-lime"></span>
                        <span>{cap}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Two Distinct Actions: "Explore Demo" & "Request a Similar Website" */}
                <div className="pt-5 border-t border-slate-100 flex items-center gap-3">
                  <Link
                    to={project.route}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-nexa-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Explore Demo</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>

                  <button
                    onClick={() => openRequestModal(project.name, project.category)}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-3 rounded-xl border border-slate-200 hover:border-nexa-navy text-slate-700 hover:text-nexa-navy font-bold text-xs transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Request Similar</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          D. INDUSTRY SHOWCASE: 12 Interactive Categories (Section 3.D)
          ========================================================================= */}
      <section id="demos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nexa-lime/20 text-emerald-900 border border-nexa-lime/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Industry Selector</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-nexa-navy tracking-tight">
            Explore Websites in Your Industry
          </h2>
          <p className="text-base text-slate-600">
            Select an industry or search to test realistic layouts, live forms, and distinct art direction across 12 diverse business sectors.
          </p>
        </div>

        {/* Filter Controls: Search & 12 Horizontal Industry Buttons */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search website demos by business name, industry, or capability..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime focus:border-transparent text-slate-800 placeholder-slate-400 shadow-sm transition-all"
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

          {/* Interactive 12 Industry Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {masterCategories.map(cat => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.label
                    ? 'bg-nexa-navy text-white shadow-md scale-105'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                }`}
              >
                {cat.icon}
                <span>{cat.short}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200">
            <span>Showing <strong>{filteredDemos.length}</strong> of 12 industry website models</span>
            {(selectedCategory !== "All Projects" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-emerald-700 font-bold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* Grid of Results */}
        {filteredDemos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map(demo => (
              <div
                key={demo.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={demo.previewImage}
                    onError={(e) => handleImgFallback(e, "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80")}
                    alt={demo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-900 shadow-sm">
                      {demo.categoryDisplay || demo.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-nexa-lime">
                      Live Demo
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-nexa-navy group-hover:text-emerald-800 transition-colors">
                      <Link to={demo.route}>{demo.name}</Link>
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{demo.industry}</p>
                    <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {demo.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={demo.route}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-nexa-navy hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <span>Explore Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openRequestModal(demo.name, demo.category)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-nexa-navy text-slate-700 hover:text-nexa-navy text-xs font-bold transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      <span>Request Similar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
            <h3 className="text-base font-bold text-nexa-navy">No Demos Matched "{searchQuery}"</h3>
            <p className="text-xs text-slate-500">Try clearing the search or choosing another industry category.</p>
            <button
              onClick={() => { setSelectedCategory("All Projects"); setSearchQuery(""); }}
              className="px-5 py-2.5 bg-nexa-navy text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* =========================================================================
          E. SERVICES: 9 Core Agency Services with Editorial Layout (Section 3.E)
          ========================================================================= */}
      <section className="bg-slate-900 text-white py-24 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-black text-nexa-lime">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Services Designed Around Commercial Outcomes
            </h2>
            <p className="text-base text-slate-300">
              We focus on business growth, perceived credibility, and conversion clarity rather than abstract technical jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencyServices.map((svc, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-nexa-lime/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-nexa-lime transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-nexa-lime font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-nexa-lime" />
                  <span>{svc.benefit}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          F. PROCESS: 5-Step Process (Section 3.F)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-black text-slate-500">
            How We Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-nexa-navy tracking-tight">
            From Vision to Live Website in 5 Steps
          </h2>
          <p className="text-base text-slate-600">
            A structured, milestone-driven framework ensuring clear communication, video previews, and on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {agencyProcess.map((step, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card flex flex-col justify-between relative hover:border-nexa-navy transition-all"
            >
              <div>
                <span className="text-4xl font-black font-mono text-slate-200">
                  {step.step}
                </span>
                <h3 className="text-lg font-black text-nexa-navy mt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-[11px] font-bold text-emerald-700">
                <span>Phase {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          G. PRICING OR PACKAGES: Starter, Business, Ecommerce (Section 3.G)
          ========================================================================= */}
      <section className="bg-slate-50 py-24 border-t border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-black text-slate-500">
              Clear Engagements
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-nexa-navy tracking-tight">
              Website Packages Built for Growth
            </h2>
            <p className="text-base text-slate-600">
              Transparent scope definitions tailored to your stage of business. Every quotation is customized to your exact requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {siteConfig.packages.map(pkg => (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 border flex flex-col justify-between transition-all ${
                  pkg.popular 
                    ? 'border-2 border-nexa-navy ring-4 ring-nexa-navy/5 shadow-2xl relative' 
                    : 'border-slate-200/90 shadow-card'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-nexa-lime text-nexa-navy mb-4 shadow-sm">
                      Most Popular Tier
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-nexa-navy">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.tagline}</p>

                  <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Indicative Pricing:</span>
                    <span className="text-sm font-black text-nexa-navy font-mono">{pkg.priceNote}</span>
                  </div>

                  <div className="mt-6 space-y-3 text-xs text-slate-600">
                    <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">What's Included:</p>
                    {pkg.features.map((f, i) => (
                      <p key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-relaxed">{f}</span>
                      </p>
                    ))}
                  </div>
                </div>

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
                    href={siteConfig.getWhatsAppLink(`Hi Nexa Web Studio, I would like to request an indicative quotation for the ${pkg.name}.`)}
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

        </div>
      </section>

      {/* =========================================================================
          H. TRUST SECTION: Factual, Supportable Standards (Section 3.H)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-nexa-navy rounded-3xl p-8 sm:p-14 text-white space-y-12 border border-slate-800">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-black text-nexa-lime">
              Engineering Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Built on Solid Technical & Commercial Pillars
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              We adhere strictly to factual, verifiable web development practices to ensure your platform remains fast, secure, and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-nexa-lime">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-white text-sm">{p.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          I. FREQUENTLY ASKED QUESTIONS: Accordion (Section 3.I)
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-black text-slate-500">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-nexa-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about working with Nexa Web Studio.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-subtle transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-nexa-navy text-sm sm:text-base hover:text-emerald-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          J. FINAL CONVERSION SECTION (Exact Master Prompt Requirements)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-nexa-navy via-[#171A21] to-nexa-navy rounded-3xl p-8 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden border border-slate-800">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nexa-lime/20 text-nexa-lime border border-nexa-lime/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Discuss Your Project</span>
            </div>

            {/* Exact Required Closing Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Let's Build a Website That Moves Your Business Forward.
            </h2>

            {/* Exact Required Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us about your business, and let's create a website that reflects the quality of your work.
            </p>
            
            {/* Required Actions: Start a Project, WhatsApp Us, Email Us */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openRequestModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nexa-lime hover:bg-[#bcf054] text-nexa-navy font-black text-sm uppercase tracking-wider shadow-glow-lime hover:shadow-2xl transition-all active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us ({siteConfig.whatsappDisplay})</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
              >
                <span>Email Us</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Based in Nairobi, Kenya • Direct delivery for local enterprises and global diaspora entrepreneurs
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};
