import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, Layers, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl rounded-lg border border-slate-800 bg-slate-900 shadow-2xl my-8 overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-case-study-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-400">
              CASE STUDY {caseStudy.number}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300 font-medium">
              {caseStudy.industry}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="space-y-3">
            <h2 id="modal-case-study-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {caseStudy.title}
            </h2>
            <div className="text-lg text-slate-300 font-medium">
              {caseStudy.subtitle}
            </div>
            
            {/* Metadata bar - Zero-pill discipline */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 pt-1">
              <span>Client: {caseStudy.client}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Role: {caseStudy.role}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Duration: {caseStudy.duration}</span>
            </div>

            {/* Tags - clean unboxed */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-slate-400 font-medium">Specialties:</span>
              {caseStudy.tags.map((tag, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-slate-300">{tag}</span>
                  {idx < caseStudy.tags.length - 1 && (
                    <span className="text-slate-600 select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              {caseStudy.overview}
            </p>
          </div>

          {/* Key Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-md border border-slate-800 bg-slate-950/60">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                <div className="font-mono text-2xl font-bold text-white tabular-nums">{m.value}</div>
                <div className="text-xs text-slate-400 leading-tight">{m.context}</div>
              </div>
            ))}
          </div>

          {/* Deep Process Highlights Breakdown */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              End-to-End Process Breakdown
            </h3>

            <div className="space-y-6">
              {caseStudy.highlights.map((highlight, idx) => (
                <div key={idx} className="space-y-3 rounded-md border border-slate-800/80 bg-slate-950/40 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {highlight.phase}
                      </span>
                      <span className="text-slate-600">·</span>
                      <h4 className="text-sm font-bold text-white">
                        {highlight.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {highlight.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="text-xs text-slate-400 font-medium">Execution Details:</div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {highlight.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    <span className="text-slate-400 font-medium">Delivered Artifacts:</span>
                    {highlight.artifacts.map((art, aIdx) => (
                      <React.Fragment key={aIdx}>
                        <span className="text-slate-300">{art}</span>
                        {aIdx < highlight.artifacts.length - 1 && (
                          <span className="text-slate-600 select-none">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Blueprint Schematics */}
          <div className="space-y-3 rounded-md border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-slate-400" />
                {caseStudy.architectureBlueprint.type}
              </span>
              <span className="text-xs text-slate-400">Architectural Model</span>
            </div>
            <p className="text-xs text-slate-400">
              {caseStudy.architectureBlueprint.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {caseStudy.architectureBlueprint.layers.map((layer, lIdx) => (
                <div key={lIdx} className="rounded border border-slate-800/80 bg-slate-900/80 p-3 space-y-2 text-xs">
                  <div className="font-semibold text-slate-200 border-b border-slate-800 pb-1">
                    {layer.layerName}
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {layer.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-1.5">
                        <span className="text-slate-500 shrink-0">›</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Governance & Compliance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="rounded border border-slate-800 bg-slate-950/50 p-4 space-y-2">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-slate-400" />
                Security &amp; Regulatory Mandates
              </div>
              <p className="text-slate-400 leading-relaxed">
                {caseStudy.governance.security}
              </p>
              <p className="text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                <strong className="text-slate-300 font-medium">Accessibility:</strong> {caseStudy.governance.accessibility}
              </p>
            </div>

            <div className="rounded border border-slate-800 bg-slate-950/50 p-4 space-y-2">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-slate-400" />
                Key Stakeholder Alignment
              </div>
              <ul className="space-y-1 text-slate-400">
                {caseStudy.governance.stakeholders.map((sh, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-1.5">
                    <span className="text-slate-600">·</span>
                    <span>{sh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4 bg-slate-950/80">
          <div className="text-xs text-slate-400">
            Confidential Enterprise Case Study Dossier
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="mailto:pruskopawel@gmail.com?subject=Inquiry regarding Case Study: "
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
            >
              <span>Discuss Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
