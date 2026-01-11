export default function HowIThink() {
  return (
    <section id="how-i-think" className="py-16 px-6 bg-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">How I Think</h2>
        <p className="text-gray-400 mb-6">A terse note on problem-solving philosophy — what I do first, and why it matters.</p>

        <div className="space-y-3 text-left text-gray-300">
          <div>
            <strong>1. Define the failure modes:</strong> enumerate what can go wrong and measure impact before designing a fix.
          </div>
          <div>
            <strong>2. Optimize the critical path:</strong> locate hot paths, quantify cost, and simplify the work on the hot path first.
          </div>
          <div>
            <strong>3. Prefer simple, auditable primitives:</strong> choose deterministic, testable solutions over clever but opaque optimizations.
          </div>
          <div>
            <strong>4. Instrument early:</strong> add metrics/tracing where it matters so decisions are data-driven.
          </div>
          <div>
            <strong>5. Iterate with safety:</strong> use canaries, feature flags, and replayable pipelines to change systems with confidence.
          </div>
        </div>
      </div>
    </section>
  );
}
