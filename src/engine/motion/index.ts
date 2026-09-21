import { TargetAndTransition, Transition } from 'framer-motion';

const easeOutCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];
const easeInCubic: [number, number, number, number] = [0.7, 0, 0.84, 0];

export interface MotionRecipe {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  layout?: boolean | 'position' | 'size';
  transition?: Transition;
}

export interface MotionSeed {
  entrance: MotionRecipe;
  exit: MotionRecipe;
  hover: MotionRecipe;
  press: MotionRecipe;
  layout: MotionRecipe;
}

// 1. Silk Seed: Smooth, silky, fluid, elegant, continuous (Default for Academic Prestige)
export const silk: MotionSeed = {
  entrance: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.38, ease: easeOutCubic },
  },
  exit: {
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.22, ease: easeInCubic },
  },
  hover: {
    whileHover: { y: -3, transition: { duration: 0.24, ease: easeOutCubic } },
  },
  press: {
    whileTap: { scale: 0.98, transition: { duration: 0.1 } },
  },
  layout: {
    layout: true,
    transition: { duration: 0.32, ease: easeOutCubic },
  },
};

// 2. Spring Seed: Bouncy, tactile, energetic
export const spring: MotionSeed = {
  entrance: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: 'spring', stiffness: 380, damping: 26 },
  },
  exit: {
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  hover: {
    whileHover: { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 20 } },
  },
  press: {
    whileTap: { scale: 0.96, transition: { type: 'spring', stiffness: 500, damping: 25 } },
  },
  layout: {
    layout: true,
    transition: { type: 'spring', stiffness: 350, damping: 28 },
  },
};

// 3. Snap Seed: Snappy, quick, decisive, sharp
export const snap: MotionSeed = {
  entrance: {
    initial: { opacity: 0, y: 6 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.15, ease: 'easeOut' },
  },
  exit: {
    exit: { opacity: 0, y: 4 },
    transition: { duration: 0.12, ease: 'easeIn' },
  },
  hover: {
    whileHover: { y: -1, transition: { duration: 0.12 } },
  },
  press: {
    whileTap: { scale: 0.99, transition: { duration: 0.08 } },
  },
  layout: {
    layout: true,
    transition: { duration: 0.18, ease: 'easeInOut' },
  },
};

// Named Motion Keywords
export const motionKeywords = {
  // Looping heartbeat / live pulse
  pulseBeat: {
    animate: { scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] },
    transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
  },
  // Dialog / backdrop fade
  backdropFade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.24, ease: easeOutCubic },
  },
  // Modal scale & slide
  modalSilk: {
    initial: { opacity: 0, scale: 0.96, y: 16 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: 12 },
    transition: { duration: 0.3, ease: easeOutCubic },
  },
};
