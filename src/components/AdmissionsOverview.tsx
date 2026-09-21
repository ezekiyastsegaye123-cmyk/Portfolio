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
      accent: "text-specimen",
    },
    {
      code: "METRIC-02",
      label: "National Examination Benchmark",
      value: "558 / 600",
      detail: "Ministry Outstanding Achiever Award",
      subtext: "Standardized Secondary Leaving Examination Certificate",
      accent: "text-specimen",
    },
    {
      code: "METRIC-03",
      label: "Independent Scientific Research",
      value: "16-Page Paper",
      detail: "Closed-Loop Autothermal Pyrolysis",
      subtext: "73.6% Thermal Efficiency · Semyonov Lumped Kinetics",
      accent: "text-reagent",
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
    <section data-slot="admissions-overview" id="overview" className="py-12 bg-paper border-t border-ink/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-ink/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-specimen">
              <span>§ 00</span>
              <span>·</span>
              <span>EXECUTIVE CANDIDATE DOSSIER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#080812] dark:text-ink mt-1">
              At-a-Glance Verified Qualifications
            </h2>
          </div>
          <div className="text-xs font-mono text-ink/40 flex items-center gap-2">
            <ShieldCheck className="size-4 text-reagent" />
            <span>Credential Verification Ledger · Ministry of Education & School Certified</span>
          </div>
        </div>

        {/* 4 Core Ledger Cards with Precision Ruling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ledgerMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              {...silk.hover}
              className={cn(
                "p-5 rounded-none bg-white dark:bg-[#0d0d1a] border border-ink/15 border-l-2 border-l-specimen shadow-sm flex flex-col justify-between hover:border-specimen transition-colors",
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              )}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-ink/40 mb-2">
                  <span>{item.code}</span>
                  <span className="size-1.5 rounded-full bg-specimen" />
                </div>
                <div className="text-xs font-mono font-semibold text-ink/40 dark:text-white">
                  {item.label}
                </div>
                <div className={cn("text-3xl font-display font-bold mt-1 tracking-tight", item.accent)}>
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-[#0d0d1a] dark:text-white mt-1">
                  {item.detail}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-ink/15 text-[11px] text-ink/40 dark:text-white/70 font-body">
                {item.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Candidate Origin & Institution Verification Strip */}
        <div className="mt-6 p-4 sm:p-5 rounded-none bg-white dark:bg-[#0d0d1a] border border-ink/15 border-l-2 border-l-specimen flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-ink/40 dark:text-white/70">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-specimen" />
              <span className="font-semibold text-[#0d0d1a] dark:text-white">{education.institution}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="size-4 text-specimen" />
              <span>{education.status}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="size-4 text-specimen" />
              <span>{personal.location} (UTC+3)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="size-4 text-specimen" />
              <span className="font-medium text-ink/40 dark:text-white">Aspirant: {personal.futurePlan}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-center">
            <motion.a
              {...spring.press}
              {...silk.hover}
              href={`mailto:${personal.email}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-xs font-mono font-medium text-ink/40 dark:text-white hover:text-specimen dark:hover:text-specimen transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
            >
              <Mail className="size-3.5" />
              <span>{personal.email}</span>
            </motion.a>
            <span className="text-ink/15 select-none">|</span>
            <motion.a
              {...spring.press}
              {...silk.hover}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none text-xs font-mono font-medium text-ink/40 dark:text-white hover:text-specimen dark:hover:text-specimen transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
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
