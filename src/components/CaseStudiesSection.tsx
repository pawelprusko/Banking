import React, { useState } from 'react';
import { ChevronDown, Layers, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudiesSection: React.FC = () => {
  // Active sub-tab inside each card: 'process' | 'blueprint' | 'governance'
  const [cardTabs, setCardTabs] = useState<Record<string, 'process' | 'blueprint' | 'governance'>>({
    catsquant: 'process',
    'coi-mobywatel': 'process',
    advartis: 'process'
  });

  // Expanded accordion highlights for each card
  const [expandedHighlights, setExpandedHighlights] = useState<Record<string, number>>({
    catsquant: 0,
    'coi-mobywatel': 0,
    advartis: 0
  });

  const setCardTab = (studyId: string, tab: 'process' | 'blueprint' | 'governance') => {
    setCardTabs(prev => ({ ...prev, [studyId]: tab }));
  };

  const toggleHighlight = (studyId: string, index: number) => {
    setExpandedHighlights(prev => ({
      ...prev,
      [studyId]: prev[studyId] === index ? -1 : index
    }));
  };

  return (
    <section id="case-studies" className="py-20 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Selected Enterprise Case Studies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            End-to-End Design Process &amp; Architecture
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Detailed breakdowns across digital banking, public sector citizen identity (mObywatel), and enterprise insurance service design.
          </p>
        </div>

        {/* 3 Detailed Case Study Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => {
            const activeTab = cardTabs[study.id] || 'process';
            const activeHighlightIdx = expandedHighlights[study.id] ?? 0;

            return (
              <article
                key={study.id}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6"
              >
                {/* Header & Meta Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="font-mono font-bold text-slate-800">
                        {study.number}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-800 font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span>Role: {study.role}</span>
                      <span className="text-slate-300">·</span>
                      <span>{study.duration}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-base font-semibold text-slate-700">
                      {study.subtitle}
                    </p>

                    {/* Unboxed Tags - Zero-Pill Rule */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 pt-1">
                      <span className="text-slate-700 font-medium">Domain Tags:</span>
                      {study.tags.map((tag, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-slate-700">{tag}</span>
                          {tIdx < study.tags.length - 1 && (
                            <span className="text-slate-300 select-none">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Executive Overview */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {study.overview}
                </p>

                {/* Interactive Card Tabs Header */}
                <div className="flex items-center gap-3 border-b border-slate-200 pt-2">
                  <button
                    type="button"
                    onClick={() => setCardTab(study.id, 'process')}
                    className={`pb-2.5 px-1 text-xs font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                      activeTab === 'process'
                        ? 'border-slate-900 text-slate-900'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    1. Process Highlights ({study.highlights.length} Phases)
                  </button>

                  <button
                    type="button"
                    onClick={() => setCardTab(study.id, 'blueprint')}
                    className={`pb-2.5 px-1 text-xs font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                      activeTab === 'blueprint'
                        ? 'border-slate-900 text-slate-900'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    2. Architecture Blueprint
                  </button>

                  <button
                    type="button"
                    onClick={() => setCardTab(study.id, 'governance')}
                    className={`pb-2.5 px-1 text-xs font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                      activeTab === 'governance'
                        ? 'border-slate-900 text-slate-900'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    3. Governance &amp; Standards
                  </button>
                </div>

                {/* Tab 1 Content: Process Highlights Accordion */}
                {activeTab === 'process' && (
                  <div className="space-y-3 pt-2">
                    <div className="space-y-2">
                      {study.highlights.map((highlight, hIdx) => {
                        const isOpen = activeHighlightIdx === hIdx;

                        return (
                          <div
                            key={hIdx}
                            className={`rounded-md border transition-colors ${
                              isOpen
                                ? 'border-slate-300 bg-white shadow-2xs'
                                : 'border-slate-200 bg-white/60 hover:border-slate-300'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleHighlight(study.id, hIdx)}
                              className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                              aria-expanded={isOpen}
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-bold text-slate-600">
                                  {highlight.phase}
                                </span>
                                <span className="text-slate-300">·</span>
                                <span className="text-sm font-bold text-slate-900">
                                  {highlight.title}
                                </span>
                              </div>
                              <ChevronDown
                                className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="px-4 pb-4 pt-1 space-y-3 text-xs border-t border-slate-100">
                                <p className="text-slate-700 leading-relaxed font-medium">
                                  {highlight.summary}
                                </p>

                                <div className="space-y-1.5 pt-1">
                                  <div className="text-slate-800 font-semibold">Key Methodology &amp; Execution:</div>
                                  <ul className="space-y-1 text-slate-600">
                                    {highlight.details.map((detail, dIdx) => (
                                      <li key={dIdx} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                                  <span className="text-slate-700 font-medium">Deliverables:</span>
                                  {highlight.artifacts.map((art, aIdx) => (
                                    <React.Fragment key={aIdx}>
                                      <span className="text-slate-600">{art}</span>
                                      {aIdx < highlight.artifacts.length - 1 && (
                                        <span className="text-slate-300 select-none">/</span>
                                      )}
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tab 2 Content: Architecture Blueprint */}
                {activeTab === 'blueprint' && (
                  <div className="space-y-4 pt-2">
                    <div className="rounded-md border border-slate-200 bg-white p-5 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <Layers className="h-4 w-4 text-slate-500" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                            {study.architectureBlueprint.type}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">
                          Structured Architecture Model
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {study.architectureBlueprint.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {study.architectureBlueprint.layers.map((layer, lIdx) => (
                          <div
                            key={lIdx}
                            className="rounded border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs"
                          >
                            <div className="font-semibold text-slate-900 border-b border-slate-200/80 pb-1.5 flex items-center justify-between">
                              <span>{layer.layerName}</span>
                              <span className="font-mono text-[10px] text-slate-400">L{lIdx + 1}</span>
                            </div>
                            <ul className="space-y-1.5 text-slate-600">
                              {layer.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-1.5">
                                  <span className="text-slate-400 shrink-0">›</span>
                                  <span className="leading-snug">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3 Content: Governance & Standards */}
                {activeTab === 'governance' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="rounded-md border border-slate-200 bg-white p-5 space-y-3">
                      <div className="font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <Shield className="h-4 w-4 text-slate-500" />
                        Regulatory &amp; Security Compliance
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {study.governance.security}
                      </p>
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-slate-700 font-semibold">Accessibility Standard:</span>
                        <p className="text-slate-600 mt-0.5">{study.governance.accessibility}</p>
                      </div>
                    </div>

                    <div className="rounded-md border border-slate-200 bg-white p-5 space-y-3">
                      <div className="font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <FileText className="h-4 w-4 text-slate-500" />
                        Stakeholder &amp; Pod Collaboration
                      </div>
                      <p className="text-slate-500">
                        Aligned requirements across cross-functional teams:
                      </p>
                      <ul className="space-y-1 text-slate-600">
                        {study.governance.stakeholders.map((sh, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-slate-400">·</span>
                            <span>{sh}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Bottom Card Footer with Deliverables */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                  <span className="text-slate-700 font-semibold">Deliverables:</span>
                  {study.deliverables.map((del, dIdx) => (
                    <React.Fragment key={dIdx}>
                      <span className="text-slate-600">{del}</span>
                      {dIdx < study.deliverables.length - 1 && (
                        <span className="text-slate-300 select-none">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
