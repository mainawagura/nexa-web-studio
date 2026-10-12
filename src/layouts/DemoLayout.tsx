import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RequestModal } from '../components/inquiry/RequestModal';
import { projectsData } from '../data/projectsData';

export const DemoLayout: React.FC = () => {
  const location = useLocation();
  const currentDemo = projectsData.find(p => p.route === location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const demoName = currentDemo ? currentDemo.name : "Business Website";
  const demoIndustry = currentDemo ? currentDemo.category : "Business";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Discreet Professional Showcase Banner */}
      <aside 
        aria-label="Showcase notice"
        className="sticky top-0 z-50 bg-nexa-navy text-white text-xs px-4 py-2.5 shadow-md flex flex-wrap items-center justify-between gap-2 border-b border-nexa-navy-light"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-nexa-teal animate-pulse"></span>
          <span className="font-semibold text-nexa-teal">Live Showcase Model</span>
          <span className="hidden sm:inline text-slate-300">
            — Experience the real navigation, speed, and conversion workflows crafted by Nexa Web Studio.
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Showcases</span>
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-nexa-teal hover:bg-nexa-teal-light text-white font-semibold transition-all text-xs shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request Similar Website</span>
          </button>
        </div>
      </aside>

      {/* Main Demo Page Content */}
      <main className="flex-1">
        <Outlet context={{ openRequestModal: () => setIsModalOpen(true) }} />
      </main>

      {/* Persistent Floating Demo Navigator */}
      <aside 
        aria-label="Demo floating controls"
        className="fixed bottom-5 left-5 z-40 hidden md:flex items-center gap-2 p-2 rounded-xl bg-slate-950/90 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md text-xs"
      >
        <Link
          to="/portfolio"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit Showcase</span>
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Request This Website</span>
        </button>
      </aside>

      {/* Floating WhatsApp trigger prefilled with this demo */}
      <aside 
        aria-label="WhatsApp quick chat"
        className="fixed bottom-5 right-5 z-40"
      >
        <a
          href={siteConfig.getWhatsAppLink(undefined, demoName)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs shadow-elevated transition-transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Inquire on WhatsApp</span>
        </a>
      </aside>

      {/* Modal */}
      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedDemo={demoName}
        preselectedIndustry={demoIndustry}
      />
    </div>
  );
};
