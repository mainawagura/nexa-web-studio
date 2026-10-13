import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Hotel, Calendar, Users, Star, Utensils, Sparkles, MapPin, 
  CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Clock, MessageSquare, Compass, X
} from 'lucide-react';
import { alderHouseData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const SerenityHotelsDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  
  // Interactive Booking Calculation state
  const [selectedSuiteId, setSelectedSuiteId] = useState(alderHouseData.rooms[0].id);
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState("2 Guests");
  const [checkInDate, setCheckInDate] = useState("2026-11-15");
  const [bookingInquirySent, setBookingInquirySent] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");

  const activeSuite = alderHouseData.rooms.find(r => r.id === selectedSuiteId) || alderHouseData.rooms[0];
  const calculatedTotal = activeSuite.ratePerNight * nights;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName) {
      setBookingInquirySent(true);
    }
  };

  return (
    <div className="bg-[#F5F2EB] text-[#1E3A2F] font-sans min-h-screen">
      
      {/* Editorial Luxury Header Navigation */}
      <header className="bg-[#1E3A2F] text-white sticky top-10 z-30 shadow-md border-b border-[#C29B38]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C29B38] text-[#1E3A2F] flex items-center justify-center font-serif font-black text-lg shadow-sm">
              <span>A</span>
            </div>
            <div>
              <span className="font-serif text-2xl tracking-widest uppercase block text-[#F5F2EB]">THE ALDER HOUSE</span>
              <span className="text-[10px] tracking-widest text-[#C29B38] block -mt-1 uppercase font-bold">
                Boutique Hotel & Coastal Sanctuary
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-widest font-semibold text-slate-200">
            <a href="#suites" className="hover:text-[#C29B38] transition-colors">Suites & Villas</a>
            <a href="#experiences" className="hover:text-[#C29B38] transition-colors">Experiences</a>
            <a href="#dining" className="hover:text-[#C29B38] transition-colors">Coastal Dining</a>
            <a href="#booking" className="hover:text-[#C29B38] transition-colors">Reservations</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "The Alder House Hotel")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Concierge Chat</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-[#C29B38] hover:bg-[#b08b2e] text-[#1E3A2F] font-black text-xs uppercase tracking-wider transition-all"
            >
              Request Hotel Site
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 bg-[#1E3A2F] text-white text-center overflow-hidden border-b border-[#C29B38]/20">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-7">
          
          <div className="inline-flex items-center gap-1.5 text-[#C29B38]">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-[#C29B38]" />))}
            <span className="text-xs uppercase tracking-widest ml-2 text-slate-300 font-semibold">Boutique Luxury • Indian Ocean</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#F5F2EB] leading-[1.1]">
            An Oceanfront Sanctuary of Secluded Elegance
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {alderHouseData.tagline}
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a 
              href="#booking"
              className="px-8 py-3.5 rounded-xl bg-[#C29B38] hover:bg-[#b08b2e] text-[#1E3A2F] font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Check Availability & Rates
            </a>
            <a 
              href="#suites"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              View Suites & Pavilions
            </a>
          </div>

        </div>
      </section>

      {/* Suites & Rooms Showcase */}
      <section id="suites" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C29B38]">Private Accommodations</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2F]">Suites, Pavilions & Private Villas</h2>
          <p className="text-xs text-slate-600">Thoughtfully integrated with indigenous coastal gardens and turquoise sea panoramas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alderHouseData.rooms.map(room => (
            <div 
              key={room.id}
              className={`rounded-3xl overflow-hidden border transition-all flex flex-col justify-between bg-white ${
                selectedSuiteId === room.id 
                  ? 'border-2 border-[#C29B38] shadow-elevated ring-4 ring-[#C29B38]/10' 
                  : 'border-slate-200/90 shadow-card'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-serif">
                    From <strong>${room.ratePerNight}</strong> / night
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#1E3A2F]">{room.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{room.desc}</p>
                  
                  <div className="pt-3 border-t border-slate-100 flex justify-between text-xs text-slate-500 font-medium">
                    <span>{room.bed}</span>
                    <span>{room.capacity}</span>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {room.amenities.map((am, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#F5F2EB] text-[#1E3A2F] text-[10px]">
                        {am}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedSuiteId(room.id);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedSuiteId === room.id 
                      ? 'bg-[#1E3A2F] text-[#C29B38]' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  {selectedSuiteId === room.id ? 'Selected in Calculator' : 'Select This Suite'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Reservation Calculator */}
      <section id="booking" className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29B38]">Direct Booking Engine</span>
            <h2 className="text-3xl font-serif text-[#1E3A2F]">Interactive Stay Rate Estimator</h2>
            <p className="text-xs text-slate-600">Simulate reservation pricing with live date calculations and direct concierge dispatch.</p>
          </div>

          <div className="bg-[#F5F2EB] p-8 rounded-3xl border border-slate-200/90 shadow-subtle">
            {bookingInquirySent ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-[#1E3A2F]">Stay Inquiry Formatted!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{guestName}</strong>. Your stay for {nights} nights at {activeSuite.name} (${calculatedTotal}) is prepared:
                </p>
                <a
                  href={siteConfig.getWhatsAppLink(`Hello The Alder House Hotel, I would like to inquire about reserving ${activeSuite.name} for ${nights} nights starting ${checkInDate} (${guests}). Total estimate: $${calculatedTotal}. Guest: ${guestName}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Inquiry to Concierge WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-bold text-[#1E3A2F] block mb-1">Chosen Suite</label>
                    <select
                      value={selectedSuiteId}
                      onChange={e => setSelectedSuiteId(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    >
                      {alderHouseData.rooms.map(r => (
                        <option key={r.id} value={r.id}>{r.name} (${r.ratePerNight}/nt)</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#1E3A2F] block mb-1">Length of Stay</label>
                    <select
                      value={nights}
                      onChange={e => setNights(Number(e.target.value))}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    >
                      {[1, 2, 3, 4, 5, 7, 10, 14].map(n => (
                        <option key={n} value={n}>{n} Night{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#1E3A2F] block mb-1">Check-in Date</label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={e => setCheckInDate(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-baseline justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Estimated Total for {nights} Nights:</span>
                    <p className="text-3xl font-serif font-bold text-[#1E3A2F]">${calculatedTotal}</p>
                    <p className="text-[10px] text-slate-400">Includes gourmet artisanal breakfast & airport transfers.</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#C29B38] bg-[#F5F2EB] px-3 py-1 rounded-full">
                    Commission-Free Direct Rate
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Guest Full Name (e.g. Victoria Kimani)"
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    className="p-3 rounded-xl border border-slate-200 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Guest Email (Optional)"
                    value={guestEmail}
                    onChange={e => setGuestEmail(e.target.value)}
                    className="p-3 rounded-xl border border-slate-200 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C29B38] hover:bg-[#b08b2e] text-[#1E3A2F] font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Confirm Stay Inquiry Details
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* Coastal Dining & Experiences */}
      <section id="experiences" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E3A2F] rounded-3xl p-8 sm:p-14 text-white space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29B38]">The Alder Experience</span>
            <h2 className="text-3xl font-serif text-white">Bespoke Gastronomy & Ocean Excursions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alderHouseData.experiences.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <Compass className="w-5 h-5 text-[#C29B38]" />
                <h3 className="font-serif text-base font-bold text-white">{exp.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
