import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Building, MapPin, Bed, Bath, Maximize2, Phone, Mail, Search, 
  Sparkles, ArrowRight, CheckCircle2, DollarSign, UserCheck, Eye, X 
} from 'lucide-react';
import { primeNestData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const PrimeNestRealtyDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [valuationSent, setValuationSent] = useState(false);
  const [activePropertyModal, setActivePropertyModal] = useState<any>(null);

  const filteredProperties = primeNestData.properties.filter(p => {
    if (selectedLocation === "All") return true;
    return p.location.toLowerCase().includes(selectedLocation.toLowerCase());
  });

  return (
    <div className="bg-[#FAF9F6] text-slate-800 font-sans">
      
      {/* Brand Header */}
      <header className="bg-slate-950 text-white sticky top-10 z-30 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-wider text-white">PRIMENEST</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 block -mt-1 font-semibold">Luxury Realty</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-semibold tracking-wider uppercase text-slate-300">
            <a href="#listings" className="hover:text-amber-400 transition-colors">Exclusive Listings</a>
            <a href="#agents" className="hover:text-amber-400 transition-colors">Private Brokers</a>
            <a href="#valuation" className="hover:text-amber-400 transition-colors">Free Valuation</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Request Real Estate Website
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
            Exclusive Kenyan Estates & Penthouses
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Curated Prime Properties for Discerning Buyers
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Representing the finest architectural homes in Karen, Riverside, Lavington, and Nyari. Discretion, white-glove service, and verified title diligence.
          </p>

          {/* Interactive Location Filter Toolbar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {['All', 'Riverside', 'Lavington', 'Karen', 'Kileleshwa'].map(loc => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedLocation === loc
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-amber-400'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section id="listings" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Portfolio</span>
            <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Featured Prime Residences</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Showing {filteredProperties.length} active listings
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProperties.map(property => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-amber-400 backdrop-blur-sm border border-amber-500/30">
                  {property.tag}
                </span>
                <button
                  onClick={() => setActivePropertyModal(property)}
                  className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 text-xs font-bold flex items-center gap-1 shadow-md hover:bg-white"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>
              </div>

              <div className="p-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-slate-950">{property.title}</h3>
                  <span className="text-lg font-extrabold text-amber-800 font-mono">{property.price}</span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  {property.location}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-slate-400" /> {property.beds} Bedrooms</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-slate-400" /> {property.baths} Bathrooms</span>
                  <span className="flex items-center gap-1.5"><Maximize2 className="w-4 h-4 text-slate-400" /> {property.sqft}</span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={siteConfig.getWhatsAppLink(`Hi PrimeNest Realty, I would like to schedule a private walkthrough of ${property.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-bold text-xs text-center transition-colors shadow-sm"
                  >
                    Schedule Private Tour
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Profiles */}
      <section id="agents" className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Advisors</span>
            <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Private Client Brokerage Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {primeNestData.agents.map((agent, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex items-center gap-5">
                <img src={agent.image} alt={agent.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-base font-bold text-slate-950">{agent.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold">{agent.role}</p>
                  <p className="text-xs text-slate-500 mt-2 font-mono">{agent.phone}</p>
                  <p className="text-xs text-slate-500 font-mono">{agent.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Valuation Request Form */}
      <section id="valuation" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Complimentary Valuation</span>
            <h2 className="text-2xl font-extrabold text-slate-950 mt-1">Discover Your Home's Market Worth</h2>
            <p className="text-xs text-slate-600 mt-1">Receive an expert comparative market analysis based on recent prime transactions.</p>
          </div>

          {valuationSent ? (
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-amber-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-950">Valuation Request Received!</h3>
              <p className="text-xs text-slate-600">Our senior appraiser will deliver an initial valuation memo within 48 hours.</p>
              <button onClick={() => setValuationSent(false)} className="mt-3 px-4 py-2 bg-slate-950 text-amber-400 text-xs font-bold rounded-lg">
                Submit Another Property
              </button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setValuationSent(true); }} className="space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Owner Name</label>
                  <input required type="text" placeholder="e.g. Samuel Njenga" className="w-full px-3.5 py-2.5 rounded-lg border text-xs outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input required type="tel" placeholder="+254 7..." className="w-full px-3.5 py-2.5 rounded-lg border text-xs outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Property Neighborhood & Type</label>
                <input required type="text" placeholder="e.g. 4 Bedroom Townhouse, Mzima Springs, Lavington" className="w-full px-3.5 py-2.5 rounded-lg border text-xs outline-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-xs shadow-md transition-colors">
                Request Free Appraisal Report
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Property Details Modal */}
      {activePropertyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative space-y-4">
            <button onClick={() => setActivePropertyModal(null)} className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
            <img src={activePropertyModal.image} alt={activePropertyModal.title} className="w-full h-64 object-cover rounded-xl" />
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-bold text-slate-950">{activePropertyModal.title}</h3>
              <span className="text-lg font-bold text-amber-700 font-mono">{activePropertyModal.price}</span>
            </div>
            <p className="text-xs text-slate-500">{activePropertyModal.location} • {activePropertyModal.sqft}</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Features custom Italian fitted kitchen, private landscaped gardens, solar inverter backups, perimeter electric fencing, and DSQ.
            </p>
            <button
              onClick={() => {
                setActivePropertyModal(null);
                openRequestModal();
              }}
              className="w-full py-3 bg-slate-950 text-amber-400 rounded-xl font-bold text-xs"
            >
              Inquire via Prime Broker
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p>© PrimeNest Realty Ltd. All property boundaries subject to formal cadastre survey.</p>
          <button onClick={openRequestModal} className="text-amber-400 font-bold hover:underline">
            Request Similar Real Estate Platform →
          </button>
        </div>
      </footer>

    </div>
  );
};
