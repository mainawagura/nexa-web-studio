import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Utensils, Clock, MapPin, Calendar, Users, Phone, Mail, MessageSquare, 
  CheckCircle2, Sparkles, Coffee, Heart, Wine, X, Check, ArrowRight,
  Flame, Leaf, Award, ChevronRight, Filter, Compass, AlertCircle,
  Share2, Eye, ShieldCheck, GlassWater, ExternalLink
} from 'lucide-react';
import { savannaTableMenu, privateDiningSpaces, restaurantTestimonials, restaurantAtmosphere, MenuItem, PrivateDiningSpace } from '../../data/savannaTableData';
import { siteConfig } from '../../config/siteConfig';

export const SavannaTableDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'home' | 'menu' | 'reserve' | 'privatedining' | 'story' | 'contact'>('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Menu Category Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  // Reservation Form State
  const [resName, setResName] = useState("");
  const [resPhone, setResPhone] = useState("");
  const [resEmail, setResEmail] = useState("");
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("19:30");
  const [resPartySize, setResPartySize] = useState("2 Guests");
  const [resSeatingArea, setResSeatingArea] = useState("Main Dining Room");
  const [resSpecialRequests, setResSpecialRequests] = useState("");
  const [resSubmitted, setResSubmitted] = useState(false);

  // Private Dining Inquiry State
  const [selectedPrivateSpace, setSelectedPrivateSpace] = useState<PrivateDiningSpace | null>(null);
  const [eventDate, setEventDate] = useState("");
  const [eventGuests, setEventGuests] = useState("16 Guests");
  const [eventSubmitted, setEventSubmitted] = useState(false);

  // Filtered menu items
  const filteredMenu = useMemo(() => {
    return savannaTableMenu.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      let matchesDietary = true;
      if (dietaryFilter === 'V') matchesDietary = item.dietary.includes('V') || item.dietary.includes('VG');
      else if (dietaryFilter === 'GF') matchesDietary = item.dietary.includes('GF');
      else if (dietaryFilter === 'Signature') matchesDietary = item.dietary.includes('Signature');
      return matchesCategory && matchesDietary;
    });
  }, [selectedCategory, dietaryFilter]);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resName.trim() && resPhone.trim() && resDate) {
      setResSubmitted(true);
    }
  };

  const handlePrivateEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEventSubmitted(true);
  };

  const scrollToSection = (tab: typeof activeTab, elementId?: string) => {
    setActiveTab(tab);
    setMobileNavOpen(false);
    if (elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] font-sans min-h-screen selection:bg-[#C85A32] selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* RESTAURANT HEADER                                             */}
      {/* ------------------------------------------------------------- */}
      <header className="bg-[#1A1715] text-[#FAF7F2] sticky top-10 z-30 border-b border-[#312C28] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Monogram & Name */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-serif font-black text-xl shadow-md group-hover:bg-[#d4643c] transition-colors border border-[#e67d58]/40">
              <span>S</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl tracking-widest uppercase font-medium text-[#FAF7F2]">
                  SAVANNA TABLE
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded bg-[#C85A32]/20 text-[#E27651] border border-[#C85A32]/40">
                  Nairobi
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#D49B6A] block -mt-1 tracking-widest">
                Contemporary African Cuisine & Hearth
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-bold text-[#E7E2DB]">
            {[
              { id: 'home', label: 'Welcome' },
              { id: 'menu', label: 'Culinary Menu' },
              { id: 'reserve', label: 'Reservations' },
              { id: 'privatedining', label: 'Private Dining' },
              { id: 'story', label: 'Our Philosophy' },
              { id: 'contact', label: 'Find Us' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id as any)}
                className={`py-2 transition-all relative ${
                  activeTab === tab.id 
                    ? 'text-[#E27651] font-black' 
                    : 'hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C85A32] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Savanna Table Restaurant")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Table</span>
            </a>

            <button
              onClick={() => scrollToSection('reserve')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C85A32] hover:bg-[#d4643c] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#272320] text-slate-200 hover:text-white"
              aria-label="Toggle navigation"
            >
              <Utensils className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-[#1A1715] border-t border-[#312C28] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {[
              { id: 'home', label: 'Welcome & Highlights' },
              { id: 'menu', label: 'Our Seasonal Menu' },
              { id: 'reserve', label: 'Reserve a Dining Table' },
              { id: 'privatedining', label: 'Private Dining & Events' },
              { id: 'story', label: 'Chef & Philosophy' },
              { id: 'contact', label: 'Location & Hours' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id as any)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-[#2A2420] text-[#E27651]' 
                    : 'text-[#E7E2DB] hover:bg-[#25201D] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#312C28] flex flex-col gap-2">
              <a
                href={siteConfig.getWhatsAppLink(undefined, "Savanna Table Restaurant")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Table Booking</span>
              </a>
              <button
                onClick={openRequestModal}
                className="w-full py-2.5 text-center rounded-lg bg-[#C85A32] text-white text-xs font-black uppercase tracking-wider"
              >
                Request Similar Restaurant Website
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#1A1715] text-white pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden border-b border-[#312C28]">
        {/* Subtle textural background overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C85A32_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A2420] border border-[#443831] text-[#E27651] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-[#C85A32] animate-pulse" />
                <span>Wood-Fired Hearth • Karen, Nairobi</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF7F2] leading-[1.08]">
                A Taste of Kenya, <br />
                <span className="italic text-[#E27651]">Beautifully Reimagined.</span>
              </h1>

              {/* Supporting Text highlighting contemporary Kenyan cuisine */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Celebrating contemporary Kenyan cuisine through wild-harvested Rift Valley botanicals, prime Highland Angus cuts, line-caught Swahili coastal seafood, and ancient indigenous grains crafted over glowing embers.
              </p>

              {/* Calls to Action */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="px-8 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#d4643c] text-white font-black text-xs uppercase tracking-wider shadow-xl transition-all flex items-center gap-2 group"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('reserve')}
                  className="px-8 py-3.5 rounded-xl bg-[#2A2420] hover:bg-[#382F2A] text-white font-bold text-xs uppercase tracking-wider border border-[#4A3D36] transition-all"
                >
                  Reserve a Table
                </button>
              </div>

              {/* Dining Accents Bar */}
              <div className="pt-8 border-t border-[#312C28] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E27651]">100%</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-0.5">Locally Sourced Kenya</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E27651]">Acacia</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-0.5">Wood-Fired Ember Pit</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E27651]">600+</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-0.5">Natural Cellar Selections</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#E27651]">Karen</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-0.5">Miotoni Road Sanctuary</p>
                </div>
              </div>

            </div>

            {/* Right Hero Image Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#443831] shadow-2xl bg-[#241F1C] group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                    alt="Slow-braised Laikipia Lamb Shank at Savanna Table"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent opacity-90" />
                </div>

                {/* Overlaid Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#C85A32] text-white text-[10px] font-black uppercase tracking-wider rounded">
                      Chef's Signature
                    </span>
                    <span className="text-xs font-bold text-amber-300">
                      Slow-Braised Laikipia Lamb Shank
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Wild rosemary bone marrow broth with roasted garlic sweet potato mash.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs border-t border-[#3B322D]">
                    <span className="font-serif font-bold text-[#E27651] text-base">KSh 3,600</span>
                    <button
                      onClick={() => scrollToSection('menu')}
                      className="text-white hover:text-[#E27651] font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider"
                    >
                      <span>View in Menu</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* QUICK INFO BANNER                                             */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FAF7F2] border-b border-[#EAE3D9] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#443E38]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFE9DF] text-[#C85A32] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#1C1917]">Miotoni Road, Karen, Nairobi</p>
                <p className="text-slate-500 text-[11px]">Secure private parking & valet available</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFE9DF] text-[#C85A32] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#1C1917]">Lunch & Dinner Service</p>
                <p className="text-slate-500 text-[11px]">Tue – Sun: 12:00 PM – 11:00 PM (Closed Mondays)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFE9DF] text-[#C85A32] flex items-center justify-center shrink-0">
                <Wine className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#1C1917]">Private Dining & Cellar Tastings</p>
                <p className="text-slate-500 text-[11px]">Curated tasting menus with bespoke pairings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SIGNATURE DISHES SHOWCASE                                     */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE3D9] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32] block">
              Culinary Artistry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] mt-1">
              Featured Signature Dishes
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              A curated preview of our wood-fired highlights, pairing indigenous Kenyan culinary heritage with modern gastronomic technique.
            </p>
          </div>

          <button
            onClick={() => scrollToSection('menu')}
            className="text-xs font-bold uppercase tracking-wider text-[#C85A32] hover:text-[#9E3D1B] flex items-center gap-1.5 transition-colors"
          >
            <span>View Full 17-Course Menu</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Featured Signature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {savannaTableMenu.filter(m => m.dietary.includes('Signature')).slice(0, 4).map(dish => (
            <div 
              key={dish.id}
              className="bg-white rounded-2xl border border-[#EAE3D9] overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A1715]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                    {dish.categoryDisplay}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-[#C85A32] text-white text-xs font-serif font-bold shadow-md">
                    {dish.priceDisplay}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C85A32] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                  {dish.origin && (
                    <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-2.5">
                      <Compass className="w-3 h-3 text-[#C85A32]" />
                      <span>{dish.origin}</span>
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDishModal(dish)}
                    className="text-xs font-bold text-[#1C1917] hover:text-[#C85A32] flex items-center gap-1"
                  >
                    <span>Ingredients & Pairing</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Fresh Daily
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* PHILOSOPHY & CHEF'S STORY                                     */}
      {/* ------------------------------------------------------------- */}
      <section id="story-section" className="bg-[#1A1715] text-[#FAF7F2] py-20 lg:py-28 border-y border-[#312C28] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Chef & Kitchen Imagery */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-[#443831] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                    alt="Chef plating at Savanna Table"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-xl bg-[#241F1C] border border-[#3A322C] text-center">
                  <p className="font-serif text-2xl font-bold text-[#E27651]">Wood & Flame</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Ancient Embers Reborn</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-xl bg-[#241F1C] border border-[#3A322C] text-center">
                  <p className="font-serif text-2xl font-bold text-[#E27651]">Hyper-Local</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">From 18 Kenyan Cooperatives</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-[#443831] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="Savanna Table Dining Room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Philosophy Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#E27651]">
                Philosophy & Culinary Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] leading-tight">
                "We do not imitate European classics. We elevate Kenya's indigenous culinary soul."
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Led by Executive Chef Wanjiru Mutua, Savanna Table is dedicated to celebrating the biodiversity of Kenya's agro-ecological zones. From line-caught octopus along Kilifi Creek to free-range grass-fed Highland Angus cattle grazing on the cool Laikipia plateau, every ingredient honors its soil and sea.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our kitchen cooks primarily over glowing acacia and olive wood embers—a technique as ancient as humanity, imparting a gentle aroma of smoke and caramelization that cannot be replicated with modern gas stoves.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#312C28]">
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Wild Foraging</span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Hand-foraged botanicals, baobab powder, wild stingless bee honey, and Rift Valley herbs.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#E27651]" />
                    <span>Ember Hearth</span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Live-fire charring and slow bone-broth braises simmered up to 16 hours.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Wine className="w-3.5 h-3.5 text-amber-400" />
                    <span>African Cellar</span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Natural organic wines from high-elevation vineyards in Kenya, South Africa, and beyond.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* DIGITAL MENU SECTION                                          */}
      {/* ------------------------------------------------------------- */}
      <section id="menu-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        
        {/* Menu Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
            Seasonal Tasting & À La Carte
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917]">
            The Savanna Table Menu
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every dish is prepared to order using daily market deliveries. All prices are in Kenya Shillings (KSh) inclusive of statutory VAT and catering levy.
          </p>
          <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium rounded-full">
            Illustrative Demo Menu for Nexa Web Studio Client Presentation
          </div>
        </div>

        {/* Menu Controls: Category Tabs & Dietary Filter */}
        <div className="space-y-4">
          
          {/* Main Category Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#EFEAE2] rounded-2xl max-w-3xl mx-auto">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'starters', label: 'Starters' },
              { id: 'mains', label: 'Main Courses' },
              { id: 'vegetarian', label: 'Vegetarian' },
              { id: 'desserts', label: 'Desserts' },
              { id: 'drinks', label: 'Drinks & Cellar' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#1C1917] text-[#FAF7F2] shadow-md'
                    : 'text-[#443E38] hover:text-[#1C1917] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Secondary Dietary Toggles */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500 text-[11px] mr-1">Filter Dietary:</span>
            {[
              { id: 'all', label: 'Everything' },
              { id: 'Signature', label: '★ Chef Signatures' },
              { id: 'V', label: '🌱 Vegetarian / Vegan' },
              { id: 'GF', label: '🌾 Gluten-Free' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setDietaryFilter(filter.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                  dietaryFilter === filter.id
                    ? 'bg-[#C85A32] text-white border-[#C85A32]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map(dish => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl border border-[#EAE3D9] overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {dish.dietary.map(d => (
                    <span 
                      key={d} 
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                        d === 'Signature' 
                          ? 'bg-[#C85A32] text-white' 
                          : d === 'V' || d === 'VG'
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#1C1917]/80 text-white'
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 rounded-lg bg-[#1C1917]/90 backdrop-blur-sm text-[#FAF7F2] text-xs font-serif font-bold shadow-md">
                    {dish.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold text-[#C85A32] tracking-wider">
                      {dish.categoryDisplay}
                    </span>
                    {dish.origin && (
                      <span className="text-[10px] text-slate-400 truncate max-w-[150px]">
                        {dish.origin}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] mt-1 group-hover:text-[#C85A32] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {dish.description}
                  </p>
                  {dish.pairing && (
                    <p className="text-[11px] text-[#A34320] bg-[#FAF3EB] p-2 rounded-lg mt-3 flex items-center gap-1.5">
                      <Wine className="w-3.5 h-3.5 shrink-0 text-[#C85A32]" />
                      <span>{dish.pairing}</span>
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDishModal(dish)}
                    className="text-xs font-bold text-[#1C1917] hover:text-[#C85A32] flex items-center gap-1"
                  >
                    <span>Full Pairing & Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={siteConfig.getWhatsAppLink(`Hello Savanna Table, I am interested in ordering or reserving a table to taste the ${dish.name} (${dish.priceDisplay}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title="Inquire via WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* RESTAURANT ATMOSPHERE GALLERY                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FAF7F2] py-16 border-t border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
              Sensory Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917]">
              The Ambiance of Savanna Table
            </h2>
            <p className="text-xs text-slate-600">
              Designed with volcanic stone, woven sisal lamps, warm acacia woodwork, and peaceful candlelit garden alcoves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantAtmosphere.map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-[#EAE3D9] shadow-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                  <p className="text-xs text-slate-300 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TABLE RESERVATIONS SECTION                                    */}
      {/* ------------------------------------------------------------- */}
      <section id="reserve-section" className="bg-[#1A1715] text-white py-20 lg:py-28 border-t border-[#312C28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#E27651]">
                Reservations & Hospitality
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF7F2] leading-tight">
                Reserve Your Table at Savanna Table
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether celebrating an intimate anniversary, a family weekend luncheon on the Lantern Garden Terrace, or entertaining corporate clients, we invite you to secure your seating in advance.
              </p>

              <div className="space-y-3.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2A2420] text-[#E27651] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Sitting Times</span>
                    <span>Lunch: 12:00 PM – 3:30 PM • Dinner: 6:00 PM – 11:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2A2420] text-[#E27651] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Large Parties (8+ Guests)</span>
                    <span>For parties exceeding 8, we recommend our private Acacia Wine Vault.</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2A2420] text-[#E27651] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Instant WhatsApp Concierge</span>
                    <span>Prefilled booking confirmations sent straight to our dining host.</span>
                  </div>
                </div>
              </div>

              {/* Direct Telephone Contact */}
              <div className="p-4 rounded-xl bg-[#241F1C] border border-[#3A322C] flex items-center justify-between text-xs">
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Hostess Direct Line</p>
                  <p className="font-bold text-white">{siteConfig.phone}</p>
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#C85A32] text-white font-bold text-xs hover:bg-[#d4643c]"
                >
                  Call Table Host
                </a>
              </div>

            </div>

            {/* Right: Functional Reservation Form */}
            <div className="lg:col-span-7 bg-[#241F1C] p-6 sm:p-10 rounded-3xl border border-[#3A322C] shadow-2xl">
              
              {resSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Reservation Request Logged!
                  </h3>

                  <div className="p-4 rounded-xl bg-[#1A1715] border border-[#312C28] text-left text-xs space-y-2 max-w-md mx-auto text-slate-300">
                    <p><strong className="text-white">Guest:</strong> {resName}</p>
                    <p><strong className="text-white">Date & Time:</strong> {resDate} at {resTime}</p>
                    <p><strong className="text-white">Party & Seating:</strong> {resPartySize} • {resSeatingArea}</p>
                    <p><strong className="text-white">Phone:</strong> {resPhone} ({resEmail || "No email"})</p>
                    {resSpecialRequests && <p><strong className="text-white">Notes:</strong> {resSpecialRequests}</p>}
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 text-left max-w-md mx-auto">
                    <p className="font-bold text-[#E27651]">Nexa Web Studio Technical Notice:</p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      In a production hospitality deployment delivered by Nexa Web Studio, this reservation synchronizes with your POS / TableCheck engine, sends an instant SMS confirmation, and blocks table inventory. Test sending this booking to WhatsApp:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={siteConfig.getWhatsAppLink(
                        `Hello Savanna Table Host, I would like to confirm my dining reservation:\n- Guest: ${resName}\n- Date: ${resDate} at ${resTime}\n- Party: ${resPartySize}\n- Seating Area: ${resSeatingArea}\n- Phone: ${resPhone}\n- Requests: ${resSpecialRequests || "None"}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp Host</span>
                    </a>

                    <button
                      onClick={() => {
                        setResSubmitted(false);
                        setResSpecialRequests("");
                      }}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
                    >
                      Book Another Table
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleReservationSubmit} className="space-y-4 text-xs">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[#312C28]">
                    <h3 className="font-serif text-xl font-bold text-white">Table Reservation Details</h3>
                    <span className="text-[10px] text-slate-400">Step 1 of 1 • Instant Host Notification</span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Full Name <span className="text-[#E27651]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={resName}
                        onChange={e => setResName(e.target.value)}
                        placeholder="e.g. Sandra Omondi"
                        className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        WhatsApp Phone Number <span className="text-[#E27651]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={resPhone}
                        onChange={e => setResPhone(e.target.value)}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                      />
                    </div>
                  </div>

                  {/* Email & Party Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={resEmail}
                        onChange={e => setResEmail(e.target.value)}
                        placeholder="sandra@example.com"
                        className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Party Size <span className="text-[#E27651]">*</span>
                      </label>
                      <select
                        value={resPartySize}
                        onChange={e => setResPartySize(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                      >
                        <option value="1 Guest">1 Guest (Counter Seating)</option>
                        <option value="2 Guests">2 Guests (Intimate Table)</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests (Standard Booth)</option>
                        <option value="5-6 Guests">5 to 6 Guests</option>
                        <option value="7-8 Guests">7 to 8 Guests</option>
                        <option value="8+ Private Dining">8+ Guests (Private Dining Space)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Reservation Date <span className="text-[#E27651]">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={resDate}
                        onChange={e => setResDate(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">
                        Sitting Time <span className="text-[#E27651]">*</span>
                      </label>
                      <select
                        value={resTime}
                        onChange={e => setResTime(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                      >
                        <optgroup label="Lunch Service">
                          <option value="12:00">12:00 PM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="13:30">1:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                        </optgroup>
                        <optgroup label="Dinner Service">
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Preferred Seating Area
                    </label>
                    <select
                      value={resSeatingArea}
                      onChange={e => setResSeatingArea(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                    >
                      <option value="Main Dining Room">Main Hearth Dining Room (Warm & Lively)</option>
                      <option value="Lantern Garden Terrace">The Lantern Garden Terrace (Alfresco & Candlelit)</option>
                      <option value="Chef's Hearth Counter">Chef's Hearth Counter (Live Cooking View)</option>
                      <option value="Acacia Wine Vault">The Acacia Wine Vault (Exclusive Tasting)</option>
                    </select>
                  </div>

                  {/* Dietary & Special Occasion */}
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      Special Requests / Occasion / Dietary Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={resSpecialRequests}
                      onChange={e => setResSpecialRequests(e.target.value)}
                      placeholder="e.g. 5th Anniversary, gluten intolerance, celebrating birthday, quiet table preferred..."
                      className="w-full p-3 rounded-xl bg-[#1A1715] border border-[#3A322C] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C85A32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#C85A32] hover:bg-[#d4643c] text-white font-black text-xs uppercase tracking-widest shadow-xl transition-all"
                  >
                    Confirm Table Reservation
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 No deposit required for standard tables under 8 guests. Cancel anytime via WhatsApp.
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* PRIVATE DINING & EVENTS SECTION                               */}
      {/* ------------------------------------------------------------- */}
      <section id="privatedining-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAE3D9] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
              Exclusive Entertaining
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] mt-1">
              Private Dining & Special Celebrations
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              From intimate 10-person diplomatic gatherings to 60-guest garden wedding celebrations, Savanna Table offers bespoke culinary spaces.
            </p>
          </div>

          <a
            href={siteConfig.getWhatsAppLink("Hello Savanna Table, I would like to inquire about booking a private dining room / event space.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#312C28] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E27651]" />
            <span>Event Specialist</span>
          </a>
        </div>

        {/* 3 Private Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {privateDiningSpaces.map(space => (
            <div 
              key={space.id}
              className="bg-white rounded-2xl border border-[#EAE3D9] overflow-hidden shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#1C1917]/90 text-[#E27651] text-[10px] font-bold uppercase">
                      {space.capacity}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">{space.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{space.description}</p>
                  
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {space.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={siteConfig.getWhatsAppLink(`Hello Savanna Table Events, I would like to inquire regarding availability for "${space.name}" for an upcoming celebration.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EAE3D9] text-[#1C1917] hover:bg-[#C85A32] hover:text-white font-bold text-xs uppercase tracking-wider transition-all block text-center"
                >
                  Inquire for this Space
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Catering Callout */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#EAE3D9] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#C85A32] tracking-wider">Offsite Hospitality</span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Executive Corporate Catering & Embassy Hosting</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We bring the Savanna Table gastronomic experience directly to your boardroom, private residence, or embassy reception. Bespoke 5-course seated dinners, handcrafted canapés, and full sommelier staffing.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
            <a
              href={siteConfig.getWhatsAppLink("Hello Savanna Table, I would like to request catering information for a corporate executive reception.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#d4643c] text-white font-black text-xs uppercase tracking-wider text-center transition-all shadow-md"
            >
              Request Catering Deck
            </a>
          </div>
        </div>

      </section>

      {/* ------------------------------------------------------------- */}
      {/* TESTIMONIALS (CLEARLY MARKED AS DEMO PERSONAS)              */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-white py-20 border-t border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
              Guest Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917]">
              Voices from the Table
            </h2>
            <p className="text-xs text-slate-500">
              The reviews below represent illustrative dining personas to demonstrate how testimonials appear on restaurant websites developed by Nexa Web Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurantTestimonials.map(t => (
              <div 
                key={t.id}
                className="bg-[#FAF7F2] rounded-2xl p-7 border border-[#EAE3D9] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100/70 text-amber-900 border border-amber-200">
                      {t.tag}
                    </span>
                    <span className="text-xs text-amber-500 font-serif font-black">★★★★★</span>
                  </div>
                  <p className="text-xs text-[#2A2420] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-serif text-sm font-bold text-[#1C1917]">{t.guestName}</p>
                  <p className="text-[11px] text-slate-600">{t.guestRole}</p>
                  <p className="text-[10px] text-[#A34320] mt-0.5 font-medium">{t.occasion} • {t.date}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* LOCATION, OPENING HOURS & DIRECTIONS                          */}
      {/* ------------------------------------------------------------- */}
      <section id="contact-section" className="bg-[#1A1715] text-white py-20 border-t border-[#312C28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#E27651]">
                Finding Savanna Table
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                Visit Us in Karen, Nairobi
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nestled on tranquil Miotoni Road in Karen, Savanna Table is easily accessible via Ngong Road and the Southern Bypass. We offer full secure valet parking and wheelchair access throughout our dining rooms and garden terrace.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#241F1C] border border-[#3A322C] space-y-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Physical Address</p>
                  <p className="font-serif text-sm font-bold text-white">48 Miotoni Road, Karen</p>
                  <p className="text-slate-300">Nairobi, Kenya</p>
                </div>

                <div className="p-4 rounded-xl bg-[#241F1C] border border-[#3A322C] space-y-1">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Operating Hours</p>
                  <p className="font-serif text-sm font-bold text-white">Tue – Sun: 12 PM – 11 PM</p>
                  <p className="text-slate-300">Monday: Closed for Hearth Curing</p>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-5 py-2.5 rounded-xl bg-[#C85A32] text-white font-bold text-xs hover:bg-[#d4643c] flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteConfig.phone}</span>
                </a>

                <a
                  href={siteConfig.getWhatsAppLink(undefined, "Savanna Table Restaurant")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Host</span>
                </a>
              </div>

            </div>

            {/* Map / Visual Card */}
            <div className="lg:col-span-6 bg-[#241F1C] p-6 rounded-3xl border border-[#3A322C] space-y-4">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden relative border border-[#3A322C]">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
                  alt="Garden setting in Karen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715] via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <p className="font-serif font-bold text-lg">Miotoni Road Sanctuary</p>
                    <p className="text-xs text-slate-300">Minutes from Karen Country Club & The Hub</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1">
                <p>• <strong>From Westlands / CBD:</strong> Take Southern Bypass to Ngong Road exit, turn into Karen Road then Miotoni Road.</p>
                <p>• <strong>Valet Parking:</strong> Complimentary on-site valet provided for all dining guests.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* AGENCY SHOWCASE & PORTFOLIO BANNER                            */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#12100E] text-slate-400 border-t border-[#26221E] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Nexa Web Studio Pitch */}
          <div className="bg-[#1A1715] rounded-3xl p-8 border border-[#312C28] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded bg-[#C85A32]/20 text-[#E27651] text-[10px] font-black uppercase tracking-wider border border-[#C85A32]/40">
                Created by Nexa Web Studio
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Own a Restaurant, Lounge, or Hospitality Venue in Kenya?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Nexa Web Studio designs and engineers high-converting hospitality websites with digital menus, mobile table reservation funnels, WhatsApp booking workflows, and SEO positioning.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={openRequestModal}
                className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#d4643c] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Request Similar Restaurant Website
              </button>
              <a
                href={siteConfig.getWhatsAppLink("Hello Nexa Web Studio, I saw your Savanna Table restaurant demo and want to discuss building a website for my hospitality business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#2A2420] hover:bg-[#382F2A] text-white font-bold text-xs uppercase tracking-wider border border-[#443831] transition-all"
              >
                Chat with Web Studio
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-[#241F1C] pt-6">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Savanna Table. Fictional dining concept created for Nexa Web Studio demonstration purposes.
            </p>
            <p className="text-slate-500">
              All prices shown in KSh. Nairobi, Kenya.
            </p>
          </div>

        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* DISH INGREDIENT & PAIRING MODAL                               */}
      {/* ------------------------------------------------------------- */}
      {selectedDishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img src={selectedDishModal.image} alt={selectedDishModal.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedDishModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="px-2.5 py-1 rounded bg-[#C85A32] text-[10px] font-black uppercase">
                  {selectedDishModal.categoryDisplay}
                </span>
                <span className="font-serif font-bold text-lg bg-black/70 px-3 py-1 rounded-lg">
                  {selectedDishModal.priceDisplay}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">{selectedDishModal.name}</h3>
                {selectedDishModal.origin && (
                  <p className="text-[11px] text-[#C85A32] font-semibold mt-0.5 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Origin: {selectedDishModal.origin}</span>
                  </p>
                )}
                <p className="text-slate-600 mt-2 leading-relaxed">
                  {selectedDishModal.description}
                </p>
              </div>

              {selectedDishModal.pairing && (
                <div className="p-3.5 rounded-xl bg-[#FAF3EB] border border-[#F2DECE] space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#A34320] block">Sommelier Recommendation</span>
                  <p className="font-semibold text-[#1C1917] flex items-center gap-1.5">
                    <Wine className="w-4 h-4 text-[#C85A32]" />
                    <span>{selectedDishModal.pairing}</span>
                  </p>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.getWhatsAppLink(`Hello Savanna Table, I would like to reserve a table to enjoy the "${selectedDishModal.name}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#C85A32] hover:bg-[#d4643c] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-md"
                >
                  Reserve Table for this Dish
                </a>
                <button
                  onClick={() => setSelectedDishModal(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
