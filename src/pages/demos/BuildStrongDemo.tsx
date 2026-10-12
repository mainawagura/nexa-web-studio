import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  HardHat, Hammer, ShieldAlert, CheckCircle2, Phone, Mail, 
  ArrowRight, Calculator, Truck, FileText, Check 
} from 'lucide-react';
import { buildStrongData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const BuildStrongDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [quoteSent, setQuoteSent] = useState(false);
  const [sectorFilter, setSectorFilter] = useState("All");

  const filteredProjects = buildStrongData.projects.filter(p => {
    if (sectorFilter === "All") return true;
    return p.sector === sectorFilter;
  });

  return (
    <div className="bg-slate-900 text-slate-100 font-sans">
      
      {/* Heavy Contractor Header */}
      <header className="bg-slate-950 border-b border-orange-500/30 sticky top-10 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-xl shadow-md">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-white">BUILDSTRONG</span>
              <span className="text-[10px] uppercase font-bold text-orange-500 block -mt-1 tracking-wider">Civil & Commercial Contractors</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#services" className="hover:text-orange-500 transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
            <a href="#process" className="hover:text-orange-500 transition-colors">Execution</a>
            <a href="#quote" className="hover:text-orange-500 transition-colors">Request Quote</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Contractor Site
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
              NCA-1 Certified General Contractors • Kenya
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase">
              Heavy Commercial, Civil & Structural Contracting
            </h1>
            <p className="text-slate-300 text-base leading-relaxed max-w-xl">
              Over KES 2.5B in commercial towers, logistics warehouses, and high-spec civil infrastructure executed on time, within budget, and to zero-incident safety standards.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a href="#quote" className="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg">
                Submit RFP / Quotation
              </a>
              <a href="#projects" className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-lg">
                View Project Portfolio
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4">
            <h3 className="font-bold text-orange-400 text-sm uppercase tracking-wider">Operational Metrics</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-3xl font-black text-white font-mono">100%</p>
                <p className="text-[11px] text-slate-400 mt-1 uppercase">Structural Warranty</p>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-3xl font-black text-orange-500 font-mono">35+</p>
                <p className="text-[11px] text-slate-400 mt-1 uppercase">Heavy Earthmovers</p>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-3xl font-black text-white font-mono">0</p>
                <p className="text-[11px] text-slate-400 mt-1 uppercase">Lost-Time Accidents</p>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-3xl font-black text-orange-500 font-mono">KES 2.5B+</p>
                <p className="text-[11px] text-slate-400 mt-1 uppercase">Completed Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-500">Engineering Disciplines</span>
          <h2 className="text-3xl font-black uppercase text-white mt-1">Contracting Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildStrongData.services.map((svc, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">{svc.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-orange-500">Track Record</span>
              <h2 className="text-3xl font-black uppercase text-white mt-1">Completed Civil Works</h2>
            </div>
            <div className="flex gap-2">
              {['All', 'Commercial', 'Residential', 'Industrial'].map(sec => (
                <button
                  key={sec}
                  onClick={() => setSectorFilter(sec)}
                  className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${
                    sectorFilter === sec ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((proj, i) => (
              <div key={i} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={proj.image} 
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80") {
                        target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80";
                      }
                    }}
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-orange-600 text-white text-[10px] font-bold uppercase rounded">
                    {proj.sector}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs text-slate-400 font-mono">
                    <span>Valuation: <strong className="text-orange-400">{proj.value}</strong></span>
                    <span>Handover: {proj.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="quote" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-500">Tender & RFP</span>
          <h2 className="text-2xl font-black uppercase text-white mt-1">Request a Construction Quotation</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">Upload architectural drawings and BOQ requirements for our engineering quantity surveying team.</p>

          {quoteSent ? (
            <div className="mt-6 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-orange-500 mx-auto" />
              <h3 className="text-lg font-bold text-white uppercase">Quotation Request Registered</h3>
              <p className="text-xs text-slate-300">Our chief quantity surveyor will get in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setQuoteSent(true); }} className="space-y-4 max-w-lg mx-auto mt-6 text-left">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Developer / Organization Name</label>
                <input required type="text" placeholder="e.g. Apex Industrial Parks Ltd" className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white outline-none focus:border-orange-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Contract Value Estimate</label>
                  <select className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white outline-none">
                    <option>KES 10M - 50M</option>
                    <option>KES 50M - 200M</option>
                    <option>KES 200M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Site County / Location</label>
                  <input required type="text" placeholder="e.g. Machakos County" className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider transition-colors">
                Request Engineering Estimation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contractor Footer */}
      <footer className="bg-black text-slate-500 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© BuildStrong Civil Contractors. Licensed by the National Construction Authority (NCA-1).</p>
          <button onClick={openRequestModal} className="text-orange-500 font-bold hover:underline">
            Request Similar Construction Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
