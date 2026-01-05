'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'f(problem) = O(1) solution ∀ complexity';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
          <span className="text-purple-300 text-sm font-mono">Competitive Programmer • Problem Solver • Full Stack Developer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 animate-gradient">
          Devansh Khandelwal
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg backdrop-blur-sm">
            <span className="text-yellow-300 font-bold text-xs sm:text-sm">🏆 ICPC Chennai AIR 19</span>
          </div>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/50 rounded-lg backdrop-blur-sm">
            <span className="text-green-300 font-bold text-xs sm:text-sm">∑ 3000+ Problems Solved</span>
          </div>
        </div>

        <div className="font-mono text-sm sm:text-lg md:text-xl lg:text-2xl text-green-400 mb-8 h-8 overflow-hidden">
          <span className="typing-cursor">{typedText}</span>
          <span className="cursor-blink">|</span>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
          <span className="text-purple-300 font-semibold">Why hire me?</span> I architect scalable solutions backed by competitive programming excellence and real-world backend expertise. <span className="text-yellow-300 font-bold">AIR 19 in ICPC</span> and <span className="text-green-300 font-bold">3000+ problems solved</span> showcase my algorithmic prowess. In my fintech startup, I engineered <span className="text-blue-300 font-bold">microservices in Python</span> with <span className="text-cyan-300 font-bold">gRPC</span>, built high-performance REST APIs with <span className="text-pink-300 font-bold">FastAPI</span>, and optimized distributed backend systems. I transform complex problems into elegant, production-ready solutions.
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
