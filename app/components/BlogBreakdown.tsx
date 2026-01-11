export default function BlogBreakdown() {
  return (
    <section id="deep-dive" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Deep Dive — Live Trading & Backtesting</h2>
        <p className="text-gray-400 mb-6">A focused, blog-style breakdown of one non-trivial system I built and why certain engineering choices mattered.</p>

        <div className="bg-slate-800/60 rounded-xl p-6 text-gray-300">
          <h3 className="text-xl font-semibold text-white mb-2">Problem</h3>
          <p>Build a platform that supports strategy development, accurate historical backtesting, and low-latency live execution while preventing catastrophic losses and ensuring reproducibility.</p>

          <h3 className="text-xl font-semibold text-white mt-4 mb-2">Key goals</h3>
          <ul className="pl-4 list-disc">
            <li>Deterministic backtests that match live execution results closely.</li>
            <li>Low-latency execution interface with bounded worst-case latency.</li>
            <li>Strong risk controls and observability to detect strategy drift.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-4 mb-2">Architecture (high level)</h3>
          <svg className="w-full h-40 mb-4" viewBox="0 0 700 180" preserveAspectRatio="xMidYMid meet">
            <rect x="20" y="20" width="140" height="60" rx="8" fill="#071023" stroke="#06b6d4" />
            <text x="90" y="55" fill="#9ee7f5" fontSize="12" textAnchor="middle">Market Feed</text>
            <rect x="200" y="20" width="140" height="60" rx="8" fill="#071023" stroke="#7c3aed" />
            <text x="270" y="55" fill="#c7b3ff" fontSize="12" textAnchor="middle">Preprocessor / Bar Gen</text>
            <rect x="380" y="20" width="140" height="60" rx="8" fill="#071023" stroke="#f59e0b" />
            <text x="450" y="55" fill="#ffd8a8" fontSize="12" textAnchor="middle">Strategy Engine</text>
            <rect x="560" y="20" width="120" height="60" rx="8" fill="#071023" stroke="#ef4444" />
            <text x="620" y="55" fill="#ffb4b4" fontSize="12" textAnchor="middle">Execution</text>
            <path d="M160 50 L200 50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr)" />
            <path d="M340 50 L380 50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr)" />
            <path d="M520 50 L560 50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>

          <h3 className="text-xl font-semibold text-white mt-2 mb-2">Design decisions & trade-offs</h3>
          <ul className="pl-4 list-disc">
            <li>Backtest determinism: used fixed data slicing, seeded RNGs, and identical pre-processing so that simulation matches live latency characteristics.</li>
            <li>Latency vs safety: split hot execution path (in-memory matching) from slow path (risk checks) with local permissioning to avoid blocking while preserving safety via pre-trade checks.</li>
            <li>State management: event-sourced logs for orders to enable deterministic replay and forensic debugging.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-4 mb-2">Failure modes & mitigations</h3>
          <ul className="pl-4 list-disc">
            <li>Market data feed drop — fallback to synthetic pricing + alerting and automatic safe-stop of strategies.</li>
            <li>Order rejection storms — circuit-breaker + per-strategy throttles and DLQ for suspicious rates.</li>
            <li>State divergence — reconciliation jobs and snapshot + incremental replay for recovery.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-4 mb-2">Observability</h3>
          <p className="pl-4">Instrumented: message latency histograms, queue depth, execution success/failure rates, P&L drift alerts. Tracing attached across modules for root-cause of high p99s.</p>

          <h3 className="text-xl font-semibold text-white mt-4 mb-2">What I'd add next</h3>
          <ul className="pl-4 list-disc">
            <li>NIC and kernel tuning for ultra-low-latency deployments (CPU pinning, hugepages, kernel bypass where appropriate).</li>
            <li>Deterministic hardware-in-the-loop tests and more comprehensive chaos tests for backtest/live parity.</li>
            <li>Static analysis and property-based tests for core execution logic to reduce regression risk.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
