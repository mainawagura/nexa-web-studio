import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Sparkles, Check, CheckCircle2, MessageSquare, Phone, MapPin, 
  Calculator, Star, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { sparkleProData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const SparkleProDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [bedrooms, setBedrooms] = useState(2);
  const [serviceType, setServiceType] = useState("Deep Clean");
  const [quoteSent, setQuoteSent] = useState(false);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = 4500;
    if (serviceType === "Deep Clean") base = 7500;
    if (serviceType === "Post-Construction") base = 12000;
    return base + (bedrooms - 1) * 1800;
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-blue-950">SPARKLEPRO</span>
              <span className="text-[10px] uppercase font-bold text-teal-600 block -mt-1 tracking-wider">Professional Cleaning Services</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-blue-600 transition-colors">Price Estimator</a>
            <a href="#areas" className="hover:text-blue-600 transition-colors">Service Areas</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "SparklePro Services")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <button onClick={openRequestModal} className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold">
              Request Services Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-300 bg-teal-900/60 px-3 py-1 rounded-full border border-teal-500/30">
            Certified • Insured • Eco-Friendly Supplies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Nairobi's Most Trusted Residential & Office Deep Cleaners
          </h1>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Move-in, move-out, post-renovation, and regular office maintenance. Vetted crew, hospital-grade sanitization, and 100% satisfaction guarantee.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#calculator" className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg">
              Instant Price Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Price Calculator */}
      <section id="calculator" className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Instant Estimate</span>
            <h2 className="text-2xl font-bold text-slate-950 mt-1">Calculate Your Cleaning Cost</h2>
            <p className="text-xs text-slate-500 mt-1">Illustrative pricing. Exact fee confirmed upon property walkthrough.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Type</label>
                <select
                  value={serviceType}
                  onChange={e => setServiceType(e.target.value)}
                  className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50"
                >
                  <option value="Standard Clean">Standard Maintenance Clean</option>
                  <option value="Deep Clean">Full Home Deep Clean & Sanitization</option>
                  <option value="Post-Construction">Post-Construction / Move-In Scrub</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Bedrooms</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(b => (
                    <button
                      key={b}
                      onClick={() => setBedrooms(b)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                        bedrooms === b ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {b} Bed
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center space-y-3">
              <span className="text-xs text-blue-800 font-bold uppercase tracking-wider">Estimated Price:</span>
              <div className="text-3xl font-extrabold text-blue-950 font-mono">
                KES {calculateEstimate().toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500">Includes supplies, equipment & certified 3-person team</p>
              <button
                onClick={() => setQuoteSent(true)}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
              >
                Book This Estimate
              </button>
            </div>
          </div>

          {quoteSent && (
            <div className="mt-4 p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-800 flex justify-between items-center">
              <span>✓ Estimate of KES {calculateEstimate().toLocaleString()} registered! Our crew coordinator will WhatsApp you.</span>
              <button onClick={() => setQuoteSent(false)} className="underline font-bold">Dismiss</button>
            </div>
          )}
        </div>
      </section>

      {/* Service Packages */}
      <section id="services" className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Packages</span>
            <h2 className="text-3xl font-extrabold text-slate-950 mt-1">Specialized Service Tiers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sparkleProData.packages.map((pkg, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blue-950">{pkg.name}</h3>
                  <p className="text-xs text-teal-700 font-bold mt-1">{pkg.price}</p>
                  <p className="text-xs text-slate-500">{pkg.scope}</p>
                  <ul className="mt-5 space-y-2 text-xs text-slate-600">
                    {pkg.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Coverage</span>
        <h2 className="text-2xl font-bold text-slate-950 mt-1">Neighborhoods We Serve Daily</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {sparkleProData.serviceAreas.map((area, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm">
              <MapPin className="w-3 h-3 text-teal-600 inline mr-1" />
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© SparklePro Cleaning Services Ltd. Nairobi, Kenya.</p>
          <button onClick={openRequestModal} className="text-teal-400 font-bold hover:underline">
            Request Home Services Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
