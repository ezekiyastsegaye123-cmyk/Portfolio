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
      {/* ═══════ LAYER 0: Full-Bleed 3D Reactor Background ═══════ */}
      <div className="absolute inset-0 z-0">
        <ReactorCore3D
          compactMode={false}
          backgroundMode={true}
          temperature={480}
          closedLoopActive={true}
          height={undefined}
          className="!absolute !inset-0 !h-full !w-full !rounded-none !border-0 !shadow-none"
        />
      </div>

      {/* ═══════ LAYER 1: Gradient Scrim for Text Readability ═══════ */}
      {/* Left-heavy gradient: text lives on left, 3D breathes on right */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#080812]/95 via-[#080812]/75 to-[#080812]/20" />
      {/* Top and bottom subtle fades */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#080812]/70 via-transparent to-[#080812]/80" />

      {/* ═══════ LAYER 2: Registration Marks (Human engineering detail) ═══════ */}
      <div className="absolute top-3 left-4 z-20 text-white/25 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + 09°01'55"N 38°44'49"E
      </div>
      <div className="absolute top-3 right-4 z-20 text-white/25 font-mono text-xs select-none pointer-events-none hidden sm:block">
        DOCKET № ET-2026/2027 +
      </div>

      {/* ═══════ LAYER 3: Archival Masthead Bar ═══════ */}
      <div className="relative z-20 pt-6 pb-3 border-b border-white/10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/40 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-reagent animate-pulse motion-reduce:animate-none" />
            <span className="font-semibold text-white/70 uppercase tracking-wider">
              Common App Dossier · Fall 2026 / 2027 Admissions
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/30">Secondary School: St. John Baptist De La Salle</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span className="text-specimen font-bold">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

      {/* ═══════ LAYER 4: Hero Content (overlays the 3D scene) ═══════ */}
      <div className="relative z-20 flex-1 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Left 7-8 cols: Candidate Dossier */}
            <div className="lg:col-span-7 xl:col-span-8 pointer-events-auto">
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
              >
                {/* Field of Inquiry Badge */}
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
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-[-0.02em] leading-[1.05]"
                >
                  {profileData.personal.fullName}
                  <span className="block text-white/35 font-display font-normal text-2xl sm:text-3xl lg:text-4xl mt-1">
                    ({profileData.personal.preferredName})
                  </span>
                </motion.h1>

                {/* Concentration */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.32 } },
                  }}
                  className="mt-3 text-xs sm:text-sm font-mono font-medium text-white/40"
                >
                  FOCUS: Computational Chemistry · Chemical Reaction Kinetics · Scientific Machine Learning
                </motion.div>

                {/* Scientific Thesis */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="mt-6 p-4 sm:p-5 rounded-none bg-white/[0.04] backdrop-blur-sm border-l-4 border-specimen border-t border-r border-b border-t-white/10 border-r-white/10 border-b-white/10 max-w-2xl"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-specimen mb-1 font-semibold">
                    Central Scientific Thesis
                  </div>
                  <p className="font-display italic text-base sm:text-lg text-white/90 font-medium leading-snug">
                    "{profileData.personal.motto}"
                  </p>
                </motion.div>

                {/* Bio */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-body max-w-xl"
                >
                  Secondary school scholar from Addis Ababa (Rank 5/250, 558/600 National Leaving Examination) dedicated to applying macroscopic reaction kinetics, thermodynamic heat recovery, and machine learning to resource constraints in developing economies — from modeling closed-loop biomass biorefineries to space-weather drought forecasting and resilient offline classroom protocols.
                </motion.p>

                {/* CTAs */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="mt-6 flex flex-wrap items-center gap-3"
                >
                  <motion.a
                    {...spring.press}
                    {...silk.hover}
                    href="#reactor-instrument"
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-mono font-bold bg-specimen hover:bg-specimen/80 text-white transition-colors shadow-lg shadow-specimen/20 focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                  >
                    <Gauge className="size-4" />
                    <span>Operate Reactor Simulator</span>
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
                    <span>Download 16-Page Paper (PDF)</span>
                  </motion.a>

                  <motion.a
                    {...spring.press}
                    {...silk.hover}
                    href="#academics"
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/25 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                  >
                    <Award className="size-4 text-specimen" />
                    <span>Academic Record</span>
                  </motion.a>
                </motion.div>

              </motion.div>
            </div>

            {/* Right 4-5 cols: Sleek Minimal 3D Interactive HUD Tag */}
            <div className="lg:col-span-5 xl:col-span-4 hidden lg:flex flex-col items-end pointer-events-none">
              <div className="p-4 rounded-none rounded-tr-2xl bg-[#080812]/80 backdrop-blur-md border border-white/10 text-white font-mono text-xs max-w-sm pointer-events-auto shadow-2xl">
                <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-white/10 text-[10px]">
                  <span className="flex items-center gap-1.5 text-specimen font-bold">
                    <span className="size-2 rounded-full bg-specimen animate-ping" />
                    LIVE 3D SIMULATION CORE
                  </span>
                  <span className="text-white/40">480°C · PYROLYSIS</span>
                </div>

                <div className="mt-3 space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-white/40">Arrhenius Particle Swarm:</span>
                    <span className="text-specimen font-semibold">Active Kinetics</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Closed-Loop Recirculation:</span>
                    <span className="text-reagent font-semibold">73.6% Autothermal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Technical Advisory:</span>
                    <span className="text-white/80">Chem. Society of Ethiopia</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
                  <span className="flex items-center gap-1 text-white/50">
                    <Rotate3d className="size-3 text-specimen" />
                    Drag background to orbit
                  </span>
                  <a
                    href="#reactor-instrument"
                    className="text-specimen hover:text-specimen/80 font-bold transition-colors"
                  >
                    Lab Controls ↓
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════ LAYER 5: Bottom Metrics Strip (floating over 3D with backdrop blur) ═══════ */}
      <div className="relative z-20 border-t border-white/10 bg-[#080812]/80 backdrop-blur-md pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

            {/* Metric 1: Research */}
            <div className="p-3 rounded-none border-l-2 border-specimen bg-white/[0.03]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Lead Research</span>
              <span className="text-lg font-display font-bold text-specimen">73.6%</span>
              <span className="text-[10px] font-mono text-reagent block mt-0.5">Autothermal Efficiency</span>
            </div>

            {/* Metric 2: Temperature */}
            <div className="p-3 rounded-none border-l-2 border-[#2563eb] bg-white/[0.03]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Pyrolysis Window</span>
              <span className="text-lg font-display font-bold text-[#2563eb]">480°C</span>
              <span className="text-[10px] font-mono text-white/35 block mt-0.5">Fast Cleavage (&lt;2s)</span>
            </div>

            {/* Metric 3: Advisory */}
            <div className="p-3 rounded-none border-l-2 border-reagent bg-white/[0.03]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Technical Advisory</span>
              <span className="text-sm font-display font-bold text-reagent leading-tight">Chemical Society of Ethiopia</span>
              <span className="text-[10px] font-mono text-specimen block mt-0.5">CSE Advised</span>
            </div>

            {/* Metric 4: Academics */}
            <div className="p-3 rounded-none border-l-2 border-catalyst bg-white/[0.03]">
              <span className="text-[10px] font-mono text-white/35 block uppercase tracking-wider">Academic Standing</span>
              <span className="text-lg font-display font-bold text-catalyst">Top 2%</span>
              <span className="text-[10px] font-mono text-white/35 block mt-0.5">Rank 5/250 · 3.93 GPA</span>
            </div>

          </div>

          {/* Researcher Context Note */}
          <div className="mt-3 flex items-start gap-3 p-2.5 rounded-none bg-white/[0.02] border border-white/[0.05] text-xs text-white/50 font-body">
            <span className="font-mono text-[10px] text-specimen uppercase tracking-wider whitespace-nowrap pt-0.5">Context:</span>
            <p className="leading-relaxed italic text-[11px] sm:text-xs">
              "In Ethiopia, biomass comprises over 85% of primary rural cooking energy, yet open combustion wastes the majority of chemical potential and causes severe indoor respiratory illness. This theoretical model proves an autothermal closed loop can convert agricultural waste into high-density fuel with zero external heat."
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
