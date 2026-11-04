import React, { useState } from 'react';
import { ArrowRight, Check, AlertTriangle, RefreshCw, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export const MetricToActionDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState<'engineered' | 'raw'>('engineered');
  const [anomalyTriggered, setAnomalyTriggered] = useState(false);
  const [actionExecuted, setActionExecuted] = useState(false);

  const handleSimulateAlert = () => {
    setAnomalyTriggered(!anomalyTriggered);
    setActionExecuted(false);
  };

  const handleExecuteMitigation = () => {
    setActionExecuted(true);
    setTimeout(() => {
      setAnomalyTriggered(false);
      setActionExecuted(false);
    }, 2500);
  };

  return (
    <section id="data-experience" className="py-20 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Interactive Design Philosophy
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Data Experience Design: Metric-to-Action
            </h2>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Enterprise platforms fail when raw telemetry is merely dumped onto tables. Compare how I transform high-frequency data into intuitive, sub-second decision cockpits.
            </p>
          </div>

          {/* Toggle between Raw vs Engineered */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('engineered')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'engineered'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Designed DXD Pattern
            </button>
            <button
              type="button"
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'raw'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Raw Unfiltered Telemetry
            </button>
          </div>
        </div>

        {/* Interactive Workspace Box */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-slate-400">
                SCENARIO: Capital Reserve &amp; Liquidity Telemetry
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-300">
                Simulated Real-Time Stream
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSimulateAlert}
                className="inline-flex items-center gap-1.5 rounded border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="h-3 w-3 text-slate-400" />
                <span>{anomalyTriggered ? 'Reset Stream' : 'Simulate Liquidity Anomaly'}</span>
              </button>
            </div>
          </div>

          {viewMode === 'engineered' ? (
            /* Engineered Metric-to-Action View */
            <div className="space-y-6">
              {/* Top Banner Alert (Only visible when anomaly simulated) */}
              {anomalyTriggered && (
                <div className="rounded border border-amber-900/60 bg-amber-950/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-amber-200">
                        Liquidity Threshold Warning: Capital Ratio at 11.2% (Target $\ge$ 14%)
                      </div>
                      <div className="text-xs text-amber-300/80">
                        High withdrawal velocity in Frankfurt Settlement Cluster. Immediate rebalancing recommended.
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleExecuteMitigation}
                    disabled={actionExecuted}
                    className="inline-flex items-center gap-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-4 py-2 text-xs transition-colors shrink-0 cursor-pointer disabled:opacity-50"
                  >
                    {actionExecuted ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Mitigation Executed</span>
                      </>
                    ) : (
                      <>
                        <span>Execute Hedged Liquidity Injection</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* 3 Metric Cards adhering to Metric-to-Action pattern */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>CET1 Capital Adequacy</span>
                    <span className="font-mono text-slate-400">Basel III</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white tabular-nums">
                    {anomalyTriggered ? (
                      <span className="text-amber-400">11.24%</span>
                    ) : (
                      <span className="text-slate-100">16.82%</span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60">
                    <span>Regulatory Minimum: 10.50%</span>
                    <span className="text-slate-300 font-medium">+62 bps vs avg</span>
                  </div>
                </div>

                <div className="rounded border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Net Overnight Liquidity</span>
                    <span className="font-mono text-slate-400">ECB Settlement</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white tabular-nums">
                    {anomalyTriggered ? (
                      <span className="text-amber-400">€412.4M</span>
                    ) : (
                      <span className="text-slate-100">€940.8M</span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60">
                    <span>Target Floor: €350.0M</span>
                    <span className="text-slate-300 font-medium">Stable</span>
                  </div>
                </div>

                <div className="rounded border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Decision Latency P99</span>
                    <span className="font-mono text-slate-400">Operator UX</span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white tabular-nums">
                    1.8s
                  </div>
                  <div className="text-xs text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60">
                    <span>Industry Benchmark: 45s</span>
                    <span className="text-slate-300 font-medium">-96% faster</span>
                  </div>
                </div>
              </div>

              {/* Actionable Table Preview */}
              <div className="rounded border border-slate-800 bg-slate-950/60 overflow-hidden">
                <div className="p-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    Active Settlement Accounts &amp; Automated Triggers
                  </span>
                  <span className="text-slate-400 font-mono">
                    Updated 2s ago
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/50 text-slate-400 font-medium border-b border-slate-800">
                      <tr>
                        <th className="py-2.5 px-4">Account Entity</th>
                        <th className="py-2.5 px-4">Jurisdiction</th>
                        <th className="py-2.5 px-4 text-right">Available Balance</th>
                        <th className="py-2.5 px-4">Status &amp; Risk</th>
                        <th className="py-2.5 px-4 text-right">Action Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-300">
                      <tr>
                        <td className="py-2.5 px-4 font-medium text-slate-100">Frankfurt Clearing Hub</td>
                        <td className="py-2.5 px-4 text-slate-400">Germany · BaFin</td>
                        <td className="py-2.5 px-4 text-right font-mono tabular-nums">€318,400,000</td>
                        <td className="py-2.5 px-4">
                          {anomalyTriggered ? (
                            <span className="text-amber-400 font-medium">Liquidity Compression</span>
                          ) : (
                            <span className="text-slate-300">Optimal Allocation</span>
                          )}
                        </td>
                        <td className="py-2.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={handleExecuteMitigation}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-200 hover:text-white bg-slate-800 px-2 py-1 rounded cursor-pointer"
                          >
                            <span>Reallocate</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-medium text-slate-100">Warsaw Central Custody</td>
                        <td className="py-2.5 px-4 text-slate-400">Poland · KNF</td>
                        <td className="py-2.5 px-4 text-right font-mono tabular-nums">€214,150,000</td>
                        <td className="py-2.5 px-4 text-slate-300">Optimal Allocation</td>
                        <td className="py-2.5 px-4 text-right">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-200 cursor-pointer"
                          >
                            <span>Inspect</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-medium text-slate-100">London Institutional Desk</td>
                        <td className="py-2.5 px-4 text-slate-400">UK · FCA</td>
                        <td className="py-2.5 px-4 text-right font-mono tabular-nums">€408,250,000</td>
                        <td className="py-2.5 px-4 text-slate-300">Optimal Allocation</td>
                        <td className="py-2.5 px-4 text-right">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-200 cursor-pointer"
                          >
                            <span>Inspect</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* Raw Unfiltered Telemetry View (Demonstrating the problem) */
            <div className="space-y-4">
              <div className="p-3 bg-red-950/20 border border-red-900/40 rounded text-xs text-red-200">
                <strong>Legacy Enterprise Problem:</strong> Without UX architecture, operators must parse raw database dumps without hierarchy, leading to high error rates and delayed incident response times.
              </div>

              <div className="p-4 rounded border border-slate-800 bg-slate-950 font-mono text-[11px] text-slate-400 overflow-x-auto space-y-1">
                <div>[11:04:12.894] DB_CONN_0: POOL_SIZE=48 ACTIVE_TX=12 WAL_LOG_SEQ=982410982 RATIO=0.1124</div>
                <div>[11:04:12.896] ADQ_CHECK_RUN: ENTITY_ID=&quot;DE_FFM_01&quot; VAL_1=318400000 VAL_2=940800000 THRESH=0.105</div>
                <div>[11:04:12.899] METRIC_EMIT: KEY=&quot;var_99_loss&quot; DURATION_MS=14.2 VALUE=4210941.12 STATE=&quot;ACTIVE&quot;</div>
                <div>[11:04:12.902] SEC_AUDIT_OK: HASH=&quot;0x8fba92...&quot; TS=1742081234 ROLE=&quot;SR_RISK_ADMIN&quot; COMPLIANCE=1</div>
                <div>[11:04:12.905] KNF_POL_STREAM: BUFFER_CAPACITY=88.4% QUEUE_LATENCY_US=314 REQ_COUNT=184920</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
