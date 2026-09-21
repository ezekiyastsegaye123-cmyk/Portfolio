export type ReactorViewMode = 'reactor' | 'molecular' | 'recirculation';

export interface ReactorCore3DProps {
  temperature?: number;
  closedLoopActive?: boolean;
  compactMode?: boolean;
  className?: string;
  height?: string | number;
  onExploreInLab?: () => void;
}
