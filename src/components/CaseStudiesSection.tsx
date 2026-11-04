import React, { useState } from 'react';
import { ChevronDown, Layers, Shield, FileText, CheckCircle2, ArrowUpRight, Maximize2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, IndustryCategory } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

export const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<IndustryCategory>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Active sub-tab inside each card: 'process' | 'blueprint' | 'governance'
  const [cardTabs, setCardTabs] = useState<Record<string, 'process' | 'blueprint' | 'governance'>>({
    catsquant: 'process',
    'coi-mobywatel': 'process',
    advartis: 'process',
    'roche-design-system': 'process',
    'stx-next': 'process'
  });

  // Expanded accordion highlights for each card
  const [expandedHighlights, setExpandedHighlights] = useState<Record<string, number>>({
    catsquant: 0,
    'coi-mobywatel': 0,
    advartis: 0,
    'roche-design-system': 0,
    'stx-next': 0
  });

  const filterOptions: { id: IndustryCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Case Studies', count: 5 },
    { id: 'fintech', label: 'Banking & FinTech', count: 1 },
    { id: 'govtech', label: 'Public Sector & GovTech', count: 1 },
    { id: 'healthcare', label: 'Healthcare & Systems', count: 1 },
    { id: 'enterprise', label: 'Enterprise & Insurance', count: 2 }
  ];

  const filteredStudies = CASE_STUDIES.filter(cs => {
    if (activeFilter === 'all') return true;
    return cs.category === activeFilter;
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
    <section id="case-studies" className="py-20 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Selected Enterprise Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Complex Systems &amp; End-to-End Methodology
            </h2>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              In-depth breakdowns across banking, mass-scale public sector identity, legacy enterprise transformation, global design systems, and data experience frameworks.
            </p>
          </div>

          {/* Interactive Filter Buttons (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800 self-start md:self-auto">
            {filterOptions.map(option => (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveFilter(option.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === option.id
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {option.label}
                <span className="ml-1.5 font-mono text-[11px] opacity-70">
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 5 Detailed Case Study Cards */}
        <div className="space-y-12">
          {filteredStudies.map((study) => {
            const activeTab = cardTabs[study.id] || 'process';
            const activeHighlightIdx = expandedHighlights[study.id] ?? 0;

            return (
              <article
                key={study.id}
                className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 sm:p-8 hover:border-slate-700/80 transition-colors space-y-6"
              >
                {/* Header & Meta Row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="font-mono font-bold text-slate-300">
                        {study.number}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-300 font-medium">
                        {study.industry}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span>Role: {study.role}</span>
                      <span className="text-slate-600">·</span>
                      <span>{study.duration}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-base font-medium text-slate-300">
                      {study.subtitle}
                    </p>

                    {/* Unboxed Tags - Zero-Pill Rule */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 pt-1">
                      <span className="text-slate-500 font-medium">Domain Tags:</span>
                      {study.tags.map((tag, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-slate-300">{tag}</span>
                          {tIdx < study.tags.length - 1 && (
                            <span className="text-slate-600 select-none">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Top-Right Action to open full case study modal */}
                  <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(study)}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/90 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Full Case Study Dossier</span>
                    </button>
                  </div>
                </div>

                {/* Executive Overview Paragraph */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {study.overview}
                </p>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-md border border-slate-800/80 bg-slate-950/60">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <div className="text-xs text-slate-400">{metric.label}</div>
                      <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-snug">{metric.context}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Card Tabs Header */}
                <div className="flex items-center gap-2 border-b border-slate-800 pt-2">
                  <button
                    type="button"
                    onClick={() => setCardTab(study.id, 'process')}
                    className={`pb-2.5 px-1 text-xs font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                      activeTab === 'process'
                        ? 'border-white text-white'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    1. Process Highlights ({study.highlights.length} Phases)
                  </button>

                  <button
                    type="button"
                    onClick={() => setCardTab(study.id, 'blueprint')}
                    className={`pb-2.5 px-1 text-xs font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                      activeTab === 'blueprint'
                        ? 'border-white text-white'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    2. Architecture Blueprint
                  </button>

                  <button
                    type="button"
                    onClick={() => setCardTab(study.id, 'governance')}
                    className={`pb-2.5 px-1 text-xs font-semibold transition-colors cursor-pointer border-b-2 -mb-[2px] ${
                      activeTab === 'governance'
                        ? 'border-white text-white'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    3. Governance &amp; Standards
                  </button>
                </div>

                {/* Tab 1 Content: Process Highlights Accordion */}
                {activeTab === 'process' && (
                  <div className="space-y-3 pt-2">
                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span>Click any methodology phase to expand granular research and execution details:</span>
                      <span className="font-mono text-[11px]">Interactive Accordion</span>
                    </div>

                    <div className="space-y-2">
                      {study.highlights.map((highlight, hIdx) => {
                        const isOpen = activeHighlightIdx === hIdx;

                        return (
                          <div
                            key={hIdx}
                            className={`rounded-md border transition-colors ${
                              isOpen
                                ? 'border-slate-700 bg-slate-950/80'
                                : 'border-slate-800/80 bg-slate-950/30 hover:border-slate-700/60'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleHighlight(study.id, hIdx)}
                              className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                              aria-expanded={isOpen}
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-bold text-slate-400">
                                  {highlight.phase}
                                </span>
                                <span className="text-slate-600">·</span>
                                <span className="text-sm font-semibold text-white">
                                  {highlight.title}
                                </span>
                              </div>
                              <ChevronDown
                                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="px-4 pb-4 pt-1 space-y-3 text-xs border-t border-slate-800/60">
                                <p className="text-slate-300 leading-relaxed font-medium">
                                  {highlight.summary}
                                </p>

                                <div className="space-y-1.5 pt-1">
                                  <div className="text-slate-400 font-medium">Methodological Implementation:</div>
                                  <ul className="space-y-1 text-slate-300">
                                    {highlight.details.map((detail, dIdx) => (
                                      <li key={dIdx} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-slate-500 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-400 pt-2 border-t border-slate-800/40">
                                  <span className="text-slate-500 font-medium">Deliverables:</span>
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
                    <div className="rounded-md border border-slate-800 bg-slate-950/70 p-5 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Layers className="h-4 w-4 text-slate-400" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-white">
                            {study.architectureBlueprint.type}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">
                          Data &amp; Component Flow Model
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {study.architectureBlueprint.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {study.architectureBlueprint.layers.map((layer, lIdx) => (
                          <div
                            key={lIdx}
                            className="rounded border border-slate-800/80 bg-slate-900/90 p-4 space-y-2 text-xs"
                          >
                            <div className="font-semibold text-slate-200 border-b border-slate-800 pb-1.5 flex items-center justify-between">
                              <span>{layer.layerName}</span>
                              <span className="font-mono text-[10px] text-slate-500">L{lIdx + 1}</span>
                            </div>
                            <ul className="space-y-1.5 text-slate-300">
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
                  </div>
                )}

                {/* Tab 3 Content: Governance & Standards */}
                {activeTab === 'governance' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="rounded-md border border-slate-800 bg-slate-950/70 p-5 space-y-3">
                      <div className="font-semibold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                        <Shield className="h-4 w-4 text-slate-400" />
                        Regulatory &amp; Security Compliance
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {study.governance.security}
                      </p>
                      <div className="pt-2 border-t border-slate-800/60">
                        <span className="text-slate-400 font-medium">Accessibility Standard:</span>
                        <p className="text-slate-300 mt-0.5">{study.governance.accessibility}</p>
                      </div>
                    </div>

                    <div className="rounded-md border border-slate-800 bg-slate-950/70 p-5 space-y-3">
                      <div className="font-semibold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                        <FileText className="h-4 w-4 text-slate-400" />
                        Stakeholder &amp; Engineering Pod Alignment
                      </div>
                      <p className="text-slate-400">
                        Coordinated with direct cross-functional delivery pods:
                      </p>
                      <ul className="space-y-1 text-slate-300">
                        {study.governance.stakeholders.map((sh, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-slate-500">·</span>
                            <span>{sh}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Bottom Card Footer with Deliverables */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-400">
                    <span className="text-slate-500 font-medium">Core Deliverables:</span>
                    {study.deliverables.slice(0, 3).map((del, dIdx) => (
                      <React.Fragment key={dIdx}>
                        <span className="text-slate-300">{del}</span>
                        {dIdx < 2 && <span className="text-slate-600 select-none">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(study)}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    <span>Read Full Methodology Dossier</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
