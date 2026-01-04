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
    title: "AI-Powered Solution",
    problem: "Complex data processing bottleneck affecting system performance",
    solution: "Implemented machine learning pipeline with optimized algorithms",
    impact: "300% performance improvement, reduced processing time by 75%",
    tech: ["Python", "TensorFlow", "Docker", "AWS"],
    category: "Machine Learning",
    link: "#"
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    problem: "Business teams lacked visibility into key metrics",
    solution: "Built interactive dashboard with real-time data streaming",
    impact: "Enabled data-driven decisions, 40% faster response time",
    tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    category: "Full Stack",
    link: "#"
  },
  {
    id: 3,
    title: "Automated Testing Framework",
    problem: "Manual testing consuming 40% of development time",
    solution: "Created comprehensive testing suite with CI/CD integration",
    impact: "90% reduction in bugs, 50% faster deployment cycle",
    tech: ["Jest", "Cypress", "GitHub Actions", "TypeScript"],
    category: "DevOps",
    link: "#"
  },
  {
    id: 4,
    title: "Microservices Architecture",
    problem: "Monolithic app causing scalability and maintenance issues",
    solution: "Redesigned system into containerized microservices",
    impact: "5x scalability, 60% reduction in downtime",
    tech: ["Docker", "Kubernetes", "Go", "Redis"],
    category: "Architecture",
    link: "#"
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
