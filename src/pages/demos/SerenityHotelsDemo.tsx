import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Hotel, Calendar, Users, Star, Utensils, Sparkles, MapPin, 
  CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Clock 
} from 'lucide-react';
import { serenityData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const SerenityHotelsDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedRoom, setSelectedRoom] = useState(serenityData.rooms[0].id);
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState("2 Adults");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const activeRoom = serenityData.rooms.find(r => r.id === selectedRoom) || serenityData.rooms[0];
  const estimatedTotal = activeRoom.pricePerNight * nights;

  return (
    <div className="bg-[#FAF8F5] text-slate-800 font-sans">
      
      {/* Hospitality Header */}
      <header className="bg-[#064E3B] text-white sticky top-10 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-widest uppercase font-serif">SERENITY</span>
              <span className="text-[10px] tracking-widest text-amber-300 block -mt-1 uppercase">Hotels & Beach Lodge</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-wider font-semibold text-emerald-100">
            <a href="#suites" className="hover:text-amber-300 transition-colors">Suites & Villas</a>
            <a href="#amenities" className="hover:text-amber-300 transition-colors">Amenities</a>
            <a href="#booking" className="hover:text-amber-300 transition-colors">Book a Stay</a>
            <a href="#dining" className="hover:text-amber-300 transition-colors">Coastal Dining</a>
          </div>

          <button
            onClick={openRequestModal}
            className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Hotel Website
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-28 bg-[#064E3B] text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <div className="flex items-center justify-center gap-1 text-amber-300">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-300" />)}
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight">
            An Oceanfront Sanctuary of Timeless Luxury
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Nestled on the pristine white shores of Diani, Kenya. Private infinity villas, Michelin-level coastal seafood, and rejuvenating ayurvedic spa treatments.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a href="#booking" className="px-7 py-3.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-amber-300">
              Check Room Availability
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Booking Calculator Bar */}
      <section id="booking" className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-premium">
          <div className="text-xs uppercase font-bold text-amber-800 tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-800" />
            <span>Interactive Stay Price Calculator & Direct Enquiry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Select Suite</label>
              <select
                value={selectedRoom}
                onChange={e => setSelectedRoom(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-medium bg-slate-50 outline-none"
              >
                {serenityData.rooms.map(r => (
                  <option key={r.id} value={r.id}>{r.name} (${r.pricePerNight}/night)</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Duration of Stay</label>
              <select
                value={nights}
                onChange={e => setNights(Number(e.target.value))}
                className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-medium bg-slate-50 outline-none"
              >
                {[1, 2, 3, 5, 7, 10, 14].map(n => (
                  <option key={n} value={n}>{n} Nights</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Guests</label>
              <select
                value={guests}
                onChange={e => setGuests(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-medium bg-slate-50 outline-none"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="4 Guests (Family Villa)">4 Guests (Family Villa)</option>
              </select>
            </div>

            <div>
              <div className="text-xs text-slate-500">Estimated Total:</div>
              <div className="text-2xl font-black text-[#064E3B] font-mono">${estimatedTotal}</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Includes full gourmet breakfast, oceanfront pool access & airport shuttle.
            </span>
            <button
              onClick={() => setBookingConfirmed(true)}
              className="px-6 py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#08634B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Simulate Booking Request
            </button>
          </div>

          {bookingConfirmed && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
              <span>
                ✓ <strong>Enquiry Dispatched:</strong> {activeRoom.name} for {nights} nights ({guests}) reserved for quotation review.
              </span>
              <button onClick={() => setBookingConfirmed(false)} className="font-bold underline">Dismiss</button>
            </div>
          )}
        </div>
      </section>

      {/* Room Showcase */}
      <section id="suites" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-700">Accommodations</span>
          <h2 className="text-3xl font-serif font-extrabold text-[#064E3B] mt-1">Our Signature Suites</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serenityData.rooms.map(room => (
            <div key={room.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card flex flex-col">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif font-bold text-lg text-[#064E3B]">{room.name}</h3>
                    <span className="font-bold text-amber-800 font-mono text-base">${room.pricePerNight}<span className="text-xs text-slate-400 font-sans">/nt</span></span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{room.capacity} • {room.bed}</p>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                    {room.perks.map((p, i) => (
                      <p key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedRoom(room.id);
                      const el = document.getElementById('booking');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-lg border border-emerald-800 text-[#064E3B] hover:bg-emerald-50 text-xs font-bold uppercase transition-colors"
                  >
                    Select in Calculator
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities & Dining */}
      <section id="dining" className="py-20 bg-emerald-950 text-white border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Unrivaled Hospitality</span>
          <h2 className="text-3xl font-serif font-bold">Resort Amenities & Dining</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
            {serenityData.amenities.map((a, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 text-xs leading-relaxed text-emerald-100">
                <Utensils className="w-5 h-5 text-amber-400 mb-2" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Footer */}
      <footer className="bg-black text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© Serenity Hotels & Resorts, Diani Beach Road, Kwale County, Kenya.</p>
          <button onClick={openRequestModal} className="text-amber-400 font-bold hover:underline">
            Request Similar Hotel Website →
          </button>
        </div>
      </footer>

    </div>
  );
};
