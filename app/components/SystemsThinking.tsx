export default function SystemsThinking() {
  return (
    <section id="systems" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Systems & Performance Thinking</h2>
        <p className="text-gray-400 mb-6">Signal for HFT / low-latency / infra roles: focused on concurrency, OS and networking fundamentals, and latency-aware design.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 p-4 rounded-lg">
            <div className="font-semibold text-gray-200">Low-latency systems</div>
            <ul className="pl-4 mt-2 text-gray-300 list-disc">
              <li>Interest in microsecond-level optimizations and reducing p99 latency.</li>
              <li>Experience with protocol selection (binary RPC), serialization trade-offs, and avoiding tail latency amplification.</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-lg">
            <div className="font-semibold text-gray-200">Concurrency & OS</div>
            <ul className="pl-4 mt-2 text-gray-300 list-disc">
              <li>Designing lock-free or sharded data paths, careful thread/process placement.</li>
              <li>Understanding of scheduling, page faults, caches, and memory management trade-offs.</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-lg">
            <div className="font-semibold text-gray-200">Networking fundamentals</div>
            <ul className="pl-4 mt-2 text-gray-300 list-disc">
              <li>TCP/TLS tuning, connection pooling, and minimizing syscalls on hot paths.</li>
              <li>Latency sources: NICs, kernel bypass, batching, and serialization cost.</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-lg">
            <div className="font-semibold text-gray-200">Reliability & Observability</div>
            <ul className="pl-4 mt-2 text-gray-300 list-disc">
              <li>Design for graceful degradation, backpressure, and deterministic replay for failures.</li>
              <li>Instrumentation: metrics, traces, structured logs, and alerting tuned to SLOs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
