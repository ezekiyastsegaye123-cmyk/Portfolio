import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, BookOpen, Atom, Cpu, Award } from 'lucide-react';
import { profileData } from '../data/profileData';
import { silk, spring } from '../engine/motion';

export const Hero: React.FC = () => {
  return (
    <section data-slot="hero" id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-academic-200 dark:border-academic-800">
      {/* Subtle Academic Grid & Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20" aria-hidden="true">
        <div className="absolute -top-32 -start-32 size-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute top-1/2 -end-32 size-96 rounded-full bg-amber-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Staggered Container */}
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          {/* Top Eyebrow: Admissions Header */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-academic-100 dark:bg-academic-800/80 border border-academic-300 dark:border-academic-700 text-xs font-semibold text-academic-700 dark:text-academic-300 mb-6 tracking-wide"
          >
            <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" />
            <span>Common Application Portfolio · Fall 2025 / 2026 Admissions</span>
            <span className="text-academic-400">|</span>
            <span className="text-amber-700 dark:text-amber-400 font-bold">St. John Baptist De La Salle</span>
          </motion.div>

          {/* Primary Heading with Name & Intended Major */}
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-academic-950 dark:text-white tracking-[-0.02em] leading-tight"
          >
            {profileData.personal.fullName}{' '}
            <span className="text-academic-400 dark:text-academic-600 font-light text-3xl sm:text-4xl md:text-5xl">
              ({profileData.personal.preferredName})
            </span>
          </motion.h1>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Atom className="size-4 text-amber-600 dark:text-amber-400" />
              Intended Major: {profileData.personal.intendedMajor}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-medium bg-academic-100 dark:bg-academic-800/70 text-academic-700 dark:text-academic-300 border border-academic-200 dark:border-academic-700">
              <Cpu className="size-4 text-amber-600 dark:text-amber-400" />
              {profileData.personal.concentration}
            </span>
          </motion.div>

          {/* Core Motto - Prominently Displayed */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/10 via-academic-100/50 to-amber-500/5 dark:from-amber-950/30 dark:via-academic-900/60 dark:to-amber-950/10 border border-amber-200/80 dark:border-amber-800/60 shadow-sm relative"
          >
            <div className="absolute top-3 start-4 text-amber-500/40 font-serif text-4xl select-none leading-none" aria-hidden="true">“</div>
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-academic-900 dark:text-amber-100 font-medium ps-5 pe-2 leading-snug">
              {profileData.personal.motto}
            </p>
          </motion.div>

          {/* Personal Narrative / Summary Hook */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-6 text-base sm:text-lg text-academic-600 dark:text-academic-300 leading-normal max-w-3xl"
          >
            {profileData.personal.bio}
          </motion.p>

          {/* Quick Interactive Call to Actions with Silk/Spring Seeds */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              {...spring.press}
              {...silk.hover}
              href="#research"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-academic-900 dark:bg-white text-white dark:text-academic-950 hover:bg-academic-800 dark:hover:bg-academic-100 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <span>Explore Research & Projects</span>
              <ArrowDownRight className="size-4" />
            </motion.a>
            <motion.a
              {...spring.press}
              {...silk.hover}
              href="#academics"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-academic-900 text-academic-800 dark:text-academic-200 hover:bg-academic-100 dark:hover:bg-academic-800 border border-academic-300 dark:border-academic-700 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <Award className="size-4 text-amber-600 dark:text-amber-400" />
              <span>Academic Record & Honors</span>
            </motion.a>
            <motion.a
              {...spring.press}
              {...silk.hover}
              href="#activities"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-academic-900 text-academic-800 dark:text-academic-200 hover:bg-academic-100 dark:hover:bg-academic-800 border border-academic-300 dark:border-academic-700 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <BookOpen className="size-4 text-amber-600 dark:text-amber-400" />
              <span>Extracurricular Leadership</span>
            </motion.a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
