import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Briefcase, TrendingUp, ShieldCheck, CheckCircle2, Users, 
  ArrowRight, Phone, Mail, FileText, Calendar 
} from 'lucide-react';
import { apexData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const ApexConsultingDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [sessionBooked, setSessionBooked] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* Corporate Header */}
      <header className="bg-slate-950 text-white sticky top-10 z-30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white">APEX</span>
              <span className="text-[10px] uppercase font-bold text-sky-400 block -mt-1 tracking-wider">Business Consulting</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#practices" className="hover:text-sky-400 transition-colors">Practice Areas</a>
            <a href="#cases" className="hover:text-sky-400 transition-colors">Case Studies</a>
            <a href="#team" className="hover:text-sky-400 transition-colors">Partners</a>
            <a href="#session" className="hover:text-sky-400 transition-colors">Book Strategy Call</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Consulting Site
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">
            Strategy • Mergers & Acquisitions • African Market Entry
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Strategic Advisory for High-Growth Enterprises
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We partner with institutional leaders, multinational entrants, and mid-cap African enterprises to unlock capital, optimize unit economics, and scale across East Africa.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a href="#session" className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              Schedule Confidential Advisory Session
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practices" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Core Expertise</span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Practice Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apexData.practices.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card">
              <Briefcase className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-950">{p.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quantified Case Studies */}
      <section id="cases" className="py-20 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Impact Delivered</span>
            <h2 className="text-3xl font-extrabold mt-1">Selected Client Case Studies</h2>
            <p className="text-xs text-slate-400 mt-1">Quantified results from representative client engagements:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {apexData.caseStudies.map((c, i) => (
              <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono block">{c.impact}</span>
                <h3 className="text-base font-bold text-white">{c.client}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Partners */}
      <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Senior Leadership</span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Managing Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {apexData.team.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-bold text-base text-slate-950">{m.name}</h3>
              <p className="text-xs text-sky-700 font-semibold">{m.title}</p>
              <p className="text-xs text-slate-600 mt-2">{m.background}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Confidential Advisory Call Form */}
      <section id="session" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Executive Discovery</span>
            <h2 className="text-2xl font-bold text-slate-950 mt-1">Book an Advisory Consultation</h2>

            {sessionBooked ? (
              <div className="mt-6 p-6 bg-sky-50 border border-sky-200 rounded-2xl">
                <CheckCircle2 className="w-10 h-10 text-sky-600 mx-auto" />
                <h3 className="font-bold text-slate-950 mt-2">Discovery Call Requested</h3>
                <p className="text-xs text-slate-600 mt-1">Our managing partner will coordinate calendar availability shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSessionBooked(true); }} className="space-y-4 text-left mt-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Executive Name & Title</label>
                  <input required type="text" placeholder="e.g. Christine Mutua, CEO" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company & Industry</label>
                  <input required type="text" placeholder="e.g. Logistics & Supply Chain" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Advisory Focus</label>
                  <select className="w-full p-2.5 border rounded-lg text-xs outline-none bg-white">
                    <option>Market Entry Strategy</option>
                    <option>Corporate Capital Restructuring</option>
                    <option>Commercial Due Diligence</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3 bg-slate-950 hover:bg-slate-900 text-sky-400 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
                  Request Partner Discussion
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© Apex Business Consulting LLP. Delta Corner Annex, Westlands, Nairobi.</p>
          <button onClick={openRequestModal} className="text-sky-400 font-bold hover:underline">
            Request Consulting Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
