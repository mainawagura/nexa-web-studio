import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Building2, Key, ShieldCheck, CheckCircle2, MessageSquare, Phone, 
  Search, Filter, MapPin, DollarSign, Wrench, ArrowRight, UserCheck, 
  Send, Sparkles 
} from 'lucide-react';
import { havenData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const HavenPropertyDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [filterType, setFilterType] = useState("All");
  const [maintenanceSubmitted, setMaintenanceSubmitted] = useState(false);
  const [tenantUnit, setTenantUnit] = useState("");
  const [tenantIssue, setTenantIssue] = useState("");

  const filteredProperties = havenData.properties.filter(p => {
    if (filterType === "All") return true;
    return p.status.includes(filterType);
  });

  const handleMaintenanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tenantUnit && tenantIssue) {
      setMaintenanceSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* Demo Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#082B4C] flex items-center justify-center text-white">
              <Building2 className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <span className="font-extrabold text-xl text-[#082B4C] tracking-tight">HAVEN</span>
              <span className="text-xs font-bold text-teal-600 block -mt-1 tracking-wider uppercase">Property Management</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <a href="#properties" className="hover:text-teal-600 transition-colors">Vacancies</a>
            <a href="#landlords" className="hover:text-teal-600 transition-colors">Landlord Services</a>
            <a href="#tenants" className="hover:text-teal-600 transition-colors">Tenant Portal</a>
            <a href="#about" className="hover:text-teal-600 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Haven Property Management")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-3.5 py-1.5 rounded-lg bg-[#082B4C] hover:bg-[#04182B] text-white text-xs font-semibold transition-colors"
            >
              Request Similar Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-[#082B4C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                Trusted by 140+ Diaspora Landlords
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Stress-Free Property Management Across Nairobi
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                We handle tenant placement, automated M-Pesa rent collection, routine repairs, and transparent monthly remittances so you can manage your Kenyan properties with total confidence from anywhere in the world.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#properties"
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-colors"
                >
                  View Available Rentals
                </a>
                <a
                  href="#landlords"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Landlord Onboarding
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {havenData.stats.map((s, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-3xl font-extrabold text-teal-400 font-mono">{s.value}</p>
                  <p className="text-xs text-slate-300 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services for Landlords */}
      <section id="landlords" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-bold text-teal-600">Landlord Solutions</span>
          <h2 className="text-3xl font-extrabold text-[#082B4C] mt-1">End-to-End Estate Management</h2>
          <p className="text-xs text-slate-600 mt-2">Built to eliminate rent leakage, caretaker headaches, and delayed reporting.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {havenData.services.map((svc, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-elevated transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#082B4C]">{svc.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Rental Properties with Filter */}
      <section id="properties" className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-teal-600">Current Listings</span>
              <h2 className="text-3xl font-extrabold text-[#082B4C] mt-1">Available Rental Units</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {['All', 'Available', 'Pending'].map(btn => (
                <button
                  key={btn}
                  onClick={() => setFilterType(btn)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    filterType === btn
                      ? 'bg-[#082B4C] text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {btn} Units
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProperties.map(prop => (
              <div key={prop.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white ${
                    prop.status.includes('Available') ? 'bg-teal-600' : 'bg-amber-600'
                  }`}>
                    {prop.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-teal-600 font-bold">{prop.type}</p>
                  <h3 className="text-lg font-bold text-[#082B4C] mt-1">{prop.name}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {prop.location}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-extrabold text-base text-[#082B4C] font-mono">{prop.rent}</span>
                    <a
                      href={siteConfig.getWhatsAppLink(`Hi Haven Property, I am interested in scheduling a viewing for "${prop.name}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs font-bold transition-colors"
                    >
                      Book Viewing
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tenant Maintenance & Request Simulator */}
      <section id="tenants" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-teal-600">Tenant Self-Service</span>
            <h2 className="text-2xl font-extrabold text-[#082B4C] mt-1">Submit a Maintenance Ticket</h2>
            <p className="text-xs text-slate-600 mt-1">Tenants can submit repairs 24/7 with instant tracking updates.</p>
          </div>

          {maintenanceSubmitted ? (
            <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-2 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
              <h3 className="text-lg font-bold text-[#082B4C]">Ticket #TKT-8901 Logged Successfully!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Maintenance request for <strong>{tenantUnit}</strong> has been assigned to our standby technician. Caretaker and diaspora landlord notified.
              </p>
              <button
                onClick={() => {
                  setMaintenanceSubmitted(false);
                  setTenantUnit("");
                  setTenantIssue("");
                }}
                className="mt-3 px-4 py-2 bg-[#082B4C] text-white text-xs font-semibold rounded-lg"
              >
                Log Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleMaintenanceSubmit} className="space-y-4 max-w-lg mx-auto text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Unit Number & Building</label>
                <input
                  type="text"
                  required
                  value={tenantUnit}
                  onChange={e => setTenantUnit(e.target.value)}
                  placeholder="e.g. Unit A4, Haven Heights Kilimani"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Issue Category & Details</label>
                <textarea
                  rows={3}
                  required
                  value={tenantIssue}
                  onChange={e => setTenantIssue(e.target.value)}
                  placeholder="e.g. Master bathroom tap is leaking continuously. Need repair technician."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Simulate Ticket Submission
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Demo Footer */}
      <footer id="contact" className="bg-[#082B4C] text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div>
            <p className="font-bold text-white text-sm">Haven Property Management</p>
            <p className="text-slate-400 mt-0.5">Argwings Kodhek Road, Kilimani, Nairobi, Kenya</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-teal-400 font-mono">Caretaker Standby: +254 700 000 000</span>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-bold"
            >
              Request Website Like This
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
