import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flame, Activity, Zap, CheckCircle2, FileText, ArrowRight, RefreshCw, Sliders, Rotate3d, Layers } from 'lucide-react';
import { spring, silk } from '../engine/motion';
import { cn } from '../lib/utils';
import { ReactorCore3D } from './3d/ReactorCore3D';

export const PyrolysisSimulator: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(480);
  const [closedLoopActive, setClosedLoopActive] = useState<boolean>(true);

  // Thermodynamic & Kinetic Model Calculations based on Ezekiyas's paper
  const model = useMemo(() => {
    // Phase decomposition kinetics
    const hemiDecomp = Math.min(100, Math.max(0, ((temperature - 200) / 150) * 100));
    const cellDecomp = Math.min(100, Math.max(0, ((temperature - 300) / 100) * 100));
    const ligDecomp = Math.min(100, Math.max(0, ((temperature - 250) / 650) * 100));

    // Yield distributions (fast pyrolysis peaks ~480-500°C)
    let bioOil = 0;
    let bioChar = 0;
    let syngas = 0;

    if (temperature < 350) {
      bioChar = Math.max(45, 80 - (temperature - 200) * 0.2);
      bioOil = Math.max(10, (temperature - 200) * 0.25);
      syngas = 100 - bioChar - bioOil;
    } else if (temperature <= 550) {
      // Optimal fast pyrolysis
      bioOil = 65 - Math.abs(temperature - 480) * 0.12;
      bioChar = Math.max(15, 35 - (temperature - 350) * 0.08);
      syngas = 100 - bioOil - bioChar;
    } else {
      // Secondary cracking into lighter gases & char-catalyzed cracking
      bioOil = Math.max(20, 60 - (temperature - 550) * 0.1);
      syngas = Math.min(65, 25 + (temperature - 550) * 0.11);
      bioChar = 100 - bioOil - syngas;
    }

    // Thermal efficiency: Closed loop achieves 73.6% around 480-550°C
    const effVariance = closedLoopActive ? (temperature >= 450 && temperature <= 600 ? 73.6 : 68.4) : 38.5;

    // Mechanism description
    let mechanism = "";
    let dominantSpecies = "";
    if (temperature < 300) {
      mechanism = "Hemicellulose cleavage & light oxygenate diffusion";
      dominantSpecies = "CO₂, Acetic Acid, Furans";
    } else if (temperature < 420) {
      mechanism = "Cellulose transglycosylation into Levoglucosan";
      dominantSpecies = "Levoglucosan, LMWPs, Organic Vapors";
    } else if (temperature <= 550) {
      mechanism = "Optimal Fast Pyrolysis & In Situ Hydrodeoxygenation (HDO)";
      dominantSpecies = "Deoxygenated Aromatics, Bio-Oil, Syngas";
    } else if (temperature <= 720) {
      mechanism = "Lignin β-O-4 radical scission & secondary cracking";
      dominantSpecies = "Phenolics, Syngas (CO + H₂)";
    } else {
      mechanism = "Char-catalyzed AAEM hot vapor cracking (700–900°C)";
      dominantSpecies = "H₂, CO, CH₄ (Nitrogen-Free Syngas)";
    }

    const isAutothermal = closedLoopActive && temperature >= 450;

    return {
      hemiDecomp: Math.round(hemiDecomp),
      cellDecomp: Math.round(cellDecomp),
      ligDecomp: Math.round(ligDecomp),
      bioOil: bioOil.toFixed(1),
      bioChar: bioChar.toFixed(1),
      syngas: syngas.toFixed(1),
      efficiency: effVariance.toFixed(1),
      mechanism,
      dominantSpecies,
      isAutothermal,
    };
  }, [temperature, closedLoopActive]);

  return (
    <div data-slot="pyrolysis-simulator" className="p-5 sm:p-7 rounded-none rounded-tl-2xl bg-[#080812] text-white border border-specimen/30 shadow-2xl relative overflow-hidden">
      
      {/* Background Technical Grid Motif */}
      <div className="absolute inset-0 opacity-10 millimeter-grid pointer-events-none" />

      {/* Console Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ink/15">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-sm bg-specimen/20 border border-specimen/40 flex items-center justify-center text-specimen">
            <Flame className="size-4 animate-pulse" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-specimen">
                Interactive Chemical Reactor Instrument
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-specimen/10 text-specimen border border-specimen/30 font-mono">
                FIG. 2 · MODEL
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-reagent/15 text-reagent border border-reagent/30 font-mono">
                ADVISED BY CHEMICAL SOCIETY OF ETHIOPIA (CSE)
              </span>
            </div>
            <h4 className="font-display font-bold text-base text-ink">
              Closed-Loop Pyrolysis Reactor Simulation
            </h4>
          </div>
        </div>

        {/* Closed-Loop Toggle with min-h-[44px] */}
        <motion.button
          {...spring.press}
          {...silk.hover}
          onClick={() => setClosedLoopActive(!closedLoopActive)}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-sm text-xs font-mono font-bold transition-all border",
            "focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none",
            closedLoopActive
              ? "bg-specimen/20 border-specimen text-specimen shadow-[0_0_15px_rgba(200,85,61,0.3)]"
              : "bg-ink/20 border-ink/40 text-ink/40"
          )}
        >
          {closedLoopActive ? '● Closed-Loop: 73.6% Autothermal' : '○ Open-Loop: 41.2% (Conventional)'}
        </motion.button>
      </div>

      {/* Primary Section: 3D Reactor Chamber & Mass Yield Analytics */}
      <div className="relative z-10 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Interactive 3D Reactor Core (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-specimen flex items-center gap-1.5">
              <Rotate3d className="size-3.5 text-specimen" />
              Live 3D Reaction Chamber & Particle Kinetics
            </span>
            <span className="text-[10px] font-mono text-ink/40 hidden sm:inline">
              Three.js · Arrhenius Velocity Dynamic
            </span>
          </div>
          
          <ReactorCore3D
            temperature={temperature}
            closedLoopActive={closedLoopActive}
            height={380}
            className="flex-1 min-h-[340px]"
          />
        </div>

        {/* Right: Calculated Yields & Heat Balance (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-sm bg-[#0d0d1a]/80 border border-ink/15 flex flex-col justify-between space-y-4">
          
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink/40 block mb-3">
              Predicted Mass Yield Fractions:
            </span>

            {/* Yield Bars */}
            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="flex justify-between text-ink/25 mb-1">
                  <span>Liquid Bio-Oil</span>
                  <span className="font-bold text-specimen">{model.bioOil}%</span>
                </div>
                <div className="w-full h-2 bg-ink/15 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-specimen transition-all duration-300"
                    style={{ width: `${model.bioOil}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-ink/25 mb-1">
                  <span>Non-Condensable Syngas</span>
                  <span className="font-bold text-blue-400">{model.syngas}%</span>
                </div>
                <div className="w-full h-2 bg-ink/15 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${model.syngas}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-ink/25 mb-1">
                  <span>Solid Carbon Biochar</span>
                  <span className="font-bold text-reagent">{model.bioChar}%</span>
                </div>
                <div className="w-full h-2 bg-ink/15 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-reagent transition-all duration-300"
                    style={{ width: `${model.bioChar}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Autothermal & Thermal Efficiency Badge */}
          <div className="pt-3 border-t border-ink/15 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-ink/40">System Thermal Efficiency:</span>
              <span className="text-base font-bold text-specimen font-mono">
                {model.efficiency}%
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className={cn("size-2 rounded-full", model.isAutothermal ? "bg-reagent animate-ping" : "bg-specimen")} />
              <span className={model.isAutothermal ? 'text-reagent font-bold' : 'text-ink/40'}>
                {model.isAutothermal ? 'Autothermal Equilibrium Met' : 'Requires Supplemental Preheat'}
              </span>
            </div>

            <motion.a
              {...spring.press}
              {...silk.hover}
              href="/pyrolysis-framework.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 min-h-[44px] w-full py-2.5 px-3 rounded-sm text-xs font-mono font-bold bg-specimen hover:opacity-90 text-[#080812] transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
            >
              <FileText className="size-3.5" />
              <span>Inspect 16-Page Paper Calculations</span>
            </motion.a>
          </div>

        </div>

      </div>

      {/* Secondary Section: Temperature Controls & Dynamic Reaction Pathway */}
      <div className="relative z-10 mt-6 pt-6 border-t border-ink/15 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Temperature Slider & Kinetic Presets (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label htmlFor="temp-slider" className="text-xs font-mono text-ink/40 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="size-3 text-specimen" />
                Reactor Temperature (T<sub>pyro</sub>)
              </label>
              <div className="text-2xl font-mono font-bold text-specimen">
                {temperature}°C
                <span className="text-xs text-ink/40 font-normal ms-1">
                  ({(temperature + 273.15).toFixed(1)} K)
                </span>
              </div>
            </div>

            <input
              id="temp-slider"
              type="range"
              min="200"
              max="900"
              step="10"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              aria-label="Reactor Temperature Slider"
              className="w-full h-2.5 bg-ink/15 rounded-sm appearance-none cursor-pointer accent-[#c8553d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-specimen"
            />

            <div className="flex justify-between text-[10px] font-mono text-ink/40 mt-1">
              <span>200°C (Hemicellulose)</span>
              <span>480°C (Fast Pyrolysis)</span>
              <span>900°C (Tar Cracking)</span>
            </div>
          </div>

          {/* Quick Preset Buttons with min-h-[44px] */}
          <div>
            <span className="text-[11px] font-mono text-ink/40 block mb-2 uppercase tracking-wider">
              Theoretical Kinetic Regimes:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: 'Hemicellulose', temp: 280 },
                { label: 'Fast Pyrolysis', temp: 480 },
                { label: 'Syngas Loop', temp: 650 },
                { label: 'Tar Cracking', temp: 800 },
              ].map((preset) => (
                <motion.button
                  key={preset.temp}
                  {...spring.press}
                  {...silk.hover}
                  onClick={() => setTemperature(preset.temp)}
                  className={cn(
                    "min-h-[44px] px-2.5 py-1.5 rounded-sm text-xs font-mono transition-all text-center border",
                    "focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none",
                    temperature === preset.temp
                      ? "bg-specimen text-[#080812] font-bold border-specimen"
                      : "bg-[#0d0d1a]/80 text-ink/25 border-ink/15 hover:border-ink/40"
                  )}
                >
                  {preset.label}
                  <span className="block text-[10px] opacity-75">{preset.temp}°C</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Dynamic Mechanism Box (5 cols) */}
        <div className="lg:col-span-5 p-4 rounded-sm bg-[#0d0d1a]/90 border border-ink/15 text-xs flex flex-col justify-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-specimen block mb-1">
            Active Decomposition Pathway:
          </span>
          <p className="font-display font-bold text-ink text-sm leading-snug">
            {model.mechanism}
          </p>
          <div className="mt-2 text-[11px] text-ink/40 flex items-center gap-1.5">
            <span className="font-mono text-specimen">Species:</span> {model.dominantSpecies}
          </div>
        </div>

      </div>

    </div>
  );
};


