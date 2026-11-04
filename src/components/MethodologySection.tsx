import React, { useState } from 'react';
import { METHODOLOGY_STAGES } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Compass, Database, GitBranch, Zap } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const stageIcons = [
    Compass,
    Database,
    GitBranch,
    Zap
  ];

  return (
    <section id="methodology" className="py-20 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Engineering Rigor in UX
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Enterprise Product Methodology
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            How complex data-dense products are conceived, architected, and validated under strict security, regulatory, and multi-stakeholder governance.
          </p>
        </div>

        {/* 2-Column Split: Stage Selector Left, Active Stage Deep Dive Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stage List / Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {METHODOLOGY_STAGES.map((stage, idx) => {
              const Icon = stageIcons[idx] || Compass;
              const isActive = activeStageIdx === idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStageIdx(idx)}
                  className={`w-full text-left rounded-lg border p-4.5 transition-all cursor-pointer ${
                    isActive
                      ? 'border-slate-700 bg-slate-900/90 shadow-md'
                      : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700/60 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded border ${
                        isActive
                          ? 'border-slate-600 bg-slate-800 text-white'
                          : 'border-slate-800 bg-slate-950 text-slate-400'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-slate-400 font-semibold">
                          PHASE {stage.step}
                        </div>
                        <div className="text-sm font-bold text-white">
                          {stage.title}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`h-4 w-4 text-slate-400 mt-1 transition-transform ${
                      isActive ? 'translate-x-1 text-white' : ''
                    }`} />
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-normal pl-11">
                    {stage.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep Dive Container */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    PHASE {METHODOLOGY_STAGES[activeStageIdx].step}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-300 font-medium">
                    Execution Framework
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {activeStageIdx + 1} of {METHODOLOGY_STAGES.length}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {METHODOLOGY_STAGES[activeStageIdx].title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {METHODOLOGY_STAGES[activeStageIdx].description}
                </p>
              </div>

              {/* Methodological Pillars */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Principles &amp; Activities:
                </div>
                <div className="space-y-2">
                  {METHODOLOGY_STAGES[activeStageIdx].keyPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 p-3 rounded border border-slate-800/80 bg-slate-950/60 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Enterprise Outputs */}
              <div className="pt-2 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400 font-medium">Expected Enterprise Deliverables:</span>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-slate-300">
                  {activeStageIdx === 0 && (
                    <>
                      <span>In-Depth Interview Transcripts</span>
                      <span className="text-slate-600">·</span>
                      <span>AS-IS Service Blueprints</span>
                      <span className="text-slate-600">·</span>
                      <span>Regulatory Boundary Matrices</span>
                      <span className="text-slate-600">·</span>
                      <span>Product Vision Decks</span>
                    </>
                  )}
                  {activeStageIdx === 1 && (
                    <>
                      <span>Progressive Information Hierarchy</span>
                      <span className="text-slate-600">·</span>
                      <span>Metric-to-Action Card Schematics</span>
                      <span className="text-slate-600">·</span>
                      <span>Tabular Density Specifications</span>
                      <span className="text-slate-600">·</span>
                      <span>Interactive Filter Logic</span>
                    </>
                  )}
                  {activeStageIdx === 2 && (
                    <>
                      <span>Figma Variable Token Repository</span>
                      <span className="text-slate-600">·</span>
                      <span>W3C Design Token JSON</span>
                      <span className="text-slate-600">·</span>
                      <span>WCAG 2.1/2.2 AA Compliance Audit</span>
                      <span className="text-slate-600">·</span>
                      <span>Storybook Component Documentation</span>
                    </>
                  )}
                  {activeStageIdx === 3 && (
                    <>
                      <span>AI-Accelerated High-Fidelity Prototypes</span>
                      <span className="text-slate-600">·</span>
                      <span>Moderated Lab Usability Reports (SUS)</span>
                      <span className="text-slate-600">·</span>
                      <span>Task Completion Latency Telemetry</span>
                      <span className="text-slate-600">·</span>
                      <span>Zero-Drift Frontend Handoff Specs</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
