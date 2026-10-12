import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Truck, Package, Search, MapPin, Clock, ArrowRight, 
  CheckCircle2, ShieldCheck, Phone, Mail, AlertCircle 
} from 'lucide-react';
import { swiftMoveData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const SwiftMoveDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [trackingInput, setTrackingInput] = useState("SWIFT-8921");
  const [trackingResult, setTrackingResult] = useState<any>(swiftMoveData.sampleTrackings["SWIFT-8921"]);
  const [hasSearched, setHasSearched] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const cleaned = trackingInput.trim().toUpperCase();
    const found = (swiftMoveData.sampleTrackings as any)[cleaned];
    setTrackingResult(found || null);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* Logistics Header */}
      <header className="bg-slate-950 text-white sticky top-10 z-30 shadow-md border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-white">SWIFTMOVE</span>
              <span className="text-[10px] uppercase font-bold text-orange-500 block -mt-1 tracking-wider">Logistics & Freight Haulage</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#tracking" className="hover:text-orange-500 transition-colors">Track Cargo</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Freight Services</a>
            <a href="#quote" className="hover:text-orange-500 transition-colors">Request Quote</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Logistics Site
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-400 bg-orange-950/60 px-3.5 py-1.5 rounded-full border border-orange-700">
            East African Cross-Border & Domestic Road Haulage
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Reliable Freight Forwarding & Real-Time Cargo Tracking
          </h1>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Full truckload (FTL), consolidated container shipping, and express city couriers. Guaranteed delivery schedules across Kenya, Uganda, and Rwanda.
          </p>
        </div>
      </section>

      {/* Interactive Shipment Tracking Tool */}
      <section id="tracking" className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-premium">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-orange-600 flex items-center gap-1.5">
              <Package className="w-4 h-4" />
              Live Shipment Tracking Simulator
            </span>
            <span className="text-[11px] text-slate-400">Try sample codes: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-bold">SWIFT-8921</code> or <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-bold">SWIFT-4012</code></span>
          </div>

          <form onSubmit={handleTrack} className="flex gap-2">
            <input
              type="text"
              value={trackingInput}
              onChange={e => setTrackingInput(e.target.value)}
              placeholder="Enter container or tracking number..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-sm uppercase font-mono font-bold outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-orange-400 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Track Cargo
            </button>
          </form>

          {/* Tracking Result Card */}
          {trackingResult ? (
            <div className="mt-6 p-6 rounded-xl bg-orange-50/60 border border-orange-200 text-xs space-y-3 animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-orange-200 pb-3">
                <div>
                  <span className="text-slate-500 font-semibold uppercase">Waybill Ref:</span>
                  <p className="font-mono font-extrabold text-base text-slate-950">{trackingResult.trackingNumber}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[11px]">
                  {trackingResult.currentStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div>
                  <span className="text-slate-400 block font-medium">Origin:</span>
                  <span className="font-bold text-slate-800">{trackingResult.origin}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Destination:</span>
                  <span className="font-bold text-slate-800">{trackingResult.destination}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Expected Arrival:</span>
                  <span className="font-bold text-slate-800 font-mono">{trackingResult.eta}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Assigned Rig:</span>
                  <span className="font-bold text-slate-800">{trackingResult.driver}</span>
                </div>
              </div>
            </div>
          ) : hasSearched && (
            <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Waybill not found. Please try our sample tracking number: <strong>SWIFT-8921</strong>.</span>
            </div>
          )}
        </div>
      </section>

      {/* Freight Services */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600">Our Fleet & Routes</span>
          <h2 className="text-3xl font-black uppercase text-slate-950 mt-1">Logistics Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {swiftMoveData.services.map((svc, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card">
              <Truck className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-bold text-base text-slate-950">{svc.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-orange-600">Commercial Rates</span>
              <h2 className="text-2xl font-black uppercase text-slate-950 mt-1">Request a Freight Quote</h2>
              <p className="text-xs text-slate-500 mt-1">Receive volume discounts for ongoing scheduled container loads.</p>
            </div>

            {quoteSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-950">Freight Rate Request Logged</h3>
                <p className="text-xs text-slate-600">Our dispatch team will return a customized tariff schedule.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setQuoteSent(true); }} className="space-y-4 max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Origin City</label>
                    <input required type="text" placeholder="e.g. Mombasa" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Destination City</label>
                    <input required type="text" placeholder="e.g. Kampala" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Cargo Type & Est. Weight</label>
                  <input required type="text" placeholder="e.g. FMCG dry goods, 20 tonnes" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-slate-950 hover:bg-slate-900 text-orange-400 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
                  Calculate Estimated Freight Rate
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© SwiftMove Freight Logistics Ltd. Industrial Area, Enterprise Road, Nairobi.</p>
          <button onClick={openRequestModal} className="text-orange-500 font-bold hover:underline">
            Request Logistics & Transport Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
