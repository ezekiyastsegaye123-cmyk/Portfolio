import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Printer, FlaskConical, Atom } from 'lucide-react';
import { profileData } from '../data/profileData';
import { spring, silk } from '../engine/motion';
import { cn } from '../lib/utils';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onPrintDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, onPrintDossier }) => {
  const navItems = [
    { href: "#overview", label: "Overview", index: "§ 00" },
    { href: "#research", label: "Research", index: "§ 01" },
    { href: "#academics", label: "Academics", index: "§ 02" },
    { href: "#activities", label: "Fieldwork", index: "§ 03" },
    { href: "#contact", label: "Contact", index: "§ 04" },
  ];

  return (
    <header data-slot="navbar" className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-academic-950/95 border-b border-academic-200 dark:border-academic-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Applicant Name & Academic Focus */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group rounded-xl p-1 -m-1 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
        >
          <div className="size-10 rounded-xl bg-academic-950 dark:bg-white text-white dark:text-academic-950 flex items-center justify-center font-serif font-bold text-lg shadow-sm transition-transform group-hover:scale-105 border border-amber-500/30">
            <FlaskConical className="size-5 text-amber-400 dark:text-amber-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base sm:text-lg text-academic-950 dark:text-white tracking-tight">
                {profileData.personal.fullName}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/20 hidden sm:inline-flex items-center gap-1">
                <Atom className="size-3 text-amber-600" /> Chemistry + CS
              </span>
            </div>
            <p className="text-[11px] font-mono text-academic-500">
              Common App Admissions Portfolio · Fall 2026 / 2027 · Rank 5/250
            </p>
          </div>
        </a>

        {/* Center: Navigation Links with Section Index Numbers & Logical Properties */}
        <nav className="hidden lg:flex items-center gap-4 text-xs font-mono font-medium text-academic-600 dark:text-academic-300" aria-label="Main Navigation">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              {...silk.hover}
              {...spring.press}
              href={item.href}
              className={cn(
                "min-h-[44px] inline-flex items-center px-2.5 py-1 rounded-lg transition-colors hover:text-amber-600 dark:hover:text-amber-400",
                "focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              )}
            >
              <span className="text-academic-400 me-1">{item.index}</span>
              <span>{item.label}</span>
            </motion.a>
          ))}
        </nav>

        {/* Right: Actions (Print / PDF Dossier + Dark Mode Toggle) */}
        <div className="flex items-center gap-2">
          <motion.button
            {...spring.press}
            {...silk.hover}
            onClick={onPrintDossier}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-academic-100 dark:bg-academic-900 text-academic-900 dark:text-academic-100 hover:bg-academic-200 dark:hover:bg-academic-800 transition-colors border border-academic-300 dark:border-academic-700 shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            title="Print Official Admissions PDF Dossier"
            aria-label="Print Official Admissions PDF Dossier"
          >
            <Printer className="size-4 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Print / PDF Dossier</span>
          </motion.button>

          <motion.button
            {...spring.press}
            {...silk.hover}
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-academic-600 dark:text-academic-300 hover:bg-academic-100 dark:hover:bg-academic-800 transition-colors border border-transparent hover:border-academic-200 dark:border-academic-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {darkMode ? <Sun className="size-5 text-amber-400" /> : <Moon className="size-5 text-academic-700" />}
          </motion.button>
        </div>

      </div>
    </header>
  );
};
