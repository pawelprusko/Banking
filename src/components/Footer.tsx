import React, { useState } from 'react';
import { Copy, Check, ArrowUp } from 'lucide-react';

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
    <footer className="border-t border-slate-200 bg-white text-slate-500 text-xs">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-6">
        {/* Top Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 tracking-tight">
              Paweł Prusko
            </div>
            <div className="text-xs text-slate-500">
              Senior UX/UI Designer · Warsaw, Poland · B2B Contract
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Copy direct email address"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Copied! (pruskopawel@gmail.com)</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-300" />
                  <span>Copy Email (pruskopawel@gmail.com)</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-md border border-slate-200 bg-slate-50 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Paweł Prusko. All rights reserved.
          </div>
          <div className="text-slate-400">
            Warsaw, Poland (CET / UTC+1)
          </div>
        </div>
      </div>
    </footer>
  );
};
