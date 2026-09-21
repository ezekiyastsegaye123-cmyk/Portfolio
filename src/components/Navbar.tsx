import React from 'react';
import { Moon, Sun, Printer, FlaskConical, Atom } from 'lucide-react';
import { profileData } from '../data/profileData';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onPrintDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, onPrintDossier }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-academic-950/90 border-b border-academic-200 dark:border-academic-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Applicant Name & Academic Focus */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group rounded-xl p-1 -m-1 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-academic-900 dark:bg-white text-white dark:text-academic-950 flex items-center justify-center font-serif font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
            <FlaskConical className="w-5 h-5 text-amber-400 dark:text-amber-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-academic-950 dark:text-white tracking-tight">
                {profileData.personal.fullName}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 font-medium border border-amber-200 dark:border-amber-800/60 hidden sm:inline-flex items-center gap-1">
                <Atom className="w-3 h-3" /> Chemistry + CS
              </span>
            </div>
            <p className="text-xs text-academic-500 dark:text-academic-400">
              Common App Admissions Dossier
            </p>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-academic-600 dark:text-academic-300" aria-label="Main Navigation">
          <a href="#overview" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-lg py-1 px-1.5 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
            At-a-Glance
          </a>
          <a href="#academics" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-lg py-1 px-1.5 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
            Academics & Honors
          </a>
          <a href="#research" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-lg py-1 px-1.5 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
            Research & Projects
          </a>
          <a href="#activities" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-lg py-1 px-1.5 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
            Activities
          </a>
          <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-lg py-1 px-1.5 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none">
            Contact
          </a>
        </nav>

        {/* Right: Actions (Print / PDF + Dark Mode Toggle) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrintDossier}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-100 hover:bg-academic-200 dark:hover:bg-academic-700 transition-all border border-academic-300 dark:border-academic-700 shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            title="Print or Save Official Admissions PDF Dossier"
            aria-label="Print or Save Official Admissions PDF Dossier"
          >
            <Printer className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Print / PDF Dossier</span>
          </button>

          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-academic-600 dark:text-academic-300 hover:bg-academic-100 dark:hover:bg-academic-800 transition-colors border border-transparent hover:border-academic-200 dark:hover:border-academic-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-academic-700" />}
          </button>
        </div>

      </div>
    </header>
  );
};
