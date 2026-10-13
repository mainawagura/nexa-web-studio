import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, MessageSquare, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface NavbarProps {
  onRequestWebsite: (demoName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestWebsite }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Work", path: "/portfolio" },
    { label: "Website Demos", path: "/#demos", badge: "12 Demos" },
    { label: "Services", path: "/packages" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    if (path.startsWith("/#")) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-nexa-navy/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl py-0' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-800 shadow-subtle py-0.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Nexa Web Studio Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition-transform group-hover:scale-105 shadow-sm ${
              isScrolled ? 'bg-nexa-lime text-nexa-navy' : 'bg-nexa-navy text-nexa-lime'
            }`}>
              <span>N</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className={`font-black text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-nexa-navy'}`}>
                  Nexa
                </span>
                <span className={`font-medium text-lg tracking-tight ${isScrolled ? 'text-slate-300' : 'text-slate-600'}`}>
                  Web Studio
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-nexa-lime animate-pulse ml-0.5"></span>
              </div>
              <p className={`text-[10px] uppercase font-bold tracking-widest -mt-0.5 ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                Digital Design Agency
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
            {navLinks.map(link => {
              const active = isActive(link.path);
              return link.path.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.path}
                  className={`transition-colors flex items-center gap-1.5 py-1 ${
                    isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-nexa-navy'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-nexa-lime/20 text-emerald-800 border border-nexa-lime/40">
                      {link.badge}
                    </span>
                  )}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all flex items-center gap-1.5 py-1 ${
                    active
                      ? isScrolled 
                        ? 'text-nexa-lime font-bold border-b-2 border-nexa-lime' 
                        : 'text-nexa-navy font-bold border-b-2 border-nexa-navy'
                      : isScrolled
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-nexa-navy'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-nexa-lime/20 text-emerald-800 border border-nexa-lime/40">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                isScrolled
                  ? 'border-slate-700 bg-slate-900/80 text-emerald-300 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50'
              }`}
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            {/* Prominent "Start a Project" Button with Electric Lime Accent */}
            <button
              onClick={() => onRequestWebsite()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-nexa-lime hover:bg-[#bcf054] text-nexa-navy font-black text-xs uppercase tracking-wider shadow-glow-lime hover:shadow-lg transition-all active:scale-95 transform hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled 
                  ? 'text-slate-200 hover:bg-slate-800' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-all ${
          isScrolled ? 'bg-nexa-navy border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          {navLinks.map(link => {
            const active = isActive(link.path);
            return link.path.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isScrolled ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-nexa-lime/20 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </div>
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? isScrolled ? 'bg-slate-800 text-nexa-lime' : 'bg-slate-100 text-nexa-navy font-bold'
                    : isScrolled ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-nexa-lime/20 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-200/20 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestWebsite();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-nexa-lime text-nexa-navy text-sm font-extrabold uppercase tracking-wider shadow-md"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold ${
                isScrolled 
                  ? 'border-slate-700 text-emerald-300 hover:bg-slate-800' 
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
