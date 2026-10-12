import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Utensils, Clock, MapPin, Calendar, Users, Phone, MessageSquare, 
  CheckCircle2, Sparkles, Coffee, Heart 
} from 'lucide-react';
import { greenForkData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const GreenForkDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedCat, setSelectedCat] = useState("Starters");
  const [reservationSent, setReservationSent] = useState(false);
  const [partySize, setPartySize] = useState("2 Guests");
  const [resDate, setResDate] = useState("Tonight (7:30 PM)");

  const filteredItems = greenForkData.items.filter(item => item.cat === selectedCat);

  return (
    <div className="bg-[#FAF7F2] text-[#2C3328] font-sans">
      
      {/* Artisanal Restaurant Header */}
      <header className="bg-[#1C2818] text-[#EFECE6] sticky top-10 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#829E65] text-white flex items-center justify-center font-serif text-lg font-bold">
              G
            </div>
            <div>
              <span className="font-serif font-black text-xl tracking-wide uppercase">THE GREEN FORK</span>
              <span className="text-[10px] tracking-widest text-[#B5C99A] block -mt-1 uppercase">Farm to Table Bistro • Karen</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold tracking-wider uppercase text-[#D2D9C8]">
            <a href="#menu" className="hover:text-white transition-colors">Artisanal Menu</a>
            <a href="#reservation" className="hover:text-white transition-colors">Reserve Table</a>
            <a href="#story" className="hover:text-white transition-colors">Our Ethos</a>
            <a href="#hours" className="hover:text-white transition-colors">Hours & Location</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "The Green Fork Restaurant")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#536E3B] hover:bg-[#638445] text-white text-xs font-bold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Table</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-white text-[#1C2818] text-xs font-bold transition-colors"
            >
              Request Restaurant Site
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-[#1C2818] text-[#EFECE6] text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#B5C99A]">
            Locally Grown • Organic • Charcoal Fire
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight">
            Fresh Seasonal Dining in the Heart of Karen
          </h1>
          <p className="text-base text-[#D2D9C8] leading-relaxed max-w-xl mx-auto">
            Ingredients sourced daily from Tigoni family farms, dry-aged Rift Valley beef, and handmade pasta prepared fresh each morning.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#reservation" className="px-7 py-3 rounded-full bg-[#829E65] hover:bg-[#97B876] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg">
              Reserve Your Table
            </a>
            <a href="#menu" className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20">
              Browse Menu
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section id="menu" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#536E3B]">Seasonal Offerings</span>
          <h2 className="text-3xl font-serif font-bold text-[#1C2818] mt-1">Our A La Carte Menu</h2>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {greenForkData.menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCat === cat
                  ? 'bg-[#1C2818] text-white shadow-md'
                  : 'bg-white text-[#536E3B] border border-[#D2D9C8] hover:bg-[#EFECE6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Dishes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#E0DBCF] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif font-bold text-lg text-[#1C2818]">{item.name}</h3>
                  <span className="font-bold text-[#536E3B] font-mono text-base">{item.price}</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F2EEE4] flex items-center justify-between text-[11px] text-[#536E3B] font-semibold">
                <span>{item.dietary}</span>
                <button
                  onClick={() => alert(`Demo Online Order: "${item.name}" added to order draft! In production, this links directly to table orders or WhatsApp takeout.`)}
                  className="px-2.5 py-1 rounded bg-[#F2EEE4] hover:bg-[#E0DBCF] text-[#1C2818] text-[10px] font-bold"
                >
                  Demo Order Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Table Reservation Form */}
      <section id="reservation" className="py-20 bg-[#ECE6DA] border-t border-b border-[#D8CEBC]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-[#E0DBCF]">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest font-bold text-[#536E3B]">Instant Booking</span>
              <h2 className="text-2xl font-serif font-bold text-[#1C2818] mt-1">Book Your Table</h2>
              <p className="text-xs text-slate-600 mt-1">Confirm indoor fireplace dining or our outdoor garden pergola.</p>
            </div>

            {reservationSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-[#1C2818]">Table Reserved for {partySize}!</h3>
                <p className="text-xs text-slate-600">Reserved for {resDate}. A confirmation SMS has been prepared.</p>
                <button onClick={() => setReservationSent(false)} className="mt-3 px-4 py-2 bg-[#1C2818] text-white text-xs font-bold rounded-lg">
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setReservationSent(true); }} className="space-y-4 max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Party Size</label>
                    <select value={partySize} onChange={e => setPartySize(e.target.value)} className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50">
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests (Private Dining)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Time Slot</label>
                    <select value={resDate} onChange={e => setResDate(e.target.value)} className="w-full p-2.5 border rounded-lg text-xs outline-none bg-slate-50">
                      <option>Lunch (12:30 PM)</option>
                      <option>Lunch (2:00 PM)</option>
                      <option>Tonight (7:00 PM)</option>
                      <option>Tonight (8:30 PM)</option>
                      <option>Sunday Brunch (11:30 AM)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Name & Contact Phone</label>
                  <input required type="text" placeholder="e.g. Christine Mwende (+254 7...)" className="w-full p-2.5 border rounded-lg text-xs outline-none" />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-[#536E3B] hover:bg-[#638445] text-white font-bold text-xs uppercase tracking-wider transition-colors">
                  Confirm Table Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="hours" className="bg-[#1C2818] text-[#D2D9C8] py-12 text-xs border-t border-[#31422B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-white text-sm">The Green Fork Bistro</p>
            <p className="mt-0.5">Marula Lane, Karen, Nairobi • Open Tue - Sun: 11:30 AM - 10:30 PM</p>
          </div>
          <button onClick={openRequestModal} className="text-[#B5C99A] font-bold hover:underline">
            Request Restaurant / Cafe Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
