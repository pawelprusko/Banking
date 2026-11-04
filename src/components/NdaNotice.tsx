import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, CheckCircle2 } from 'lucide-react';

export const NdaNotice: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full border-b border-slate-800 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <div className="flex items-start sm:items-center gap-2.5 text-slate-300">
            <ShieldAlert className="h-4 w-4 shrink-0 text-slate-400 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <span className="font-semibold text-slate-200">Note on Confidentiality:</span>{' '}
              Due to strict non-disclosure agreements (NDA) across banking, public sector, and enterprise healthcare projects, visual UI screens are restricted. Below, I showcase my end-to-end design methodology, architecture blueprints, and publicly available Design System files / interactive dashboard demos.
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer py-1"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Hide Protocol' : 'NDA Protocol'}</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="space-y-1">
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                Sanitized Architectures
              </span>
              <p className="leading-normal">
                Internal enterprise schematics have customer telemetry, proprietary algorithms, and sensitive data anonymized.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                Public Design Systems
              </span>
              <p className="leading-normal">
                Direct links to approved public Figma libraries and independently deployed interactive Vercel demo prototypes.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />
                In-Person Walkthroughs
              </span>
              <p className="leading-normal">
                Deep-dive visual walkthroughs of production deliverables available during bilateral confidential interview interviews.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
