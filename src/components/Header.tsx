import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const Header: React.FC = () => {
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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="text-base font-semibold tracking-tight text-slate-900 hover:text-slate-700 transition-colors whitespace-nowrap shrink-0"
        >
          Paweł Prusko
          <span className="text-slate-500 font-normal ml-2 hidden sm:inline">· Senior UX/UI</span>
        </a>

        {/* Right: Copy Email action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>Copied! (pruskopawel@gmail.com)</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-slate-300" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
