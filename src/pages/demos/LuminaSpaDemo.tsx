import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Flower2, Sparkles, Clock, CheckCircle2, MessageSquare, Phone, 
  MapPin, Calendar, Heart, ShieldCheck, ArrowRight, UserCheck 
} from 'lucide-react';
import { luminaSpaData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const LuminaSpaDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedTreatment, setSelectedTreatment] = useState(luminaSpaData.treatments[0].title);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName && guestPhone) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800 font-sans min-h-screen">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-10 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-teal-200 flex items-center justify-center font-serif text-lg font-bold shadow-sm">
              <Flower2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif font-black text-xl tracking-wider uppercase text-slate-900 block">LUMINA</span>
              <span className="text-[10px] uppercase font-bold text-teal-700 block -mt-1 tracking-widest">
                Spa & Holistic Botanical Wellness
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#treatments" className="hover:text-teal-800 transition-colors">Treatment Menu</a>
            <a href="#amenities" className="hover:text-teal-800 transition-colors">Hydrotherapy</a>
            <a href="#booking" className="hover:text-teal-800 transition-colors">Book Ritual</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Lumina Spa & Wellness")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Spa</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request Spa Website
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-teal-950 text-white text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-300 bg-teal-900/60 px-3.5 py-1 rounded-full border border-teal-700/60">
            Botanical Skincare & Restorative Hydrotherapy
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-white leading-tight">
            Restorative Rituals for Body & Mind
          </h1>
          <p className="text-base text-teal-100 max-w-xl mx-auto leading-relaxed">
            Experience organic botanical body wraps, warm basalt stone therapy, and restorative hydrotherapy mineral baths.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a href="#booking" className="px-8 py-3.5 rounded-xl bg-teal-400 text-teal-950 font-black text-xs uppercase tracking-wider shadow-lg">
              Reserve Treatment Session
            </a>
            <a href="#treatments" className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/20">
              View Ritual Menu
            </a>
          </div>
        </div>
      </section>

      {/* Treatments Menu */}
      <section id="treatments" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-teal-700">Signature Rituals</span>
          <h2 className="text-3xl font-serif text-slate-900">Curated Spa Treatments</h2>
          <p className="text-xs text-slate-600">Sample wellness packages featuring organic botanicals and therapeutic aromatics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {luminaSpaData.treatments.map((tr, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-slate-900">{tr.title}</h3>
                  <span className="text-sm font-bold text-teal-800 font-mono">{tr.price}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{tr.desc}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedTreatment(tr.title);
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-800 font-bold text-xs transition-colors mt-2"
              >
                Select for Appointment
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Booking */}
      <section id="booking" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-700">Online Reservation</span>
            <h2 className="text-3xl font-serif text-slate-900">Book Your Spa Session</h2>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-slate-200">
            {bookingConfirmed ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-serif font-bold text-slate-900">Treatment Request Prepared!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{guestName}</strong>. Your session for <em>{selectedTreatment}</em> is staged:
                </p>
                <a
                  href={siteConfig.getWhatsAppLink(`Hi Lumina Spa, I would like to book the ${selectedTreatment}. Guest: ${guestName}, Phone: ${guestPhone}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Spa Reception WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Selected Ritual</label>
                  <select
                    value={selectedTreatment}
                    onChange={e => setSelectedTreatment(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                  >
                    {luminaSpaData.treatments.map(t => (
                      <option key={t.title}>{t.title}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Guest Full Name"
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    className="p-3 rounded-xl border border-slate-200 bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone (WhatsApp Preferred)"
                    value={guestPhone}
                    onChange={e => setGuestPhone(e.target.value)}
                    className="p-3 rounded-xl border border-slate-200 bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-800 text-white font-bold text-xs uppercase tracking-wider shadow-md mt-2"
                >
                  Confirm Spa Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
