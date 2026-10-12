import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nexa-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-nexa-teal flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Nexa <span className="text-nexa-teal">Studio</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We engineer custom, fast, and high-converting business websites for companies in Kenya, African diaspora entrepreneurs, and international businesses looking for world-class web presence.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-nexa-teal" />
                <span>Nairobi, Kenya • Global Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio Showcases</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Website Packages</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Nexa Studio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a Website</Link></li>
            </ul>
          </div>

          {/* Popular Demo Industries */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Client Showcases</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/demos/buildstrong-construction" className="hover:text-nexa-teal transition-colors">Construction & Civil</Link></li>
              <li><Link to="/demos/serenity-hotels" className="hover:text-nexa-teal transition-colors">Hotels & Hospitality</Link></li>
              <li><Link to="/demos/safarivista-tours" className="hover:text-nexa-teal transition-colors">Safari & Tours</Link></li>
              <li><Link to="/demos/primenest-realty" className="hover:text-nexa-teal transition-colors">Real Estate Brokerage</Link></li>
              <li><Link to="/demos/haven-property-management" className="hover:text-nexa-teal transition-colors">Property Management</Link></li>
              <li><Link to="/demos/green-fork-restaurant" className="hover:text-nexa-teal transition-colors">Dining & Restaurants</Link></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Direct Connect</h4>
            <p className="text-xs text-slate-400">
              Have a project inquiry or need advice on website architecture?
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">WhatsApp: {siteConfig.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-nexa-teal" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-nexa-teal shrink-0" />
            <span>
              <strong>Production Client Models:</strong> All websites featured in this showcase are fully functional interactive models crafted to demonstrate design, speed, and business conversion capabilities.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span>© {new Date().getFullYear()} Nexa Web Studio. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
