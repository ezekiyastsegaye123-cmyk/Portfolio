import React from 'react';
import { FlaskConical, ArrowUp, Compass } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-slot="footer" className="no-print py-12 border-t border-ink/10 bg-paper dark:bg-paper text-xs text-neutral font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-ink/15">
          
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-none bg-specimen/15 text-specimen flex items-center justify-center border border-specimen/30">
              <FlaskConical className="size-4" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-ink">
                {profileData.personal.fullName} ({profileData.personal.preferredName})
              </div>
              <div className="text-[11px] text-neutral">
                Common Application Supplement · Fall 2026 / 2027 Admissions
              </div>
            </div>
          </div>

          <div className="text-center font-display italic text-xs text-ink/70 max-w-md">
            “{profileData.personal.motto}”
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-data-bg dark:bg-data-bg text-ink/70 hover:bg-ink/15 transition-colors border border-ink/25 focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
          >
            <span>Back to Masthead</span>
            <ArrowUp className="size-3.5" />
          </button>

        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-ink/40">
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
