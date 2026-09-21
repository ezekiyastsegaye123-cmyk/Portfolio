import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FlaskConical, 
  ArrowUpRight, 
  FileText, 
  Satellite, 
  Wifi, 
  Search, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Sparkles, 
  Sliders, 
  Cpu, 
  Radio, 
  BookOpen,
  ArrowRight,
  Maximize2,
  X,
  Atom
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData, Project } from '../data/profileData';
import { PyrolysisSimulator } from './PyrolysisSimulator';
import { ProjectModal } from './ProjectModal';
import { silk, spring } from '../engine/motion';
import { cn } from '../lib/utils';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeFradscrFigure, setActiveFradscrFigure] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; caption: string } | null>(null);

  const fradscrFigures = [
    {
      id: 'pipeline',
      label: 'Pipeline Flow',
      title: 'End-to-End Pipeline & Schwabe Solar Cycle Teleconnection',
      url: '/images/fradscr/data_pipeline_overview.png',
      caption: 'SPEI ground truth time series (1901–2014), 3-class distribution, and Schwabe solar cycle alignment with Ethiopian highland tree-ring growth memory.',
      badge: 'SPEI & DENDRO MEMORY',
    },
    {
      id: 'forecast',
      label: '2025–35 Forecast',
      title: '11-Year Operational Decadal Forecast (2025–2035)',
      url: '/images/fradscr/forward_forecast_2025_2035.png',
      caption: '100 Monte Carlo draws/year tracking Solar Cycle 25→26 minimum and operational borehole dispatch thresholds.',
      badge: '11-YR MONTE CARLO FORECAST',
    },
    {
      id: 'matrix',
      label: 'Holdout Matrix',
      title: 'Geographic Holdout Confusion Matrix (Debrebirkan Selassie eth001)',
      url: '/images/fradscr/holdout_confusion_matrix.png',
      caption: 'Zero-leakage spatial holdout evaluated on independent 106-year test horizon in Debrebirkan Selassie.',
      badge: 'SPATIAL HOLDOUT (eth001)',
    },
    {
      id: 'weights',
      label: 'Feature Weights',
      title: 'Dual-Model Feature Importance Comparison',
      url: '/images/fradscr/feature_importance_dual.png',
      caption: 'Random Forest Mean Decrease Impurity vs. XGBoost Gain across Heliophysics and Dendrochronology metrics.',
      badge: 'RF vs. XGBOOST FEATURE GAIN',
    },
  ];

  const categories = ['All', 'Computational Chemistry', 'Environmental ML', 'EdTech & Systems', 'Civic Tech'];

  const filteredProjects = selectedCategory === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === selectedCategory);

  const pyrolysisProject = profileData.projects.find(p => p.id === 'pyrolysis-research')!;
  const majiAlertProject = profileData.projects.find(p => p.id === 'fradscr-maji-alert')!;
  const triviaBlitzProject = profileData.projects.find(p => p.id === 'trivia-blitz')!;
  const scholarshipProject = profileData.projects.find(p => p.id === 'scholarship-bot')!;

  return (
    <section data-slot="projects-section" id="research" className="py-16 md:py-24 border-b border-ink/10 dark:border-ink/10 bg-paper dark:bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-ink/15 dark:border-ink/15">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-specimen mb-1">
              <span>§ 01</span>
              <span>·</span>
              <span>SCIENTIFIC INQUIRY & COMPUTATIONAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#080812] dark:text-ink tracking-[-0.01em] leading-snug">
              Original Inventions & Research Exhibits
            </h2>
            <p className="mt-3 text-ink/70 dark:text-ink/70 text-sm sm:text-base leading-relaxed">
              Applying kinetic rate laws, reaction thermodynamics, and distributed algorithms to physical realities in developing economies — from closed-loop autothermal biomass biorefineries to space-weather drought forecasting and sub-5ms classroom networks.
            </p>
          </div>

          {/* Filter Bar */}
          <div 
            className="flex flex-wrap items-center gap-1.5 p-1 self-start md:self-end"
            role="tablist"
            aria-label="Research Categories"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={isSelected}
                  className={cn(
                    "min-h-[44px] px-3.5 py-2 rounded-none text-xs font-mono font-semibold transition-all focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none border",
                    isSelected
                      ? "bg-data-bg text-[#080812] dark:text-ink shadow-sm border-ink/15 dark:border-ink/15 font-bold"
                      : "bg-data-bg border-ink/10 text-ink/60 dark:text-ink/60 hover:text-[#080812] dark:hover:text-ink"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXHIBIT 01: FLAGSHIP RESEARCH CENTERPIECE (Full-Width Laboratory Workbench) */}
        {/* ========================================================================= */}
        {(selectedCategory === 'All' || selectedCategory === 'Computational Chemistry') && (
          <div id="reactor-instrument" className="mb-16 scroll-mt-24">
            
            <div className="p-6 sm:p-8 lg:p-10 rounded-none rounded-tl-3xl bg-paper dark:bg-[#0d0d1a] border-l-4 border-specimen shadow-xl relative overflow-hidden">
              
              {/* Corner Registration Mark */}
              <div className="absolute top-3 right-4 font-mono text-[10px] text-ink/40 select-none hidden sm:block">
                [EXHIBIT 01 // LEAD THEORETICAL FRAMEWORK]
              </div>

              {/* Exhibit Header */}
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-specimen/15 text-specimen border border-specimen/30 flex items-center gap-1.5">
                    <FlaskConical className="size-3.5 text-specimen" />
                    COMPUTATIONAL CHEMISTRY · PEER-REVIEW READY
                  </span>
                  <span className="text-xs font-mono text-ink/50">
                    2024 – Present · Addis Ababa, Ethiopia
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#080812] dark:text-ink tracking-tight leading-snug">
                  Integrated Theoretical Framework for Byproduct Reintegration in Closed-Loop Pyrolysis Systems
                </h3>
                
                <div className="mt-2 text-sm font-mono text-ink/60 dark:text-ink/60 flex flex-wrap items-center gap-2">
                  <span className="text-specimen font-bold">Role:</span> Lead Author & Solo Theoretical Researcher
                  <span className="text-ink/30 dark:text-ink/30">|</span>
                  <span className="text-reagent font-bold">Technical Advisory:</span> Chemical Society of Ethiopia (CSE)
                  <span className="text-ink/30 dark:text-ink/30">|</span>
                  <span>16-Page Research Report (272 KB LaTeX)</span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-ink/70 dark:text-ink/70 leading-relaxed font-body">
                  {pyrolysisProject.subtitle} Conventional open-loop pyrolysis wastes up to 60% of primary chemical enthalpy to drive endothermic thermal cracking. By formulating lumped Semyonov kinetics for lignocellulosic cleavage and modeling recirculation of solid heat carriers (5,940 kg/1,000 kg feed) and hot non-condensable syngas (&gt;480°C), this framework proves thermodynamic autothermal stability without supplemental external fossil fuels.
                </p>
              </div>

              {/* Embedded Live Laboratory Instrument */}
              <div className="mt-8">
                <PyrolysisSimulator />
              </div>

              {/* Chemical Mechanisms & Technical Derivations Strip */}
              <div className="mt-8 pt-8 border-t border-ink/15 dark:border-ink/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                
                <div className="p-4 rounded-none border-l-2 border-ink/15 bg-data-bg dark:bg-[#080812]/60">
                  <div className="font-mono font-bold text-specimen uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Activity className="size-3.5" />
                    Kinetic Rate Laws (Semyonov)
                  </div>
                  <p className="text-ink/70 dark:text-ink/70 leading-relaxed">
                    Modeled macromolecular cleavage: Hemicellulose cleavage (200–350°C), Cellulose transglycosylation into Levoglucosan (300–400°C), and Lignin β-O-4 aryl ether scission (250–900°C).
                  </p>
                </div>

                <div className="p-4 rounded-none border-l-2 border-ink/15 bg-data-bg dark:bg-[#080812]/60">
                  <div className="font-mono font-bold text-specimen uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Cpu className="size-3.5" />
                    In Situ Char-Bound AAEM Catalysis
                  </div>
                  <p className="text-ink/70 dark:text-ink/70 leading-relaxed">
                    Alkali and alkaline earth metals (K, Ca, Mg) in recycled biochar crack heavy tar vapours at 700–900°C into clean H₂ and CO syngas, eliminating secondary combustor fouling.
                  </p>
                </div>

                <div className="p-4 rounded-none border-l-2 border-ink/15 bg-data-bg dark:bg-[#080812]/60">
                  <div className="font-mono font-bold text-specimen uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sliders className="size-3.5" />
                    Fuzzy Logic Self-Tuning PID
                  </div>
                  <p className="text-ink/70 dark:text-ink/70 leading-relaxed">
                    Dynamic non-linear reactor feedback algorithms tuned to reduce thermal overshoot by 48%, maintaining strict fast-pyrolysis residence time under 2 seconds.
                  </p>
                </div>

              </div>

              {/* Action Bar: Download PDF Paper & Open Architecture */}
              <div className="mt-8 pt-6 border-t border-ink/15 dark:border-ink/15 flex flex-wrap items-center justify-between gap-4">
                
                <div className="flex items-center gap-2 text-xs font-mono text-ink/50">
                  <span className="size-2 rounded-full bg-reagent" />
                  <span>Verified 16-Page Research PDF · Advised by Chemical Society of Ethiopia (CSE)</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(pyrolysisProject)}
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-none text-xs font-mono font-bold bg-data-bg dark:bg-[#0d0d1a] text-ink/80 dark:text-ink/80 hover:bg-ink/15 dark:hover:bg-ink/15 border border-ink/15 dark:border-ink/15 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                  >
                    <span>Inspect Mathematical Derivations</span>
                    <ArrowUpRight className="size-4" />
                  </button>

                  <a
                    href="/pyrolysis-framework.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2 rounded-none text-xs font-mono font-bold bg-specimen hover:bg-specimen/90 text-[#080812] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                  >
                    <FileText className="size-4" />
                    <span>Download Full 16-Page LaTeX Paper (PDF)</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* EXHIBIT 02, 03, 04: BESPOKE COMPUTATIONAL EXHIBITS */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          
          {/* EXHIBIT 02: FRADSCR 'MAJI ALERT' (7/5 split) */}
          {(selectedCategory === 'All' || selectedCategory === 'Environmental ML') && (
            <div className="p-6 sm:p-8 rounded-none border-l-4 border-specimen bg-paper dark:bg-[#0d0d1a] shadow-sm hover:border-specimen/80 dark:hover:border-specimen/80 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Details (6 cols) */}
                <div className="lg:col-span-6 xl:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/30 flex items-center gap-1.5">
                      <Satellite className="size-3.5" />
                      ENVIRONMENTAL MACHINE LEARNING
                    </span>
                    <span className="text-xs font-mono text-ink/50">
                      EGATE Institute Capstone · 2024
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#080812] dark:text-ink mt-1">
                    FRADSCR: Space Weather & Terrestrial Drought Prediction (“Maji Alert”)
                  </h3>
                  <div className="text-xs font-mono text-ink/50 mt-1">
                    Role: Creator & Machine Learning Trainee (EGATE Advanced Track)
                  </div>

                  <p className="mt-4 text-sm text-ink/70 dark:text-ink/70 leading-relaxed font-body">
                    Sub-Saharan agricultural communities face catastrophic crop losses due to delayed drought warnings that rely strictly on lagging ground reports. As his Capstone Project for the selective EGATE fellowship, Ezekiyas engineered a multi-modal machine learning classification pipeline combining extraterrestrial solar flare activity (10.7 cm radio flux, geomagnetic storms) with terrestrial Landsat-8 Normalized Difference Vegetation Index (NDVI) to detect drought onset weeks ahead of standard hydrological systems.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-ink/80 dark:text-ink/80 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>End-to-end data pipeline built in Fedora Linux using Scikit-learn, NumPy & Pandas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Feature engineered time-lag cross-correlations between solar cycles and vegetation anomalies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Graduated from EGATE Capstone with top marks; model submitted as “Maji Alert”</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(majiAlertProject)}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-xs font-mono font-semibold bg-data-bg dark:bg-[#080812] text-[#080812] dark:text-ink hover:bg-ink/15 dark:hover:bg-ink/15 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none border border-ink/10"
                    >
                      <span>Inspect Feature Engineering & Data Pipeline</span>
                      <ArrowUpRight className="size-4" />
                    </button>

                    <a
                      href="https://github.com/ezekiyastsegaye123-cmyk/Fradscr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-xs font-mono font-semibold bg-ink/5 dark:bg-white/5 text-ink/80 dark:text-white/80 hover:bg-ink/10 dark:hover:bg-white/10 transition-colors border border-ink/10"
                    >
                      <GithubIcon className="size-3.5" />
                      <span>Source Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right 6 cols: Dedicated Research Figure & Model Artifact Console */}
                <div className="lg:col-span-6 xl:col-span-6 flex flex-col bg-[#080812] text-white rounded-none border border-ink/15 overflow-hidden shadow-xl">
                  {/* Console Header with Offline Preservation Note */}
                  <div className="p-3 bg-white/[0.04] border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#2563eb] animate-pulse" />
                      <span className="font-bold text-white text-[11px] tracking-wide">
                        FRADSCR · MODEL TELEMETRY SNAPSHOT
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-specimen/15 text-specimen border border-specimen/30 rounded-none font-semibold">
                      OFFLINE STABLE ARCHIVE
                    </span>
                  </div>

                  {/* Figure Tabs */}
                  <div className="flex flex-wrap border-b border-white/10 bg-black/40 p-1 gap-1">
                    {fradscrFigures.map((fig, idx) => {
                      const isActive = activeFradscrFigure === idx;
                      return (
                        <button
                          key={fig.id}
                          type="button"
                          onClick={() => setActiveFradscrFigure(idx)}
                          className={cn(
                            "text-[11px] font-mono px-2.5 py-1.5 rounded-none transition-all",
                            isActive 
                              ? "bg-specimen text-white font-bold shadow-sm"
                              : "text-white/50 hover:text-white hover:bg-white/5"
                          )}
                        >
                          {fig.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Figure Image Viewport */}
                  <div 
                    className="relative bg-black/60 p-2 cursor-pointer group flex items-center justify-center overflow-hidden min-h-[240px] sm:min-h-[270px]"
                    onClick={() => setLightboxImage(fradscrFigures[activeFradscrFigure])}
                    title="Click to view full-resolution figure"
                  >
                    <img 
                      src={fradscrFigures[activeFradscrFigure].url}
                      alt={fradscrFigures[activeFradscrFigure].title}
                      className="max-h-[260px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-white/90 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="size-3 text-specimen" />
                      <span>Click to view full-size</span>
                    </div>
                  </div>

                  {/* Figure Caption & Context */}
                  <div className="p-3.5 bg-white/[0.02] border-t border-white/10 text-xs font-mono text-white/70 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-white text-[11px]">
                        {fradscrFigures[activeFradscrFigure].title}
                      </span>
                      <span className="text-[10px] text-specimen uppercase tracking-wider shrink-0 font-semibold">
                        {fradscrFigures[activeFradscrFigure].badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/60 font-body leading-relaxed">
                      {fradscrFigures[activeFradscrFigure].caption}
                    </p>

                    {/* Offline Preservation & Reason Notice */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] text-white/40">
                      <span>Streamlit web app preserved as static telemetry to prevent cloud sleep</span>
                      <span className="text-reagent font-semibold">100% Offline Reliable</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* EXHIBIT 03: TRIVIA BLITZ (5/7 split - reversed) */}
          {(selectedCategory === 'All' || selectedCategory === 'EdTech & Systems') && (
            <div className="p-6 sm:p-8 rounded-none border-l-4 border-specimen bg-paper dark:bg-[#0d0d1a] shadow-sm hover:border-specimen/80 dark:hover:border-specimen/80 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Network Benchmark Card (5 cols) - Moved to left */}
                <div className="lg:col-span-5 p-5 rounded-none bg-[#080812] text-white font-mono text-xs border border-ink/15 space-y-4 order-last lg:order-first">
                  <div className="flex items-center justify-between pb-3 border-b border-ink/15 text-[11px] text-ink/40">
                    <span className="flex items-center gap-1.5 text-reagent font-bold">
                      <Activity className="size-3.5 animate-pulse" />
                      CONCURRENCY BENCHMARK
                    </span>
                    <span>RFC 6455 PROTOCOL</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-ink/40">Concurrent Students:</span>
                      <span className="text-reagent font-bold">100+ Live Sockets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/40">Broadcast Round-Trip:</span>
                      <span className="text-specimen font-bold">&lt; 4.8 ms (Local LAN)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/40">Memory Footprint:</span>
                      <span className="text-[#2563eb] font-bold">&lt; 38 MB RAM</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-none bg-[#0d0d1a]/90 border border-ink/15 text-[11px]">
                    <span className="text-ink/40 block text-[10px] uppercase">Classroom Deployment Reality:</span>
                    <p className="text-ink/70 font-body text-xs mt-1 italic">
                      “Designed so that even if the school’s fiber drops, quizzes continue seamlessly over local hotspot broadcast.”
                    </p>
                  </div>

                  <div className="pt-2 text-[10px] text-ink/50">
                    Zero external runtime dependencies. Multi-threaded dispatch architecture.
                  </div>
                </div>

                {/* Details (7 cols) - Moved to right */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-reagent/10 text-reagent border border-reagent/30 flex items-center gap-1.5">
                      <Wifi className="size-3.5" />
                      DISTRIBUTED NETWORKS & EDTECH
                    </span>
                    <span className="text-xs font-mono text-ink/50">
                      Production Classroom System · 2024
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#080812] dark:text-ink mt-1">
                    Trivia Blitz: High-Capacity Real-Time Classroom Quiz Platform
                  </h3>
                  <div className="text-xs font-mono text-ink/50 mt-1">
                    Role: Lead Systems Architect & Developer
                  </div>

                  <p className="mt-4 text-sm text-ink/70 dark:text-ink/70 leading-relaxed font-body">
                    Commercial classroom response applications require high-speed broadband and expensive recurring licenses — rendering them useless during frequent local internet outages in Ethiopia. To solve this in his secondary school, Ezekiyas built an open, ultra-lightweight real-time interactive quiz platform that runs on a single local server over local Wi-Fi or LAN with sub-5ms state synchronization.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-ink/80 dark:text-ink/80 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Pure Python RFC 6455 WebSocket hub built with zero third-party framework overhead</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Stress-tested to synchronize 100+ concurrent student devices with sub-5ms latency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Smartboard histogram projection mode giving teachers instant pedagogical feedback</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(triviaBlitzProject)}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-xs font-mono font-semibold bg-data-bg dark:bg-[#080812] text-[#080812] dark:text-ink hover:bg-ink/15 dark:hover:bg-ink/15 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none border border-ink/10"
                    >
                      <span>View Concurrency Architecture</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* EXHIBIT 04: SCHOLARSHIP MATCHER (Full width 12 cols, terminal below) */}
          {(selectedCategory === 'All' || selectedCategory === 'Civic Tech') && (
            <div className="p-6 sm:p-8 rounded-none border-l-4 border-specimen bg-paper dark:bg-[#0d0d1a] shadow-sm hover:border-specimen/80 dark:hover:border-specimen/80 transition-all">
              <div className="flex flex-col gap-8">
                
                {/* Details (Full Width) */}
                <div className="w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-specimen/10 text-specimen border border-specimen/30 flex items-center gap-1.5">
                      <Search className="size-3.5" />
                      CIVIC TECH & SCRAPING ENGINE
                    </span>
                    <span className="text-xs font-mono text-ink/50">
                      Active Community Project · 2024 – Present
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#080812] dark:text-ink mt-1">
                    Scholarship Matcher & Opportunity Aggregator
                  </h3>
                  <div className="text-xs font-mono text-ink/50 mt-1">
                    Role: Founder & Lead Developer
                  </div>

                  <p className="mt-4 text-sm text-ink/70 dark:text-ink/70 leading-relaxed font-body">
                    Thousands of high-potential students across East Africa miss life-changing university scholarships because deadlines are buried in scattered portals and paywalled by commercial agencies. Ezekiyas built an automated background crawler that systematically indexes verified funding opportunities and delivers personalized eligibility alerts directly to student mobile phones at zero cost.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-ink/80 dark:text-ink/80 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Automated web scrapers in Python with BeautifulSoup and scheduled background workers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Fuzzy criteria-matching matching prospective scholars by GPA, major, and nationality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-reagent shrink-0" />
                      <span>Zero-cost delivery directly to student handsets via lightweight mobile APIs</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(scholarshipProject)}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-xs font-mono font-semibold bg-data-bg dark:bg-[#080812] text-[#080812] dark:text-ink hover:bg-ink/15 dark:hover:bg-ink/15 transition-colors focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none border border-ink/10"
                    >
                      <span>Inspect Scraper Architecture</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Data Architecture Card (Terminal Below) */}
                <div className="w-full p-5 rounded-none bg-[#080812] text-white font-mono text-xs border border-ink/15 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-ink/15 text-[11px] text-ink/40">
                    <span className="flex items-center gap-1.5 text-specimen font-bold">
                      <Layers className="size-3.5" />
                      DATA PIPELINE
                    </span>
                    <span>PYTHON / SQLITE / REGEX</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-ink/40">Crawler Status:</span>
                      <span className="text-reagent font-bold">Continuous Asyncio Loop</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-ink/40">Indexed Programs:</span>
                      <span className="text-specimen font-bold">Global & Regional Portals</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-ink/40">Target Audience:</span>
                      <span className="text-[#2563eb] font-bold">East African Secondary Grads</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-none bg-[#0d0d1a]/90 border border-ink/15 text-[11px]">
                    <span className="text-ink/40 block text-[10px] uppercase">Civic Mission:</span>
                    <p className="text-ink/70 font-body text-xs mt-1 italic">
                      “Democratizing international higher education access for peers who cannot afford paid counselors.”
                    </p>
                  </div>

                  <div className="pt-2 text-[10px] text-ink/50">
                    Built to address educational equity in developing nations.
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      {/* High-Resolution Telemetry Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <div 
              className="relative max-w-5xl max-h-[92vh] w-full bg-[#080812] border border-white/20 p-4 sm:p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white">
                    {lightboxImage.title}
                  </h4>
                  <p className="text-xs font-mono text-specimen mt-0.5">
                    FRADSCR · Streamlit Telemetry Artifact Snapshot (Offline Archive)
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="flex justify-center bg-black/80 p-2 border border-white/10">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <p className="mt-4 text-xs sm:text-sm font-mono text-white/70 leading-relaxed">
                {lightboxImage.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
