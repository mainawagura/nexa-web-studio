import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, MessageSquare, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface NavbarProps {
  onRequestWebsite: (demoName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestWebsite }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio", badge: "12 Demos" },
    { label: "Website Packages", path: "/packages" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Agency Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-nexa-navy flex items-center justify-center text-white shadow-card group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5 text-nexa-teal" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-nexa-navy tracking-tight">Nexa</span>
                <span className="font-semibold text-xl text-nexa-teal tracking-tight">Studio</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Websites That Build Trust
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors flex items-center gap-1.5 py-1 ${
                  isActive(link.path)
                    ? 'text-nexa-navy font-bold border-b-2 border-nexa-teal'
                    : 'hover:text-nexa-navy'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-nexa-teal border border-teal-200">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/50 text-xs font-semibold transition-all"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onRequestWebsite()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nexa-navy hover:bg-nexa-navy-light text-white text-xs font-semibold shadow-card hover:shadow-elevated transition-all active:scale-95"
            >
              <span>Request a Website</span>
              <ArrowRight className="w-3.5 h-3.5 text-nexa-teal" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-nexa-navy hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-elevated">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-slate-100 text-nexa-navy'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-teal-50 text-nexa-teal border border-teal-200">
                    {link.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestWebsite();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-nexa-navy text-white text-sm font-semibold"
            >
              <span>Request a Website</span>
              <ArrowRight className="w-4 h-4 text-nexa-teal" />
            </button>

            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
