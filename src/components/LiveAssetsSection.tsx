import React from 'react';
import { ExternalLink, Layers, FileText, ArrowUpRight } from 'lucide-react';
import { LIVE_ASSETS } from '../data/portfolioData';

export const LiveAssetsSection: React.FC = () => {
  const roche = LIVE_ASSETS[0];
  const stx = LIVE_ASSETS[1];

  return (
    <section id="live-assets" className="py-16 border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Live Design Systems &amp; Presentations
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            A live Figma component library for data-dense tools, and presentations on cloud cost analytics.
          </p>
        </div>

        {/* 2 Featured Assets Cards - Balanced Heights with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Roche Global Design System & Data Viz Standards */}
          <div className="h-full flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="text-xs text-slate-500 font-medium">
                  Healthcare · Data-Dense Products
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {roche.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {roche.description}
                </p>
              </div>

              {/* Direct Figma Link Button */}
              <div>
                <a
                  href={roche.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors shadow-xs"
                >
                  <Layers className="h-4 w-4 shrink-0" />
                  <span>{roche.buttonLabel}</span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
                </a>
              </div>

              {/* Detailed Operational Structure & Standards */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-700">Standards &amp; Operational Scope:</div>
                <div className="space-y-3 text-xs text-slate-600">
                  {roche.structuredHighlights ? (
                    roche.structuredHighlights.map((item, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="font-semibold text-slate-800 flex items-start gap-1.5">
                          <span className="text-slate-400 select-none">·</span>
                          <span>{item.label}:</span>
                        </div>
                        <p className="pl-3.5 leading-relaxed text-slate-600">
                          {item.detail}
                        </p>
                      </div>
                    ))
                  ) : (
                    roche.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 shrink-0 select-none">·</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: STX Next Data Experience Dashboards & 2 Presentation Decks */}
          <div className="h-full flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="text-xs text-slate-500 font-medium">
                  B2B SaaS · Dashboards &amp; Analytics
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {stx.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stx.description}
                </p>
              </div>

              {/* Scope & Impact Callout */}
              <div className="rounded-md border border-slate-200/80 bg-slate-50/70 p-4 space-y-2 text-xs">
                <div>
                  <strong className="text-slate-900 font-semibold">Scope: </strong>
                  <span className="text-slate-600">{stx.scope}</span>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Impact: </strong>
                  <span className="text-slate-600">{stx.impact}</span>
                </div>
              </div>

              {/* 2 Presentation Links */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-700">Presentations:</div>
                <div className="space-y-3">
                  {stx.presentations?.map((pres) => (
                    <a
                      key={pres.id}
                      href={pres.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-md border border-slate-200 bg-white p-4 hover:border-slate-300 hover:shadow-xs transition-all text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {/* Standardized, prominent icon box */}
                          <div className="w-10 h-10 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-100 transition-colors">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-bold text-slate-900 group-hover:text-slate-700 leading-snug">
                              {pres.title}
                            </div>
                            <div className="text-xs text-slate-500 leading-relaxed">
                              {pres.description}
                            </div>
                          </div>
                        </div>

                        {/* Standardized Open Deck button */}
                        <span className="inline-flex items-center gap-1.5 shrink-0 self-start sm:self-center font-medium text-slate-800 text-xs bg-slate-100 group-hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors">
                          <span>Open Deck</span>
                          <ArrowUpRight className="h-4 w-4 text-slate-600" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
