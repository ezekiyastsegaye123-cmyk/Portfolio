import React from 'react';
import { Users, BookOpen, Mic, Cpu, Lightbulb, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export const ActivitiesSection: React.FC = () => {
  const { activities } = profileData;

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Leadership':
        return 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30';
      case 'Teaching':
        return 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/30';
      case 'Training & Fellowship':
        return 'bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-500/30';
      case 'Public Speaking':
        return 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-academic-100 text-academic-800 border-academic-300 dark:bg-academic-800 dark:text-academic-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Leadership':
        return <Users className="size-3.5" />;
      case 'Teaching':
        return <BookOpen className="size-3.5" />;
      case 'Training & Fellowship':
        return <Cpu className="size-3.5" />;
      case 'Public Speaking':
        return <Mic className="size-3.5" />;
      default:
        return <Lightbulb className="size-3.5" />;
    }
  };

  return (
    <section data-slot="activities-section" id="activities" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800 bg-academic-50/50 dark:bg-academic-950 archival-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-academic-200/80 dark:border-academic-800/80">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
              <span>§ 03</span>
              <span>·</span>
              <span>LEADERSHIP, PEDAGOGY & COMPETITIVE FELLOWSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-academic-950 dark:text-white tracking-[-0.01em] leading-snug">
              Extracurricular Impact & Fieldwork
            </h2>
            <p className="mt-3 text-academic-700 dark:text-academic-300 text-sm sm:text-base leading-relaxed">
              Formulated in accordance with the Common Application holistic evaluation framework — detailing presidential leadership in the chemical sciences, regional peer tutoring, selective computational fellowships, and public communication.
            </p>
          </div>
          <div className="text-xs font-mono text-academic-500">
            7 OFFICIAL ACTIVITIES LOGGED
          </div>
        </div>

        {/* Featured Marginalia / Human Voice: TEDx Speech Excerpt */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-academic-900 text-white border border-academic-800 relative overflow-hidden shadow-lg">
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <Quote className="size-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase tracking-wider mb-2">
                <span>TEDx Student Keynote Lecture</span>
                <span>·</span>
                <span>St. John Baptist De La Salle</span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-academic-100 leading-relaxed">
                “We often regard ancient African metallurgy and early alchemical traditions through a mystical or primitive lens. In truth, they were localized thermodynamic experiments conducted centuries before the periodic table was formalized. Computational chemistry does not detach us from the physical world — it equips us with the microscopic clarity needed to solve our most urgent resource and energy realities.”
              </p>
              <div className="mt-3 font-mono text-xs text-academic-400">
                — Ezekiyas Tsegaye, <span className="text-academic-200">“Ancient Chemistry: From the Crucible of Alchemy to Modern Atomic Synthesis”</span> (2024)
              </div>
            </div>
          </div>
        </div>

        {/* Activities List Cards Styled as Structured Fieldwork Entries */}
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              {/* Left Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md font-bold border uppercase tracking-wider ${getCategoryBadge(activity.category)}`}>
                    {getCategoryIcon(activity.category)}
                    {activity.category}
                  </span>
                  <span className="text-academic-500">
                    {activity.timeline}
                  </span>
                  <span className="text-academic-300 dark:text-academic-700">·</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-400">
                    {activity.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-academic-950 dark:text-white">
                  {activity.title}
                </h3>
                <div className="text-xs font-mono font-bold text-academic-600 dark:text-academic-400 mt-1">
                  OFFICIAL ROLE: {activity.role.toUpperCase()}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-academic-700 dark:text-academic-300 leading-relaxed font-sans">
                  {activity.description}
                </p>

                {/* Key Tangible Achievements with Checked Indicators */}
                <div className="mt-4 space-y-2">
                  {activity.keyAchievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-academic-800 dark:text-academic-200">
                      <ChevronRight className="size-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Skills & Activity Serial Number */}
              <div className="md:w-60 flex flex-col justify-between items-start md:items-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-academic-100 dark:border-academic-800">
                <div className="text-xs font-mono font-bold text-academic-400 hidden md:block">
                  ENTRY № 0{index + 1}
                </div>
                <div className="mt-3 md:mt-auto flex flex-wrap md:justify-end gap-1.5">
                  {activity.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300 border border-academic-200 dark:border-academic-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
