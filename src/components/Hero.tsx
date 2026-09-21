import React from 'react';
import { ArrowDownRight, BookOpen, Atom, Cpu, Award } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-academic-200 dark:border-academic-800">
      {/* Subtle Academic Grid & Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow: Admissions Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-academic-100 dark:bg-academic-800/80 border border-academic-300 dark:border-academic-700 text-xs font-semibold text-academic-700 dark:text-academic-300 mb-6 tracking-wide">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
          <span>Common Application Portfolio · Fall 2025 / 2026 Admissions</span>
          <span className="text-academic-400">|</span>
          <span className="text-amber-700 dark:text-amber-400 font-bold">St. John Baptist De La Salle</span>
        </div>

        {/* Primary Heading with Name & Intended Major */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-academic-950 dark:text-white tracking-[-0.02em] leading-tight">
            {profileData.personal.fullName}{' '}
            <span className="text-academic-400 dark:text-academic-600 font-light text-3xl sm:text-4xl md:text-5xl">
              ({profileData.personal.preferredName})
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Atom className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              Intended Major: {profileData.personal.intendedMajor}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-medium bg-academic-100 dark:bg-academic-800/70 text-academic-700 dark:text-academic-300 border border-academic-200 dark:border-academic-700">
              <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              {profileData.personal.concentration}
            </span>
          </div>

          {/* Core Motto - Prominently Displayed */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/10 via-academic-100/50 to-amber-500/5 dark:from-amber-950/30 dark:via-academic-900/60 dark:to-amber-950/10 border border-amber-200/80 dark:border-amber-800/60 shadow-sm relative">
            <div className="absolute top-3 left-4 text-amber-500/40 font-serif text-4xl select-none leading-none" aria-hidden="true">“</div>
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-academic-900 dark:text-amber-100 font-medium pl-5 pr-2 leading-snug">
              {profileData.personal.motto}
            </p>
          </div>

          {/* Personal Narrative / Summary Hook */}
          <p className="mt-6 text-base sm:text-lg text-academic-600 dark:text-academic-300 leading-normal max-w-3xl">
            {profileData.personal.bio}
          </p>

          {/* Quick Interactive Call to Actions with min-h-[44px] */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#research"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-academic-900 dark:bg-white text-white dark:text-academic-950 hover:bg-academic-800 dark:hover:bg-academic-100 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <span>Explore Research & Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="#academics"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-academic-900 text-academic-800 dark:text-academic-200 hover:bg-academic-100 dark:hover:bg-academic-800 border border-academic-300 dark:border-academic-700 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Academic Record & Honors</span>
            </a>
            <a
              href="#activities"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-academic-900 text-academic-800 dark:text-academic-200 hover:bg-academic-100 dark:hover:bg-academic-800 border border-academic-300 dark:border-academic-700 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Extracurricular Leadership</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
