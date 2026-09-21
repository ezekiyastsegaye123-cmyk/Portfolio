import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, Cpu, FlaskConical, Sparkles, Download } from 'lucide-react';
import { Project } from '../data/profileData';
import { silk, spring, motionKeywords } from '../engine/motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          data-slot="project-modal"
          {...motionKeywords.backdropFade}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#080812]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div 
            {...motionKeywords.modalSilk}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-none rounded-tl-3xl bg-paper dark:bg-[#0d0d1a] border border-ink/15 shadow-2xl p-6 sm:p-8 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button with >= 44x44px touch target */}
            <motion.button
              {...silk.press}
              onClick={onClose}
              aria-label="Close project modal"
              className="absolute top-4 end-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm text-ink/40 hover:text-[#0d0d1a] dark:hover:text-white hover:bg-ink dark:hover:bg-ink/15 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
            >
              <X className="size-5" />
            </motion.button>

            {/* Eyebrow & Category */}
            <div className="flex flex-wrap items-center gap-2 mb-3 pe-12">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-specimen/5 dark:bg-specimen/10 text-specimen border border-specimen/30 flex items-center gap-1">
                <FlaskConical className="size-3" /> {project.category}
              </span>
              <span className="text-xs text-ink/40 font-mono">
                {project.timeline}
              </span>
              <span className="text-ink/25 dark:text-ink/40">·</span>
              <span className="text-xs font-medium text-ink/70 dark:text-ink/25">
                {project.role}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-display font-bold text-[#080812] dark:text-white leading-snug tracking-[-0.01em]">
              {project.title}
            </h3>

            {project.advisor && (
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-reagent/10 text-reagent border border-reagent/30 text-xs font-mono font-bold">
                <span>TECHNICAL ADVISORY: {project.advisor}</span>
              </div>
            )}

            <p className="mt-2 text-sm sm:text-base text-specimen font-medium">
              {project.subtitle}
            </p>

            {/* Technical Paper Download Banner if present */}
            {project.links?.paper && (
              <div className="mt-6 p-4 rounded-none border-l-4 border-specimen bg-gradient-to-r from-specimen/10 via-specimen/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-sm bg-specimen text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-specimen block">
                      Original Research Report Available
                    </span>
                    <span className="text-xs text-ink/70 dark:text-ink/25">
                      Full 16-page LaTeX theoretical framework · Advised by Chemical Society of Ethiopia (CSE)
                    </span>
                  </div>
                </div>
                <motion.a
                  {...spring.press}
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-sm text-xs font-bold bg-[#080812] dark:bg-white text-white dark:text-[#080812] hover:bg-ink/15 transition-all shrink-0 shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                >
                  <Download className="size-3.5 text-specimen" />
                  <span>Read Full Paper (PDF)</span>
                </motion.a>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-none border-l-2 border-specimen/20 bg-ink/15 dark:bg-ink/20 border-t border-r border-b border-t-transparent border-r-transparent border-b-transparent">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1.5 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#c8553d]" />
                  The Scientific / Real-World Problem
                </h4>
                <p className="text-xs sm:text-sm text-ink/70 dark:text-ink/25 leading-relaxed font-body">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-none border-l-2 border-specimen/20 bg-ink/15 dark:bg-ink/20 border-t border-r border-b border-t-transparent border-r-transparent border-b-transparent">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1.5 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-reagent" />
                  Engineered Solution & Methodology
                </h4>
                <p className="text-xs sm:text-sm text-ink/70 dark:text-ink/25 leading-relaxed font-body">
                  {project.solution}
                </p>
              </div>

              <div className="p-4 rounded-none border-l-2 border-specimen/20 bg-specimen/5 dark:bg-specimen/10 border-t border-r border-b border-t-transparent border-r-transparent border-b-transparent">
                <h4 className="text-xs font-bold uppercase tracking-wider text-specimen mb-1.5 flex items-center gap-1.5">
                  <Cpu className="size-3.5 text-specimen" />
                  Computational & Algorithmic Integration
                </h4>
                <p className="text-xs sm:text-sm text-ink/70 dark:text-ink/25 leading-relaxed font-body">
                  {project.computationalAngle}
                </p>
              </div>
            </div>

            {/* Highlights & Key Outcomes */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-3 flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-specimen" />
                Key Technical Milestones & Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/70 dark:text-ink/25 font-body">
                    <CheckCircle2 className="size-4 text-reagent shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 pt-4 border-t border-ink/15">
              <span className="text-xs font-semibold text-ink/40 block mb-2">
                Scientific & Technical Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-sm text-xs font-mono bg-ink dark:bg-ink/15 text-ink/15 dark:text-ink/25 border border-ink/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
