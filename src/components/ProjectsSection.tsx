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
  ArrowRight
} from 'lucide-react';
import { profileData, Project } from '../data/profileData';
import { PyrolysisSimulator } from './PyrolysisSimulator';
import { ProjectModal } from './ProjectModal';
import { silk, spring } from '../engine/motion';
import { cn } from '../lib/utils';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Computational Chemistry', 'Environmental ML', 'EdTech & Systems', 'Civic Tech'];

  const filteredProjects = selectedCategory === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === selectedCategory);

  const pyrolysisProject = profileData.projects.find(p => p.id === 'pyrolysis-research')!;
  const majiAlertProject = profileData.projects.find(p => p.id === 'fradscr-maji-alert')!;
  const triviaBlitzProject = profileData.projects.find(p => p.id === 'trivia-blitz')!;
  const scholarshipProject = profileData.projects.find(p => p.id === 'scholarship-bot')!;

  return (
    <section data-slot="projects-section" id="research" className="py-16 md:py-24 border-b border-academic-200 dark:border-academic-800 bg-academic-50/70 dark:bg-academic-950 archival-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Section Index Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-academic-200/80 dark:border-academic-800/80">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
              <span>§ 01</span>
              <span>·</span>
              <span>SCIENTIFIC INQUIRY & COMPUTATIONAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-academic-950 dark:text-white tracking-[-0.01em] leading-snug">
              Original Inventions & Research Exhibits
            </h2>
            <p className="mt-3 text-academic-700 dark:text-academic-300 text-sm sm:text-base leading-relaxed">
              Applying kinetic rate laws, reaction thermodynamics, and distributed algorithms to physical realities in developing economies — from closed-loop autothermal biomass biorefineries to space-weather drought forecasting and sub-5ms classroom networks.
            </p>
          </div>

          {/* Filter Bar */}
          <div 
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-academic-100 dark:bg-academic-900 border border-academic-200 dark:border-academic-800 self-start md:self-end"
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
                    "min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none",
                    isSelected
                      ? "bg-white dark:bg-academic-800 text-academic-950 dark:text-white shadow-sm border border-academic-300 dark:border-academic-700 font-bold"
                      : "text-academic-600 dark:text-academic-400 hover:text-academic-950 dark:hover:text-white"
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
            
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-academic-900 border-2 border-amber-500/30 dark:border-amber-500/30 shadow-xl relative overflow-hidden">
              
              {/* Corner Registration Mark */}
              <div className="absolute top-3 right-4 font-mono text-[10px] text-academic-400 select-none hidden sm:block">
                [EXHIBIT 01 // LEAD THEORETICAL FRAMEWORK]
              </div>

              {/* Exhibit Header */}
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                    <FlaskConical className="size-3.5 text-amber-600 dark:text-amber-400" />
                    COMPUTATIONAL CHEMISTRY · PEER-REVIEW READY
                  </span>
                  <span className="text-xs font-mono text-academic-500">
                    2024 – Present · Addis Ababa, Ethiopia
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-academic-950 dark:text-white tracking-tight leading-snug">
                  Integrated Theoretical Framework for Byproduct Reintegration in Closed-Loop Pyrolysis Systems
                </h3>
                
                <div className="mt-2 text-sm font-mono text-academic-600 dark:text-academic-300 flex flex-wrap items-center gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Role:</span> Lead Author & Solo Theoretical Researcher
                  <span className="text-academic-300 dark:text-academic-700">|</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Technical Advisory:</span> Chemical Society of Ethiopia (CSE)
                  <span className="text-academic-300 dark:text-academic-700">|</span>
                  <span>16-Page Research Report (272 KB LaTeX)</span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-academic-700 dark:text-academic-300 leading-relaxed font-sans">
                  {pyrolysisProject.subtitle} Conventional open-loop pyrolysis wastes up to 60% of primary chemical enthalpy to drive endothermic thermal cracking. By formulating lumped Semyonov kinetics for lignocellulosic cleavage and modeling recirculation of solid heat carriers (5,940 kg/1,000 kg feed) and hot non-condensable syngas (&gt;480°C), this framework proves thermodynamic autothermal stability without supplemental external fossil fuels.
                </p>
              </div>

              {/* Embedded Live Laboratory Instrument */}
              <div className="mt-8">
                <PyrolysisSimulator />
              </div>

              {/* Chemical Mechanisms & Technical Derivations Strip */}
              <div className="mt-8 pt-8 border-t border-academic-200 dark:border-academic-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                
                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-950/60 border border-academic-200 dark:border-academic-800">
                  <div className="font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Activity className="size-3.5" />
                    Kinetic Rate Laws (Semyonov)
                  </div>
                  <p className="text-academic-700 dark:text-academic-300 leading-relaxed">
                    Modeled macromolecular cleavage: Hemicellulose cleavage (200–350°C), Cellulose transglycosylation into Levoglucosan (300–400°C), and Lignin β-O-4 aryl ether scission (250–900°C).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-950/60 border border-academic-200 dark:border-academic-800">
                  <div className="font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Cpu className="size-3.5" />
                    In Situ Char-Bound AAEM Catalysis
                  </div>
                  <p className="text-academic-700 dark:text-academic-300 leading-relaxed">
                    Alkali and alkaline earth metals (K, Ca, Mg) in recycled biochar crack heavy tar vapours at 700–900°C into clean H₂ and CO syngas, eliminating secondary combustor fouling.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-academic-50 dark:bg-academic-950/60 border border-academic-200 dark:border-academic-800">
                  <div className="font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sliders className="size-3.5" />
                    Fuzzy Logic Self-Tuning PID
                  </div>
                  <p className="text-academic-700 dark:text-academic-300 leading-relaxed">
                    Dynamic non-linear reactor feedback algorithms tuned to reduce thermal overshoot by 48%, maintaining strict fast-pyrolysis residence time under 2 seconds.
                  </p>
                </div>

              </div>

              {/* Action Bar: Download PDF Paper & Open Architecture */}
              <div className="mt-8 pt-6 border-t border-academic-200 dark:border-academic-800 flex flex-wrap items-center justify-between gap-4">
                
                <div className="flex items-center gap-2 text-xs font-mono text-academic-500">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span>Verified 16-Page Research PDF · Advised by Chemical Society of Ethiopia (CSE)</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(pyrolysisProject)}
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-academic-100 dark:bg-academic-800 text-academic-800 dark:text-academic-200 hover:bg-academic-200 dark:hover:bg-academic-700 border border-academic-300 dark:border-academic-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    <span>Inspect Mathematical Derivations</span>
                    <ArrowUpRight className="size-4" />
                  </button>

                  <a
                    href="/pyrolysis-framework.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold bg-amber-500 hover:bg-amber-400 text-academic-950 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
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
          
          {/* EXHIBIT 02: FRADSCR 'MAJI ALERT' */}
          {(selectedCategory === 'All' || selectedCategory === 'Environmental ML') && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Details (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                      <Satellite className="size-3.5" />
                      ENVIRONMENTAL MACHINE LEARNING
                    </span>
                    <span className="text-xs font-mono text-academic-500">
                      EGATE Institute Capstone · 2024
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    FRADSCR: Space Weather & Terrestrial Drought Prediction (“Maji Alert”)
                  </h3>
                  <div className="text-xs font-mono text-academic-500 mt-1">
                    Role: Creator & Machine Learning Trainee (EGATE Advanced Track)
                  </div>

                  <p className="mt-4 text-sm text-academic-700 dark:text-academic-300 leading-relaxed">
                    Sub-Saharan agricultural communities face catastrophic crop losses due to delayed drought warnings that rely strictly on lagging ground reports. As his Capstone Project for the selective EGATE fellowship, Ezekiyas engineered a multi-modal machine learning classification pipeline combining extraterrestrial solar flare activity (10.7 cm radio flux, geomagnetic storms) with terrestrial Landsat-8 Normalized Difference Vegetation Index (NDVI) to detect drought onset weeks ahead of standard hydrological systems.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-academic-800 dark:text-academic-200 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>End-to-end data pipeline built in Fedora Linux using Scikit-learn, NumPy & Pandas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Feature engineered time-lag cross-correlations between solar cycles and vegetation anomalies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Graduated from EGATE Capstone with top marks; model submitted as “Maji Alert”</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(majiAlertProject)}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-academic-100 dark:bg-academic-800 text-academic-900 dark:text-academic-100 hover:bg-academic-200 dark:hover:bg-academic-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                    >
                      <span>Inspect Feature Engineering & Data Pipeline</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Telemetry Console Mockup (5 cols) */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-academic-950 text-white font-mono text-xs border border-academic-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-academic-800 text-[11px] text-academic-400">
                    <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                      <Radio className="size-3.5 animate-pulse" />
                      TELEMETRY PIPELINE
                    </span>
                    <span>FEDORA_ENV / SCIKIT</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-academic-400">Solar Flare Index (F10.7 Flux):</span>
                      <span className="text-amber-400 font-bold">142.8 sfu</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-academic-400">Landsat-8 Terrestrial NDVI:</span>
                      <span className="text-emerald-400 font-bold">0.34 (Deficit -18%)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-academic-400">Soil Moisture Anomaly Index:</span>
                      <span className="text-blue-400 font-bold">-1.82 σ (Moderate Stress)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-academic-900/90 border border-academic-800 text-[11px]">
                    <span className="text-academic-400 block text-[10px] uppercase">Ensemble Classification Vector:</span>
                    <span className="text-emerald-400 font-bold block mt-1">
                      ALERT LEVEL 2: Early Warning Onset (+21 Days)
                    </span>
                    <span className="text-academic-500 text-[10px] block mt-0.5">
                      Confidence: 87.4% · False Positive Rate: &lt;5.2%
                    </span>
                  </div>

                  <div className="pt-2 text-[10px] text-academic-500">
                    EGATE Capstone Defense · Developed in Fedora Linux terminal environment.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* EXHIBIT 03: TRIVIA BLITZ */}
          {(selectedCategory === 'All' || selectedCategory === 'EdTech & Systems') && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Details (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <Wifi className="size-3.5" />
                      DISTRIBUTED NETWORKS & EDTECH
                    </span>
                    <span className="text-xs font-mono text-academic-500">
                      Production Classroom System · 2024
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    Trivia Blitz: High-Capacity Real-Time Classroom Quiz Platform
                  </h3>
                  <div className="text-xs font-mono text-academic-500 mt-1">
                    Role: Lead Systems Architect & Developer
                  </div>

                  <p className="mt-4 text-sm text-academic-700 dark:text-academic-300 leading-relaxed">
                    Commercial classroom response applications require high-speed broadband and expensive recurring licenses — rendering them useless during frequent local internet outages in Ethiopia. To solve this in his secondary school, Ezekiyas built an open, ultra-lightweight real-time interactive quiz platform that runs on a single local server over local Wi-Fi or LAN with sub-5ms state synchronization.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-academic-800 dark:text-academic-200 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Pure Python RFC 6455 WebSocket hub built with zero third-party framework overhead</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Stress-tested to synchronize 100+ concurrent student devices with sub-5ms latency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Smartboard histogram projection mode giving teachers instant pedagogical feedback</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(triviaBlitzProject)}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-academic-100 dark:bg-academic-800 text-academic-900 dark:text-academic-100 hover:bg-academic-200 dark:hover:bg-academic-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                    >
                      <span>View Concurrency Architecture</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Network Benchmark Card (5 cols) */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-academic-950 text-white font-mono text-xs border border-academic-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-academic-800 text-[11px] text-academic-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Activity className="size-3.5 animate-pulse" />
                      CONCURRENCY BENCHMARK
                    </span>
                    <span>RFC 6455 PROTOCOL</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-academic-400">Concurrent Students:</span>
                      <span className="text-emerald-400 font-bold">100+ Live Sockets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-academic-400">Broadcast Round-Trip:</span>
                      <span className="text-amber-400 font-bold">&lt; 4.8 ms (Local LAN)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-academic-400">Memory Footprint:</span>
                      <span className="text-blue-400 font-bold">&lt; 38 MB RAM</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-academic-900/90 border border-academic-800 text-[11px]">
                    <span className="text-academic-400 block text-[10px] uppercase">Classroom Deployment Reality:</span>
                    <p className="text-academic-200 font-sans text-xs mt-1 italic">
                      “Designed so that even if the school’s fiber drops, quizzes continue seamlessly over local hotspot broadcast.”
                    </p>
                  </div>

                  <div className="pt-2 text-[10px] text-academic-500">
                    Zero external runtime dependencies. Multi-threaded dispatch architecture.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* EXHIBIT 04: SCHOLARSHIP MATCHER */}
          {(selectedCategory === 'All' || selectedCategory === 'Civic Tech') && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-sm hover:border-amber-400/80 dark:hover:border-amber-500/80 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Details (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                      <Search className="size-3.5" />
                      CIVIC TECH & SCRAPING ENGINE
                    </span>
                    <span className="text-xs font-mono text-academic-500">
                      Active Community Project · 2024 – Present
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-academic-950 dark:text-white mt-1">
                    Scholarship Matcher & Opportunity Aggregator
                  </h3>
                  <div className="text-xs font-mono text-academic-500 mt-1">
                    Role: Founder & Lead Developer
                  </div>

                  <p className="mt-4 text-sm text-academic-700 dark:text-academic-300 leading-relaxed">
                    Thousands of high-potential students across East Africa miss life-changing university scholarships because deadlines are buried in scattered portals and paywalled by commercial agencies. Ezekiyas built an automated background crawler that systematically indexes verified funding opportunities and delivers personalized eligibility alerts directly to student mobile phones at zero cost.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-academic-800 dark:text-academic-200 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Automated web scrapers in Python with BeautifulSoup and scheduled background workers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Fuzzy criteria-matching matching prospective scholars by GPA, major, and nationality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Zero-cost delivery directly to student handsets via lightweight mobile APIs</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(scholarshipProject)}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-academic-100 dark:bg-academic-800 text-academic-900 dark:text-academic-100 hover:bg-academic-200 dark:hover:bg-academic-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                    >
                      <span>Inspect Scraper Architecture</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Data Architecture Card (5 cols) */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-academic-950 text-white font-mono text-xs border border-academic-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-academic-800 text-[11px] text-academic-400">
                    <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <Layers className="size-3.5" />
                      DATA PIPELINE
                    </span>
                    <span>PYTHON / SQLITE / REGEX</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-academic-400">Crawler Status:</span>
                      <span className="text-emerald-400 font-bold">Continuous Asyncio Loop</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-academic-400">Indexed Programs:</span>
                      <span className="text-amber-400 font-bold">Global & Regional Portals</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-academic-400">Target Audience:</span>
                      <span className="text-blue-400 font-bold">East African Secondary Grads</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-academic-900/90 border border-academic-800 text-[11px]">
                    <span className="text-academic-400 block text-[10px] uppercase">Civic Mission:</span>
                    <p className="text-academic-200 font-sans text-xs mt-1 italic">
                      “Democratizing international higher education access for peers who cannot afford paid counselors.”
                    </p>
                  </div>

                  <div className="pt-2 text-[10px] text-academic-500">
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
    </section>
  );
};
