'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'f(problem) = O(1) solution ∀ complexity';

  // deterministic pseudo-random generator (pure function) to avoid SSR/CSR mismatch
  const det = (i: number, salt = 1) => {
    const x = Math.sin((i + 1) * (salt * 12.9898)) * 43758.5453;
    return Math.abs(x - Math.floor(x));
  };

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 sm:pt-28">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating particles (deterministic to avoid hydration mismatch) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => {
          const left = (det(i, 1) * 100).toFixed(6);
          const top = (det(i, 2) * 100).toFixed(6);
          const delay = (det(i, 3) * 5).toFixed(6);
          const duration = (5 + det(i, 4) * 10).toFixed(6);
          return (
            <div
              key={i}
              className="particle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-gray-800/40 rounded-full border border-slate-700 backdrop-blur-sm">
          <span className="text-gray-200 text-sm font-mono">Systems Engineer • Competitive Programming depth • Problem Solver</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 animate-gradient">
          Devansh Khandelwal
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-6">Systems-oriented Software Engineer with Competitive Programming depth and production infra experience.</h2>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg backdrop-blur-sm">
            <span className="text-yellow-300 font-semibold text-xs sm:text-sm">ICPC Chennai • Rank #19</span>
          </div>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-lg backdrop-blur-sm">
            <span className="text-green-300 font-semibold text-xs sm:text-sm">Codeforces • Candidate Master (1964)</span>
          </div>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg backdrop-blur-sm">
            <span className="text-orange-300 font-semibold text-xs sm:text-sm">CodeChef • 6★ (peak 2219)</span>
          </div>
        </div>

        <div className="font-mono text-sm sm:text-lg md:text-xl lg:text-2xl text-green-400 mb-8 h-8 overflow-hidden">
          <span className="typing-cursor">{typedText}</span>
          <span className="cursor-blink">|</span>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
          Systems-first engineer with competitive-programming pedigree and production backend experience. Read the Achievements and Experience sections below for concrete metrics and architectural decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4">
          <a
            href="#achievements"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            View Achievements
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-500/10 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
