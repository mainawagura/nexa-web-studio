import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Briefcase, TrendingUp, ShieldCheck, CheckCircle2, Users, 
  ArrowRight, Phone, Mail, FileText, Calendar, ArrowUpRight, MessageSquare, Compass, X
} from 'lucide-react';
import { northstarData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const ApexConsultingDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [sessionBooked, setSessionBooked] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientFirm, setClientFirm] = useState("");
  const [agendaTopic, setAgendaTopic] = useState("Market Entry & Regional Expansion");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientFirm) {
      setSessionBooked(true);
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-[#0B192C] font-sans min-h-screen">
      
      {/* Editorial Corporate Header Navigation */}
      <header className="bg-[#0B192C] text-white sticky top-10 z-30 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#008DDA] flex items-center justify-center text-white font-black text-xl shadow-md">
              <span>N</span>
            </div>
            <div>
              <span className="font-black text-2xl tracking-tight text-white block">NORTHSTAR</span>
              <span className="text-[10px] uppercase font-bold text-[#008DDA] block -mt-1 tracking-widest">
                Advisory & Corporate Strategy
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-widest text-slate-300">
            <a href="#practices" className="hover:text-[#008DDA] transition-colors">Practice Areas</a>
            <a href="#cases" className="hover:text-[#008DDA] transition-colors">Case Studies</a>
            <a href="#team" className="hover:text-[#008DDA] transition-colors">Leadership</a>
            <a href="#booking" className="hover:text-[#008DDA] transition-colors">Book Consultation</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Northstar Advisory")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Partner WhatsApp</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-[#008DDA] hover:bg-[#0077b8] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request Advisory Site
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#0B192C] text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#008DDA]/10 text-[#008DDA] border border-[#008DDA]/30 text-xs font-bold uppercase tracking-wider">
            Corporate Transformation • Capital Advisory • East Africa
          </span>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Strategic Clarity for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008DDA] to-[#41C9E2]">
              Complex Commercial Scale.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We partner with institutional leaders, multinational investors, and high-growth African enterprises to navigate regulatory pathways, structure debt, and scale cross-border revenues.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <a 
              href="#booking" 
              className="px-8 py-3.5 rounded-xl bg-[#008DDA] hover:bg-[#0077b8] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Book Partner Advisory Session
            </a>
            <a 
              href="#cases" 
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              View Verified Case Studies
            </a>
          </div>

        </div>
      </section>

      {/* Practice Areas */}
      <section id="practices" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#008DDA]">Advisory Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">Core Practice Architecture</h2>
          <p className="text-xs text-slate-600">Cross-functional expertise structured to solve high-stakes commercial bottlenecks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {northstarData.practices.map((prac, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-[#008DDA] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#008DDA]/10 text-[#008DDA] flex items-center justify-center font-black">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg text-[#0B192C]">{prac.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{prac.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quantified Case Studies */}
      <section id="cases" className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#008DDA]">Measurable Commercial Impact</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">Verified Case Studies</h2>
            <p className="text-xs text-slate-600">Sample engagements demonstrating commercial methodology and audited ROI improvements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {northstarData.caseStudies.map((cs, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
                <span className="text-xs uppercase font-bold text-slate-400 block">{cs.client}</span>
                <p className="text-3xl font-black text-[#008DDA] tracking-tight">{cs.impact}</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">{cs.summary}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Partners */}
      <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#008DDA]">Senior Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">Managing Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {northstarData.partners.map((p, i) => (
            <div key={i} className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-black text-lg text-[#0B192C]">{p.name}</h3>
              <p className="text-xs font-bold text-[#008DDA]">{p.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{p.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Booking Form */}
      <section id="booking" className="py-20 bg-[#0B192C] text-white">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#008DDA]">Discovery Dialogue</span>
            <h2 className="text-3xl font-black text-white">Schedule Confidential Partner Briefing</h2>
            <p className="text-xs text-slate-400">Experience our interactive consultation inquiry funnel.</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            {sessionBooked ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-black text-white">Briefing Scope Received</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong>{clientName}</strong> ({clientFirm}). Your preliminary brief regarding <em>{agendaTopic}</em> is prepared:
                </p>
                <a
                  href={siteConfig.getWhatsAppLink(`Hi Northstar Advisory, I submitted a consultation inquiry for ${clientFirm}. Representative: ${clientName}, Topic: ${agendaTopic}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm with Partner on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Executive Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Kimani"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-300 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Holdings"
                      value={clientFirm}
                      onChange={e => setClientFirm(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-300 block mb-1">Primary Advisory Agenda</label>
                  <select
                    value={agendaTopic}
                    onChange={e => setAgendaTopic(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
                  >
                    <option>Market Entry & Regional Expansion</option>
                    <option>Corporate Capital & Debt Restructuring</option>
                    <option>Digital Operations & ERP Modernization</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#008DDA] hover:bg-[#0077b8] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all mt-2"
                >
                  Confirm Preliminary Consultation Request
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
