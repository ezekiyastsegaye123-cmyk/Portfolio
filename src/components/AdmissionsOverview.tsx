import React from 'react';
import { Award, GraduationCap, Compass, CheckCircle2, MapPin, Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profileData';

export const AdmissionsOverview: React.FC = () => {
  const { education, personal, stats } = profileData;

  return (
    <section id="overview" className="py-12 bg-academic-100/60 dark:bg-academic-900/40 border-b border-academic-200 dark:border-academic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Executive Candidate Summary
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-academic-900 dark:text-white mt-1">
              At-a-Glance Admissions Metrics
            </h2>
          </div>
          <p className="text-xs text-academic-500 dark:text-academic-400 max-w-md">
            Prepared for Admissions Officers & Evaluators evaluating applicants across Physical Sciences, Mathematics, and Computer Science.
          </p>
        </div>

        {/* 4 Core Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/60 dark:hover:border-amber-600/60 transition-colors"
            >
              <div className="text-xs font-semibold text-academic-500 dark:text-academic-400">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-academic-900 dark:text-white mt-1 text-amber-600 dark:text-amber-400">
                {stat.value}
              </div>
              <div className="text-xs text-academic-600 dark:text-academic-300 mt-1 font-medium">
                {stat.helper}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Candidate Profile Strip */}
        <div className="mt-6 p-5 rounded-xl bg-white dark:bg-academic-900/80 border border-academic-200 dark:border-academic-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-academic-700 dark:text-academic-300">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-semibold text-academic-900 dark:text-white">{education.institution}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{education.status}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="font-medium text-academic-800 dark:text-academic-200">Goal: {personal.futurePlan}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-academic-700 dark:text-academic-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personal.email}</span>
            </a>
            <span className="text-academic-300 dark:text-academic-700 select-none">|</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-academic-700 dark:text-academic-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
