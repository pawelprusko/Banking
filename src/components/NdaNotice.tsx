import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const NdaNotice: React.FC = () => {
  return (
    <div className="w-full border-b border-slate-200 bg-slate-100/70 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-start sm:items-center gap-2.5 text-xs leading-relaxed">
          <ShieldCheck className="h-4 w-4 text-slate-500 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <span className="font-semibold text-slate-800">Confidentiality Notice (NDA):</span>{' '}
            Due to strict non-disclosure agreements across banking, public sector, and enterprise healthcare projects, full commercial screens are restricted. This portfolio selectively presents specific system architectures, design libraries, and core UX methodologies to highlight the most critical interaction design aspects.
          </p>
        </div>
      </div>
    </div>
  );
};
