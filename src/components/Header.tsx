import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#" 
          className="text-base font-semibold tracking-tight text-slate-100 hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Paweł Prusko
          <span className="text-slate-500 font-normal ml-2 hidden sm:inline">· Senior UX/UI</span>
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <a href="#live-assets" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Live Assets
          </a>
          <a href="#case-studies" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Case Studies
          </a>
          <a href="#methodology" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Methodology
          </a>
          <a href="#data-experience" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            DXD Framework
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="mailto:pruskopawel@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-white hover:shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact Email</span>
          </a>
        </div>
      </div>
    </header>
  );
};
