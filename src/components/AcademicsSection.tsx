import React from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle2, ShieldCheck, Globe2, Building2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export const AcademicsSection: React.FC = () => {
  const { education } = profileData;

  return (
    <section id="academics" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Official Common App Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academic-950 dark:text-white mt-1">
            Academics, Rigor & Honors
          </h2>
          <p className="mt-3 text-academic-600 dark:text-academic-300 text-sm sm:text-base leading-relaxed">
            Consistent top-tier scholarship at St. John Baptist De La Salle Catholic School, demonstrating sustained academic distinction across rigorous physical science and computational coursework.
          </p>
        </div>

        {/* Top Grid: Institution Record + Coursework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Institution & Stats Card (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300 border border-academic-300 dark:border-academic-700">
                  {education.type}
                </span>
                <span className="text-xs text-academic-500">{education.dates}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-academic-900 dark:text-white mt-4">
                {education.institution}
              </h3>
              <p className="text-xs text-academic-500 dark:text-academic-400 mt-1">
                {education.location} · {education.status}
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-academic-600 dark:text-academic-300">
                      Unweighted Class Rank
                    </span>
                    <span className="text-sm font-bold text-amber-700 dark:text-amber-400">
                      Top 2.0%
                    </span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-0.5">
                    {education.rank} / {education.rankTotal}
                  </div>
                  <p className="text-xs text-academic-500 mt-0.5">
                    {education.rankContext}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-800/50 border border-academic-200 dark:border-academic-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-academic-600 dark:text-academic-300">
                      Cumulative GPA (Unweighted)
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                      High Honor Roll
                    </span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-0.5">
                    {education.gpa} / {education.gpaScale}
                  </div>
                  <p className="text-xs text-academic-500 mt-0.5">
                    Maintained across all 4 years (Grades 9–12)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-academic-100 dark:border-academic-800 flex items-center gap-2 text-xs text-academic-500 dark:text-academic-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified school transcript & Common App progression</span>
            </div>
          </div>

          {/* Current / Most Recent Year Courses (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-serif font-bold text-lg text-academic-950 dark:text-white">
                  Senior Year Academic Coursework
                </h3>
              </div>
              <span className="text-xs text-academic-500">Regular Curriculum (REG)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-academic-200 dark:border-academic-800 text-academic-500 dark:text-academic-400 font-semibold">
                    <th className="pb-3 pl-2">Subject / Domain</th>
                    <th className="pb-3">First Semester</th>
                    <th className="pb-3 pr-2">Second Semester</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-academic-100 dark:divide-academic-800/60">
                  {education.courses.map((course, idx) => (
                    <tr key={idx} className="hover:bg-academic-50 dark:hover:bg-academic-800/30 transition-colors">
                      <td className="py-2.5 pl-2 font-medium text-academic-900 dark:text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {course.semester1.split(' - ')[1] || course.semester1}
                      </td>
                      <td className="py-2.5 text-academic-600 dark:text-academic-300">
                        {course.semester1}
                      </td>
                      <td className="py-2.5 pr-2 text-academic-600 dark:text-academic-300">
                        {course.semester2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
              <span className="font-semibold">Curricular Breadth:</span> Complete immersion across Physical Sciences (Chemistry & Physics), Biological Sciences, Pure Mathematics, and Information Technology.
            </div>
          </div>

        </div>

        {/* Honors & Distinctions Cards */}
        <div>
          <h3 className="text-xl font-serif font-bold text-academic-950 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span>Honors & Academic Distinctions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.honors.map((honor, idx) => {
              const isIntl = honor.scope === 'International';
              const isNat = honor.scope === 'National';
              const isState = honor.scope === 'State/Regional';

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-600/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                          isIntl
                            ? 'bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800'
                            : isNat
                            ? 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800'
                            : isState
                            ? 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800'
                            : 'bg-academic-100 text-academic-800 border-academic-300 dark:bg-academic-800 dark:text-academic-200 dark:border-academic-700'
                        }`}
                      >
                        {honor.scope} Honor
                      </span>
                      <span className="text-xs font-medium text-academic-500">
                        {honor.grade}
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-academic-900 dark:text-white">
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
