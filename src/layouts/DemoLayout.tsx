import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { RequestModal } from '../components/inquiry/RequestModal';
import { projectsData } from '../data/projectsData';

export const DemoLayout: React.FC = () => {
  const location = useLocation();
  const currentDemo = projectsData.find(p => p.route === location.pathname || location.pathname.includes(p.slug));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const demoName = currentDemo ? currentDemo.name : "Business Website";
  const demoIndustry = currentDemo ? currentDemo.category : "Business";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Discreet Demo Notice */}
      <aside 
        aria-label="Demo notice"
        className="sticky top-0 z-50 bg-nexa-navy text-white text-xs px-4 py-2.5 shadow-md flex flex-wrap items-center justify-between gap-2 border-b border-slate-800"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-nexa-lime animate-pulse"></span>
          <span className="font-black text-nexa-lime">Portfolio Demo</span>
          <span className="hidden sm:inline text-slate-300">
            — This sample website demonstrates Nexa Web Studio's design and engineering capabilities.
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-nexa-lime hover:bg-[#bcf054] text-nexa-navy font-black transition-all text-xs shadow-sm"
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
        className="fixed bottom-5 left-5 z-40 hidden md:flex items-center gap-2 p-2 rounded-2xl bg-slate-950/95 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md text-xs"
      >
        <Link
          to="/portfolio"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Demos</span>
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-nexa-lime text-nexa-navy font-black uppercase tracking-wider transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Request Similar</span>
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
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl transition-transform hover:scale-105"
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
