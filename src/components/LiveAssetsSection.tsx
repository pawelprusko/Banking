import React, { useState } from 'react';
import { ExternalLink, Layers, LayoutDashboard, Sliders, CheckCircle2, ChevronRight, Code } from 'lucide-react';
import { LIVE_ASSETS } from '../data/portfolioData';

export const LiveAssetsSection: React.FC = () => {
  const [selectedDensity, setSelectedDensity] = useState<'compact' | 'comfortable'>('compact');
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);

  const stxDemoPrototypes = [
    {
      name: 'Fintech Risk Telemetry',
      domain: 'Capital Markets & Liquidity',
      kpi: 'VaR 99% Confidence Interval',
      metric: '€4.2M (-12.4% vs benchmark)',
      action: 'Automated Delta Neutral Hedge Trigger',
      actionLatency: '140ms execution'
    },
    {
      name: 'Clinical Biomarker Matrix',
      domain: 'Diagnostic Instrumentation',
      kpi: 'Troponin-T Assay Variance',
      metric: '0.014 ng/mL (Within Target Range)',
      action: 'Batch Calibration Quality Stamp',
      actionLatency: 'Instant verification'
    },
    {
      name: 'Cloud Infrastructure Allocator',
      domain: 'Kubernetes Cluster Telemetry',
      kpi: 'Node Pod Memory Saturation',
      metric: '87.4% Utilization (Cluster Alpha)',
      action: 'Horizontal Auto-Scale Drain Node',
      actionLatency: '2.1s rebalance'
    },
    {
      name: 'Algorithmic Order Book Liquidity',
      domain: 'High-Frequency Order Routing',
      kpi: 'Bid-Ask Spread Compression',
      metric: '0.8 bps (Depth: $18.4M)',
      action: 'Dynamic Dark Pool Router Allocation',
      actionLatency: '< 50ms routing'
    },
    {
      name: 'Public Sector Citizen SLA Monitor',
      domain: 'GovTech Microservices',
      kpi: 'Identity Verification Latency',
      metric: '184ms P99 (15M Citizen Influx)',
      action: 'Route to Geo-Distributed Edge Cache',
      actionLatency: 'Immediate fallback'
    }
  ];

  return (
    <section id="live-assets" className="py-16 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Direct Proof of Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Featured Live Assets
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            Publicly accessible artifacts and live production prototypes illustrating token architecture, component systems, and metric-to-action dashboard engineering.
          </p>
        </div>

        {/* 2-Column Asset Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Roche Global Design System */}
          <div className="flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  Enterprise Healthcare · Design Systems
                </span>
                <span className="font-mono text-xs text-slate-400">
                  Figma Variables
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {LIVE_ASSETS[0].title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {LIVE_ASSETS[0].description}
                </p>
              </div>

              {/* Direct Link Button */}
              <div className="pt-1">
                <a
                  href={LIVE_ASSETS[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                >
                  <Layers className="h-4 w-4" />
                  <span>{LIVE_ASSETS[0].buttonLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-600" />
                </a>
              </div>

              {/* Key System Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-400">Architecture Specifications:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {LIVE_ASSETS[0].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-500 shrink-0 select-none">·</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Token Density Inspector */}
              <div className="rounded border border-slate-800 bg-slate-950/80 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    <Sliders className="h-3.5 w-3.5 text-slate-400" />
                    Interactive Density Mode Switcher
                  </span>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setSelectedDensity('compact')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                        selectedDensity === 'compact'
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Compact (32px)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDensity('comfortable')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                        selectedDensity === 'comfortable'
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Comfortable (48px)
                    </button>
                  </div>
                </div>

                {/* Simulated Clinical Data Row Preview */}
                <div className="font-mono text-xs border border-slate-800/80 rounded overflow-hidden">
                  <div className="bg-slate-900/90 px-3 py-1.5 border-b border-slate-800/80 flex items-center justify-between text-slate-400">
                    <span>Clinical Assay ID</span>
                    <span>Biomarker Status</span>
                    <span>Specimen Delta</span>
                  </div>
                  <div
                    className={`px-3 flex items-center justify-between transition-all bg-slate-950 ${
                      selectedDensity === 'compact' ? 'py-1 text-xs' : 'py-3 text-sm'
                    }`}
                  >
                    <span className="text-slate-200 font-medium">ASSAY-9842-TX</span>
                    <span className="text-slate-300">Within Normal Range</span>
                    <span className="text-slate-400 tabular-nums">0.024 mg/dL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2">
              {LIVE_ASSETS[0].stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                  <div className="font-mono text-base font-bold text-white tabular-nums">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: STX Next Data Experience Dashboards */}
          <div className="flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  Enterprise B2B SaaS · Telemetry UX
                </span>
                <span className="font-mono text-xs text-slate-400">
                  5 Live Vercel Demos
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {LIVE_ASSETS[1].title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {LIVE_ASSETS[1].description}
                </p>
              </div>

              {/* Direct Link Button */}
              <div className="pt-1">
                <a
                  href={LIVE_ASSETS[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>{LIVE_ASSETS[1].buttonLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-600" />
                </a>
              </div>

              {/* Key System Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-400">Framework Deliverables:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {LIVE_ASSETS[1].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-500 shrink-0 select-none">·</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Demo Selector Showcase */}
              <div className="rounded border border-slate-800 bg-slate-950/80 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    Select Prototype from the 5 Live Demos:
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {selectedDemoIndex + 1} / 5
                  </span>
                </div>

                {/* Tab buttons for 5 prototypes */}
                <div className="flex flex-wrap gap-1.5">
                  {stxDemoPrototypes.map((proto, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedDemoIndex(idx)}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                        selectedDemoIndex === idx
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-900/70 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {proto.name}
                    </button>
                  ))}
                </div>

                {/* Selected Prototype Preview Detail */}
                <div className="p-3 bg-slate-900/90 rounded border border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Domain: {stxDemoPrototypes[selectedDemoIndex].domain}</span>
                    <span className="font-mono text-slate-400">{stxDemoPrototypes[selectedDemoIndex].actionLatency}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pt-1 border-t border-slate-800/60">
                    <div>
                      <div className="text-slate-400 text-[11px]">{stxDemoPrototypes[selectedDemoIndex].kpi}</div>
                      <div className="font-mono text-sm font-semibold text-slate-100">
                        {stxDemoPrototypes[selectedDemoIndex].metric}
                      </div>
                    </div>
                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                      <div className="text-slate-400 text-[11px]">Metric-to-Action Trigger</div>
                      <div className="font-medium text-slate-200">
                        {stxDemoPrototypes[selectedDemoIndex].action}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2">
              {LIVE_ASSETS[1].stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                  <div className="font-mono text-base font-bold text-white tabular-nums">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
