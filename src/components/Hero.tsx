import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Award, FileText, FlaskConical, Gauge, Rotate3d } from 'lucide-react';
import { profileData } from '../data/profileData';
import { silk, spring } from '../engine/motion';
import { ReactorCore3D } from './3d/ReactorCore3D';

export const Hero: React.FC = () => {
  return (
    <section 
      data-slot="hero" 
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#080812]"
    >
      {/* ═══════ LAYER 0: Centered Full-Bleed 3D Molecular Lattice ═══════ */}
      <div className="absolute inset-0 z-0">
        <ReactorCore3D
          compactMode={false}
          backgroundMode={true}
          initialViewMode="molecular"
          temperature={480}
          closedLoopActive={true}
          height={undefined}
          className="!absolute !inset-0 !h-full !w-full !rounded-none !border-0 !shadow-none"
        />
      </div>

      {/* ═══════ LAYER 1: Balanced Scrim for 3D Contrast & Text Legibility ═══════ */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#080812]/80 via-[#080812]/35 to-[#080812]/90" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080812]/40 to-[#080812]/85" />

      {/* ═══════ LAYER 2: Masthead Header ═══════ */}
      <div className="relative z-20 pt-6 pb-3 border-b border-white/10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/40 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-reagent animate-pulse motion-reduce:animate-none" />
            <span className="font-semibold text-white/70 uppercase tracking-wider">
              Common App Dossier · Fall 2026 / 2027 Admissions
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/30">St. John Baptist De La Salle</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span className="text-specimen font-bold">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

      {/* ═══════ LAYER 3: Centered Hero Typography ═══════ */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none text-center px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        <div className="max-w-3xl mx-auto w-full pointer-events-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="flex flex-col items-center"
          >
            {/* Field Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-specimen/15 border border-specimen/30 text-xs font-mono font-bold text-specimen mb-4"
            >
              <FlaskConical className="size-3.5" />
              <span>INTENDED MAJOR: {profileData.personal.intendedMajor.toUpperCase()}</span>
            </motion.div>

            {/* Applicant Name */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-[-0.02em] leading-[1.05]"
            >
              {profileData.personal.fullName}
              <span className="block text-white/40 font-display font-normal text-2xl sm:text-3xl lg:text-4xl mt-1">
                ({profileData.personal.preferredName})
              </span>
            </motion.h1>

            {/* Concise Focus */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.32 } },
              }}
              className="mt-3 text-xs sm:text-sm font-mono font-medium text-white/50"
            >
              Computational Chemistry · Scientific Machine Learning · Reaction Kinetics
            </motion.div>

            {/* Central Scientific Thesis */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="mt-5 p-4 sm:p-5 rounded-none bg-white/[0.04] backdrop-blur-md border border-white/10 border-t-2 border-t-specimen max-w-2xl mx-auto shadow-2xl"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-specimen mb-1 font-semibold">
                Central Scientific Thesis
              </div>
              <p className="font-display italic text-base sm:text-lg text-white/95 font-medium leading-snug">
                "{profileData.personal.motto}"
              </p>
            </motion.div>

            {/* Interactive 3D Hint */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/50 backdrop-blur-sm"
            >
              <Rotate3d className="size-3 text-specimen" />
              <span>3D Intermediate Lattice (Levoglucosan) · Drag background to orbit</span>
            </motion.div>

            {/* Centered Actions */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              <motion.a
                {...spring.press}
                {...silk.hover}
                href="#reactor-instrument"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-mono font-bold bg-specimen hover:bg-specimen/80 text-white transition-colors shadow-lg shadow-specimen/25 focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              >
                <Gauge className="size-4" />
                <span>Operate Simulator</span>
                <ArrowDownRight className="size-4" />
              </motion.a>

              <motion.a
                {...spring.press}
                {...silk.hover}
                href="/pyrolysis-framework.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/15 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              >
                <FileText className="size-4 text-specimen" />
                <span>16-Page Paper (PDF)</span>
              </motion.a>

              <motion.a
                {...spring.press}
                {...silk.hover}
                href="#academics"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/25 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              >
                <Award className="size-4 text-specimen" />
                <span>Academic Record</span>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ═══════ LAYER 4: Streamlined Bottom Metrics Strip ═══════ */}
      <div className="relative z-20 border-t border-white/10 bg-[#080812]/80 backdrop-blur-md pointer-events-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">

            {/* Metric 1: Research */}
            <div className="p-2.5 border-t-2 border-specimen bg-white/[0.02]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Lead Research</span>
              <span className="text-lg font-display font-bold text-specimen">73.6%</span>
              <span className="text-[10px] font-mono text-reagent block mt-0.5">Autothermal Efficiency</span>
            </div>

            {/* Metric 2: Temperature */}
            <div className="p-2.5 border-t-2 border-[#2563eb] bg-white/[0.02]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Pyrolysis Window</span>
              <span className="text-lg font-display font-bold text-[#2563eb]">480°C</span>
              <span className="text-[10px] font-mono text-white/35 block mt-0.5">Fast Cleavage (&lt;2s)</span>
            </div>

            {/* Metric 3: Advisory */}
            <div className="p-2.5 border-t-2 border-reagent bg-white/[0.02]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Technical Advisory</span>
              <span className="text-sm font-display font-bold text-reagent leading-tight">Chemical Society of Ethiopia</span>
              <span className="text-[10px] font-mono text-specimen block mt-0.5">CSE Advised</span>
            </div>

            {/* Metric 4: Academics */}
            <div className="p-2.5 border-t-2 border-catalyst bg-white/[0.02]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Academic Standing</span>
              <span className="text-lg font-display font-bold text-catalyst">Top 2%</span>
              <span className="text-[10px] font-mono text-white/35 block mt-0.5">Rank 5/250 · 3.93 GPA</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
