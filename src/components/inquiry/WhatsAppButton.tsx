import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FloatingWhatsAppProps {
  demoName?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ demoName }) => {
  return (
    <aside 
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <span className="hidden group-hover:inline-block mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-lg animate-fadeIn border border-slate-700 whitespace-nowrap">
        Chat with our lead developer on WhatsApp
      </span>
      <a
        href={siteConfig.getWhatsAppLink(undefined, demoName)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-elevated hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 ring-2 ring-white animate-pulse"></span>
      </a>
    </aside>
  );
};
