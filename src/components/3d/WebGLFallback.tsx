import React from 'react';
import { Flame, RefreshCw, Layers } from 'lucide-react';

interface WebGLFallbackProps {
  temperature: number;
  closedLoopActive: boolean;
  className?: string;
}

export const WebGLFallback: React.FC<WebGLFallbackProps> = ({
  temperature,
  closedLoopActive,
  className = '',
}) => {
  // Thermal color calculations
  const getCoreColor = (temp: number) => {
    if (temp < 350) return '#c8553d'; // Specimen warm
    if (temp <= 550) return '#e07a5f'; // Incandescent specimen
    if (temp <= 750) return '#d4a373'; // Catalyst gold
    return '#38bdf8'; // Incandescent cyan/white
  };

  const coreColor = getCoreColor(temperature);

  return (
    <div 
      className={`relative w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 bg-[#080812] text-white rounded-none rounded-tl-2xl border border-ink/15 ${className}`}
      role="region"
      aria-label="2D Scientific Reactor Schematic Fallback"
    >
      {/* Background technical grid */}
      <div className="absolute inset-0 opacity-15 millimeter-grid pointer-events-none" />

      {/* Schematic SVG */}
      <div className="relative z-10 w-full max-w-[320px] aspect-[4/5] flex flex-col items-center justify-center">
        <svg viewBox="0 0 200 260" className="w-full h-full drop-shadow-md">
          {/* Outer Vessel Shell */}
          <rect
            x="50"
            y="40"
            width="100"
            height="180"
            rx="12"
            fill="none"
            stroke="#475569"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* Internal Reaction Core */}
          <rect
            x="65"
            y="70"
            width="70"
            height="120"
            rx="8"
            fill={coreColor}
            fillOpacity="0.25"
            stroke={coreColor}
            strokeWidth="2"
          />

          {/* Core glow filter effect */}
          <circle cx="100" cy="130" r="30" fill={coreColor} fillOpacity="0.4" className="animate-pulse" />

          {/* Recirculation Loop Pipe */}
          <path
            d="M 150 60 H 175 V 200 H 150"
            fill="none"
            stroke={closedLoopActive ? '#2d6a4f' : '#64748b'}
            strokeWidth={closedLoopActive ? '3' : '1.5'}
            strokeDasharray={closedLoopActive ? '6 3' : undefined}
            className={closedLoopActive ? 'animate-[dash_1.5s_linear_infinite]' : ''}
          />

          {/* Cyclone Top Reducer */}
          <polygon points="70,40 130,40 110,15 90,15" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
          
          {/* Base Fluidized Plenum */}
          <polygon points="65,220 135,220 120,245 80,245" fill="#334155" stroke="#64748b" strokeWidth="1.5" />

          {/* Distributor Plate */}
          <line x1="60" y1="205" x2="140" y2="205" stroke="#c8553d" strokeWidth="2" strokeDasharray="3 3" />

          {/* Labels */}
          <text x="100" y="130" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
            {temperature}°C
          </text>
          <text x="100" y="145" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
            REACTION CORE
          </text>

          {/* Recirculation text */}
          <text 
            x="185" 
            y="135" 
            textAnchor="start" 
            fill={closedLoopActive ? '#52b788' : '#94a3b8'} 
            fontSize="8" 
            fontFamily="monospace"
            transform="rotate(90 185 135)"
          >
            {closedLoopActive ? 'RECIRCULATION (73.6%)' : 'BYPASS CLOSED'}
          </text>
        </svg>
      </div>

      {/* Schematic Footnote */}
      <div className="relative z-10 mt-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#0d0d1a] border border-ink/15 text-[11px] font-mono text-white/40">
          <Layers className="size-3 text-specimen" />
          <span>2D Schematic Active · Hardware Accelerated WebGL Available on Desktop/Modern Mobile</span>
        </span>
      </div>
    </div>
  );
};
