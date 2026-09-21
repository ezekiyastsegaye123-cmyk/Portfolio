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
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#080812] text-white"
    >
      {/* Background Architectural Graph Texture */}
      <div className="absolute inset-0 opacity-10 millimeter-grid pointer-events-none" />

      {/* ═══════ LAYER 1: Archival Masthead Bar ═══════ */}
      <div className="relative z-20 pt-6 pb-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/40">
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

      {/* ═══════ LAYER 2: Side-by-Side Split (Text Left · 3D Model Right) ═══════ */}
      <div className="relative z-20 flex-1 flex items-center py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6-7 cols: Concise Dossier & Typography */}
            <motion.div 
              className="lg:col-span-6 xl:col-span-6"
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
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-[-0.02em] leading-[1.05]"
              >
                {profileData.personal.fullName}
                <span className="block text-white/35 font-display font-normal text-2xl sm:text-3xl lg:text-4xl mt-1">
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

              {/* Central Scientific Thesis (Decreased Words, Impactful) */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="mt-6 p-4 sm:p-5 rounded-none bg-white/[0.04] backdrop-blur-sm border-l-4 border-specimen border-t border-r border-b border-white/10"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-specimen mb-1 font-semibold">
                  Central Scientific Thesis
                </div>
                <p className="font-display italic text-base sm:text-lg text-white/95 font-medium leading-snug">
                  "{profileData.personal.motto}"
                </p>
              </motion.div>

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
                  <span>Paper (PDF)</span>
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

            {/* Right 6 cols: Dedicated Interactive 3D Molecular Stage */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="rounded-none rounded-tr-3xl bg-[#080812] border border-white/15 shadow-2xl overflow-hidden relative">
                
                {/* 3D Console Header Bar */}
                <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-specimen animate-ping" />
                    <span className="font-bold text-specimen uppercase tracking-wider">
                      3D Molecular Lattice
                    </span>
                    <span className="text-white/40 hidden sm:inline">· Levoglucosan Intermediate</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-[10px]">
                    <Rotate3d className="size-3 text-specimen" />
                    <span>Drag to orbit</span>
                  </div>
                </div>

                {/* 3D Viewport */}
                <div className="h-[360px] sm:h-[420px] lg:h-[460px] w-full relative">
                  <ReactorCore3D
                    compactMode={false}
                    backgroundMode={false}
                    initialViewMode="molecular"
                    temperature={480}
                    closedLoopActive={true}
                    height="100%"
                    className="!h-full !w-full !rounded-none !border-0 !shadow-none"
                  />
                </div>

                {/* 3D Console Sub-strip */}
                <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-white/40">
                  <span>C₆H₁₀O₅ Pyranose Cleavage Pathway</span>
                  <span className="text-reagent font-semibold">Advised by Chemical Society of Ethiopia (CSE)</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════ LAYER 3: Bottom Metrics Strip ═══════ */}
      <div className="relative z-20 border-t border-white/10 bg-[#080812]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
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
