'use client';

import { useState } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovation Inc",
    period: "2023 - Present",
    description: "Leading development of scalable cloud solutions and mentoring junior developers",
    achievements: [
      "Architected microservices platform serving 1M+ users",
      "Reduced infrastructure costs by 40% through optimization",
      "Led team of 5 developers on critical projects"
    ],
    tech: ["AWS", "Kubernetes", "React", "Python"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Co",
    period: "2021 - 2023",
    description: "Built and maintained web applications with focus on performance and user experience",
    achievements: [
      "Developed real-time analytics dashboard used by 500+ clients",
      "Improved application performance by 60%",
      "Implemented CI/CD pipelines reducing deployment time by 70%"
    ],
    tech: ["Node.js", "React", "MongoDB", "Docker"]
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "StartUp Ventures",
    period: "2020 - 2021",
    description: "Contributed to product development and learned modern development practices",
    achievements: [
      "Built RESTful APIs serving 10K+ daily requests",
      "Implemented automated testing increasing code coverage to 85%",
      "Collaborated with cross-functional teams on feature development"
    ],
    tech: ["Python", "Django", "PostgreSQL", "Redis"]
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number>(1);

  return (
    <section id="experience" className="min-h-screen bg-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Journey of <span className="text-purple-400">Growth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every experience is a stepping stone to becoming a better problem solver
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline sidebar */}
          <div className="lg:col-span-4 space-y-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeExp === exp.id
                    ? 'bg-purple-600 shadow-lg shadow-purple-500/50'
                    : 'bg-slate-700/50 hover:bg-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    activeExp === exp.id ? 'bg-white text-purple-600' : 'bg-slate-600 text-white'
                  }`}>
                    {exp.id}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold mb-1 ${
                      activeExp === exp.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={`text-sm mb-1 ${
                      activeExp === exp.id ? 'text-purple-100' : 'text-gray-400'
                    }`}>
                      {exp.company}
                    </p>
                    <p className={`text-xs font-mono ${
                      activeExp === exp.id ? 'text-purple-200' : 'text-gray-500'
                    }`}>
                      {exp.period}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Details panel */}
          <div className="lg:col-span-8">
            {experiences.filter(exp => exp.id === activeExp).map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 animate-fadeIn"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 font-mono">{exp.period}</p>
                  </div>
                  <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">Active</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 font-mono text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
