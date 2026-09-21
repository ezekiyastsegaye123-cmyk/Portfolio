import React from 'react';
import { Award, ShieldCheck, BookCheck, GraduationCap, CheckCircle2, BookmarkCheck, Atom } from 'lucide-react';
import { profileData } from '../data/profileData';
import { cn } from '../lib/utils';

export const AcademicsSection: React.FC = () => {
  const { education } = profileData;

  const coreCompetencies = [
    { 
      area: "Physical & Analytical Chemistry", 
      detail: "Stoichiometry, Reaction Thermodynamics, Reaction Enthalpy, Volumetric & Gravimetric Titration Protocols",
      badge: "Laboratory & Quantitative"
    },
    { 
      area: "Calculus & Pure Mathematics", 
      detail: "Differential & Integral Calculus, Macroscopic Kinetic Rate Laws, Non-Linear Optimization Problems",
      badge: "Mathematical Foundations"
    },
    { 
      area: "Computational & Algorithmic Science", 
      detail: "Scientific Python (NumPy, Pandas, Scikit-learn), C++ Memory Management, Discrete Data Structures",
      badge: "Scientific Computing"
    },
    { 
      area: "Chemical Kinetics & Reaction Engineering", 
      detail: "Macromolecular Lignocellulosic Cleavage, Non-Oxidative Pyrolysis, Arrhenius Parameters & Semyonov Kinetics",
      badge: "Theoretical Modeling"
    },
  ];

  return (
    <section data-slot="academics-section" id="academics" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-950 archival-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-academic-200/80 dark:border-academic-800/80">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
              <span>§ 02</span>
              <span>·</span>
              <span>SCHOLASTIC RECORD & COMPETITIVE DISTINCTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-academic-950 dark:text-white tracking-[-0.01em] leading-snug">
              Academic Foundation & Honors
            </h2>
            <p className="mt-3 text-academic-700 dark:text-academic-300 text-sm sm:text-base leading-relaxed">
              Sustained top-tier scholarship at St. John Baptist De La Salle Catholic School — maintaining an unweighted 3.93 GPA, ranking in the top 2.0% of the graduating class, and earning international & national scientific accolades.
            </p>
          </div>
          <div className="text-xs font-mono text-academic-500 flex items-center gap-2">
            <GraduationCap className="size-4 text-amber-600 dark:text-amber-400" />
            <span>Gap Year Scholar · Class of 2025</span>
          </div>
        </div>

        {/* Two-Column Academic Foundation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Institution & Quantitative Record (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-academic-50/70 dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-academic-200/80 dark:border-academic-800/80 font-mono text-xs">
                <span className="font-semibold text-amber-700 dark:text-amber-400 uppercase">
                  [OFFICIAL TRANSCRIPT SUMMARY]
                </span>
                <span className="text-academic-500">{education.dates}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-academic-950 dark:text-white mt-4">
                {education.institution}
              </h3>
              <p className="text-xs font-mono text-academic-600 dark:text-academic-400 mt-1">
                {education.location} · {education.type} · {education.status}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Class Rank */}
                <div className="p-4 rounded-xl bg-white dark:bg-academic-950 border border-academic-200 dark:border-academic-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-academic-400 block">
                    Class Standing
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    {education.rank} / {education.rankTotal}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 mt-1 block">
                    Top 2.0% Unweighted
                  </span>
                </div>

                {/* Cumulative GPA */}
                <div className="p-4 rounded-xl bg-white dark:bg-academic-950 border border-academic-200 dark:border-academic-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-academic-400 block">
                    Cumulative GPA
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    {education.gpa} / {education.gpaScale}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 mt-1 block">
                    Unweighted Honor Roll
                  </span>
                </div>

                {/* National Exam */}
                <div className="p-4 rounded-xl bg-white dark:bg-academic-950 border border-academic-200 dark:border-academic-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-academic-400 block">
                    National Leaving Exam
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    558 / 600
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                    Outstanding Achiever
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-academic-200/80 dark:border-academic-800/80 flex items-center gap-2 text-xs font-mono text-academic-600 dark:text-academic-400">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>Verified school records · Official Secondary Leaving Examination Certificate</span>
            </div>
          </div>

          {/* Academic & Scientific Rigor (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-academic-50/70 dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-academic-200/80 dark:border-academic-800/80 font-mono text-xs text-academic-500">
                <span className="font-semibold text-amber-700 dark:text-amber-400 uppercase flex items-center gap-1.5">
                  <Atom className="size-3.5" />
                  CORE PILLARS OF PREPARATION
                </span>
                <span>4 AREAS</span>
              </div>

              <div className="mt-4 space-y-3">
                {coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-academic-950 border border-academic-200/80 dark:border-academic-800">
                    <div className="flex items-center justify-between text-xs font-bold text-academic-950 dark:text-white">
                      <span>{comp.area}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-academic-100 dark:bg-academic-800 text-academic-600 dark:text-academic-400">
                        {comp.badge}
                      </span>
                    </div>
                    <div className="text-[11px] text-academic-600 dark:text-academic-400 mt-1 leading-relaxed">
                      {comp.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-academic-200/80 dark:border-academic-800/80 text-[11px] font-mono text-academic-500">
              Directly translates macroscopic chemistry theory into computational algorithms.
            </div>
          </div>

        </div>

        {/* Honors & Distinctions Cards Styled as Official Citations */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-academic-200/80 dark:border-academic-800/80">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-academic-950 dark:text-white flex items-center gap-2">
              <Award className="size-5 text-amber-600 dark:text-amber-400" />
              <span>Honors & Competitive Distinctions</span>
            </h3>
            <span className="text-xs font-mono text-academic-400">
              4 VERIFIED AWARDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.honors.map((honor, idx) => {
              const isIntl = honor.scope === 'International';
              const isNat = honor.scope === 'National';
              const isState = honor.scope === 'State/Regional';

              const badgeClass = cn(
                "text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md border uppercase tracking-wider",
                isIntl && "bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-500/30",
                isNat && "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30",
                isState && "bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/30",
                !isIntl && !isNat && !isState && "bg-academic-100 text-academic-800 border-academic-300 dark:bg-academic-800 dark:text-academic-200 dark:border-academic-700"
              );

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={badgeClass}>
                        {honor.scope} Honor
                      </span>
                      <span className="text-xs font-mono text-academic-500">
                        {honor.grade}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-academic-950 dark:text-white">
                      {honor.title}
                    </h4>

                    {honor.score && (
                      <div className="mt-1 text-sm font-mono font-bold text-amber-700 dark:text-amber-400">
                        {honor.score}
                      </div>
                    )}

                    <p className="mt-3 text-xs sm:text-sm text-academic-700 dark:text-academic-300 leading-relaxed font-sans">
                      {honor.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-academic-100 dark:border-academic-800/80 flex items-center justify-between text-[10px] font-mono text-academic-400">
                    <span>CITATION № 0{idx + 1}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                      <BookmarkCheck className="size-3" /> Certified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
