import React from 'react';
import { X, ExternalLink, FileText, CheckCircle2, Cpu, FlaskConical, Sparkles, Download, Layers } from 'lucide-react';
import { Project } from '../data/profileData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-academic-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-academic-500 hover:text-academic-900 dark:hover:text-white hover:bg-academic-100 dark:hover:bg-academic-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Eyebrow & Category */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
            <FlaskConical className="w-3 h-3" /> {project.category}
          </span>
          <span className="text-xs text-academic-500 font-mono">
            {project.timeline}
          </span>
          <span className="text-academic-300 dark:text-academic-700">·</span>
          <span className="text-xs font-medium text-academic-600 dark:text-academic-300">
            {project.role}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-academic-950 dark:text-white leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-amber-800 dark:text-amber-200/90 font-medium">
          {project.subtitle}
        </p>

        {/* Technical Paper Download Banner if present */}
        {project.links?.paper && (
          <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 dark:via-amber-900/20 dark:to-transparent border border-amber-300 dark:border-amber-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block">
                  Original Research Report Available
                </span>
                <span className="text-xs text-academic-600 dark:text-academic-300">
                  Full 10-page theoretical framework & heat/mass balance calculations
                </span>
              </div>
            </div>
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-academic-950 dark:bg-white text-white dark:text-academic-950 hover:bg-academic-800 dark:hover:bg-academic-100 transition-all shrink-0 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
              <span>Read Full Paper (PDF)</span>
            </a>
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-academic-700 dark:text-academic-300 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Scientific / Real-World Problem
            </h4>
            <p className="text-xs sm:text-sm text-academic-600 dark:text-academic-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-academic-700 dark:text-academic-300 mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Engineered Solution & Methodology
            </h4>
            <p className="text-xs sm:text-sm text-academic-600 dark:text-academic-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Computational & Algorithmic Integration
            </h4>
            <p className="text-xs sm:text-sm text-academic-700 dark:text-academic-200 leading-relaxed">
              {project.computationalAngle}
            </p>
          </div>
        </div>

        {/* Highlights & Key Outcomes */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-academic-500 dark:text-academic-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Key Technical Milestones & Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-academic-700 dark:text-academic-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-4 border-t border-academic-100 dark:border-academic-800">
          <span className="text-xs font-semibold text-academic-500 dark:text-academic-400 block mb-2">
            Scientific & Technical Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-200 border border-academic-200 dark:border-academic-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
