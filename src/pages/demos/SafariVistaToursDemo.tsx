import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Compass, MapPin, Calendar, Users, Camera, ShieldCheck, 
  CheckCircle2, ArrowRight, Phone, Mail, Sparkles 
} from 'lucide-react';
import { safariVistaData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const SafariVistaToursDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedTour, setSelectedTour] = useState(safariVistaData.safaris[0]);
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <div className="bg-[#FAF7F0] text-slate-800 font-sans">
      
      {/* Safari Header */}
      <header className="bg-[#14532D] text-white sticky top-10 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-wider uppercase font-serif">SAFARIVISTA</span>
              <span className="text-[10px] tracking-widest text-amber-300 block -mt-1 uppercase">Tours & Expeditions • Kenya</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-emerald-100">
            <a href="#safaris" className="hover:text-amber-300 transition-colors">Safari Packages</a>
            <a href="#destinations" className="hover:text-amber-300 transition-colors">National Parks</a>
            <a href="#custom" className="hover:text-amber-300 transition-colors">Custom Safari</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Tour Website
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-28 bg-[#14532D] text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-300 bg-emerald-900/60 px-3.5 py-1.5 rounded-full border border-emerald-700">
            KATO Bonded Tour Operator • Maasai Mara & Amboseli
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight">
            Authentic African Safaris & Bespoke Wilderness Expeditions
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Witness the Great Wildebeest Migration, track endangered black rhinos, and unwind on the coral sands of the Swahili Coast with expert naturalist guides.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#safaris" className="px-7 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg">
              Explore Itineraries
            </a>
          </div>
        </div>
      </section>

      {/* Safari Packages Catalog */}
      <section id="safaris" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Signature Expeditions</span>
          <h2 className="text-3xl font-serif font-bold text-[#14532D] mt-1">Curated Kenya Safari Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safariVistaData.safaris.map(safari => (
            <div key={safari.id} className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] shadow-card flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={safari.image} alt={safari.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{safari.duration}</span>
                    <span className="font-bold text-slate-900 font-mono text-base">{safari.price}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#14532D] mt-2">{safari.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{safari.group}</p>

                  <div className="mt-4 space-y-2 text-xs text-slate-600">
                    {safari.highlights.map((h, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedTour(safari);
                    const el = document.getElementById('custom');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#14532D] hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Request Quote for This Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Safari Inquiry Form */}
      <section id="custom" className="py-20 bg-[#ECE6D8] border-t border-b border-[#DDD5C5]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-[#E5E0D5]">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Custom Itinerary</span>
              <h2 className="text-2xl font-serif font-bold text-[#14532D] mt-1">Design Your Bespoke Safari</h2>
              <p className="text-xs text-slate-600 mt-1">Selected Package Inspiration: <strong>{selectedTour.title}</strong></p>
            </div>

            {inquirySent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h3 className="text-lg font-bold text-[#14532D]">Safari Inquiry Dispatched!</h3>
                <p className="text-xs text-slate-600">Our expedition director will prepare a customized day-by-day quote.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setInquirySent(true); }} className="space-y-4 max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Traveler Name</label>
                    <input required type="text" placeholder="e.g. Eleanor Vance" className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input required type="email" placeholder="eleanor@traveler.com" className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Travel Month / Season</label>
                    <select className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50">
                      <option>July - October (Migration)</option>
                      <option>December - February (Dry Season)</option>
                      <option>March - June (Green Season)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Party Size</label>
                    <select className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50">
                      <option>Couple (2 Adults)</option>
                      <option>Family (2 Adults, 2 Kids)</option>
                      <option>Group (5+ Adults)</option>
                      <option>Solo Traveler</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md">
                  Request Custom Safari Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#14532D] text-emerald-100 py-10 text-xs border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© SafariVista Tours Ltd. Karen Road, Nairobi, Kenya. Member of Kenya Association of Tour Operators.</p>
          <button onClick={openRequestModal} className="text-amber-300 font-bold hover:underline">
            Request Travel & Tourism Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
