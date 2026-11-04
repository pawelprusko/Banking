import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LiveAssetsSection } from './components/LiveAssetsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar with Brand and Copy Email */}
      <Header />

      <main className="flex-1">
        {/* Header / Hero Section */}
        <HeroSection />

        {/* Featured Live Assets: Roche Global Design System & STX Next 5 Presentations */}
        <LiveAssetsSection />

        {/* Selected Enterprise Case Studies: Catsquant, COI (mObywatel), Advartis */}
        <CaseStudiesSection />
      </main>

      {/* Clean Light-Mode Footer */}
      <Footer />
    </div>
  );
}
