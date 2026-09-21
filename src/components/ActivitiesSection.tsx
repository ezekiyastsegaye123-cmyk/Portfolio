import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Mic, Cpu, Lightbulb, ChevronRight, Quote } from 'lucide-react';
import { profileData } from '../data/profileData';
import { spring, silk } from '../engine/motion';
import { cn } from '../lib/utils';

export const ActivitiesSection: React.FC = () => {
  const { activities } = profileData;

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Leadership':
        return 'bg-specimen/10 text-specimen border-specimen/30';
      case 'Teaching':
        return 'bg-reagent/10 text-reagent border-reagent/30';
      case 'Training & Fellowship':
        return 'bg-catalyst/10 text-catalyst border-catalyst/30';
      case 'Public Speaking':
        return 'bg-reagent/10 text-reagent border-reagent/30';
      default:
        return 'bg-data-bg text-ink/70 border-ink/25';
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
    <section data-slot="activities-section" id="activities" className="py-16 md:py-24 border-b border-ink/15 bg-paper dark:bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-ink/15">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-specimen mb-1">
              <span>§ 03</span>
              <span>·</span>
              <span>LEADERSHIP, PEDAGOGY & COMPETITIVE FELLOWSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-[-0.01em] leading-snug">
              Extracurricular Impact & Fieldwork
            </h2>
            <p className="mt-3 text-ink/70 text-sm sm:text-base leading-relaxed">
              Formulated in accordance with the Common Application holistic evaluation framework — detailing presidential leadership in the chemical sciences, regional peer tutoring, selective computational fellowships, and public communication.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral">
            7 OFFICIAL ACTIVITIES LOGGED
          </div>
        </div>

        {/* Featured Marginalia / Human Voice: TEDx Speech Excerpt */}
        <motion.div 
          {...silk.entrance}
          className="mb-12 p-6 sm:p-8 rounded-none rounded-tr-3xl bg-[#0d0d1a] text-white border border-ink/15 relative overflow-hidden shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-xl bg-specimen/20 text-specimen flex items-center justify-center shrink-0 border border-specimen/30">
              <Quote className="size-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 font-mono text-xs text-specimen font-bold uppercase tracking-wider mb-2">
                <span>TEDx Student Keynote Lecture</span>
                <span>·</span>
                <span>St. John Baptist De La Salle</span>
              </div>
              <p className="font-display italic text-base sm:text-lg text-data-bg leading-relaxed">
                “We often regard ancient African metallurgy and early alchemical traditions through a mystical or primitive lens. In truth, they were localized thermodynamic experiments conducted centuries before the periodic table was formalized. Computational chemistry does not detach us from the physical world — it equips us with the microscopic clarity needed to solve our most urgent resource and energy realities.”
              </p>
              <div className="mt-3 font-mono text-xs text-ink/40">
                — Ezekiyas Tsegaye, <span className="text-ink/15">“Ancient Chemistry: From the Crucible of Alchemy to Modern Atomic Synthesis”</span> (2024)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Activities List Cards Styled as Structured Fieldwork Entries */}
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              {...silk.hover}
              className={cn(
                "p-6 sm:p-8 rounded-none bg-paper dark:bg-paper border-y border-r border-ink/15 border-l-2 shadow-sm hover:border-specimen/80 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6",
                index % 2 === 0 ? 'border-l-specimen/30' : 'border-l-reagent/30'
              )}
            >
              {/* Left Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md font-bold border uppercase tracking-wider",
                    getCategoryBadge(activity.category)
                  )}>
                    {getCategoryIcon(activity.category)}
                    {activity.category}
                  </span>
                  <span className="text-neutral">
                    {activity.timeline}
                  </span>
                  <span className="text-ink/25">·</span>
                  <span className="font-semibold text-specimen">
                    {activity.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  {activity.title}
                </h3>
                <div className="text-xs font-mono font-bold text-ink/70 mt-1">
                  OFFICIAL ROLE: {activity.role.toUpperCase()}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-ink/70 leading-relaxed font-body">
                  {activity.description}
                </p>

                {/* Key Tangible Achievements with Checked Indicators */}
                <div className="mt-4 space-y-2">
                  {activity.keyAchievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ink/70">
                      <ChevronRight className="size-3.5 text-specimen shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Skills & Activity Serial Number */}
              <div className="md:w-60 flex flex-col justify-between items-start md:items-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-ink/15">
                <div className="text-xs font-mono font-bold text-ink/40 hidden md:block">
                  ENTRY № 0{index + 1}
                </div>
                <div className="mt-3 md:mt-auto flex flex-wrap md:justify-end gap-1.5">
                  {activity.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-data-bg dark:bg-ink/15 text-ink/70 border border-ink/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

