import React from 'react';
import { motion } from 'framer-motion';

export const HeroAtomAnimation: React.FC<{ size?: number; className?: string }> = ({ 
  size = 52, 
  className = "" 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg bg-specimen/15 border border-specimen/40 shadow-[0_0_30px_rgba(200,85,61,0.35)] cursor-pointer group shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title="Computational Chemistry & Reaction Kinetics (Live Orbital Model)"
    >
      {/* Background Soft Chromatic Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-lg bg-specimen/25 blur-md -z-10 group-hover:bg-specimen/40"
      />

      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nucleusGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#c8553d" />
            <stop offset="100%" stopColor="#7c2d12" />
          </radialGradient>
          <filter id="atomGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbital Track 1: Tilted 30° */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="15"
            transform="rotate(30 50 50)"
            stroke="#c8553d"
            strokeWidth="1.8"
            strokeOpacity="0.6"
            strokeDasharray="3 2"
          />
          {/* Orbiting Electron 1 */}
          <motion.circle
            cx="86"
            cy="71"
            r="3.5"
            fill="#38bdf8"
            filter="url(#atomGlow)"
            animate={{
              r: [3, 4.2, 3],
              fill: ["#38bdf8", "#7dd3fc", "#38bdf8"],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Orbital Track 2: Tilted -30° (Reverse Spin) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="15"
            transform="rotate(-30 50 50)"
            stroke="#f59e0b"
            strokeWidth="1.8"
            strokeOpacity="0.65"
          />
          {/* Orbiting Electron 2 */}
          <motion.circle
            cx="14"
            cy="29"
            r="3.5"
            fill="#f59e0b"
            filter="url(#atomGlow)"
            animate={{
              r: [3.2, 4.5, 3.2],
              fill: ["#f59e0b", "#fde68a", "#f59e0b"],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Orbital Track 3: Tilted 90° (Vertical Harmonic) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="15"
            transform="rotate(90 50 50)"
            stroke="#52b788"
            strokeWidth="1.6"
            strokeOpacity="0.55"
            strokeDasharray="4 2"
          />
          {/* Orbiting Electron 3 */}
          <motion.circle
            cx="50"
            cy="92"
            r="3.2"
            fill="#52b788"
            filter="url(#atomGlow)"
            animate={{
              r: [2.8, 4.0, 2.8],
              fill: ["#52b788", "#a7f3d0", "#52b788"],
            }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Core Nucleus Cluster (Pulsing Energy Hub) */}
        <motion.circle
          cx="50"
          cy="50"
          r="9"
          fill="url(#nucleusGrad)"
          filter="url(#atomGlow)"
          animate={{
            r: [8, 10.5, 8],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center Hotspot Point */}
        <circle cx="48" cy="48" r="2.5" fill="#ffffff" opacity="0.9" />
      </svg>

      {/* Online Telemetry Blip */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-reagent opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-reagent border-2 border-[#080812]" />
      </span>
    </motion.div>
  );
};
