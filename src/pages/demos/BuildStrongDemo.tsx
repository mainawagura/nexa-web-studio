import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  HardHat, Hammer, ShieldAlert, CheckCircle2, Phone, Mail, 
  ArrowRight, Calculator, Truck, FileText, Check, ShieldCheck, X, Sparkles, MessageSquare
} from 'lucide-react';
import { ironwoodData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const BuildStrongDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [activeSector, setActiveSector] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof ironwoodData.projects[0] | null>(null);
  
  // RFP Quotation Estimator state
  const [rfpScope, setRfpScope] = useState("Commercial High-Rise");
  const [rfpSqMeters, setRfpSqMeters] = useState("2,500");
  const [rfpClientName, setRfpClientName] = useState("");
  const [rfpClientPhone, setRfpClientPhone] = useState("");
  const [rfpSubmitted, setRfpSubmitted] = useState(false);

  const filteredProjects = ironwoodData.projects.filter(p => {
    if (activeSector === "All") return true;
    return p.sector.includes(activeSector);
  });

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rfpClientName && rfpClientPhone) {
      setRfpSubmitted(true);
    }
  };

  return (
    <div className="bg-[#F7F6F2] text-[#1E2229] font-sans min-h-screen">
      
      {/* Heavy Engineering Header */}
      <header className="bg-[#1E2229] border-b border-orange-600/30 sticky top-10 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C] flex items-center justify-center text-white font-black text-xl shadow-md">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-tighter text-white block">IRONWOOD</span>
              <span className="text-[10px] uppercase font-black text-[#EA580C] block -mt-1 tracking-widest">
                Construction Group • NCA-1 Certified
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-black uppercase tracking-widest text-slate-300">
            <a href="#services" className="hover:text-[#EA580C] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#EA580C] transition-colors">Civil Works</a>
            <a href="#safety" className="hover:text-[#EA580C] transition-colors">Safety & Quality</a>
            <a href="#estimator" className="hover:text-[#EA580C] transition-colors">RFP Estimator</a>
            <a href="#contact" className="hover:text-[#EA580C] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Ironwood Construction Group")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp PM</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs uppercase tracking-wider transition-all"
            >
              Request Contractor Site
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#1E2229] text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/30 text-xs font-black uppercase tracking-wider">
              NCA Category 1 Certified General Contractors • East Africa
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase text-[#F7F6F2]">
              Heavy Commercial, Civil & Structural Contracting
            </h1>
            
            <p className="text-slate-300 text-base leading-relaxed max-w-xl font-normal">
              Over KES 3.8B in multi-storey commercial towers, civil road corridors, and heavy cold chain logistics hubs executed on schedule, within cost, and to zero-incident safety tolerances.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="#estimator" 
                className="px-7 py-3.5 bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
              >
                Submit Project Tender RFP
              </a>
              <a 
                href="#projects" 
                className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                Explore Civil Portfolio
              </a>
            </div>

            {/* Key Civil Capacity Metrics */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
              {ironwoodData.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-2xl font-black text-[#EA580C] font-mono">{m.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Ironwood Construction Site Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="px-2.5 py-1 bg-[#EA580C] text-white text-[10px] font-black uppercase rounded w-fit mb-1">
                  Civil Flagship Handover
                </span>
                <p className="text-lg font-black uppercase">Apex Financial Centre (14 Storeys)</p>
                <p className="text-xs text-slate-300">Reinforced post-tensioned frame • Handover: 2025</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-black text-[#EA580C]">Engineering Disciplines</span>
          <h2 className="text-3xl font-black uppercase text-[#1E2229]">Contracting Capabilities</h2>
          <p className="text-sm text-slate-600">Turnkey delivery from structural earthworks to architectural curtain walls.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ironwoodData.services.map((svc, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-card hover:border-[#EA580C] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mb-5">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="font-black text-base text-[#1E2229] uppercase">{svc.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Gallery & Case Studies */}
      <section id="projects" className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs uppercase tracking-widest font-black text-[#EA580C]">Track Record</span>
              <h2 className="text-3xl font-black uppercase text-[#1E2229] mt-1">Completed Civil Works</h2>
            </div>
            
            <div className="flex gap-2">
              {["All", "Commercial", "Residential", "Industrial"].map(sec => (
                <button
                  key={sec}
                  onClick={() => setActiveSector(sec)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-colors ${
                    activeSector === sec ? 'bg-[#EA580C] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map(proj => (
              <div 
                key={proj.id}
                className="bg-[#F7F6F2] rounded-3xl overflow-hidden border border-slate-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#EA580C] text-white text-[10px] font-black uppercase rounded shadow-sm">
                      {proj.sector}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-black text-[#1E2229] uppercase">{proj.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                    
                    <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-500 font-mono">
                      <span>Valuation: <strong className="text-[#EA580C]">{proj.value}</strong></span>
                      <span>Handover: {proj.year}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedCaseStudy(proj)}
                    className="w-full py-2.5 rounded-xl border border-slate-300 hover:border-[#EA580C] text-slate-700 hover:text-[#EA580C] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    View Project Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Safety & Standards Section */}
      <section id="safety" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E2229] rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase font-black tracking-widest text-[#EA580C]">Accreditations</span>
            <h2 className="text-3xl font-black uppercase text-white">Safety & Zero-Harm Protocol</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every project operates under strict ISO 9001 and ISO 45001 safety matrices with certified occupational officers on-site 24/7.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            {ironwoodData.safetyPrinciples.map((sp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>{sp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFP Tender Estimator & Contact */}
      <section id="estimator" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-black text-[#EA580C]">Tender Proposals</span>
            <h2 className="text-3xl font-black uppercase text-[#1E2229]">Instant Project RFP Builder</h2>
            <p className="text-xs text-slate-600">Submit your commercial or civil scope for structural evaluation and bill of quantities review.</p>
          </div>

          <div className="bg-[#F7F6F2] p-8 rounded-3xl border border-slate-200">
            {rfpSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-black text-[#1E2229] uppercase">Project RFP Staged Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{rfpClientName}</strong>. Transmit this scope directly to our chief civil engineer on WhatsApp:
                </p>
                <a
                  href={siteConfig.getWhatsAppLink(`Hello Ironwood Construction, I am submitting an RFP for ${rfpScope} (~${rfpSqMeters} sq m). Client: ${rfpClientName}, Phone: ${rfpClientPhone}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit RFP via WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleRfpSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Contract Sector</label>
                    <select
                      value={rfpScope}
                      onChange={e => setRfpScope(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    >
                      <option>Commercial Multi-Storey</option>
                      <option>Heavy Civil Infrastructure</option>
                      <option>Industrial Logistics Facility</option>
                      <option>Luxury Residential Enclave</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Approximate Floor Area (Sq. Meters)</label>
                    <input
                      type="text"
                      value={rfpSqMeters}
                      onChange={e => setRfpSqMeters(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Company / Project Representative</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eng. Peter Wagura"
                      value={rfpClientName}
                      onChange={e => setRfpClientName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Direct Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={rfpClientPhone}
                      onChange={e => setRfpClientPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all mt-2"
                >
                  Generate Project Scope Estimate
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#1E2229] p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-black text-[#EA580C]">Civil Case Study</span>
                <h3 className="text-xl font-black mt-0.5">{selectedCaseStudy.title}</h3>
              </div>
              <button onClick={() => setSelectedCaseStudy(null)} className="p-2 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-xs text-slate-700">
              <p className="leading-relaxed">{selectedCaseStudy.description}</p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-3 font-mono">
                <div><span>Valuation:</span> <strong className="text-[#EA580C] block">{selectedCaseStudy.value}</strong></div>
                <div><span>Duration:</span> <strong className="text-slate-800 block">{selectedCaseStudy.duration}</strong></div>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="w-full py-2.5 rounded-xl bg-[#1E2229] text-white font-bold uppercase tracking-wider"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
