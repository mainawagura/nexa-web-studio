import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nexa-navy text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          
          {/* Brand & Editorial Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-nexa-lime flex items-center justify-center text-nexa-navy font-black text-xl shadow-glow-lime">
                <span>N</span>
              </div>
              <span className="font-black text-2xl text-white tracking-tight">
                Nexa <span className="text-nexa-lime font-light">Web Studio</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We design and build bespoke, high-converting websites and digital client portals that help businesses stand out, establish authority, and turn visitors into loyal clients.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 w-fit">
                <MapPin className="w-3.5 h-3.5 text-nexa-lime" />
                <span>Nairobi, Kenya • Remote Delivery for Global & Diaspora Clients</span>
              </div>
            </div>
          </div>

          {/* Agency Pages */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Agency</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-nexa-lime transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-nexa-lime transition-colors">Our Work</Link></li>
              <li><a href="/#demos" className="hover:text-nexa-lime transition-colors">Website Demos (12)</a></li>
              <li><Link to="/packages" className="hover:text-nexa-lime transition-colors">Packages & Pricing</Link></li>
              <li><Link to="/about" className="hover:text-nexa-lime transition-colors">About the Studio</Link></li>
              <li><Link to="/contact" className="hover:text-nexa-lime transition-colors">Start a Project</Link></li>
            </ul>
          </div>

          {/* Industry Website Demos (Master Prompt 12 Industries) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Industry Demos</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/demos/property" className="hover:text-nexa-lime transition-colors">Havenstone Properties (Real Estate)</Link></li>
              <li><Link to="/demos/construction" className="hover:text-nexa-lime transition-colors">Ironwood Construction (Civil & Heavy)</Link></li>
              <li><Link to="/demos/hotel" className="hover:text-nexa-lime transition-colors">The Alder House Hotel (Hospitality)</Link></li>
              <li><Link to="/demos/restaurant" className="hover:text-nexa-lime transition-colors">Ember & Olive (Artisanal Dining)</Link></li>
              <li><Link to="/demos/consultancy" className="hover:text-nexa-lime transition-colors">Northstar Advisory (Corporate Strategy)</Link></li>
              <li><Link to="/demos/clinic" className="hover:text-nexa-lime transition-colors">WillowCare Medical Centre (Clinic)</Link></li>
              <li><Link to="/demos/ecommerce" className="hover:text-nexa-lime transition-colors">Aura Living Boutique (E-commerce)</Link></li>
              <li><Link to="/demos/logistics" className="hover:text-nexa-lime transition-colors">SwiftMove Logistics (Haulage & Fleet)</Link></li>
            </ul>
          </div>

          {/* Direct Consultation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Direct Consultation</h4>
            <p className="text-xs text-slate-400">
              Speak directly with our digital team regarding your project scope, timeline, and strategy.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:border-emerald-500/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold">WhatsApp: {siteConfig.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-nexa-lime shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer, Privacy & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-nexa-lime shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> Sample brands and pricing featured on demo pages illustrate design and interaction standards. All services delivered by Nexa Web Studio are custom-contracted.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-400">
            <Link to="/about" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <span>© {new Date().getFullYear()} Nexa Web Studio. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
