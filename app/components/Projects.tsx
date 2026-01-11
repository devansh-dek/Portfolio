'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  summary: string;
  outcome: string;
  tech: string[];
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TAP Cell Portal - IIIT Ranchi",
    summary: "Placement workflows were email-driven and slow for 500+ students and recruiters.",
    outcome: "Built monolith with authenticated dashboards and file workflows; cut manual steps and centralized communication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT", "Tailwind CSS", "Vercel"],
    category: "Full Stack",
    link: "https://github.com/devanshdek/tap-portal-frontend"
  },
  {
    id: 2,
    title: "Codify - CP Platform",
    summary: "Needed safe, parallel evaluation for untrusted contest code.",
    outcome: "Docker sandboxes + RabbitMQ workers for concurrent runs; async queue removed bottlenecks and isolated failures.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Docker", "RabbitMQ", "JWT"],
    category: "Full Stack",
    link: "https://github.com/devanshdek/codify"
  },
  {
    id: 3,
    title: "Live Trading & Backtesting Strategy",
    summary: "Strategies needed the same interface for simulation and live trades.",
    outcome: "Unified engine for historical backtests and live execution with risk checks; actionable analytics for decisions.",
    tech: ["Python", "pandas", "NumPy", "MongoDB", "API Integration", "Data Analysis", "Backtesting Engine"],
    category: "Data Science",
    link: "https://github.com/devansh-dek/Live-Trading-and-Backtesting-Strategy"
  }
  ,
  {
    id: 4,
    title: "Distributed Task Manager",
    summary: "Task spikes risked drops and duplicates across services.",
    outcome: "Kafka-backed queue with idempotent workers, DLQ, and exponential backoff; Dockerised for reproducibility.",
    tech: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Kafka", "Docker", "Microservices", "REST"],
    category: "Distributed Systems",
    link: "https://github.com/devansh-dek/Distributed-Task-Manager"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-slate-950 py-16 px-4 sm:px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-8">
          <div className="text-xs font-mono text-cyan-200">work</div>
          <h2 className="text-3xl font-semibold text-white tracking-tight">Shipping reliable systems end-to-end.</h2>
          <p className="text-slate-400 max-w-2xl">
            Concise case studies: the problem, the outcome, and the tooling that made it reliable under load.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                filter === category
                  ? 'border-cyan-500 text-cyan-200 bg-slate-900'
                  : 'border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.category}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-300 hover:text-cyan-200"
                  >
                    Repo ↗
                  </a>
                )}
              </div>

              <div className="grid gap-2 text-sm text-slate-200">
                <div className="flex gap-2">
                  <span className="text-slate-500 font-mono">Problem</span>
                  <span className="text-slate-300">{project.summary}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500 font-mono">Outcome</span>
                  <span className="text-slate-300">{project.outcome}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
