import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-14 pb-14 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Quick Info Bar - Unboxed metadata */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 font-medium">
            <span>Warsaw, Poland</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Full-Time B2B Contract</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-700 font-semibold">Immediately Available</span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
              Paweł Prusko
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-700">
              Senior UX/UI Designer
            </p>
          </div>

          {/* Short Intro - Authentic, natural copy */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Senior UX/UI Designer with 7+ years of experience designing complex digital products across the public sector, fintech, and healthcare. Focused on data-dense interfaces, mobile and web apps, and design systems.
          </p>

          {/* Section Navigation Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#live-assets"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-xs"
            >
              <span>Live Assets</span>
              <ArrowDown className="h-4 w-4 text-slate-300" />
            </a>

            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>Case Studies</span>
              <ArrowDown className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
