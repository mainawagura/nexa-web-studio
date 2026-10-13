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

// 12 Individual Master Prompt Business Demos
import { HavenPropertyDemo } from './pages/demos/HavenPropertyDemo'; // Havenstone Properties
import { BuildStrongDemo } from './pages/demos/BuildStrongDemo';     // Ironwood Construction Group
import { SerenityHotelsDemo } from './pages/demos/SerenityHotelsDemo'; // The Alder House Hotel
import { GreenForkDemo } from './pages/demos/GreenForkDemo';         // Ember & Olive Restaurant
import { ApexConsultingDemo } from './pages/demos/ApexConsultingDemo'; // Northstar Advisory
import { CityCareClinicDemo } from './pages/demos/CityCareClinicDemo'; // WillowCare Medical Centre
import { LuxeCartBoutiqueDemo } from './pages/demos/LuxeCartBoutiqueDemo'; // Aura Living Boutique
import { EduBridgeAcademyDemo } from './pages/demos/EduBridgeAcademyDemo'; // Oakridge Academy
import { LuminaSpaDemo } from './pages/demos/LuminaSpaDemo';         // Lumina Spa & Wellness
import { SwiftMoveDemo } from './pages/demos/SwiftMoveDemo';         // SwiftMove Logistics
import { SafariVistaToursDemo } from './pages/demos/SafariVistaToursDemo'; // SafariVista Expeditions
import { HopePathFoundationDemo } from './pages/demos/HopePathFoundationDemo'; // HopePath Foundation
import { PrimeNestRealtyDemo } from './pages/demos/PrimeNestRealtyDemo';

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
        
        {/* Nexa Web Studio Agency Hub Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/demos" element={<PortfolioPage />} />
          <Route path="/services" element={<PackagesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* 12 Individual Working Business Demos with Persistent Demo Bar & Back Navigation */}
        <Route element={<DemoLayout />}>
          {/* Demo 1: Property Management & Real Estate */}
          <Route path="/demos/property" element={<HavenPropertyDemo />} />
          <Route path="/demos/havenstone-properties" element={<HavenPropertyDemo />} />
          <Route path="/demos/haven-property-management" element={<HavenPropertyDemo />} />
          <Route path="/demos/primenest-realty" element={<PrimeNestRealtyDemo />} />

          {/* Demo 2: Construction & Engineering */}
          <Route path="/demos/construction" element={<BuildStrongDemo />} />
          <Route path="/demos/ironwood-construction" element={<BuildStrongDemo />} />
          <Route path="/demos/buildstrong-construction" element={<BuildStrongDemo />} />

          {/* Demo 3: Hotel & Hospitality */}
          <Route path="/demos/hotel" element={<SerenityHotelsDemo />} />
          <Route path="/demos/alder-house-hotel" element={<SerenityHotelsDemo />} />
          <Route path="/demos/serenity-hotels" element={<SerenityHotelsDemo />} />

          {/* Demo 4: Restaurant & Café */}
          <Route path="/demos/restaurant" element={<GreenForkDemo />} />
          <Route path="/demos/ember-olive" element={<GreenForkDemo />} />
          <Route path="/demos/green-fork-restaurant" element={<GreenForkDemo />} />

          {/* Demo 5: Consulting & Professional Services */}
          <Route path="/demos/consultancy" element={<ApexConsultingDemo />} />
          <Route path="/demos/consulting" element={<ApexConsultingDemo />} />
          <Route path="/demos/northstar-advisory" element={<ApexConsultingDemo />} />
          <Route path="/demos/apex-consulting" element={<ApexConsultingDemo />} />

          {/* Demo 6: Clinics & Healthcare */}
          <Route path="/demos/clinic" element={<CityCareClinicDemo />} />
          <Route path="/demos/willowcare-clinic" element={<CityCareClinicDemo />} />
          <Route path="/demos/citycare-clinic" element={<CityCareClinicDemo />} />

          {/* Demo 7: Retail & E-commerce */}
          <Route path="/demos/ecommerce" element={<LuxeCartBoutiqueDemo />} />
          <Route path="/demos/retail" element={<LuxeCartBoutiqueDemo />} />
          <Route path="/demos/aura-living" element={<LuxeCartBoutiqueDemo />} />
          <Route path="/demos/luxecart-boutique" element={<LuxeCartBoutiqueDemo />} />

          {/* Demo 8: Schools & Education */}
          <Route path="/demos/education" element={<EduBridgeAcademyDemo />} />
          <Route path="/demos/schools" element={<EduBridgeAcademyDemo />} />
          <Route path="/demos/oakridge-academy" element={<EduBridgeAcademyDemo />} />
          <Route path="/demos/edubridge-academy" element={<EduBridgeAcademyDemo />} />

          {/* Demo 9: Beauty, Salons & Wellness */}
          <Route path="/demos/beauty" element={<LuminaSpaDemo />} />
          <Route path="/demos/wellness" element={<LuminaSpaDemo />} />
          <Route path="/demos/lumina-wellness" element={<LuminaSpaDemo />} />
          <Route path="/demos/sparklepro-services" element={<LuminaSpaDemo />} />

          {/* Demo 10: Logistics & Transport */}
          <Route path="/demos/logistics" element={<SwiftMoveDemo />} />
          <Route path="/demos/transport" element={<SwiftMoveDemo />} />
          <Route path="/demos/swiftmove-logistics" element={<SwiftMoveDemo />} />

          {/* Demo 11: Travel & Tourism */}
          <Route path="/demos/travel" element={<SafariVistaToursDemo />} />
          <Route path="/demos/tourism" element={<SafariVistaToursDemo />} />
          <Route path="/demos/safarivista-tours" element={<SafariVistaToursDemo />} />

          {/* Demo 12: Nonprofits & Community Organizations */}
          <Route path="/demos/nonprofit" element={<HopePathFoundationDemo />} />
          <Route path="/demos/community" element={<HopePathFoundationDemo />} />
          <Route path="/demos/hopepath-foundation" element={<HopePathFoundationDemo />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
