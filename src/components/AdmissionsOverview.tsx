import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Compass, MapPin, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profileData';
import { spring, silk } from '../engine/motion';
import { cn } from '../lib/utils';

export const AdmissionsOverview: React.FC = () => {
  const { education, personal } = profileData;

  const ledgerMetrics = [
    {
      code: "METRIC-01",
      label: "Class Standing & Academic Rigor",
      value: "Top 2.0%",
      detail: "Rank 5 / 250 · 3.93 Unweighted GPA",
      subtext: "St. John Baptist De La Salle · Dean's High Honor Roll (All 4 Years)",
      accent: "text-amber-600 dark:text-amber-400",
    },
    {
      code: "METRIC-02",
      label: "National Examination Benchmark",
      value: "558 / 600",
      detail: "Ministry Outstanding Achiever Award",
      subtext: "Standardized Secondary Leaving Examination Certificate",
      accent: "text-amber-600 dark:text-amber-400",
    },
    {
      code: "METRIC-03",
      label: "Independent Scientific Research",
      value: "16-Page Paper",
      detail: "Closed-Loop Autothermal Pyrolysis",
      subtext: "73.6% Thermal Efficiency · Semyonov Lumped Kinetics",
      accent: "text-emerald-600 dark:text-emerald-400",
    },
    {
      code: "METRIC-04",
      label: "Competitive Fellowships",
      value: "Top 10 / 80",
      detail: "EGATE Advanced Machine Learning",
      subtext: "Creator of FRADSCR 'Maji Alert' · DSA 2.0 ML Fellow",
      accent: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <section data-slot="admissions-overview" id="overview" className="py-12 bg-academic-100/50 dark:bg-academic-900/30 border-b border-academic-200 dark:border-academic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-academic-200/80 dark:border-academic-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <span>§ 00</span>
              <span>·</span>
              <span>EXECUTIVE CANDIDATE DOSSIER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-academic-950 dark:text-white mt-1">
              At-a-Glance Verified Qualifications
            </h2>
          </div>
          <div className="text-xs font-mono text-academic-500 dark:text-academic-400 flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
            <span>Credential Verification Ledger · Ministry of Education & School Certified</span>
          </div>
        </div>

        {/* 4 Core Ledger Cards with Precision Ruling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ledgerMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              {...silk.hover}
              className="p-5 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm flex flex-col justify-between hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-academic-400 mb-2">
                  <span>{item.code}</span>
                  <span className="size-1.5 rounded-full bg-amber-500" />
                </div>
                <div className="text-xs font-mono font-semibold text-academic-600 dark:text-academic-300">
                  {item.label}
                </div>
                <div className={cn("text-3xl font-serif font-bold mt-1 tracking-tight", item.accent)}>
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-academic-900 dark:text-white mt-1">
                  {item.detail}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-academic-100 dark:border-academic-800/80 text-[11px] text-academic-500 dark:text-academic-400 font-sans">
                {item.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Candidate Origin & Institution Verification Strip */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-academic-700 dark:text-academic-300">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-amber-600 dark:text-amber-400" />
              <span className="font-semibold text-academic-900 dark:text-white">{education.institution}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="size-4 text-amber-600 dark:text-amber-400" />
              <span>{education.status}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="size-4 text-amber-600 dark:text-amber-400" />
              <span>{personal.location} (UTC+3)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="size-4 text-amber-600 dark:text-amber-400" />
              <span className="font-medium text-academic-800 dark:text-academic-200">Aspirant: {personal.futurePlan}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-center">
            <motion.a
              {...spring.press}
              {...silk.hover}
              href={`mailto:${personal.email}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-academic-700 dark:text-academic-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <Mail className="size-3.5" />
              <span>{personal.email}</span>
            </motion.a>
            <span className="text-academic-300 dark:text-academic-700 select-none">|</span>
            <motion.a
              {...spring.press}
              {...silk.hover}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-academic-700 dark:text-academic-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <GithubIcon className="size-3.5" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
};
