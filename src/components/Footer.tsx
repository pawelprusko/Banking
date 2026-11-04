import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, Check, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pruskopawel@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="space-y-1.5">
            <div className="text-base font-bold text-white tracking-tight">
              Paweł Prusko
            </div>
            <div className="text-xs text-slate-400">
              Senior UX/UI Designer · Enterprise FinTech, GovTech &amp; Design Systems
            </div>
            <div className="text-xs text-slate-500">
              Warsaw, Poland · Full-Time B2B Contract · Immediately Available
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:pruskopawel@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>pruskopawel@gmail.com</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-slate-100" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/pawelprusko/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 text-slate-500" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-md border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Legal Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Paweł Prusko. All design systems, blueprints, and portfolio contents curated under respective enterprise client NDAs.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Timezone: Warsaw (CET / UTC+1)</span>
            <span className="text-slate-700">·</span>
            <span>WCAG 2.1 AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
