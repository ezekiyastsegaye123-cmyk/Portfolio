import React from 'react';
import { Award, Users, BookOpen, Mic, Cpu, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';
import { profileData } from '../data/profileData';

export const ActivitiesSection: React.FC = () => {
  const { activities } = profileData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Leadership':
        return <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Teaching':
        return <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Training & Fellowship':
        return <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Public Speaking':
        return <Mic className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Lightbulb className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="activities" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Leadership & Community Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academic-950 dark:text-white mt-1">
            Extracurricular Activities & Fellowships
          </h2>
          <p className="mt-3 text-academic-600 dark:text-academic-300 text-sm sm:text-base leading-relaxed">
            Formulated in alignment with the Common Application's holistic review framework — demonstrating scientific leadership, peer pedagogy, selective computational fellowships, and public communication.
          </p>
        </div>

        {/* Activities List Cards */}
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-600/80 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              {/* Left Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-200 border border-academic-300 dark:border-academic-700">
                    {getCategoryIcon(activity.category)}
                    {activity.category}
                  </span>
                  <span className="text-xs font-mono text-academic-500">
                    {activity.timeline}
                  </span>
                  <span className="text-academic-300 dark:text-academic-700">·</span>
                  <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                    {activity.organization}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-academic-950 dark:text-white">
                  {activity.title}
                </h3>
                <div className="text-sm font-semibold text-academic-600 dark:text-academic-300 mt-0.5">
                  Role: {activity.role}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-academic-600 dark:text-academic-300 leading-relaxed">
                  {activity.description}
                </p>

                {/* Key Tangible Achievements */}
                <div className="mt-4 space-y-2">
                  {activity.keyAchievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-academic-700 dark:text-academic-200">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Skills & Order Badge */}
              <div className="md:w-56 flex flex-col justify-between items-start md:items-end shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-academic-100 dark:border-academic-800">
                <div className="text-xs font-bold text-academic-400 font-mono hidden md:block">
                  #0{index + 1} Activity
                </div>
                <div className="mt-3 md:mt-auto flex flex-wrap md:justify-end gap-1.5">
                  {activity.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-academic-100 dark:bg-academic-800 text-academic-700 dark:text-academic-300 border border-academic-200 dark:border-academic-700"
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
