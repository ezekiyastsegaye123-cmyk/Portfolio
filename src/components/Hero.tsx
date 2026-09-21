import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Award, FileText, FlaskConical, Gauge, Compass, MapPin, Rotate3d } from 'lucide-react';
import { profileData } from '../data/profileData';
import { silk, spring } from '../engine/motion';
import { ReactorCore3D } from './3d/ReactorCore3D';

export const Hero: React.FC = () => {
  return (
    <section 
      data-slot="hero" 
      id="hero" 
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-ink/15 dark:border-ink/15 archival-grid overflow-hidden"
    >
      {/* Registration Marks / Crosshairs in corners (Tactile Human Engineering Detail) */}
      <div className="absolute top-3 left-4 text-ink/40 dark:text-ink/70 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + 09°01'55"N 38°44'49"E
      </div>
      <div className="absolute top-3 right-4 text-ink/40 dark:text-ink/70 font-mono text-xs select-none pointer-events-none hidden sm:block">
        DOCKET № ET-2026/2027 +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Masthead Bar */}
        <div className="mb-6 pb-3 border-b border-ink/15 dark:border-ink/15 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-ink/50 dark:text-ink/40">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-reagent animate-pulse motion-reduce:animate-none" />
            <span className="font-semibold text-ink dark:text-ink/10 uppercase tracking-wider">
              Common App Dossier · Fall 2026 / 2027 Admissions
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Secondary School: St. John Baptist De La Salle</span>
            <span className="hidden sm:inline text-ink/25 dark:text-ink/80">|</span>
            <span className="text-specimen dark:text-specimen font-bold">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Asymmetric Two-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Candidate Dossier & Academic Identity (7 cols) */}
          <motion.div 
            className="lg:col-span-7 border-l-2 border-specimen/30 pl-6 lg:pl-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {/* Field of Inquiry Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-specimen/10 dark:bg-specimen/10 border border-specimen/30 text-xs font-mono font-bold text-specimen dark:text-specimen mb-4"
            >
              <FlaskConical className="size-3.5 text-specimen dark:text-specimen" />
              <span>INTENDED MAJOR: {profileData.personal.intendedMajor.toUpperCase()}</span>
            </motion.div>

            {/* Applicant Name & Formal Academic Title */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#080812] dark:text-ink tracking-[-0.02em] leading-tight"
            >
              {profileData.personal.fullName}{' '}
              <span className="block sm:inline text-ink/40 dark:text-ink/50 font-display font-normal text-2xl sm:text-3xl lg:text-4xl">
                ({profileData.personal.preferredName})
              </span>
            </motion.h1>

            {/* Concentration & Sub-field Focus */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.32 } },
              }}
              className="mt-3 text-sm font-mono font-medium text-ink/70 dark:text-ink/25"
            >
              FOCUS: Computational Chemistry · Chemical Reaction Kinetics · Scientific Machine Learning
            </motion.div>

            {/* Core Applicant Motto / Scientific Thesis */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="mt-6 p-5 rounded-none bg-white dark:bg-ink border-l-4 border-specimen dark:border-specimen border-t border-r border-b border-ink/15 dark:border-ink/15 shadow-sm relative"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-specimen dark:text-specimen mb-1 font-semibold">
                Central Scientific Thesis
              </div>
              <p className="font-display italic text-base sm:text-lg text-ink dark:text-specimen font-medium leading-snug">
                “{profileData.personal.motto}”
              </p>
            </motion.div>

            {/* Candidate Narrative Bio */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="mt-5 text-sm sm:text-base text-ink/80 dark:text-ink/25 leading-relaxed font-body"
            >
              Secondary school scholar from Addis Ababa (Rank 5/250, 558/600 National Leaving Examination) dedicated to applying macroscopic reaction kinetics, thermodynamic heat recovery, and machine learning to resource constraints in developing economies — from modeling closed-loop biomass biorefineries to space-weather drought forecasting and resilient offline classroom protocols.
            </motion.p>

            {/* Call to Actions with High Touch Precision */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <motion.a
                {...spring.press}
                {...silk.hover}
                href="#reactor-instrument"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-mono font-bold bg-[#080812] dark:bg-white text-white dark:text-[#080812] hover:bg-ink/15 dark:hover:bg-ink/10 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              >
                <Gauge className="size-4 text-specimen dark:text-specimen" />
                <span>Operate Reactor Simulator</span>
                <ArrowDownRight className="size-4" />
              </motion.a>

              <motion.a
                {...spring.press}
                {...silk.hover}
                href="/pyrolysis-framework.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold bg-specimen/10 dark:bg-specimen/10 text-specimen dark:text-specimen border border-specimen/30 dark:border-specimen/30 hover:bg-specimen/15 dark:hover:bg-specimen/15 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              >
                <FileText className="size-4 text-specimen dark:text-specimen" />
                <span>Download 16-Page Paper (PDF)</span>
              </motion.a>

              <motion.a
                {...spring.press}
                {...silk.hover}
                href="#academics"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold bg-white dark:bg-ink text-ink/80 dark:text-ink/25 hover:bg-paper dark:hover:bg-ink/15 border border-ink/25 dark:border-ink/80 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              >
                <Award className="size-4 text-specimen dark:text-specimen" />
                <span>Academic Record & Honors</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Column: Laboratory Instrument Specimen Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-none rounded-tr-3xl bg-[#0d0d1a] text-white border border-specimen/20 shadow-xl relative overflow-hidden">
              
              {/* Subtle millimeter technical grid */}
              <div className="absolute inset-0 opacity-10 millimeter-grid pointer-events-none" />

              {/* Specimen Card Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-ink/15">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-specimen animate-ping" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-specimen">
                    Lead Research Specimen · FIG. 01
                  </span>
                </div>
                <span className="text-[10px] font-mono text-ink/40 px-2 py-0.5 rounded bg-ink/15">
                  DOCKET: ET-PYRO-24
                </span>
              </div>

              {/* Specimen Details */}
              <div className="relative z-10 mt-4 space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-ink/40 uppercase tracking-wider">
                    Published Framework Title
                  </div>
                  <h3 className="font-display font-bold text-base text-ink/10 mt-0.5 leading-snug">
                    Integrated Theoretical Framework for Byproduct Reintegration in Closed-Loop Pyrolysis Systems
                  </h3>
                  <div className="text-xs font-mono text-specimen mt-1 flex flex-wrap items-center gap-1.5">
                    <span>Lead Author: Ezekiyas (Hezekiah) Tsegaye</span>
                    <span className="text-ink/50">·</span>
                    <span className="text-reagent font-semibold">Advised by Chemical Society of Ethiopia (CSE)</span>
                  </div>
                </div>

                {/* Interactive 3D Reactor Core Specimen Preview */}
                <div className="rounded-xl overflow-hidden border border-ink/15 shadow-inner bg-[#080812]">
                  <div className="px-3 py-1.5 bg-[#080812] border-b border-ink/15 flex items-center justify-between text-[10px] font-mono text-ink/40">
                    <span className="flex items-center gap-1.5 text-specimen font-semibold">
                      <Rotate3d className="size-3 text-specimen" />
                      <span>3D REACTOR CORE SPECIMEN · 480°C</span>
                    </span>
                    <span className="text-ink/50">DRAG TO ROTATE</span>
                  </div>
                  <ReactorCore3D
                    compactMode={true}
                    temperature={480}
                    closedLoopActive={true}
                    height={210}
                    className="border-0 rounded-none shadow-none"
                    onExploreInLab={() => {
                      const el = document.getElementById('reactor-instrument');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                </div>

                {/* Key Chemical Engineering Metrics */}
                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#080812]/80 border border-ink/15">
                    <span className="text-[10px] text-ink/40 block">Thermal Efficiency</span>
                    <span className="text-lg font-bold text-specimen">73.6%</span>
                    <span className="text-[10px] text-reagent block mt-0.5">Autothermal Loop</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080812]/80 border border-ink/15">
                    <span className="text-[10px] text-ink/40 block">Pyrolysis Window</span>
                    <span className="text-lg font-bold text-blue-400">480°C</span>
                    <span className="text-[10px] text-ink/40 block mt-0.5">Fast Cleavage (&lt;2s)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080812]/80 border border-ink/15">
                    <span className="text-[10px] text-ink/40 block">Catalytic In-Situ HDO</span>
                    <span className="text-sm font-bold text-ink/15">AAEM Metals</span>
                    <span className="text-[10px] text-ink/40 block mt-0.5">Hot Tar Cracking</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080812]/80 border border-ink/15">
                    <span className="text-[10px] text-ink/40 block">Control Algorithm</span>
                    <span className="text-sm font-bold text-ink/15">Fuzzy PID</span>
                    <span className="text-[10px] text-specimen block mt-0.5">48% Less Overshoot</span>
                  </div>
                </div>

                {/* Field Note from the Applicant */}
                <div className="p-3 rounded-lg bg-[#080812]/60 border border-ink/15 text-xs font-body text-ink/25">
                  <span className="font-mono text-[10px] text-specimen block mb-1 uppercase tracking-wider">
                    Researcher's Context Note:
                  </span>
                  <p className="text-xs leading-relaxed italic text-ink/25">
                    “In Ethiopia, biomass comprises over 85% of primary rural cooking energy, yet open combustion wastes the majority of chemical potential and causes severe indoor respiratory illness. This theoretical model proves an autothermal closed loop can convert agricultural waste into high-density fuel with zero external heat.”
                  </p>
                </div>

                {/* Interactive Anchor Jump */}
                <a
                  href="#reactor-instrument"
                  className="w-full py-2.5 px-3 rounded-sm bg-specimen hover:bg-specimen/80 text-[#080812] font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Gauge className="size-4" />
                  <span>Launch Live Kinetic Simulation Instrument ↓</span>
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

