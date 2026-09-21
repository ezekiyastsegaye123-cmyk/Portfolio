import React, { useState } from 'react';
import { FlaskConical, ArrowUpRight, FileText } from 'lucide-react';
import { profileData, Project } from '../data/profileData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Computational Chemistry', 'Environmental ML', 'EdTech & Systems', 'Civic Tech'];

  const filteredProjects = selectedCategory === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="research" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800 bg-academic-50/50 dark:bg-academic-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5" />
              Scientific Inquiry & Engineered Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academic-950 dark:text-white mt-1 tracking-[-0.01em] leading-snug">
              Research & Computational Projects
            </h2>
            <p className="mt-3 text-academic-600 dark:text-academic-300 text-sm sm:text-base leading-normal">
              Applying kinetic modeling, chemical thermodynamics, and distributed algorithms to physical reality — from closed-loop autothermal biomass pyrolysis to space-weather drought forecasting and low-latency classroom platforms.
            </p>
          </div>

          {/* Category Filter Pills with Touch-Friendly Heights */}
          <div 
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-academic-100 dark:bg-academic-900 border border-academic-200 dark:border-academic-800 self-start md:self-end"
            role="tablist"
            aria-label="Project Categories"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-academic-800 text-academic-950 dark:text-white shadow-sm border border-academic-200 dark:border-academic-700'
                    : 'text-academic-600 dark:text-academic-400 hover:text-academic-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                    <FlaskConical className="w-3 h-3" /> {project.category}
                  </span>
                  <span className="text-xs text-academic-500 font-mono">
                    {project.timeline}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl font-serif font-bold text-academic-950 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-academic-500 dark:text-academic-400 mt-0.5">
                  {project.role}
                </p>

                {/* Subtitle / Pitch */}
                <p className="mt-3 text-sm text-academic-600 dark:text-academic-300 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Metrics / Key Outcomes Strip */}
                <div className="mt-4 pt-4 border-t border-academic-100 dark:border-academic-800/80 space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-academic-700 dark:text-academic-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-academic-100 dark:bg-academic-800/80 text-academic-700 dark:text-academic-300 border border-academic-200/60 dark:border-academic-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-1 text-[11px] font-mono text-academic-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons with 44px min height */}
              <div className="mt-6 pt-4 border-t border-academic-100 dark:border-academic-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded-lg px-2 py-1 -mx-2"
                >
                  <span>Explore Case Study & Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {project.links?.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Technical Paper (PDF)</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
