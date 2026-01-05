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
    title: "Software Engineer Intern",
    company: "Globetrotter Finance",
    period: "March 2025 – August 2025",
    description: "Designed and developed LLM-powered AI automation systems and production platforms for fintech services",
    achievements: [
      "Designed LLM-powered AI workflow automation system for fintech services, delivering 8000+ lines of production-grade code in Python and JavaScript",
      "Redesigned production Vue.js platform using Clean Architecture, improving responsiveness, load time, and UX for 100+ active users, increasing retention by 20%",
      "Implemented scalable REST and gRPC APIs in Python with Protocol Buffers, containerized with Docker on Linux for microservice communication",
      "Operationalized observability stack with Logstash, AWS CloudWatch, and Grafana, enabling proactive monitoring and reducing MTTR by 20%"
    ],
    tech: ["Python", "JavaScript", "Vue.js", "gRPC", "Protocol Buffers", "Docker", "Linux", "AWS CloudWatch", "Logstash", "Grafana", "Clean Architecture"]
  },
  {
    id: 2,
    title: "President",
    company: "House of Geeks - IIIT Ranchi Coding Club",
    period: "2024 - Present",
    description: "Leading technical initiatives, mentorship programs, and event organization for the college coding community",
    achievements: [
      "Led technical initiatives and mentorship for 750+ students",
      "Organized competitive programming contests and workshops",
      "Built collaborative learning environment fostering algorithmic thinking"
    ],
    tech: ["Leadership", "Mentorship", "Community Building", "Event Management"]
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number>(1);

  return (
    <section id="experience" className="min-h-screen bg-slate-800 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Journey of <span className="text-purple-400">Growth</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Every experience is a stepping stone to becoming a better problem solver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Timeline sidebar */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300 text-sm sm:text-base ${
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
