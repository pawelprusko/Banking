import React, { useEffect, useState } from 'react';
import { X, Mail, ShieldCheck, FileCheck, Check, Send } from 'lucide-react';

interface NdaDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NdaDeckModal: React.FC<NdaDeckModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [orgType, setOrgType] = useState('Banking / FinTech');
  const [contactSubject, setContactSubject] = useState('NDA Portfolio Walkthrough Request');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  const mailtoHref = `mailto:pruskopawel@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${contactSubject} - ${orgType}`
  )}&body=${encodeURIComponent(
    `Hello Paweł,\n\nWe would like to request access to your comprehensive enterprise portfolio deck or arrange a confidential design walkthrough for a Senior UX/UI role.\n\nOrganization: \nRole/Project Scope: \nTimeline: Immediately / Q1\n\nBest regards,`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-xl rounded-lg border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nda-modal-title"
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/60">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="h-4 w-4 text-slate-400" />
            <span>CONFIDENTIAL ACCESS REQUEST</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h2 id="nda-modal-title" className="text-xl font-bold text-white tracking-tight">
              Request Full Enterprise Deck &amp; Case Studies
            </h2>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Production Figma prototypes and live recordings for mObywatel, banking apps, and Roche clinical software can be shared during bilateral confidential interviews or under corporate NDA.
            </p>
          </div>

          <div className="space-y-3 rounded border border-slate-800 bg-slate-950/60 p-4 text-xs">
            <div className="font-semibold text-slate-200 flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-slate-400" />
              What is included in the full deck:
            </div>
            <ul className="space-y-1.5 text-slate-400 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-slate-500">·</span>
                <span>Unrestricted Figma flows, interactive components &amp; auto-layout hierarchies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">·</span>
                <span>End-to-end qualitative research transcripts and AS-IS Service Blueprints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">·</span>
                <span>Live video walkthroughs of high-density financial &amp; clinical data products</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs text-slate-400 font-medium">Select your sector/domain:</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Banking / FinTech', 'GovTech / Public Sector', 'Healthcare / Life Sciences', 'Enterprise B2B SaaS'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setOrgType(item)}
                  className={`p-2.5 rounded border text-left font-medium transition-colors cursor-pointer ${
                    orgType === item
                      ? 'border-slate-600 bg-slate-800 text-white'
                      : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={mailtoHref}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Send className="h-4 w-4" />
              <span>Launch Pre-Filled Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-slate-200" />
                  <span>Copied (pruskopawel@gmail.com)</span>
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
