import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { DemoLayout } from './layouts/DemoLayout';

// Main Hub Pages
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PackagesPage } from './pages/PackagesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// 12 Individual Business Demos
import { HavenPropertyDemo } from './pages/demos/HavenPropertyDemo';
import { PrimeNestRealtyDemo } from './pages/demos/PrimeNestRealtyDemo';
import { BuildStrongDemo } from './pages/demos/BuildStrongDemo';
import { SerenityHotelsDemo } from './pages/demos/SerenityHotelsDemo';
import { GreenForkDemo } from './pages/demos/GreenForkDemo';
import { ApexConsultingDemo } from './pages/demos/ApexConsultingDemo';
import { CityCareClinicDemo } from './pages/demos/CityCareClinicDemo';
import { SparkleProDemo } from './pages/demos/SparkleProDemo';
import { EduBridgeAcademyDemo } from './pages/demos/EduBridgeAcademyDemo';
import { SafariVistaToursDemo } from './pages/demos/SafariVistaToursDemo';
import { LuxeCartBoutiqueDemo } from './pages/demos/LuxeCartBoutiqueDemo';
import { SwiftMoveDemo } from './pages/demos/SwiftMoveDemo';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        
        {/* Nexa Web Studio Main Agency Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* 12 Individual Working Business Demos with Persistent Demo Bar & Back Navigation */}
        <Route element={<DemoLayout />}>
          <Route path="/demos/haven-property-management" element={<HavenPropertyDemo />} />
          <Route path="/demos/primenest-realty" element={<PrimeNestRealtyDemo />} />
          <Route path="/demos/buildstrong-construction" element={<BuildStrongDemo />} />
          <Route path="/demos/serenity-hotels" element={<SerenityHotelsDemo />} />
          <Route path="/demos/green-fork-restaurant" element={<GreenForkDemo />} />
          <Route path="/demos/apex-consulting" element={<ApexConsultingDemo />} />
          <Route path="/demos/citycare-clinic" element={<CityCareClinicDemo />} />
          <Route path="/demos/sparklepro-services" element={<SparkleProDemo />} />
          <Route path="/demos/edubridge-academy" element={<EduBridgeAcademyDemo />} />
          <Route path="/demos/safarivista-tours" element={<SafariVistaToursDemo />} />
          <Route path="/demos/luxecart-boutique" element={<LuxeCartBoutiqueDemo />} />
          <Route path="/demos/swiftmove-logistics" element={<SwiftMoveDemo />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
