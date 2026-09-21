import React from 'react';
import { Award, ShieldCheck, BookCheck } from 'lucide-react';
import { profileData } from '../data/profileData';
import { cn } from '../lib/utils';

export const AcademicsSection: React.FC = () => {
  const { education } = profileData;

  const coreCompetencies = [
    { area: "Physical & Analytical Chemistry", detail: "Stoichiometry, Reaction Thermodynamics, Reaction Enthalpy, Titration Protocols" },
    { area: "Calculus & Pure Mathematics", detail: "Differential & Integral Calculus, Kinetic Rate Laws, Optimization Problems" },
    { area: "Computational & Algorithmic Science", detail: "Python Scientific Stack (NumPy, Pandas, Scikit-learn), C++ Memory Management" },
    { area: "Chemical Kinetics & Thermodynamics", detail: "Macromolecular Decomposition, Non-Oxidative Pyrolysis, Arrhenius Parameters" },
  ];

  return (
    <section data-slot="academics-section" id="academics" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Official Common App Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academic-950 dark:text-white mt-1">
            Academic Distinction & Honors
          </h2>
          <p className="mt-3 text-academic-600 dark:text-academic-300 text-sm sm:text-base leading-relaxed">
            Sustained top-tier scholarship at St. John Baptist De La Salle Catholic School, maintaining a 3.93 unweighted GPA, ranking in the top 2.0% of the graduating class, and earning international & national scientific accolades.
          </p>
        </div>

        {/* Two-Column Academic Foundation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Institution & Quantitative Record (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300 border border-academic-300 dark:border-academic-700">
                  {education.type}
                </span>
                <span className="text-xs text-academic-500">{education.dates}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-4">
                {education.institution}
              </h3>
              <p className="text-xs text-academic-500 dark:text-academic-400 mt-1">
                {education.location} · {education.status}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Class Rank */}
                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
                  <span className="text-xs font-semibold text-academic-500 dark:text-academic-400 block">
                    Class Standing
                  </span>
                  <div className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    {education.rank} / {education.rankTotal}
                  </div>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5 block">
                    Top 2.0% Unweighted
                  </span>
                </div>

                {/* Cumulative GPA */}
                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
                  <span className="text-xs font-semibold text-academic-500 dark:text-academic-400 block">
                    Cumulative GPA
                  </span>
                  <div className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    {education.gpa} / {education.gpaScale}
                  </div>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5 block">
                    Unweighted Honor Roll
                  </span>
                </div>

                {/* National Exam */}
                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
                  <span className="text-xs font-semibold text-academic-500 dark:text-academic-400 block">
                    National Exam
                  </span>
                  <div className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    558 / 600
                  </div>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5 block">
                    Outstanding Achiever
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-academic-100 dark:border-academic-800 flex items-center gap-2 text-xs text-academic-500 dark:text-academic-400">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>Verified school transcript · Official Secondary Leaving Examination Certificate</span>
            </div>
          </div>

          {/* Academic & Scientific Rigor (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookCheck className="size-5 text-amber-600 dark:text-amber-400" />
                <h3 className="font-serif font-bold text-lg text-academic-950 dark:text-white">
                  Academic Focus & Competencies
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-academic-600 dark:text-academic-300 leading-relaxed mb-4">
                High-rigor preparation across foundational Physical Sciences, Pure Mathematics, and Computational Logic:
              </p>

              <div className="space-y-3">
                {coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-academic-50 dark:bg-academic-800/40 border border-academic-200/80 dark:border-academic-700/50">
                    <div className="text-xs font-bold text-academic-900 dark:text-white flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                      {comp.area}
                    </div>
                    <div className="text-[11px] text-academic-600 dark:text-academic-300 mt-0.5 ps-3">
                      {comp.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-academic-100 dark:border-academic-800 text-[11px] text-academic-500 dark:text-academic-400">
              Direct application of empirical chemistry concepts into computational modeling & kinetic simulation.
            </div>
          </div>

        </div>

        {/* Honors & Distinctions Cards */}
        <div>
          <h3 className="text-xl font-serif font-bold text-academic-950 dark:text-white mb-6 flex items-center gap-2">
            <Award className="size-5 text-amber-600 dark:text-amber-400" />
            <span>Honors & Academic Distinctions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.honors.map((honor, idx) => {
              const isIntl = honor.scope === 'International';
              const isNat = honor.scope === 'National';
              const isState = honor.scope === 'State/Regional';

              const badgeClass = cn(
                "text-xs font-semibold px-2.5 py-0.5 rounded-full border",
                isIntl && "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800",
                isNat && "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
                isState && "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800",
                !isIntl && !isNat && !isState && "bg-academic-100 text-academic-800 border-academic-300 dark:bg-academic-800 dark:text-academic-200 dark:border-academic-700"
              );

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-600/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={badgeClass}>
                        {honor.scope} Honor
                      </span>
                      <span className="text-xs font-medium text-academic-500">
                        {honor.grade}
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-academic-950 dark:text-white">
                      {honor.title}
                    </h4>

                    {honor.score && (
                      <div className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">
                        {honor.score}
                      </div>
                    )}

                    <p className="mt-2 text-xs sm:text-sm text-academic-600 dark:text-academic-300 leading-relaxed">
                      {honor.description}
                    </p>
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
