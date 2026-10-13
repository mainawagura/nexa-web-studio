import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Utensils, Clock, MapPin, Calendar, Users, Phone, MessageSquare, 
  CheckCircle2, Sparkles, Coffee, Heart, Wine, X, Check
} from 'lucide-react';
import { emberOliveData } from '../../data/demoData';
import { siteConfig } from '../../config/siteConfig';

export const GreenForkDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [resDate, setResDate] = useState("Tonight (7:30 PM)");
  const [resParty, setResParty] = useState("2 Guests");
  const [resGuestName, setResGuestName] = useState("");
  const [resSubmitted, setResSubmitted] = useState(false);

  const activeCategory = emberOliveData.menu[selectedCategoryIndex];

  const handleResSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resGuestName) {
      setResSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FEFAE0]/30 text-[#283618] font-sans min-h-screen">
      
      {/* Editorial Dining Header */}
      <header className="bg-[#283618] text-[#FEFAE0] sticky top-10 z-30 shadow-md border-b border-[#BC6C25]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#BC6C25] text-[#FEFAE0] flex items-center justify-center font-serif font-black text-lg shadow-sm">
              <span>E</span>
            </div>
            <div>
              <span className="font-serif font-black text-2xl tracking-widest uppercase block text-[#FEFAE0]">EMBER & OLIVE</span>
              <span className="text-[10px] tracking-widest text-[#DDA15E] block -mt-1 uppercase font-bold">
                Wood-Fired Hearth & Natural Cellar
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 text-xs font-bold tracking-widest uppercase text-[#FEFAE0]/80">
            <a href="#menu" className="hover:text-[#DDA15E] transition-colors">Seasonal Menu</a>
            <a href="#reserve" className="hover:text-[#DDA15E] transition-colors">Reservations</a>
            <a href="#events" className="hover:text-[#DDA15E] transition-colors">Private Dining</a>
            <a href="#location" className="hover:text-[#DDA15E] transition-colors">Location</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Ember & Olive Restaurant")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Table</span>
            </a>
            <button
              onClick={openRequestModal}
              className="px-4 py-2 rounded-lg bg-[#BC6C25] hover:bg-[#a35b1d] text-[#FEFAE0] font-black text-xs uppercase tracking-wider transition-all"
            >
              Request Dining Site
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 bg-[#283618] text-[#FEFAE0] text-center overflow-hidden border-b border-[#BC6C25]/20">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-7">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BC6C25]/20 text-[#DDA15E] border border-[#BC6C25]/40 text-xs font-bold uppercase tracking-wider">
            Wood-Fired Gastronomy • Karen, Nairobi
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#FEFAE0] leading-[1.1]">
            Charred by Open Flame. <br />
            <span className="italic text-[#DDA15E]">Harvested with Care.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Locally foraged botanicals, grass-fed highlands beef, line-caught Swahili coastal catch, and natural organic wines paired over glowing embers.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a 
              href="#reserve"
              className="px-8 py-3.5 rounded-xl bg-[#BC6C25] hover:bg-[#a35b1d] text-[#FEFAE0] font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Reserve an Evening Table
            </a>
            <a 
              href="#menu"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#FEFAE0] font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              Browse Hearth Menu
            </a>
          </div>

        </div>
      </section>

      {/* Categorized Seasonal Menu */}
      <section id="menu" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#BC6C25]">Demonstration Menu</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#283618]">Seasonal Hearth & Cellar Selections</h2>
          <p className="text-xs text-slate-600">Sample dishes illustrating our dynamic menu layout, dietary tags, and chef descriptions.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#283618]/15 pb-4">
          {emberOliveData.menu.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategoryIndex === idx 
                  ? 'bg-[#283618] text-[#FEFAE0] shadow-md' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="space-y-4">
          {activeCategory.items.map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#BC6C25] transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-serif text-lg font-bold text-[#283618]">{item.name}</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#BC6C25]/10 text-[#BC6C25]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 max-w-xl leading-relaxed">{item.desc}</p>
              </div>

              <div className="text-right sm:shrink-0">
                <span className="text-base font-bold font-serif text-[#283618]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Interactive Table Reservation Engine */}
      <section id="reserve" className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#BC6C25]">Table Booking</span>
            <h2 className="text-3xl font-serif text-[#283618]">Reserve Your Dining Experience</h2>
            <p className="text-xs text-slate-600">Simulate online table reservations with immediate confirmation options.</p>
          </div>

          <div className="bg-[#FEFAE0]/60 p-8 rounded-3xl border border-slate-200">
            {resSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-[#283618]">Reservation Staged Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{resGuestName}</strong>. Your reservation for {resParty} ({resDate}) is formatted:
                </p>
                <a
                  href={siteConfig.getWhatsAppLink(`Hi Ember & Olive, I would like to reserve a table for ${resParty} on ${resDate}. Guest name: ${resGuestName}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Table Confirmation to WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleResSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-bold text-[#283618] block mb-1">Date & Seating</label>
                    <select
                      value={resDate}
                      onChange={e => setResDate(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    >
                      <option>Tonight (7:30 PM)</option>
                      <option>Tomorrow (8:00 PM)</option>
                      <option>Saturday (1:30 PM Lunch)</option>
                      <option>Saturday (8:00 PM Dinner)</option>
                      <option>Sunday (12:30 PM Brunch)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#283618] block mb-1">Party Size</label>
                    <select
                      value={resParty}
                      onChange={e => setResParty(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    >
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests (Private Area)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#283618] block mb-1">Guest Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandra Omondi"
                      value={resGuestName}
                      onChange={e => setResGuestName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#283618] hover:bg-[#1a2310] text-[#FEFAE0] font-black text-xs uppercase tracking-wider shadow-md transition-all mt-2"
                >
                  Confirm Table Reservation
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#283618] text-[#FEFAE0] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif text-xl font-bold">{emberOliveData.address}</p>
            <p className="text-xs text-[#DDA15E]">{emberOliveData.hours}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={siteConfig.getWhatsAppLink(undefined, "Ember & Olive")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#BC6C25] text-white font-bold text-xs uppercase tracking-wider"
            >
              Direct Inquiries
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
