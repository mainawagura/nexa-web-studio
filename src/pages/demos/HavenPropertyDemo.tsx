import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Building2, Key, ShieldCheck, CheckCircle2, MessageSquare, Phone, 
  Mail, MapPin, Search, Filter, Wrench, ArrowRight, UserCheck, 
  Send, Sparkles, Bed, Bath, Maximize2, Calendar, Check, X,
  ExternalLink, Clock, FileText, ChevronRight, SlidersHorizontal,
  Globe, AlertCircle, Camera, Car, CheckCircle, HelpCircle,
  BarChart3, RefreshCw, Eye
} from 'lucide-react';
import { propertyCatalog, landlordServicesData, demoTestimonials, companyFaq, PropertyItem } from '../../data/propertyDemoData';
import { siteConfig } from '../../config/siteConfig';

export const HavenPropertyDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'home' | 'properties' | 'services' | 'portal' | 'quote' | 'contact'>('home');
  
  // Mobile navigation drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Property Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBedrooms, setSelectedBedrooms] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  // Property Detail Modal State
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Viewing Schedule Form State (inside Property Detail Modal or Standalone)
  const [viewingFormSubmitted, setViewingFormSubmitted] = useState(false);
  const [viewerName, setViewerName] = useState("");
  const [viewerPhone, setViewerPhone] = useState("");
  const [viewerEmail, setViewerEmail] = useState("");
  const [viewingDate, setViewingDate] = useState("");
  const [viewingTimeline, setViewingTimeline] = useState("Immediate (Within 14 days)");
  const [viewingNotes, setViewingNotes] = useState("");

  // Landlord Quote Form State
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteOwnerName, setQuoteOwnerName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteResidency, setQuoteResidency] = useState("Resident in Kenya");
  const [quoteLocation, setQuoteLocation] = useState("");
  const [quotePropertyType, setQuotePropertyType] = useState("Multi-Unit Apartment Block");
  const [quoteUnits, setQuoteUnits] = useState("6–15 Units");
  const [quoteServiceLevel, setQuoteServiceLevel] = useState("Full-Service End-to-End Management");
  const [quoteTargetRent, setQuoteTargetRent] = useState("");
  const [quoteNotes, setQuoteNotes] = useState("");

  // Interactive Maintenance Request Logger (Tenant Demo)
  const [ticketUnit, setTicketUnit] = useState("");
  const [ticketCategory, setTicketCategory] = useState("Plumbing & Hot Water");
  const [ticketUrgency, setTicketUrgency] = useState("Normal");
  const [ticketDesc, setTicketDesc] = useState("");
  const [ticketSuccess, setTicketSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  // Portal interactive tab state
  const [portalTab, setPortalTab] = useState<'remittance' | 'rentroll' | 'maintenance'>('remittance');

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return propertyCatalog.filter(prop => {
      // Search query matches title, neighborhood, address, or amenities
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        prop.title.toLowerCase().includes(query) ||
        prop.neighborhood.toLowerCase().includes(query) ||
        prop.location.toLowerCase().includes(query) ||
        prop.address.toLowerCase().includes(query) ||
        prop.amenities.some(a => a.toLowerCase().includes(query));

      // Neighborhood filter
      const matchesNeighborhood = selectedNeighborhood === "All" || prop.neighborhood.toLowerCase() === selectedNeighborhood.toLowerCase();

      // Property type filter
      const matchesType = selectedType === "All" || prop.type.toLowerCase() === selectedType.toLowerCase();

      // Bedroom filter
      let matchesBeds = true;
      if (selectedBedrooms === "1") matchesBeds = prop.bedrooms === 1;
      else if (selectedBedrooms === "2") matchesBeds = prop.bedrooms === 2;
      else if (selectedBedrooms === "3") matchesBeds = prop.bedrooms === 3;
      else if (selectedBedrooms === "4+") matchesBeds = prop.bedrooms >= 4;

      // Price range filter
      let matchesPrice = true;
      if (selectedPriceRange === "under-80k") matchesPrice = prop.priceKsh < 80000;
      else if (selectedPriceRange === "80k-150k") matchesPrice = prop.priceKsh >= 80000 && prop.priceKsh <= 150000;
      else if (selectedPriceRange === "150k-250k") matchesPrice = prop.priceKsh > 150000 && prop.priceKsh <= 250000;
      else if (selectedPriceRange === "over-250k") matchesPrice = prop.priceKsh > 250000;

      return matchesSearch && matchesNeighborhood && matchesType && matchesBeds && matchesPrice;
    });
  }, [searchQuery, selectedNeighborhood, selectedType, selectedBedrooms, selectedPriceRange]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedNeighborhood("All");
    setSelectedType("All");
    setSelectedBedrooms("All");
    setSelectedPriceRange("All");
  };

  const handleOpenProperty = (property: PropertyItem) => {
    setSelectedProperty(property);
    setActiveGalleryIndex(0);
    setViewingFormSubmitted(false);
  };

  const handleViewingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (viewerName.trim() && viewerPhone.trim() && viewingDate) {
      setViewingFormSubmitted(true);
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteOwnerName.trim() && quotePhone.trim() && quoteLocation.trim()) {
      setQuoteSubmitted(true);
    }
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketUnit.trim() && ticketDesc.trim()) {
      setTicketId(`HST-${Math.floor(1000 + Math.random() * 9000)}`);
      setTicketSuccess(true);
    }
  };

  // Helper to open tab and scroll up smoothly
  const navigateToTab = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-900 font-sans min-h-screen selection:bg-[#C5A059] selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* BRAND HEADER & NAVIGATION                                     */}
      {/* ------------------------------------------------------------- */}
      <header className="bg-[#0A1E17] text-[#FAF8F5] sticky top-10 z-30 border-b border-[#1A382B] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Monogram */}
          <button 
            onClick={() => navigateToTab('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-lg bg-[#C5A059] flex items-center justify-center text-[#0A1E17] font-serif font-black text-2xl shadow-md group-hover:bg-[#d8b568] transition-colors">
              <span>H</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl tracking-wider text-white font-medium">HAVENSTONE</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30">
                  Kenya
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#C5A059] block -mt-1 tracking-widest">
                Properties & Asset Management
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest font-bold text-slate-300">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'properties', label: 'Rentals' },
              { id: 'services', label: 'Landlord Services' },
              { id: 'portal', label: 'Diaspora Portal' },
              { id: 'quote', label: 'Request Quote' },
              { id: 'contact', label: 'Contact' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => navigateToTab(tab.id as any)}
                className={`py-2 transition-all relative ${
                  activeTab === tab.id 
                    ? 'text-[#C5A059] font-black' 
                    : 'hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Havenstone Properties Management")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>

            <button
              onClick={() => navigateToTab('quote')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#d8b568] text-[#0A1E17] text-xs font-black uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Get Management Quote</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#142F24] text-slate-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1E17] border-t border-[#1A382B] px-4 pt-3 pb-6 space-y-2">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'properties', label: 'Properties for Rent' },
              { id: 'services', label: 'Landlord Management Services' },
              { id: 'portal', label: 'Diaspora & Landlord Portal' },
              { id: 'quote', label: 'Request a Management Quote' },
              { id: 'contact', label: 'Contact Havenstone' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => navigateToTab(tab.id as any)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-[#15382B] text-[#C5A059]' 
                    : 'text-slate-300 hover:bg-[#122A20] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#1A382B] flex flex-col gap-2">
              <a
                href={siteConfig.getWhatsAppLink(undefined, "Havenstone Properties")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>
              <button
                onClick={openRequestModal}
                className="w-full py-2.5 text-center rounded-lg bg-[#C5A059] text-[#0A1E17] text-xs font-black uppercase tracking-wider"
              >
                Request Similar Real Estate Site
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#0A1E17] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-[#1A382B]">
        {/* Subtle background ambient pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15382B] border border-[#275340] text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span>Nairobi & Kiambu Portfolio • Diaspora Asset Stewardship</span>
              </div>

              {/* Exact headline requested */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF8F5] leading-[1.12]">
                Better Property Management. <br />
                <span className="italic text-[#C5A059]">Better Returns.</span>
              </h1>

              {/* Exact supporting text requested */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Professional property management, carefully selected rental properties, and reliable service for landlords and tenants across Kenya.
              </p>

              {/* Dual Primary CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => navigateToTab('properties')}
                  className="px-7 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#d8b568] text-[#0A1E17] font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateToTab('services')}
                  className="px-7 py-3.5 rounded-xl bg-[#142F24] hover:bg-[#1A3B2E] text-white font-bold text-xs uppercase tracking-wider border border-[#26503E] transition-all"
                >
                  Property Management Services
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 border-t border-[#1A382B] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#C5A059]">120+</p>
                  <p className="text-[11px] text-slate-300 uppercase tracking-wider font-medium mt-0.5">Managed Units in Nairobi</p>
                </div>
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#C5A059]">98.4%</p>
                  <p className="text-[11px] text-slate-300 uppercase tracking-wider font-medium mt-0.5">On-Time Rent Collection</p>
                </div>
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#C5A059]">5th</p>
                  <p className="text-[11px] text-slate-300 uppercase tracking-wider font-medium mt-0.5">Monthly Remittance Date</p>
                </div>
                <div>
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-[#C5A059]">0%</p>
                  <p className="text-[11px] text-slate-300 uppercase tracking-wider font-medium mt-0.5">Hidden Repair Markups</p>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#275340] shadow-2xl bg-[#0D261D] group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="Havenstone Managed Penthouse in Nairobi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E17] via-transparent to-transparent opacity-90" />
                </div>

                {/* Overlaid Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#C5A059] text-[#0A1E17] text-[10px] font-black uppercase tracking-wider rounded">
                      Featured Managed Residence
                    </span>
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Available for Lease
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">The Sovereign Duplex Penthouse</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Riverside Drive, Nairobi</span>
                    <span className="text-slate-500">•</span>
                    <span className="font-semibold text-[#C5A059]">KSh 240,000 / month</span>
                  </p>
                  
                  <div className="pt-3 border-t border-[#1F4434] flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleOpenProperty(propertyCatalog[0])}
                      className="text-[#C5A059] hover:underline font-bold flex items-center gap-1"
                    >
                      <span>View Residence Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-400">4 Bed • 4.5 Bath • 3,850 sq ft</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TWO DOORS: AUDIENCE GATEWAY                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Door 1: For Property Owners */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5E0D8] shadow-card hover:shadow-elevated transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A1E17] text-[#C5A059] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block">
                For Property Owners & Diaspora Landlords
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0A1E17]">
                Protect Your Asset. Maximize Net Rental Remittance.
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tired of tenant excuses, delayed rent, and surprise maintenance deductions? We coordinate vetted tenant onboarding, strict Paybill collections, and photographic inspections for complete peace of mind.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToTab('services')}
                className="px-4 py-2.5 rounded-xl bg-[#0A1E17] text-white hover:bg-[#133529] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Explore Landlord Services
              </button>
              <button
                onClick={() => navigateToTab('quote')}
                className="px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-slate-800 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Door 2: For Prospective Tenants */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5E0D8] shadow-card hover:shadow-elevated transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#9C7933] flex items-center justify-center font-bold">
                <Key className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#9C7933] block">
                For Prospective Tenants
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0A1E17]">
                Vetted Rental Homes in Nairobi & Kiambu.
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Discover quality apartments, townhouses, and penthouses in Kilimani, Westlands, Ruaka, Ruiru, and Riverside. Transparent deposit terms, direct agent viewings, and zero viewing fees.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToTab('properties')}
                className="px-4 py-2.5 rounded-xl bg-[#C5A059] text-[#0A1E17] hover:bg-[#d8b568] font-black text-xs uppercase tracking-wider transition-colors"
              >
                Browse Available Rentals
              </button>
              <a
                href={siteConfig.getWhatsAppLink("Hello Havenstone, I am looking for a rental residence in Nairobi. Can you share current vacancies?")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tenant Concierge</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CONTENT AREA ACCORDING TO ACTIVE TAB                      */}
      {/* ------------------------------------------------------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* =========================================================== */}
        {/* TAB: PROPERTIES CATALOGUE                                    */}
        {/* =========================================================== */}
        {(activeTab === 'home' || activeTab === 'properties') && (
          <section id="properties-section" className="space-y-10">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059] block">
                  Curated Rental Portfolio
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A1E17] mt-1">
                  Available Residences for Lease
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  Sample properties managed by Havenstone across Nairobi and Kiambu. Each listing features guaranteed power backup, reliable water, and transparent tenancy terms.
                </p>
              </div>

              {/* Demo Disclaimer Pill */}
              <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 font-medium max-w-xs">
                <strong>Illustrative Demo:</strong> Sample listings created for Nexa Web Studio real estate demonstration.
              </div>
            </div>

            {/* Filter Controls Bar */}
            <div className="bg-white rounded-2xl border border-[#E5E0D8] p-5 sm:p-6 shadow-card space-y-4">
              
              {/* Row 1: Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search by neighborhood, property title, or street (e.g. Kilimani, Westlands, Ruaka, Ruiru, Dennis Pritt)..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-slate-800 placeholder-slate-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Row 2: Four Filter Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                
                {/* Neighborhood Filter */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Neighborhood / Area
                  </label>
                  <select
                    value={selectedNeighborhood}
                    onChange={e => setSelectedNeighborhood(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="All">All Locations (Nairobi & Kiambu)</option>
                    <option value="Kilimani">Kilimani</option>
                    <option value="Westlands">Westlands</option>
                    <option value="Ruaka">Ruaka</option>
                    <option value="Ruiru">Ruiru</option>
                    <option value="Riverside">Riverside</option>
                    <option value="Lavington">Lavington</option>
                    <option value="Kileleshwa">Kileleshwa</option>
                    <option value="Parklands">Parklands</option>
                  </select>
                </div>

                {/* Property Type Filter */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="All">All Property Types</option>
                    <option value="Apartment">Executive Apartments</option>
                    <option value="Penthouse">Luxury Penthouses</option>
                    <option value="Townhouse">Gated Townhouses</option>
                    <option value="Villa">Standalone Villas</option>
                  </select>
                </div>

                {/* Bedroom Filter */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Bedrooms
                  </label>
                  <select
                    value={selectedBedrooms}
                    onChange={e => setSelectedBedrooms(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>

                {/* Monthly Rent (KSh) Filter */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Monthly Rent (KSh)
                  </label>
                  <select
                    value={selectedPriceRange}
                    onChange={e => setSelectedPriceRange(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="All">All Rental Budgets</option>
                    <option value="under-80k">Under KSh 80,000</option>
                    <option value="80k-150k">KSh 80,000 – KSh 150,000</option>
                    <option value="150k-250k">KSh 150,000 – KSh 250,000</option>
                    <option value="over-250k">KSh 250,000+</option>
                  </select>
                </div>

              </div>

              {/* Active Filter Tags & Reset */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <span>Showing <strong>{filteredProperties.length}</strong> of <strong>{propertyCatalog.length}</strong> verified residences</span>
                  {(searchQuery || selectedNeighborhood !== "All" || selectedType !== "All" || selectedBedrooms !== "All" || selectedPriceRange !== "All") && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                      Filters applied
                    </span>
                  )}
                </div>

                {(searchQuery || selectedNeighborhood !== "All" || selectedType !== "All" || selectedBedrooms !== "All" || selectedPriceRange !== "All") && (
                  <button
                    onClick={resetFilters}
                    className="text-xs font-bold text-[#9C7933] hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>

            </div>

            {/* Properties Grid */}
            {filteredProperties.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#E5E0D8] p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-800">No Matching Residences Found</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  We could not find rental properties matching your current filter criteria. Try broadening your location or price range.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-[#0A1E17] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#142F24]"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProperties.map(prop => (
                  <article 
                    key={prop.id}
                    className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
                  >
                    {/* Image Container with Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={prop.heroImage}
                        alt={`${prop.title} in ${prop.location}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 bg-[#0A1E17]/90 backdrop-blur-sm text-[#C5A059] text-[10px] font-black uppercase tracking-wider rounded-md border border-[#C5A059]/30">
                          {prop.tag}
                        </span>
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold rounded-md flex items-center gap-1">
                          <Camera className="w-3 h-3 text-[#C5A059]" />
                          <span>{prop.gallery.length} Photos</span>
                        </span>
                      </div>

                      {/* Bottom Info Bar over Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between text-white">
                        <div>
                          <p className="text-xl font-bold font-serif text-[#FAF8F5] leading-none">
                            {prop.priceDisplay}
                          </p>
                          <p className="text-[10px] text-slate-300 mt-1">{prop.serviceCharge}</p>
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#C5A059] text-[#0A1E17] uppercase tracking-wide">
                          {prop.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      
                      <div>
                        {/* Neighborhood Pill & Title */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] text-slate-700 border border-[#E5E0D8]">
                            {prop.neighborhood}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#C5A059]" />
                            <span>{prop.location}</span>
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-[#0A1E17] group-hover:text-[#9C7933] transition-colors line-clamp-1">
                          {prop.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                          {prop.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-4 gap-2 text-xs text-slate-700 font-medium">
                          <div className="flex items-center gap-1.5" title="Bedrooms">
                            <Bed className="w-4 h-4 text-slate-400" />
                            <span>{prop.bedrooms} Beds</span>
                          </div>
                          <div className="flex items-center gap-1.5" title="Bathrooms">
                            <Bath className="w-4 h-4 text-slate-400" />
                            <span>{prop.bathrooms} Baths</span>
                          </div>
                          <div className="flex items-center gap-1.5" title="Parking slots">
                            <Car className="w-4 h-4 text-slate-400" />
                            <span>{prop.parkingBays} Cars</span>
                          </div>
                          <div className="flex items-center gap-1.5" title="Floor area">
                            <Maximize2 className="w-4 h-4 text-slate-400" />
                            <span>{prop.sqft}</span>
                          </div>
                        </div>

                        {/* Amenities Chips */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {prop.amenities.slice(0, 3).map((amenity, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 rounded-md bg-[#FAF8F5] text-slate-700 text-[10px] font-medium border border-slate-200/80 flex items-center gap-1"
                            >
                              <Check className="w-2.5 h-2.5 text-[#C5A059]" />
                              <span>{amenity}</span>
                            </span>
                          ))}
                          {prop.amenities.length > 3 && (
                            <span className="px-2 py-1 rounded-md bg-slate-50 text-slate-500 text-[10px]">
                              +{prop.amenities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                        <button
                          onClick={() => handleOpenProperty(prop)}
                          className="flex-1 py-3 rounded-xl bg-[#0A1E17] hover:bg-[#15382B] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>View Property</span>
                        </button>

                        <a
                          href={siteConfig.getWhatsAppLink(`Hello Havenstone Properties, I am inquiring regarding ${prop.title} (${prop.priceDisplay}) located in ${prop.location}. Is it currently available for private viewing?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1 text-xs font-bold"
                          title="Direct WhatsApp Enquiry"
                        >
                          <MessageSquare className="w-4 h-4 text-emerald-600" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </a>
                      </div>

                    </div>
                  </article>
                ))}
              </div>
            )}

          </section>
        )}

        {/* =========================================================== */}
        {/* TAB: LANDLORD SERVICES                                      */}
        {/* =========================================================== */}
        {(activeTab === 'home' || activeTab === 'services') && (
          <section id="services-section" className="space-y-14">
            
            {/* Dark Section Hero Container */}
            <div className="bg-[#0A1E17] rounded-3xl p-8 sm:p-14 text-white space-y-12 border border-[#1A382B] shadow-2xl">
              
              <div className="max-w-3xl space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">
                  Landlord Asset Stewardship
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF8F5] leading-tight">
                  Comprehensive Property Management <br />
                  <span className="italic text-[#C5A059]">Across Kenya & the Diaspora.</span>
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We manage high-value residential blocks, townhouses, and individual luxury units for local investors and overseas diaspora landlords. Our disciplined framework eliminates reconciliation leakage, arrears excuses, and unapproved repair markups.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateToTab('quote')}
                    className="px-6 py-3 rounded-xl bg-[#C5A059] text-[#0A1E17] font-black text-xs uppercase tracking-wider hover:bg-[#d8b568] transition-colors"
                  >
                    Request a Management Proposal
                  </button>
                  <button
                    onClick={() => navigateToTab('portal')}
                    className="px-6 py-3 rounded-xl bg-[#142F24] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1A3B2E] border border-[#275340]"
                  >
                    View Diaspora Portal Demo
                  </button>
                </div>
              </div>

              {/* 6 Core Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landlordServicesData.map(service => (
                  <div 
                    key={service.id} 
                    className="p-6 rounded-2xl bg-[#0D261D] border border-[#1F4434] hover:border-[#C5A059]/50 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center font-bold">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">{service.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{service.shortDesc}</p>
                    </div>

                    <div className="pt-4 border-t border-[#1A382B] space-y-1.5">
                      {service.features.slice(0, 3).map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ethical Operational Commitments Banner */}
              <div className="p-6 rounded-2xl bg-[#071510] border border-[#163326] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="space-y-1">
                  <h4 className="font-bold text-[#C5A059] uppercase tracking-wider">Zero False Guarantees</h4>
                  <p className="text-slate-300">
                    We never promise legally impossible "100% guaranteed occupancy". Instead, we use data-backed market rents and rigorous vetting to achieve 98%+ consistency.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#C5A059] uppercase tracking-wider">Disciplined 5th Remittance</h4>
                  <p className="text-slate-300">
                    Net rental collections are paid out to your bank or diaspora account by the 5th business day of each month with full itemized statements.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#C5A059] uppercase tracking-wider">No Markup Repairs</h4>
                  <p className="text-slate-300">
                    Repairs above your pre-agreed threshold require written owner approval. All original receipts are presented on your digital ledger with zero hidden surcharges.
                  </p>
                </div>
              </div>

            </div>

            {/* Step-by-Step Landlord Onboarding Workflow */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Simple 4-Step Process</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1E17]">
                  How We Take Over & Manage Your Property
                </h3>
                <p className="text-xs text-slate-600">
                  Whether onboarding an existing occupied block or marketing newly completed units, our transition is seamless.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Physical Audit & Inventory",
                    desc: "Comprehensive photographic condition report, meter readings, and realistic market rental valuation."
                  },
                  {
                    step: "02",
                    title: "Lease & KYC Transition",
                    desc: "Reviewing existing tenant leases, validating deposit escrows, or launching high-visibility leasing campaigns."
                  },
                  {
                    step: "03",
                    title: "Paybill & Ledger Activation",
                    desc: "Tenants receive dedicated Paybill instructions. Remittance schedules and emergency contacts are formalized."
                  },
                  {
                    step: "04",
                    title: "Monthly Remittance & Care",
                    desc: "Disciplined 5th-of-month disbursements, bi-annual physical audits, and 24/7 online ledger access."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-3 relative">
                    <span className="font-serif text-3xl font-bold text-[#C5A059]/40">{item.step}</span>
                    <h4 className="font-serif text-base font-bold text-[#0A1E17]">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* =========================================================== */}
        {/* TAB: DIASPORA & LANDLORD PORTAL DEMO                         */}
        {/* =========================================================== */}
        {(activeTab === 'home' || activeTab === 'portal') && (
          <section id="portal-section" className="space-y-10">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Client Technology</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A1E17] mt-1">
                  Landlord & Diaspora Reporting Dashboard
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  Demonstration of how Havenstone property owners monitor rent collection, ledger balances, and maintenance work orders from anywhere in the world.
                </p>
              </div>

              {/* Portal switcher buttons */}
              <div className="flex items-center gap-1 p-1 bg-white border border-[#E5E0D8] rounded-xl text-xs font-bold">
                <button
                  onClick={() => setPortalTab('remittance')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    portalTab === 'remittance' ? 'bg-[#0A1E17] text-[#C5A059]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Remittance Statement
                </button>
                <button
                  onClick={() => setPortalTab('rentroll')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    portalTab === 'rentroll' ? 'bg-[#0A1E17] text-[#C5A059]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Live Rent Roll
                </button>
                <button
                  onClick={() => setPortalTab('maintenance')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    portalTab === 'maintenance' ? 'bg-[#0A1E17] text-[#C5A059]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Maintenance Log
                </button>
              </div>
            </div>

            {/* Interactive Portal Display Frame */}
            <div className="bg-white rounded-3xl border border-[#E5E0D8] shadow-elevated overflow-hidden">
              
              {/* Fake Browser / Portal Header */}
              <div className="bg-[#0A1E17] px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-white text-xs border-b border-[#1A382B]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-serif font-bold text-sm tracking-wide">Havenstone Landlord Portal</span>
                  <span className="text-slate-400">| Account: Dr. Patrick Ndwiga (Kilimani Court 12-Units)</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-300">
                  <span>Current Period: <strong>October 2026</strong></span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    Disbursed on 5th Oct
                  </span>
                </div>
              </div>

              {/* Portal Content Tabs */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* 1. Remittance Tab */}
                {portalTab === 'remittance' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]">
                        <p className="text-[11px] text-slate-500 uppercase font-bold">Gross Rent Invoiced</p>
                        <p className="font-serif text-2xl font-bold text-[#0A1E17] mt-1">KSh 1,140,000</p>
                        <p className="text-[10px] text-emerald-600 mt-0.5">12 of 12 Units Paid</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]">
                        <p className="text-[11px] text-slate-500 uppercase font-bold">Service Fee (8%)</p>
                        <p className="font-serif text-2xl font-bold text-slate-700 mt-1">KSh 91,200</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Contracted Management Rate</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8]">
                        <p className="text-[11px] text-slate-500 uppercase font-bold">Approved Repairs</p>
                        <p className="font-serif text-2xl font-bold text-slate-700 mt-1">KSh 14,500</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Booster Pump Pressure Switch</p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                        <p className="text-[11px] text-emerald-800 uppercase font-bold">Net Remittance to Bank</p>
                        <p className="font-serif text-2xl font-bold text-emerald-950 mt-1">KSh 1,034,300</p>
                        <p className="text-[10px] text-emerald-700 mt-0.5">Wire Ref: #KCB-892147-REM</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#9C7933]" />
                        <div>
                          <p className="font-bold text-slate-800">Monthly Statement PDF Available (Demo)</p>
                          <p className="text-[11px] text-slate-500">Includes signed tenant Paybill timestamps & contractor receipt vouchers.</p>
                        </div>
                      </div>
                      <a
                        href={siteConfig.getWhatsAppLink("Hello Havenstone, I would like to see a sample monthly landlord financial remittance report.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-[#0A1E17] text-white font-bold hover:bg-[#15382B] text-xs"
                      >
                        Request Sample PDF on WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* 2. Rent Roll Tab */}
                {portalTab === 'rentroll' && (
                  <div className="overflow-x-auto animate-fadeIn">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 uppercase text-[10px] tracking-wider">
                          <th className="py-3 px-3">Unit #</th>
                          <th className="py-3 px-3">Tenant Name</th>
                          <th className="py-3 px-3">Monthly Rent</th>
                          <th className="py-3 px-3">Paid Date</th>
                          <th className="py-3 px-3">Payment Channel</th>
                          <th className="py-3 px-3">Lease Expiry</th>
                          <th className="py-3 px-3 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {[
                          { unit: "Apt 1A", tenant: "K. Wachira", rent: "KSh 95,000", date: "02 Oct", method: "M-Pesa Paybill", lease: "30 Jun 2027", status: "Paid" },
                          { unit: "Apt 1B", tenant: "Dr. A. Omondi", rent: "KSh 95,000", date: "01 Oct", method: "Direct Bank Transfer", lease: "31 Aug 2027", status: "Paid" },
                          { unit: "Apt 2A", tenant: "S. Mwangi", rent: "KSh 95,000", date: "03 Oct", method: "M-Pesa Paybill", lease: "31 Dec 2026", status: "Paid" },
                          { unit: "Apt 2B", tenant: "L. Kimani", rent: "KSh 95,000", date: "04 Oct", method: "M-Pesa Paybill", lease: "28 Feb 2027", status: "Paid" },
                          { unit: "Apt 3A", tenant: "R. Chebet", rent: "KSh 95,000", date: "01 Oct", method: "M-Pesa Paybill", lease: "30 Apr 2027", status: "Paid" },
                          { unit: "Penthouse 4B", tenant: "M. Lindqvist", rent: "KSh 180,000", date: "01 Oct", method: "Direct Wire", lease: "31 Oct 2027", status: "Paid" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="py-3 px-3 font-bold text-slate-900">{row.unit}</td>
                            <td className="py-3 px-3 text-slate-700">{row.tenant}</td>
                            <td className="py-3 px-3 font-bold text-slate-800">{row.rent}</td>
                            <td className="py-3 px-3 text-slate-600">{row.date}</td>
                            <td className="py-3 px-3 text-slate-600">{row.method}</td>
                            <td className="py-3 px-3 text-slate-500">{row.lease}</td>
                            <td className="py-3 px-3 text-right">
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 3. Maintenance Tab */}
                {portalTab === 'maintenance' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF8F5] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-800">#WO-9402: Pressure Booster Switch</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Completed & Verified</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Automatic pressure pump switch worn out causing intermittent supply to 4th floor. Replaced with Danfoss heavy-duty switch.
                        </p>
                        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200">
                          <span>Technician: Master Plumber (NCA-Registered)</span>
                          <span className="font-bold text-slate-800">Cost: KSh 14,500</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF8F5] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-800">#AUD-2026: Bi-Annual Roof & Gutter Audit</span>
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">Routine Inspection</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Complete photographic inspection prior to short rains. Cleaned stormwater downspouts, resealed solar collector gaskets. Zero leaks detected.
                        </p>
                        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200">
                          <span>Inspected by: Havenstone Facilities Team</span>
                          <span className="font-bold text-slate-800">Included in Retainer</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Tenant Interactive Maintenance Logger Demonstration */}
            <div className="bg-[#0A1E17] rounded-3xl p-8 sm:p-12 text-white border border-[#1A382B] space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    Interactive Tenant Service Feature
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Tenant Maintenance Request Engine
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Test the workflow: tenants submit maintenance tickets online with photos and priority levels. Property managers receive immediate alerts, eliminating frantic WhatsApp calls.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#0D261D] p-6 rounded-2xl border border-[#1F4434]">
                  {ticketSuccess ? (
                    <div className="text-center py-6 space-y-3 animate-fadeIn">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                      <h4 className="font-serif text-xl font-bold text-white">Demo Maintenance Ticket Dispatched</h4>
                      <p className="text-xs text-slate-300 max-w-sm mx-auto">
                        Assigned Reference: <strong className="text-[#C5A059]">{ticketId}</strong> for <strong>{ticketUnit}</strong>.
                        In production, this automatically dispatches an SMS alert to the on-call facilities contractor.
                      </p>
                      <button 
                        onClick={() => { setTicketSuccess(false); setTicketDesc(""); }}
                        className="text-xs text-[#C5A059] hover:underline font-bold mt-2"
                      >
                        Submit Another Demo Ticket
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleTicketSubmit} className="space-y-4 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-300 mb-1 font-semibold">Apartment / Unit</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Unit 3B, Kilimani Heights"
                            value={ticketUnit}
                            onChange={e => setTicketUnit(e.target.value)}
                            className="w-full p-2.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-300 mb-1 font-semibold">Issue Category</label>
                          <select
                            value={ticketCategory}
                            onChange={e => setTicketCategory(e.target.value)}
                            className="w-full p-2.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                          >
                            <option>Plumbing & Hot Water</option>
                            <option>Electrical & Backup Generator</option>
                            <option>Air Conditioning & Ventilation</option>
                            <option>Carpentry, Locks & Windows</option>
                            <option>Intercom & Access Control</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-semibold">Urgency Level</label>
                        <select
                          value={ticketUrgency}
                          onChange={e => setTicketUrgency(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                        >
                          <option value="Normal">Normal — Standard 24h Response</option>
                          <option value="Urgent">Urgent — Active Leak or Loss of Power</option>
                          <option value="Emergency">Emergency — Immediate Security or Flooding Risk</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-semibold">Describe the Issue</label>
                        <textarea
                          rows={2}
                          required
                          placeholder="e.g. Master ensuite shower mixer valve is leaking when turned on..."
                          value={ticketDesc}
                          onChange={e => setTicketDesc(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#C5A059] text-[#0A1E17] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b568] transition-colors"
                      >
                        Dispatch Demo Maintenance Ticket
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </section>
        )}

        {/* =========================================================== */}
        {/* TAB: REQUEST A MANAGEMENT QUOTE (LANDLORD ACQUISITION)        */}
        {/* =========================================================== */}
        {(activeTab === 'home' || activeTab === 'quote') && (
          <section id="quote-section" className="space-y-8">
            
            <div className="bg-white rounded-3xl border border-[#E5E0D8] p-8 sm:p-12 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Why Request a Quote */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">
                    For Real Estate Owners
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A1E17] leading-tight">
                    Request a Custom Property Management Proposal
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tell us about your property in Nairobi or Kiambu. We prepare a tailored proposal detailing our recommended market rental rates, projected yield, and clear management fee schedule.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#9C7933] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <div>
                        <strong>No Upfront Commitment:</strong> We inspect your premises and present realistic rental comps before any contract is signed.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#9C7933] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <div>
                        <strong>Diaspora Concierge:</strong> Overseas landlords receive full video walkthrough audits and remote digital onboarding.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#9C7933] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <div>
                        <strong>Data Protection Notice:</strong> In accordance with Kenya's Data Protection Act, your property information remains private and is strictly used to prepare your quotation.
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp Callout */}
                  <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D8] space-y-2">
                    <p className="text-xs font-bold text-slate-800">Prefer an Immediate WhatsApp Consultation?</p>
                    <p className="text-[11px] text-slate-500">
                      Speak directly with our senior property manager regarding your portfolio:
                    </p>
                    <a
                      href={siteConfig.getWhatsAppLink("Hello Havenstone, I am a property owner and would like to inquire about managing my residential units.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Chat on WhatsApp: {siteConfig.whatsappDisplay}</span>
                    </a>
                  </div>

                </div>

                {/* Right Column: Functional Quote Form */}
                <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8]">
                  
                  {quoteSubmitted ? (
                    <div className="py-8 text-center space-y-4 animate-fadeIn">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      
                      <h3 className="font-serif text-2xl font-bold text-[#0A1E17]">
                        Management Quote Request Received!
                      </h3>

                      <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] text-left text-xs space-y-2 max-w-md mx-auto">
                        <p><strong>Owner:</strong> {quoteOwnerName} ({quoteResidency})</p>
                        <p><strong>Property:</strong> {quotePropertyType} in {quoteLocation} ({quoteUnits})</p>
                        <p><strong>Requested Service:</strong> {quoteServiceLevel}</p>
                        <p><strong>Contact:</strong> {quotePhone} • {quoteEmail || "No email specified"}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left max-w-md mx-auto">
                        <p className="font-bold">Nexa Web Studio Demonstration Notice:</p>
                        <p className="mt-1 text-[11px]">
                          In a live production website delivered by Nexa Web Studio, this lead automatically triggers an email to your management team, sends an SMS confirmation to the landlord, and logs into your database.
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={siteConfig.getWhatsAppLink(
                            `Hello Havenstone, I just submitted a property quote request:\n- Name: ${quoteOwnerName}\n- Location: ${quoteLocation}\n- Property: ${quotePropertyType} (${quoteUnits})\n- Service: ${quoteServiceLevel}\n- Phone: ${quotePhone}`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-colors flex items-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Forward Request to WhatsApp</span>
                        </a>

                        <button
                          onClick={() => {
                            setQuoteSubmitted(false);
                            setQuoteLocation("");
                            setQuoteNotes("");
                          }}
                          className="px-5 py-3 rounded-xl bg-white border border-[#E5E0D8] text-slate-700 text-xs font-bold hover:bg-slate-100"
                        >
                          Submit Another Quote
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} className="space-y-4 text-xs">
                      
                      <h3 className="font-serif text-lg font-bold text-[#0A1E17] pb-2 border-b border-slate-200">
                        Property Details & Contact
                      </h3>

                      {/* Owner Name & Residency */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Your Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={quoteOwnerName}
                            onChange={e => setQuoteOwnerName(e.target.value)}
                            placeholder="e.g. Eng. Peter Kariuki"
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Landlord Status <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={quoteResidency}
                            onChange={e => setQuoteResidency(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          >
                            <option value="Resident in Kenya">Resident in Kenya</option>
                            <option value="Kenyan Diaspora (UK / Europe)">Kenyan Diaspora (UK / Europe)</option>
                            <option value="Kenyan Diaspora (USA / Canada)">Kenyan Diaspora (USA / Canada)</option>
                            <option value="Kenyan Diaspora (Middle East / Gulf)">Kenyan Diaspora (Middle East / Gulf)</option>
                            <option value="Corporate / Institutional Investor">Corporate / Institutional Investor</option>
                          </select>
                        </div>
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Phone / WhatsApp Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={quotePhone}
                            onChange={e => setQuotePhone(e.target.value)}
                            placeholder="e.g. +254 7XX XXX XXX"
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={quoteEmail}
                            onChange={e => setQuoteEmail(e.target.value)}
                            placeholder="e.g. peter@example.com"
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          />
                        </div>
                      </div>

                      {/* Property Location & Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Property Location <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={quoteLocation}
                            onChange={e => setQuoteLocation(e.target.value)}
                            placeholder="e.g. Kilimani, Ruaka, Westlands, Ruiru..."
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Property Structure <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={quotePropertyType}
                            onChange={e => setQuotePropertyType(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          >
                            <option value="Multi-Unit Apartment Block">Multi-Unit Apartment Block</option>
                            <option value="Gated Townhouse / Villa">Gated Townhouse / Villa</option>
                            <option value="Individual Luxury Apartment">Individual Luxury Apartment</option>
                            <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
                          </select>
                        </div>
                      </div>

                      {/* Units & Service Level */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Number of Units
                          </label>
                          <select
                            value={quoteUnits}
                            onChange={e => setQuoteUnits(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          >
                            <option value="1 Unit">1 Unit (Single Executive Residence)</option>
                            <option value="2–5 Units">2–5 Units</option>
                            <option value="6–15 Units">6–15 Units</option>
                            <option value="16–30 Units">16–30 Units</option>
                            <option value="30+ Units">30+ Units (Full Residential Block)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-slate-700 font-bold mb-1">
                            Requested Service
                          </label>
                          <select
                            value={quoteServiceLevel}
                            onChange={e => setQuoteServiceLevel(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                          >
                            <option value="Full-Service End-to-End Management">Full-Service End-to-End Management</option>
                            <option value="Tenant Placement & Letting Only">Tenant Placement & Letting Only</option>
                            <option value="Maintenance & Inspection Retainer">Maintenance & Inspection Retainer</option>
                            <option value="Rent Collection & Remittance Only">Rent Collection & Remittance Only</option>
                          </select>
                        </div>
                      </div>

                      {/* Notes & Special Needs */}
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">
                          Current Challenges / Notes (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={quoteNotes}
                          onChange={e => setQuoteNotes(e.target.value)}
                          placeholder="e.g. Existing tenants with delayed rent, building newly handed over, overseas owner seeking remote oversight..."
                          className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-[#0A1E17] hover:bg-[#15382B] text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all"
                        >
                          Submit Management Quote Request
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-500 text-center">
                        🔒 Confidential inquiry. We never spam or disclose landlord details.
                      </p>

                    </form>
                  )}

                </div>

              </div>
            </div>

          </section>
        )}

        {/* =========================================================== */}
        {/* TESTIMONIALS (CLEARLY MARKED AS DEMO PERSONAS)              */}
        {/* =========================================================== */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">
              Reputation & Trust
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#0A1E17]">
              Proven Stewardship for Discerning Clients
            </h2>
            <p className="text-xs text-slate-500">
              The feedback below illustrates sample client personas to demonstrate how testimonials appear on client real estate websites built by Nexa Web Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoTestimonials.map(t => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-[#E5E0D8] shadow-card flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200/80">
                      {t.tag}
                    </span>
                    <span className="text-xs text-[#C5A059] font-serif font-black">★★★★★</span>
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="font-serif text-sm font-bold text-[#0A1E17]">{t.author}</p>
                  <p className="text-[11px] text-slate-600">{t.role}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.propertyDetail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================== */}
        {/* FAQ SECTION                                                 */}
        {/* =========================================================== */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-card space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Frequently Asked Questions</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1E17]">
              Frequently Asked Questions for Landlords & Tenants
            </h2>
            <p className="text-xs text-slate-600">
              Clear, transparent answers on management terms, rental disbursement, and maintenance accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            {companyFaq.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-serif text-base font-bold text-[#0A1E17] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================== */}
        {/* CONTACT SECTION                                             */}
        {/* =========================================================== */}
        {(activeTab === 'home' || activeTab === 'contact') && (
          <section id="contact-section" className="bg-[#0A1E17] rounded-3xl p-8 sm:p-14 text-white border border-[#1A382B] space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Direct Engagement</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF8F5]">
                  Connect with Havenstone Property Managers
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Have a residential building requiring disciplined property management, or looking for an executive rental in Nairobi? Reach our office directly via telephone, WhatsApp, or email.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#0D261D] border border-[#1F4434] space-y-1">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Office Address</p>
                    <p className="font-serif text-sm font-bold text-white">Delta Corner Towers, Westlands</p>
                    <p className="text-xs text-slate-300">Waiyaki Way, Nairobi, Kenya</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0D261D] border border-[#1F4434] space-y-1">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Office Hours</p>
                    <p className="font-serif text-sm font-bold text-white">Mon – Fri: 8:00 AM – 5:30 PM</p>
                    <p className="text-xs text-slate-300">Sat: 9:00 AM – 1:00 PM (Viewings)</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0D261D] p-6 sm:p-8 rounded-2xl border border-[#1F4434] space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#C5A059]">Direct Contact Channels</h3>
                
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white hover:border-[#C5A059] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Direct Phone</span>
                    <span className="font-bold text-xs">{siteConfig.phone}</span>
                  </div>
                </a>

                <a
                  href={siteConfig.getWhatsAppLink(undefined, "Havenstone Properties Management")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white hover:border-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">WhatsApp Concierge</span>
                    <span className="font-bold text-xs">{siteConfig.whatsappDisplay}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}?subject=Havenstone%20Property%20Management%20Inquiry`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#071510] border border-[#1A382B] text-white hover:border-[#C5A059] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Direct Email</span>
                    <span className="font-bold text-xs">{siteConfig.email}</span>
                  </div>
                </a>
              </div>

            </div>
          </section>
        )}

      </main>

      {/* ------------------------------------------------------------- */}
      {/* AGENCY SHOWCASE FOOTER (NEXA WEB STUDIO CONVERSION PUSH)       */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#071510] text-slate-400 border-t border-[#163326] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Studio Pitch Banner */}
          <div className="bg-[#0A1E17] rounded-2xl p-6 sm:p-8 border border-[#1F4434] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-black uppercase tracking-wider border border-[#C5A059]/30">
                Created by Nexa Web Studio
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Need a High-Converting Website for Your Property Business?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Nexa Web Studio builds production-grade, fast, and SEO-optimized web applications tailored for real estate developers, estate agencies, and property managers in Kenya and the diaspora.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={openRequestModal}
                className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#d8b568] text-[#0A1E17] font-black text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Request Similar Website
              </button>
              <a
                href={siteConfig.getWhatsAppLink("Hello Nexa Web Studio, I was reviewing your Property Management demo (Havenstone) and I want to discuss building a website for my real estate company.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#142F24] hover:bg-[#1A3B2E] text-white font-bold text-xs uppercase tracking-wider border border-[#275340] transition-all"
              >
                Chat with Studio
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-[#163326] pt-6">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Havenstone Properties & Asset Management. Illustrative demo concept designed by Nexa Web Studio.
            </p>
            <p className="text-slate-500">
              Prices displayed in KSh. Nairobi, Kenya.
            </p>
          </div>

        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* PROPERTY DETAIL & VIEWING SCHEDULE MODAL                      */}
      {/* ------------------------------------------------------------- */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col my-auto">
            
            {/* Modal Header */}
            <div className="bg-[#0A1E17] p-6 text-white flex items-center justify-between sticky top-0 z-20 border-b border-[#1A382B]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#C5A059] text-[#0A1E17] text-[10px] font-black uppercase">
                    {selectedProperty.type}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {selectedProperty.neighborhood}, Nairobi
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5]">{selectedProperty.title}</h3>
                <p className="text-xs text-[#C5A059] font-bold">
                  {selectedProperty.priceDisplay} • {selectedProperty.serviceCharge}
                </p>
              </div>

              <button
                onClick={() => setSelectedProperty(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Photo Gallery Switcher */}
              <div className="space-y-3">
                <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                  <img
                    src={selectedProperty.gallery[activeGalleryIndex] || selectedProperty.heroImage}
                    alt={`${selectedProperty.title} view ${activeGalleryIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Gallery Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {selectedProperty.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                        activeGalleryIndex === idx 
                          ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs & Attributes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#FAF8F5] p-4 rounded-2xl border border-[#E5E0D8]">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Bedrooms</span>
                  <span className="font-serif text-base font-bold text-[#0A1E17] flex items-center gap-1 mt-0.5">
                    <Bed className="w-4 h-4 text-[#C5A059]" />
                    <span>{selectedProperty.bedrooms} Ensuite</span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Bathrooms</span>
                  <span className="font-serif text-base font-bold text-[#0A1E17] flex items-center gap-1 mt-0.5">
                    <Bath className="w-4 h-4 text-[#C5A059]" />
                    <span>{selectedProperty.bathrooms} Baths</span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Parking</span>
                  <span className="font-serif text-base font-bold text-[#0A1E17] flex items-center gap-1 mt-0.5">
                    <Car className="w-4 h-4 text-[#C5A059]" />
                    <span>{selectedProperty.parkingBays} Dedicated Bays</span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Floor Size</span>
                  <span className="font-serif text-base font-bold text-[#0A1E17] flex items-center gap-1 mt-0.5">
                    <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                    <span>{selectedProperty.sqft}</span>
                  </span>
                </div>
              </div>

              {/* Description & Terms */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left: Description & Amenities */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0A1E17] mb-2">Residence Overview</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedProperty.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0A1E17] mb-2">Location Highlights</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedProperty.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0A1E17] mb-2">Building Amenities & Specs</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {selectedProperty.amenities.map((am, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transparent Terms */}
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs space-y-2">
                    <h4 className="font-serif text-sm font-bold text-amber-950">Rental Terms & Deposit Policy</h4>
                    <div className="space-y-1 text-slate-700 text-[11px]">
                      <p>• <strong>Deposit:</strong> {selectedProperty.depositTerms}</p>
                      <p>• <strong>Utilities:</strong> {selectedProperty.utilityDeposit}</p>
                      <p>• <strong>Lease Duration:</strong> {selectedProperty.leaseTerm}</p>
                      <p>• <strong>Zero Extortion:</strong> We charge zero viewing fees. Tenancy agreements are executed with strict legal receipts.</p>
                    </div>
                  </div>
                </div>

                {/* Right: Schedule a Viewing Form */}
                <div className="md:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E0D8] space-y-4">
                  <h4 className="font-serif text-base font-bold text-[#0A1E17]">
                    Schedule a Private Viewing
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Book an accompanied viewing with a licensed Havenstone property manager.
                  </p>

                  {viewingFormSubmitted ? (
                    <div className="text-center py-6 space-y-3 animate-fadeIn">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h5 className="font-serif text-lg font-bold text-[#0A1E17]">Viewing Request Logged!</h5>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong>{viewerName}</strong>. Your requested date: <strong>{viewingDate}</strong>.
                      </p>
                      
                      <div className="pt-2">
                        <a
                          href={siteConfig.getWhatsAppLink(
                            `Hello Havenstone, I have scheduled a private viewing for ${selectedProperty.title} (${selectedProperty.priceDisplay}) on ${viewingDate}. My name is ${viewerName} and my phone is ${viewerPhone}.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 shadow-md transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Confirm on WhatsApp</span>
                        </a>
                      </div>

                      <button
                        onClick={() => setViewingFormSubmitted(false)}
                        className="text-[11px] text-[#9C7933] underline font-bold"
                      >
                        Change Viewing Details
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleViewingSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={viewerName}
                          onChange={e => setViewerName(e.target.value)}
                          placeholder="e.g. Christine Mutheu"
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold mb-1">WhatsApp Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={viewerPhone}
                          onChange={e => setViewerPhone(e.target.value)}
                          placeholder="+254 7XX XXX XXX"
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Email Address</label>
                        <input
                          type="email"
                          value={viewerEmail}
                          onChange={e => setViewerEmail(e.target.value)}
                          placeholder="e.g. christine@example.com"
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Preferred Date & Time *</label>
                        <input
                          type="datetime-local"
                          required
                          value={viewingDate}
                          onChange={e => setViewingDate(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Tenancy Move-In Timeline</label>
                        <select
                          value={viewingTimeline}
                          onChange={e => setViewingTimeline(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                        >
                          <option>Immediate (Within 14 days)</option>
                          <option>Within 30 Days</option>
                          <option>Next Month</option>
                          <option>Relocating from Abroad</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Specific Questions or Notes</label>
                        <textarea
                          rows={2}
                          value={viewingNotes}
                          onChange={e => setViewingNotes(e.target.value)}
                          placeholder="e.g. Pet policy, parking requirements..."
                          className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#0A1E17] hover:bg-[#15382B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all mt-2"
                      >
                        Confirm Viewing Appointment
                      </button>

                      <p className="text-[10px] text-slate-400 text-center">
                        No viewing fees are required. You will receive an immediate confirmation.
                      </p>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
