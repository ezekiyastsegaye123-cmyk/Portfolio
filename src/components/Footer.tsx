import React from 'react';
import { FlaskConical, ArrowUp, Compass } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-slot="footer" className="no-print py-12 border-t border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-950 text-xs text-academic-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-academic-200/80 dark:border-academic-800/80">
          
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 flex items-center justify-center border border-amber-500/30">
              <FlaskConical className="size-4" />
            </div>
            <div>
              <div className="font-serif font-bold text-sm text-academic-900 dark:text-white">
                {profileData.personal.fullName} ({profileData.personal.preferredName})
              </div>
              <div className="text-[11px] text-academic-500">
                Common Application Supplement · Fall 2025 / 2026 Admissions
              </div>
            </div>
          </div>

          <div className="text-center font-serif italic text-xs text-academic-600 dark:text-academic-400 max-w-md">
            “{profileData.personal.motto}”
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-academic-100 dark:bg-academic-900 text-academic-700 dark:text-academic-300 hover:bg-academic-200 dark:hover:bg-academic-800 transition-colors border border-academic-300 dark:border-academic-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            <span>Back to Masthead</span>
            <ArrowUp className="size-3.5" />
          </button>

        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-academic-400">
          <div>
            COORDINATES: 09°01'55" N, 38°44'49" E · ADDIS ABABA, ETHIOPIA · ST. JOHN BAPTIST DE LA SALLE
          </div>
          <div>
            COMPILED IN TYPESCRIPT & REACT · DESIGNED AS AN INTERACTIVE SCIENTIFIC ARCHIVE
          </div>
        </div>

      </div>
    </footer>
  );
};
