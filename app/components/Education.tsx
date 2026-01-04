'use client';

import { useState } from 'react';

interface EducationInfo {
  degree: string;
  field: string;
  university: string;
  location: string;
  period: string;
  gpa: string;
  icon: string;
  highlights: string[];
  coursework: string[];
}

const educationData: EducationInfo[] = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    university: "Indian Institute of Information Technology Ranchi",
    location: "Ranchi, Jharkhand",
    period: "2023 - 2027",
    gpa: "8.13",
    icon: "🎓",
    highlights: [
      "Qualified for ICPC Regionals - Rank #65 (Kanpur), #66 (Amritapuri)",
      "Rated Candidate Master on Codeforces (Peak: 1964)",
      "6★ on CodeChef (Peak: 2019) - Top 150 in India",
      "Guardian on LeetCode (Peak: 2109) - Top 1%",
      "AlgoUniversity ATF Fellow - ₹1,00,000 scholarship",
      "President of House of Geeks Coding Club (750+ members)"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Web Development",
      "Software Engineering",
      "Discrete Mathematics"
    ]
  }
];

export default function Education() {
  const [expandedCoursework, setExpandedCoursework] = useState(false);

  const mathSymbols = [
    { symbol: "∫", desc: "Integration" },
    { symbol: "∑", desc: "Summation" },
    { symbol: "∀", desc: "For all" },
    { symbol: "∃", desc: "There exists" },
    { symbol: "∇", desc: "Gradient" },
    { symbol: "≈", desc: "Approximation" }
  ];

  return (
    <section id="education" className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 py-20 px-6 relative overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0 opacity-5">
        {mathSymbols.map((item, idx) => (
          <div
            key={idx}
            className="absolute text-6xl font-bold text-purple-500 animate-float"
            style={{
              left: `${15 + (idx * 12)}%`,
              top: `${10 + (idx * 15)}%`,
              animationDelay: `${idx * 0.3}s`
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full border border-blue-500/50 backdrop-blur-sm">
            <span className="text-blue-200 font-mono font-bold">education(knowledge) → expertise(∞)</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Foundation of Excellence
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Building a strong academic foundation through rigorous problem-solving
          </p>
        </div>

        {/* Main Education Card */}
        {educationData.map((edu, idx) => (
          <div key={idx} className="relative mb-12">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl opacity-30 rounded-3xl"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-blue-500/30 shadow-2xl overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Degree Section */}
                <div className="mb-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-6xl animate-bounce-slow">{edu.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-blue-300 font-semibold mb-1">
                        {edu.field}
                      </p>
                      <p className="text-lg text-purple-300 font-medium">
                        {edu.university}
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        📍 {edu.location} | ⏰ {edu.period}
                      </p>
                    </div>
                  </div>

                  {/* GPA Card */}
                  <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/50 inline-block">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {edu.gpa}
                    </div>
                    <div className="text-gray-300 font-medium">Cumulative GPA</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-10">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">🏆</span>
                    Achievements & Recognitions
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:bg-slate-700/70"
                      >
                        <div className="flex gap-3">
                          <div className="text-2xl mt-1">✨</div>
                          <p className="text-gray-200 leading-relaxed">{highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <button
                    onClick={() => setExpandedCoursework(!expandedCoursework)}
                    className="w-full md:w-auto text-left md:text-center flex items-center justify-between md:justify-center gap-3 text-2xl font-bold text-white mb-6 hover:text-blue-300 transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-3xl">📚</span>
                      Relevant Coursework
                    </span>
                    <span className={`transform transition-transform ${expandedCoursework ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {expandedCoursework && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {edu.coursework.map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 hover:border-blue-500/60 transition-all"
                        >
                          <p className="text-gray-200 font-medium">{course}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Theorem */}
        <div className="text-center mt-12">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 max-w-2xl">
            <div className="text-blue-300 font-mono text-lg mb-4">
              <span className="text-white font-bold">Axiom:</span> foundation_strength ∝ problem_solving_ability
            </div>
            <div className="text-gray-400 text-sm">
              "A strong educational foundation amplifies one's capacity to solve complex problems"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
