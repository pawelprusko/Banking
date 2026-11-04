import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ArrowDown, FileText } from 'lucide-react';

interface HeroSectionProps {
  onRequestDeck: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDeck }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pruskopawel@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative pt-12 pb-16 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Typographic Core */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Info Bar - Unboxed metadata adhering to zero-pill discipline */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-medium">
              <span>Warsaw, Poland</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Full-Time B2B Contract</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-200">Immediately Available</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
                Paweł Prusko
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-medium text-slate-300">
                Senior UX/UI Designer
              </p>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Senior UX/UI Designer with 7+ years of experience building complex digital products, public sector mobile apps (mObywatel), fintech, healthcare and design systems. Specialized in information &amp; data-dense complex products.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:pruskopawel@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-slate-100" />
                    <span>Copied (pruskopawel@gmail.com)</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/pawelprusko/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
              </a>

              <button
                type="button"
                onClick={onRequestDeck}
                className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              >
                <FileText className="h-4 w-4 text-slate-400" />
                <span>Request NDA Portfolio Deck</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Discipline Card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Enterprise Focus Areas
                </span>
                <span className="font-mono text-xs text-slate-400">
                  Senior Product Track
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-slate-400 mb-1">Specialized Competencies</div>
                  <div className="text-sm font-medium text-slate-200 leading-snug">
                    Information Architecture, Data-Dense Cockpits, Design Tokens &amp; Multi-Brand Governance
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                  <div>
                    <div className="text-slate-400 mb-0.5">Primary Sectors</div>
                    <div className="text-slate-200 font-medium">FinTech, GovTech, Healthcare, Enterprise SaaS</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-0.5">Accessibility &amp; Standards</div>
                    <div className="text-slate-200 font-medium">WCAG 2.1/2.2 AA, EAA, ISO 9241, PSD2</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-slate-400 mb-1">Collaboration Model</div>
                  <div className="text-slate-200 leading-relaxed">
                    Embedded product partner working directly alongside CTOs, system architects, and frontend engineering pods with zero design-code drift.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>Explore Case Studies &amp; Process Blueprints</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Proof Strip Below Split (Section 1.C / Reference 7 rules) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="font-mono text-3xl font-bold tracking-tight text-white tabular-nums">
              7+ Years
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Enterprise Digital Products &amp; Design Leadership
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-3xl font-bold tracking-tight text-white tabular-nums">
              15M+ Users
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Citizens served by mObywatel public sector ecosystem
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-3xl font-bold tracking-tight text-white tabular-nums">
              5 Live Demos
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Interactive Data Experience prototypes deployed
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-3xl font-bold tracking-tight text-white tabular-nums">
              480+ Tokens
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Multi-brand architecture for global healthcare software
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
