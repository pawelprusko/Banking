import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const HeroSection: React.FC = () => {
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
    <section className="pt-14 pb-14 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Quick Info Bar - Unboxed metadata adhering to zero-pill discipline */}
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

          {/* Short Intro */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Senior UX/UI Designer with 7+ years of experience building complex digital products, public sector mobile apps (mObywatel), fintech, healthcare and design systems. Specialized in information &amp; data-dense complex products.
          </p>

          {/* ONLY Copy Email CTA */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
              aria-label="Copy direct email address"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Email Copied (pruskopawel@gmail.com)</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-300" />
                  <span>Copy Email (pruskopawel@gmail.com)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
