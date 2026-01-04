'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TAP Cell Portal - IIIT Ranchi",
    problem: "Manual placement processes causing inefficiency: recruiters and students spending hours on paperwork, announcements getting lost, no centralized platform for 500+ students and multiple recruiters.",
    solution: "Engineered full-stack Training & Placement portal with monolithic backend using Node.js, Express, AWS S3, and JWT authentication. Built interactive dashboards, announcement modules, and mobile-responsive UI with React.js + Tailwind CSS.",
    impact: "50% reduction in manual overhead for placement workflows, automated recruiter-student communications, improved usability for 500+ students with secure scalable handling of placement records.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT", "Tailwind CSS", "Vercel"],
    category: "Full Stack",
    link: "https://github.com/devanshdek/tap-portal-frontend"
  },
  {
    id: 2,
    title: "Codify - CP Platform",
    problem: "No secure way to evaluate competitive programming code submissions in real-time: untrusted user code could compromise servers, concurrent submissions creating bottlenecks, evaluation delays affecting user experience.",
    solution: "Orchestrated full-stack competitive programming platform with Docker-based containerization to securely run code in isolated environments. Designed asynchronous job queue system using RabbitMQ for scalable concurrent submission handling.",
    impact: "95% improvement in execution security through containerized sandboxing, eliminated evaluation bottlenecks with async queue system, enabled real-time code execution and evaluation features for competitive programming contests.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Docker", "RabbitMQ", "JWT"],
    category: "Full Stack",
    link: "https://github.com/devanshdek/codify"
  },
  {
    id: 3,
    title: "Live Trading & Backtesting Strategy",
    problem: "Traders needed a comprehensive platform to develop, test, and execute trading strategies in real-time with accurate historical data analysis for backtesting and performance validation.",
    solution: "Built quantitative trading platform with live market data integration, advanced backtesting engine for historical strategy validation, and real-time trade execution capabilities with risk management controls.",
    impact: "Enables traders to validate strategies with historical data before live trading, provides real-time performance monitoring with comprehensive analytics and reporting for informed trading decisions.",
    tech: ["Python", "pandas", "NumPy", "MongoDB", "API Integration", "Data Analysis", "Backtesting Engine"],
    category: "Data Science",
    link: "https://github.com/devansh-dek/Live-Trading-and-Backtesting-Strategy"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Problems <span className="text-purple-400">Solved</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every project is a problem waiting to be solved. Here's how I approach challenges with creativity and technical expertise.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer ${
                selectedProject === project.id ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                {project.category}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 pr-24 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-red-400 font-semibold text-sm">Problem</span>
                  </div>
                  <p className="text-gray-400 text-sm pl-4">{project.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 font-semibold text-sm">Solution</span>
                  </div>
                  <p className="text-gray-400 text-sm pl-4">{project.solution}</p>
                </div>

                {selectedProject === project.id && (
                  <div className="animate-slideDown">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-400 font-semibold text-sm">Impact</span>
                    </div>
                    <p className="text-gray-400 text-sm pl-4 mb-4">{project.impact}</p>

                    <div className="flex flex-wrap gap-2 pl-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700 text-purple-300 rounded-lg text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
                  {selectedProject === project.id ? 'Show Less' : 'Show More'} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
