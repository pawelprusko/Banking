import React, { useState } from 'react';
import { Header } from './components/Header';
import { NdaNotice } from './components/NdaNotice';
import { HeroSection } from './components/HeroSection';
import { LiveAssetsSection } from './components/LiveAssetsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { MethodologySection } from './components/MethodologySection';
import { MetricToActionDemo } from './components/MetricToActionDemo';
import { Footer } from './components/Footer';
import { NdaDeckModal } from './components/NdaDeckModal';

export default function App() {
  const [isNdaDeckOpen, setIsNdaDeckOpen] = useState(false);

  const handleOpenDeckModal = () => {
    setIsNdaDeckOpen(true);
  };

  const handleCloseDeckModal = () => {
    setIsNdaDeckOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Bar with 3-Zone Contract */}
      <Header onContactClick={handleOpenDeckModal} />

      {/* NDA Disclaimer Banner (Top Notice) */}
      <NdaNotice />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onRequestDeck={handleOpenDeckModal} />

        {/* Featured Live Assets Section (Direct Proof of Work) */}
        <LiveAssetsSection />

        {/* Selected Enterprise Case Studies (5 Detailed Cards with Tabs & Accordions) */}
        <CaseStudiesSection />

        {/* Enterprise UX Design Methodology */}
        <MethodologySection />

        {/* Interactive Data Experience Design Sandbox */}
        <MetricToActionDemo />
      </main>

      {/* Footer */}
      <Footer />

      {/* NDA Portfolio Deck Request Modal */}
      <NdaDeckModal isOpen={isNdaDeckOpen} onClose={handleCloseDeckModal} />
    </div>
  );
}
