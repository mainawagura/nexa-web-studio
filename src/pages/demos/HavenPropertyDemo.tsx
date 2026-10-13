import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Building2, Key, ShieldCheck, CheckCircle2, MessageSquare, Phone, 
  Search, Filter, MapPin, DollarSign, Wrench, ArrowRight, UserCheck, 
  Send, Sparkles, Bed, Bath, Maximize2, Calendar, Check, X
} from 'lucide-react';
import { havenstoneData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const HavenPropertyDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  
  // Tab / Page state
  const [activeTab, setActiveTab] = useState<'home' | 'properties' | 'services' | 'about' | 'contact'>('home');
  
  // Listing filter states
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  
  // Viewing enquiry modal state
  const [selectedPropertyForViewing, setSelectedPropertyForViewing] = useState<typeof havenstoneData.properties[0] | null>(null);
  const [viewingFormSubmitted, setViewingFormSubmitted] = useState(false);
  const [viewingDate, setViewingDate] = useState("");
  const [viewerName, setViewerName] = useState("");
  const [viewerPhone, setViewerPhone] = useState("");

  // Tenant ticket state
  const [ticketUnit, setTicketUnit] = useState("");
  const [ticketDesc, setTicketDesc] = useState("");
  const [ticketSuccess, setTicketSuccess] = useState(false);

  const filteredProperties = havenstoneData.properties.filter(prop => {
    const matchesLoc = !searchLocation || prop.location.toLowerCase().includes(searchLocation.toLowerCase()) || prop.title.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesType = selectedType === "All" || prop.type.toLowerCase().includes(selectedType.toLowerCase());
    return matchesLoc && matchesType;
  });

  const handleViewingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (viewerName && viewerPhone && viewingDate) {
      setViewingFormSubmitted(true);
    }
  };

  return (
    <div className="bg-[#F7F6F2] text-[#171A21] font-sans min-h-screen">
      
      {/* Editorial Luxury Header Navigation */}
      <header className="bg-[#171A21] text-[#F7F6F2] sticky top-10 z-30 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-[#171A21] font-black text-xl shadow-md">
              <span>H</span>
            </div>
            <div>
              <span className="font-serif text-2xl tracking-wide text-white block">HAVENSTONE</span>
              <span className="text-[10px] uppercase font-bold text-[#C5A059] block -mt-1 tracking-widest">
                Properties & Asset Management
              </span>
            </div>
          </div>

          {/* Sub-Pages / Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-widest font-bold text-slate-300">
            {[
              { id: 'home', label: 'Home' },
              { id: 'properties', label: 'Properties' },
              { id: 'services', label: 'Management' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1.5 transition-colors ${
                  activeTab === tab.id 
                    ? 'text-[#C5A059] border-b-2 border-[#C5A059]' 
                    : 'hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Havenstone Properties")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#b58f45] text-[#171A21] text-xs font-black uppercase tracking-wider transition-all"
            >
              Request Similar Site
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#171A21] text-white overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 text-xs font-bold uppercase tracking-wider">
                Excellence in Diaspora Asset Management • Nairobi
              </span>
              
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-[#F7F6F2]">
                Protecting & Growing <br />
                <span className="italic text-[#C5A059]">Prime Real Estate</span> Assets.
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                We manage premier residential estates and commercial properties for local investors and overseas diaspora landlords with automated remittance, vetted tenants, and zero reconciliation leakage.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('properties')}
                  className="px-7 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#b58f45] text-[#171A21] font-black text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  Explore Available Properties
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
                >
                  Landlord Management Services
                </button>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
                {havenstoneData.stats.map((s, idx) => (
                  <div key={idx}>
                    <p className="font-serif text-2xl font-bold text-[#C5A059]">{s.value}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Havenstone Luxury Penthouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="px-2.5 py-1 bg-[#C5A059] text-[#171A21] text-[10px] font-black uppercase rounded w-fit mb-1">
                    Featured Asset
                  </span>
                  <p className="font-serif text-xl font-bold">The Sovereign Penthouse — Riverside</p>
                  <p className="text-xs text-slate-300">KES 180,000 / month • 4 Bedroom Luxury</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Property Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevated p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchLocation}
              onChange={e => setSearchLocation(e.target.value)}
              placeholder="Search by neighborhood (e.g. Riverside, Kilimani, Lavington)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-slate-800"
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-slate-800 bg-white"
            >
              <option value="All">All Property Types</option>
              <option value="Penthouse">Luxury Penthouses</option>
              <option value="Townhouse">Gated Townhouses</option>
              <option value="Suite">Executive Apartments</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button
              onClick={() => { setSearchLocation(""); setSelectedType("All"); }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              Reset Filters
            </button>
          </div>

        </div>
      </section>

      {/* Main Tabbed Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* PROPERTIES SECTION */}
        <section id="properties" className="space-y-10">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Available Portfolio</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#171A21] mt-1">
                Luxury Rental Residences
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Showing <strong>{filteredProperties.length}</strong> managed residences available for lease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProperties.map(prop => (
              <div 
                key={prop.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#171A21] text-[#C5A059] text-[10px] font-bold uppercase rounded-full shadow-sm">
                      {prop.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white drop-shadow-md">
                    <span className="text-lg font-bold font-serif">{prop.price}</span>
                    <span className="text-xs bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      {prop.status}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#171A21] group-hover:text-[#C5A059] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{prop.location}</span>
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs text-slate-600 font-medium">
                      <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-slate-400" /> {prop.beds} Beds</span>
                      <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-slate-400" /> {prop.baths} Baths</span>
                      <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5 text-slate-400" /> {prop.sqft}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {prop.amenities.map((am, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedPropertyForViewing(prop);
                        setViewingFormSubmitted(false);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-[#171A21] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Book Viewing Tour
                    </button>
                    <a
                      href={siteConfig.getWhatsAppLink(`Hi Havenstone Properties, I am interested in inquiring about ${prop.title} (${prop.price}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-slate-200 text-emerald-600 hover:bg-emerald-50 transition-colors"
                      title="Direct WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LANDLORD MANAGEMENT SERVICES */}
        <section id="services" className="bg-[#171A21] rounded-3xl p-8 sm:p-14 text-white space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">For Property Owners</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              Institutional Asset Management for Diaspora Landlords
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Living overseas? We eliminate tenancy headaches with rigorous tenant screening, automated M-Pesa rent collection, vetted maintenance crews, and encrypted financial statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {havenstoneData.services.map(svc => (
              <div key={svc.id} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">{svc.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Maintenance Ticket Logger */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Tenant Portal Feature</span>
              <h3 className="text-xl font-bold font-serif text-white">Interactive Maintenance Request Logger</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience how tenants log plumbing, electrical, or structural tickets directly with automated dispatch alerts.
              </p>
            </div>

            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              {ticketSuccess ? (
                <div className="text-center py-4 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="font-bold text-white text-sm">Maintenance Ticket Dispatched</p>
                  <p className="text-xs text-slate-400">Reference: #HST-9402 • Vetted technician assigned.</p>
                  <button onClick={() => setTicketSuccess(false)} className="text-xs text-[#C5A059] underline font-bold mt-2">
                    Log Another Demo Request
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if(ticketUnit && ticketDesc) setTicketSuccess(true); }} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <input
                      type="text"
                      placeholder="Apartment Unit (e.g. Sovereign Penthouse 4B)"
                      value={ticketUnit}
                      onChange={e => setTicketUnit(e.target.value)}
                      required
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500"
                    />
                    <select className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                      <option>Plumbing & Hot Water</option>
                      <option>Electrical & Backup Power</option>
                      <option>Air Conditioning & HVAC</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Describe issue (e.g. Water heater pilot light in master ensuite)..."
                    value={ticketDesc}
                    onChange={e => setTicketDesc(e.target.value)}
                    required
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs"
                  ></textarea>
                  <button type="submit" className="px-5 py-2 rounded-xl bg-[#C5A059] text-[#171A21] font-bold text-xs uppercase tracking-wider">
                    Submit Demo Maintenance Ticket
                  </button>
                </form>
              )}
            </div>
          </div>

        </section>

      </main>

      {/* VIEWING ENQUIRY MODAL */}
      {selectedPropertyForViewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#171A21] p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#C5A059]">Private Inspection Booking</span>
                <h3 className="font-serif text-xl font-bold mt-0.5">{selectedPropertyForViewing.title}</h3>
                <p className="text-xs text-slate-300">{selectedPropertyForViewing.price} • {selectedPropertyForViewing.location}</p>
              </div>
              <button onClick={() => setSelectedPropertyForViewing(null)} className="p-2 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {viewingFormSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#171A21]">Viewing Request Scheduled!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong>{viewerName}</strong>. This demo inquiry is ready to send to our agency concierge:
                  </p>
                  <a
                    href={siteConfig.getWhatsAppLink(`Hi Havenstone Properties, I scheduled a viewing for ${selectedPropertyForViewing.title} on ${viewingDate}. Name: ${viewerName}, Phone: ${viewerPhone}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleViewingSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={viewerName}
                      onChange={e => setViewerName(e.target.value)}
                      placeholder="e.g. David Mutiso"
                      className="w-full p-3 rounded-xl border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone Number (WhatsApp Preferred)</label>
                    <input
                      type="tel"
                      required
                      value={viewerPhone}
                      onChange={e => setViewerPhone(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full p-3 rounded-xl border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Preferred Viewing Date & Time</label>
                    <input
                      type="datetime-local"
                      required
                      value={viewingDate}
                      onChange={e => setViewingDate(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#C5A059] text-[#171A21] font-black text-xs uppercase tracking-wider shadow-md transition-all mt-2"
                  >
                    Confirm Demo Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
