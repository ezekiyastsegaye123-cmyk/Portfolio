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
    <section data-slot="academics-section" id="academics" className="py-16 md:py-24 border-b border-ink/15 bg-paper dark:bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-ink/15">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-specimen mb-1 min-h-[44px]">
              <span>§ 02</span>
              <span>·</span>
              <span>SCHOLASTIC RECORD & COMPETITIVE DISTINCTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#080812] dark:text-ink tracking-[-0.01em] leading-snug">
              Academic Foundation & Honors
            </h2>
            <p className="mt-3 text-ink/70 text-sm sm:text-base leading-relaxed">
              Sustained top-tier scholarship at St. John Baptist De La Salle Catholic School — maintaining an unweighted 3.93 GPA, ranking in the top 2.0% of the graduating class, and earning international & national scientific accolades.
            </p>
          </div>
          <div className="text-xs font-mono text-ink/60 flex items-center gap-2 min-h-[44px]">
            <GraduationCap className="size-4 text-specimen" />
            <span>Gap Year Scholar · Class of 2025</span>
          </div>
        </div>

        {/* Two-Column Academic Foundation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Institution & Quantitative Record (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-none bg-data-bg dark:bg-[#0d0d1a] border-y border-r border-ink/15 border-l-4 border-l-specimen shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-ink/15 font-mono text-xs min-h-[44px]">
                <span className="font-semibold text-specimen uppercase">
                  [OFFICIAL TRANSCRIPT SUMMARY]
                </span>
                <span className="text-ink/60">{education.dates}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#080812] dark:text-white mt-4">
                {education.institution}
              </h3>
              <p className="text-xs font-mono text-ink/60 mt-1">
                {education.location} · {education.type} · {education.status}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
                
                {/* Class Rank */}
                <div className="sm:col-span-2 p-4 rounded-none bg-paper dark:bg-[#080812] border border-ink/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink/40 block min-h-[22px]">
                    Class Standing
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[#080812] dark:text-white mt-1">
                    {education.rank} / {education.rankTotal}
                  </div>
                  <span className="text-xs font-mono font-bold text-specimen mt-1 block">
                    Top 2.0% Unweighted
                  </span>
                </div>

                {/* Cumulative GPA */}
                <div className="sm:col-span-1 p-4 rounded-none bg-paper dark:bg-[#080812] border border-ink/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink/40 block min-h-[22px]">
                    Cumulative GPA
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[#080812] dark:text-white mt-1">
                    {education.gpa} / {education.gpaScale}
                  </div>
                  <span className="text-xs font-mono font-bold text-specimen mt-1 block">
                    Unweighted Honor Roll
                  </span>
                </div>

                {/* National Exam */}
                <div className="sm:col-span-1 p-4 rounded-none bg-paper dark:bg-[#080812] border border-ink/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink/40 block min-h-[22px]">
                    National Leaving Exam
                  </span>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[#080812] dark:text-white mt-1">
                    558 / 600
                  </div>
                  <span className="text-xs font-mono font-bold text-reagent mt-1 block">
                    Outstanding Achiever
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ink/15 flex items-center gap-2 text-xs font-mono text-ink/60 min-h-[44px]">
              <ShieldCheck className="size-4 text-reagent shrink-0" />
              <span>Verified school records · Official Secondary Leaving Examination Certificate</span>
            </div>
          </div>

          {/* Academic & Scientific Rigor (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-none bg-data-bg dark:bg-[#0d0d1a] border border-ink/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-ink/15 font-mono text-xs text-ink/60 min-h-[44px]">
                <span className="font-semibold text-specimen uppercase flex items-center gap-1.5">
                  <Atom className="size-3.5" />
                  CORE PILLARS OF PREPARATION
                </span>
                <span>4 AREAS</span>
              </div>

              <div className="mt-4 space-y-3">
                {coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-none bg-paper dark:bg-[#080812] border border-ink/15 min-h-[44px]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#080812] dark:text-white">
                      <span>{comp.area}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-data-bg dark:bg-[#0d0d1a] text-ink/60">
                        {comp.badge}
                      </span>
                    </div>
                    <div className="text-[11px] text-ink/60 mt-1 leading-relaxed">
                      {comp.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ink/15 text-[11px] font-mono text-ink/60 min-h-[44px] flex items-center">
              Directly translates macroscopic chemistry theory into computational algorithms.
            </div>
          </div>

        </div>

        <div className="w-24 h-px bg-specimen/40 my-12" />

        {/* Honors & Distinctions Cards Styled as Official Citations */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-ink/15 min-h-[44px]">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#080812] dark:text-ink flex items-center gap-2">
              <Award className="size-5 text-specimen" />
              <span>Honors & Competitive Distinctions</span>
            </h3>
            <span className="text-xs font-mono text-ink/40">
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
                isIntl && "bg-catalyst/10 text-catalyst border-catalyst/30",
                isNat && "bg-specimen/10 text-specimen border-specimen/30",
                isState && "bg-reagent/10 text-reagent border-reagent/30",
                !isIntl && !isNat && !isState && "bg-data-bg text-ink border-ink/15 dark:bg-[#0d0d1a] dark:text-ink"
              );

              return (
                <div
                  key={idx}
                  className="p-6 rounded-none bg-paper dark:bg-[#0d0d1a] border-y border-r border-ink/15 border-l-2 border-l-catalyst shadow-sm hover:border-specimen/80 transition-all flex flex-col justify-between min-h-[44px]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 min-h-[44px]">
                      <span className={badgeClass}>
                        {honor.scope} Honor
                      </span>
                      <span className="text-xs font-mono text-ink/60">
                        {honor.grade}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-[#080812] dark:text-white">
                      {honor.title}
                    </h4>

                    {honor.score && (
                      <div className="mt-1 text-sm font-mono font-bold text-specimen min-h-[22px] flex items-center">
                        {honor.score}
                      </div>
                    )}

                    <p className="mt-3 text-xs sm:text-sm text-ink/70 leading-relaxed font-body">
                      {honor.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-data-bg dark:border-ink/15 flex items-center justify-between text-[10px] font-mono text-ink/40 min-h-[44px]">
                    <span>CITATION № 0{idx + 1}</span>
                    <span className="text-reagent flex items-center gap-1 font-semibold">
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

