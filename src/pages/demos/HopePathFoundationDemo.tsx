import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  HeartHandshake, Heart, ShieldCheck, CheckCircle2, MessageSquare, 
  ArrowRight, Globe, Droplets, Laptop, Sparkles, Users, Award
} from 'lucide-react';
import { hopePathData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const HopePathFoundationDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [pledgeAmount, setPledgeAmount] = useState("KES 5,000");
  const [pledgeType, setPledgeType] = useState("Solar Borehole Clean Water Fund");
  const [donorName, setDonorName] = useState("");
  const [pledgeSent, setPledgeSent] = useState(false);

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donorName) {
      setPledgeSent(true);
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-800 font-sans min-h-screen">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-teal-100 flex items-center justify-center font-bold shadow-sm">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 block">HOPEPATH</span>
              <span className="text-[10px] uppercase font-bold text-teal-700 block -mt-1 tracking-widest">
                Community Foundation • Kenya
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#mission" className="hover:text-teal-700 transition-colors">Our Mission</a>
            <a href="#programs" className="hover:text-teal-700 transition-colors">Active Programs</a>
            <a href="#transparency" className="hover:text-teal-700 transition-colors">Audited Impact</a>
            <a href="#pledge" className="hover:text-teal-700 transition-colors">Sample Pledge</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "HopePath Foundation")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Foundation WhatsApp</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request NGO Website
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-300 bg-teal-900/60 px-3.5 py-1 rounded-full border border-teal-700/60">
            Transparent Community Impact • East Africa
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Transforming Rural Communities with Scalable Solutions
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {hopePathData.mission}
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#pledge" className="px-8 py-3.5 rounded-xl bg-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
              Support a Community Initiative
            </a>
            <a href="#programs" className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/20">
              Explore Active Pillars
            </a>
          </div>
        </div>
      </section>

      {/* Active Pillars & Verified Stats */}
      <section id="programs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-700">Strategic Programs</span>
          <h2 className="text-3xl font-black text-slate-900">Sustainable Community Initiatives</h2>
          <p className="text-xs text-slate-600">Demonstrating structured impact metrics, photos, and project verification.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hopePathData.pillars.map((pil, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card space-y-4">
              <span className="text-2xl font-black text-teal-700 font-mono block">{pil.count}</span>
              <h3 className="font-bold text-lg text-slate-900">{pil.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pil.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Transparency */}
      <section id="transparency" className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <Award className="w-10 h-10 text-teal-700 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">Audited Financial Stewardship</h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
            {hopePathData.financialTransparency}
          </p>
          <span className="inline-block text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            Demonstration NGO Structure
          </span>
        </div>
      </section>

      {/* Sample Donation Pledge Form */}
      <section id="pledge" className="py-20 max-w-3xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-700">Sample Pledge Flow</span>
          <h2 className="text-3xl font-black text-slate-900">Support a Community Project</h2>
          <p className="text-xs text-slate-600">Illustrating pledge selection, program allocation, and donor confirmation.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
          {pledgeSent ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900">Pledge Formatted Successfully!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{donorName}</strong>. Your sample pledge of {pledgeAmount} toward the <em>{pledgeType}</em> is prepared:
              </p>
              <a
                href={siteConfig.getWhatsAppLink(`Hi HopePath Foundation, I would like to submit a pledge of ${pledgeAmount} for ${pledgeType}. Donor: ${donorName}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Pledge on WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handlePledgeSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Target Initiative</label>
                <select
                  value={pledgeType}
                  onChange={e => setPledgeType(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50"
                >
                  <option>Solar Borehole Clean Water Fund</option>
                  <option>Digital Village Youth Learning Center</option>
                  <option>Maternal & Child Mobile Clinic Van</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Illustrative Contribution Amount</label>
                <div className="grid grid-cols-3 gap-2">
                  {["KES 2,500", "KES 5,000", "KES 15,000"].map(amt => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => setPledgeAmount(amt)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-colors ${
                        pledgeAmount === amt ? 'bg-teal-700 text-white border-teal-700' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {amt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Full Name / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Karanja"
                  value={donorName}
                  onChange={e => setDonorName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-black text-xs uppercase tracking-wider shadow-md mt-2"
              >
                Format Sample Contribution Pledge
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
