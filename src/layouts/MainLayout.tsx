import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { RequestModal } from '../components/inquiry/RequestModal';
import { FloatingWhatsApp } from '../components/inquiry/WhatsAppButton';

export interface MainLayoutContext {
  openRequestModal: (demoName?: string, industry?: string) => void;
}

export const MainLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDemo, setModalDemo] = useState<string | undefined>();
  const [modalIndustry, setModalIndustry] = useState<string | undefined>();

  const openRequestModal = (demoName?: string, industry?: string) => {
    setModalDemo(demoName);
    setModalIndustry(industry);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onRequestWebsite={(demo) => openRequestModal(demo)} />
      
      <main className="flex-1">
        <Outlet context={{ openRequestModal }} />
      </main>

      <Footer />

      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedDemo={modalDemo}
        preselectedIndustry={modalIndustry}
      />

      <FloatingWhatsApp />
    </div>
  );
};
