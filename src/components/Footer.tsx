import React from 'react';
import { FlaskConical, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print py-12 border-t border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-950 text-xs text-academic-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <FlaskConical className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className="font-serif font-bold text-academic-800 dark:text-academic-200">
            {profileData.personal.fullName}
          </span>
          <span>·</span>
          <span>Common Application Supplement</span>
        </div>

        <div className="text-center text-academic-400">
          “From Atoms to Algorithms: Engineering Computational Solutions for Physical Realities”
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-academic-100 dark:bg-academic-900 text-academic-700 dark:text-academic-300 hover:bg-academic-200 dark:hover:bg-academic-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
