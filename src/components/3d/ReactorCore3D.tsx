import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rotate3d, 
  Maximize2, 
  Flame, 
  Activity, 
  Sparkles, 
  RefreshCw, 
  Eye, 
  Play, 
  Pause,
  Layers,
  Compass,
  Cpu
} from 'lucide-react';
import { WebGLFallback } from './WebGLFallback';
import { ReactorCore3DProps, ReactorViewMode } from './types';
import { cn } from '../../lib/utils';
import { spring, silk } from '../../engine/motion';

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export const ReactorCore3D: React.FC<ReactorCore3DProps> = ({
  temperature = 480,
  closedLoopActive = true,
  compactMode = false,
  backgroundMode = false,
  hideHUD = false,
  initialViewMode = 'reactor',
  className = '',
  height,
  onExploreInLab,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<ReactorViewMode>(initialViewMode);
  const [activePreset, setActivePreset] = useState<string>('isometric');
  const [fps, setFps] = useState<number>(60);

  // References to keep across re-renders for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animFrameRef = useRef<number | null>(null);
  
  // 3D Objects that need live updates
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const coreLightRef = useRef<THREE.PointLight | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const recirculationParticlesRef = useRef<THREE.Points | null>(null);
  const loopTubeMeshRef = useRef<THREE.Mesh | null>(null);
  const molecularGroupRef = useRef<THREE.Group | null>(null);
  const reactorGroupRef = useRef<THREE.Group | null>(null);

  // Interaction State
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationMomentumRef = useRef<{ x: number; y: number }>({ x: 0, y: 0.003 });
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.15, y: 0.35 });

  // Dynamic Temperature Thermal Palette
  const thermalColors = useMemo(() => {
    // 200°C to 900°C mapping
    const tNorm = Math.min(1, Math.max(0, (temperature - 200) / 700));
    
    // Core glow color
    let hex = 0xf59e0b; // Gold default
    let emissiveHex = 0xd97706;
    let lightHex = 0xfbbf24;
    let particleHex = 0xfcd34d;

    if (temperature < 350) {
      hex = 0x991b1b; // Ember red
      emissiveHex = 0x7f1d1d;
      lightHex = 0xef4444;
      particleHex = 0xf87171;
    } else if (temperature <= 550) {
      hex = 0xf59e0b; // Incandescent gold
      emissiveHex = 0xb45309;
      lightHex = 0xfbbf24;
      particleHex = 0xfde68a;
    } else if (temperature <= 750) {
      hex = 0x0ea5e9; // Cyan-electric high cracking
      emissiveHex = 0x0284c7;
      lightHex = 0x38bdf8;
      particleHex = 0xbae6fd;
    } else {
      hex = 0xe0e7ff; // White-hot plasma
      emissiveHex = 0x6366f1;
      lightHex = 0x818cf8;
      particleHex = 0xffffff;
    }

    return { hex, emissiveHex, lightHex, particleHex, tNorm };
  }, [temperature]);

  // Check WebGL availability on mount
  useEffect(() => {
    const supported = checkWebGLSupport();
    setWebGLSupported(supported);
    if (!supported) setIsLoading(false);
  }, []);

  // Main Three.js Scene Lifecycle
  useEffect(() => {
    if (!webGLSupported) return;
    const container = canvasContainerRef.current;
    if (!container) return;

    let width = container.clientWidth || (compactMode ? 360 : 640);
    let height = container.clientHeight || (compactMode ? 260 : 420);

    // Mobile detection for DPR throttling per 3d-web-experience skill
    const isMobile = typeof window !== 'undefined' && (
      window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    );

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x030712, 0.035);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.2);
    cameraRef.current = camera;

    // 3. Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile, // Disable MSAA on mobile for 60fps performance
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (err) {
      console.error('Failed to initialize Three.js WebGLRenderer:', err);
      setWebGLSupported(false);
      setIsLoading(false);
      return;
    }

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.4);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    const coreLight = new THREE.PointLight(thermalColors.lightHex, 3.2, 8, 1.2);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);
    coreLightRef.current = coreLight;

    // 5. Build Reactor Core Hierarchy
    const reactorGroup = new THREE.Group();
    reactorGroup.visible = initialViewMode === 'reactor';
    scene.add(reactorGroup);
    reactorGroupRef.current = reactorGroup;

    // Outer Translucent Quartz Cylinder
    const quartzGeo = new THREE.CylinderGeometry(1.25, 1.25, 4.4, 32, 1, true);
    const quartzMat = new THREE.MeshPhysicalMaterial({
      transparent: true,
      opacity: 0.22,
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.82,
      thickness: 0.4,
      color: 0x38bdf8,
      side: THREE.DoubleSide,
    });
    const quartzMesh = new THREE.Mesh(quartzGeo, quartzMat);
    reactorGroup.add(quartzMesh);

    // Structural Brushed Metallic Flanges & Reinforcement Rings
    const flangeMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.85,
      roughness: 0.3,
    });
    [-2.2, -1.0, 0.5, 2.2].forEach((yPos) => {
      const ringGeo = new THREE.TorusGeometry(1.28, 0.045, 16, 48);
      const ringMesh = new THREE.Mesh(ringGeo, flangeMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = yPos;
      reactorGroup.add(ringMesh);
    });

    // Top Cyclone Reducer & Exhaust Hood
    const topConeGeo = new THREE.ConeGeometry(1.25, 0.9, 32, 1, true);
    const topConeMesh = new THREE.Mesh(topConeGeo, flangeMat);
    topConeMesh.position.y = 2.65;
    reactorGroup.add(topConeMesh);

    // Top Exhaust Pipe
    const topPipeGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.8, 16);
    const topPipeMesh = new THREE.Mesh(topPipeGeo, flangeMat);
    topPipeMesh.position.y = 3.3;
    reactorGroup.add(topPipeMesh);

    // Bottom Fluidized Plenum
    const baseConeGeo = new THREE.ConeGeometry(1.25, 0.9, 32, 1, true);
    const baseConeMesh = new THREE.Mesh(baseConeGeo, flangeMat);
    baseConeMesh.rotation.x = Math.PI;
    baseConeMesh.position.y = -2.65;
    reactorGroup.add(baseConeMesh);

    // Perforated Fluidized Distributor Plate
    const plateGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.08, 32);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.6,
      roughness: 0.4,
      wireframe: true,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.y = -2.15;
    reactorGroup.add(plateMesh);

    // Central Glowing Thermal Core (Volumetric Reaction Zone)
    const coreGeo = new THREE.CylinderGeometry(0.72, 0.72, 3.4, 24, 8, true);
    const coreMat = new THREE.MeshStandardMaterial({
      color: thermalColors.hex,
      emissive: thermalColors.emissiveHex,
      emissiveIntensity: 1.6,
      roughness: 0.35,
      metalness: 0.1,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    reactorGroup.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // 6. Closed-Loop Syngas Recirculation Circuit (Toroidal Bypass Tube)
    const curvePoints = [
      new THREE.Vector3(0, 3.2, 0),
      new THREE.Vector3(1.6, 3.0, 0),
      new THREE.Vector3(2.0, 1.5, 0.4),
      new THREE.Vector3(2.1, -0.5, 0.4),
      new THREE.Vector3(1.7, -2.2, 0),
      new THREE.Vector3(0.5, -2.5, 0),
      new THREE.Vector3(0, -2.6, 0),
    ];
    const recirculationCurve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(recirculationCurve, 64, 0.085, 16, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: closedLoopActive ? 0x10b981 : 0x475569,
      emissive: closedLoopActive ? 0x059669 : 0x000000,
      emissiveIntensity: closedLoopActive ? 1.2 : 0,
      metalness: 0.75,
      roughness: 0.25,
      transparent: true,
      opacity: 0.85,
    });
    const loopTubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    reactorGroup.add(loopTubeMesh);
    loopTubeMeshRef.current = loopTubeMesh;

    // Recirculation Flow Particles along the curve
    const recircCount = 120;
    const recircGeo = new THREE.BufferGeometry();
    const recircPositions = new Float32Array(recircCount * 3);
    const recircProgress = new Float32Array(recircCount);
    for (let i = 0; i < recircCount; i++) {
      recircProgress[i] = i / recircCount;
      const pt = recirculationCurve.getPoint(recircProgress[i]);
      recircPositions[i * 3] = pt.x;
      recircPositions[i * 3 + 1] = pt.y;
      recircPositions[i * 3 + 2] = pt.z;
    }
    recircGeo.setAttribute('position', new THREE.BufferAttribute(recircPositions, 3));
    const recircMat = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.075,
      transparent: true,
      opacity: closedLoopActive ? 0.9 : 0.05,
      blending: THREE.AdditiveBlending,
    });
    const recirculationPoints = new THREE.Points(recircGeo, recircMat);
    reactorGroup.add(recirculationPoints);
    recirculationParticlesRef.current = recirculationPoints;

    // 7. Arrhenius Fluidized Bed Particle Swarm
    const particleCount = isMobile ? 450 : 850;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPhases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical coordinates
      const r = Math.sqrt(Math.random()) * 0.95;
      const theta = Math.random() * Math.PI * 2;
      const y = -2.1 + Math.random() * 3.8;

      positions[i * 3] = r * Math.cos(theta);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = r * Math.sin(theta);

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = 0.02 + Math.random() * 0.04;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      originalPhases[i] = Math.random() * Math.PI * 2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: thermalColors.particleHex,
      size: isMobile ? 0.065 : 0.055,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    reactorGroup.add(particlePoints);
    particlesRef.current = particlePoints;

    // 8. Build Alternate Mode: Macromolecular Cleavage Lattice (Ball & Stick)
    const molecularGroup = new THREE.Group();
    molecularGroup.visible = initialViewMode === 'molecular';
    scene.add(molecularGroup);
    molecularGroupRef.current = molecularGroup;

    // Atom definitions (Levoglucosan pyranose ring intermediate)
    const atomMatCarbon = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.4, roughness: 0.3 });
    const atomMatOxygen = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.3, roughness: 0.2, emissive: 0x7f1d1d, emissiveIntensity: 0.5 });
    const atomMatHydrogen = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.2, roughness: 0.2 });
    const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6, roughness: 0.3 });

    const atomNodes = [
      { type: 'C', pos: [0, 0.6, 0.8] },
      { type: 'C', pos: [0.9, 0.4, 0] },
      { type: 'C', pos: [0.7, -0.6, -0.7] },
      { type: 'C', pos: [-0.6, -0.7, -0.6] },
      { type: 'C', pos: [-0.9, 0.3, 0] },
      { type: 'O', pos: [-0.3, 0.8, -0.7] }, // Ring oxygen
      { type: 'O', pos: [1.6, 0.8, 0.3] }, // OH
      { type: 'O', pos: [1.2, -1.2, -1.0] }, // OH
      { type: 'O', pos: [-1.2, -1.3, -0.9] }, // Anhydro bridge
      { type: 'H', pos: [0, 1.4, 1.2] },
      { type: 'H', pos: [1.8, -0.2, 0.2] },
      { type: 'H', pos: [-1.7, 0.5, 0.3] },
    ];

    const sphereGeoC = new THREE.SphereGeometry(0.3, 24, 24);
    const sphereGeoO = new THREE.SphereGeometry(0.28, 24, 24);
    const sphereGeoH = new THREE.SphereGeometry(0.18, 16, 16);

    atomNodes.forEach((node) => {
      let geo = sphereGeoC;
      let mat = atomMatCarbon;
      if (node.type === 'O') {
        geo = sphereGeoO;
        mat = atomMatOxygen;
      } else if (node.type === 'H') {
        geo = sphereGeoH;
        mat = atomMatHydrogen;
      }
      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(node.pos[0], node.pos[1], node.pos[2]);
      molecularGroup.add(sphere);
    });

    // Covalent bonds
    const bonds = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // Ring
      [1, 6], [2, 7], [3, 8], [0, 9], [1, 10], [4, 11] // Side bonds
    ];

    bonds.forEach(([i, j]) => {
      const p1 = new THREE.Vector3(...atomNodes[i].pos);
      const p2 = new THREE.Vector3(...atomNodes[j].pos);
      const distance = p1.distanceTo(p2);
      const bondGeo = new THREE.CylinderGeometry(0.06, 0.06, distance, 12);
      const bondMesh = new THREE.Mesh(bondGeo, bondMat);
      
      // Position and orient cylinder between points
      bondMesh.position.copy(p1).add(p2).multiplyScalar(0.5);
      bondMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        p2.clone().sub(p1).normalize()
      );
      molecularGroup.add(bondMesh);
    });

    // Dual Delocalized Orbital Rings (Cyan and Specimen Gold)
    const orbitalGeo = new THREE.TorusGeometry(1.6, 0.02, 16, 64);
    const orbitalMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 });
    const orbitalMesh = new THREE.Mesh(orbitalGeo, orbitalMat);
    orbitalMesh.rotation.x = Math.PI / 3;
    molecularGroup.add(orbitalMesh);

    const orbitalGeo2 = new THREE.TorusGeometry(1.75, 0.016, 16, 64);
    const orbitalMat2 = new THREE.MeshBasicMaterial({ color: 0xc8553d, transparent: true, opacity: 0.4 });
    const orbitalMesh2 = new THREE.Mesh(orbitalGeo2, orbitalMat2);
    orbitalMesh2.rotation.x = -Math.PI / 4;
    orbitalMesh2.rotation.y = Math.PI / 6;
    molecularGroup.add(orbitalMesh2);

    // Subtle delocalized electron cloud particles
    const cloudCount = 120;
    const cloudGeo = new THREE.BufferGeometry();
    const cloudPositions = new Float32Array(cloudCount * 3);
    for (let c = 0; c < cloudCount; c++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const rad = 1.2 + Math.random() * 0.7;
      cloudPositions[c * 3] = rad * Math.cos(phi) * Math.cos(theta);
      cloudPositions[c * 3 + 1] = rad * Math.sin(phi);
      cloudPositions[c * 3 + 2] = rad * Math.cos(phi) * Math.sin(theta);
    }
    cloudGeo.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));
    const cloudMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const cloudPoints = new THREE.Points(cloudGeo, cloudMat);
    molecularGroup.add(cloudPoints);

    // Initial orientation
    reactorGroup.rotation.x = 0.15;
    reactorGroup.rotation.y = 0.35;
    molecularGroup.rotation.x = 0.2;
    molecularGroup.rotation.y = 0.4;

    const initialX = backgroundMode && width > 1024 ? 1.4 : 0;
    reactorGroup.position.x = initialX;
    molecularGroup.position.x = initialX;

    setIsLoading(false);

    // 9. Interactive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0 && renderer && camera) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
          if (backgroundMode) {
            const xPos = newW > 1024 ? 1.4 : 0;
            if (reactorGroupRef.current) reactorGroupRef.current.position.x = xPos;
            if (molecularGroupRef.current) molecularGroupRef.current.position.x = xPos;
          }
        }
      }
    });
    resizeObserver.observe(container);

    // 10. Animation Loop with Arrhenius Velocity Integration
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = lastTime;

    const animate = (currentTime: number) => {
      animFrameRef.current = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // FPS Calculation (lightweight)
      frameCount++;
      if (currentTime - lastFpsUpdate >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = currentTime;
      }

      // Arrhenius rate law calculation: k = A * exp(-Ea / (R * T))
      const T_kelvin = temperature + 273.15;
      const arrheniusVelocity = Math.exp(-2400 / T_kelvin) * 16.0;

      // Inertial turntable rotation
      if (autoRotate && !isDraggingRef.current) {
        targetRotationRef.current.y += rotationMomentumRef.current.y;
      }

      // Smooth damping towards target rotation
      if (reactorGroupRef.current) {
        reactorGroupRef.current.rotation.y += (targetRotationRef.current.y - reactorGroupRef.current.rotation.y) * 0.1;
        reactorGroupRef.current.rotation.x += (targetRotationRef.current.x - reactorGroupRef.current.rotation.x) * 0.1;
      }
      if (molecularGroupRef.current) {
        molecularGroupRef.current.rotation.y += (targetRotationRef.current.y - molecularGroupRef.current.rotation.y) * 0.1;
        molecularGroupRef.current.rotation.x += (targetRotationRef.current.x - molecularGroupRef.current.rotation.x) * 0.1;
        // Subtle bond vibrational oscillation
        const vib = Math.sin(currentTime * 0.006 * (temperature / 300)) * 0.03;
        molecularGroupRef.current.scale.set(1 + vib, 1 - vib * 0.5, 1 + vib);
      }

      // Swirling Fluidized Bed Particle Simulation
      if (particlesRef.current) {
        const posAttr = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;
          let y = posArray[idx + 1];

          // Upward convective velocity modulated by Arrhenius rate
          y += (0.015 + velocities[idx + 1] * 0.5) * arrheniusVelocity;

          // Vortex swirl
          const angle = 0.02 * arrheniusVelocity;
          const x = posArray[idx];
          const z = posArray[idx + 2];
          posArray[idx] = x * Math.cos(angle) - z * Math.sin(angle);
          posArray[idx + 2] = x * Math.sin(angle) + z * Math.cos(angle);

          // Reset at bottom distributor when particle reaches cyclone
          if (y > 2.0) {
            y = -2.1;
            const r = Math.sqrt(Math.random()) * 0.9;
            const theta = Math.random() * Math.PI * 2;
            posArray[idx] = r * Math.cos(theta);
            posArray[idx + 2] = r * Math.sin(theta);
          }

          posArray[idx + 1] = y;
        }
        posAttr.needsUpdate = true;
      }

      // Animate Closed-Loop Recirculation Stream along Curve
      if (recirculationParticlesRef.current && closedLoopActive) {
        const rPosAttr = recirculationParticlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        const rPosArray = rPosAttr.array as Float32Array;

        for (let i = 0; i < recircCount; i++) {
          recircProgress[i] = (recircProgress[i] + 0.0035 * arrheniusVelocity) % 1.0;
          const pt = recirculationCurve.getPoint(recircProgress[i]);
          rPosArray[i * 3] = pt.x;
          rPosArray[i * 3 + 1] = pt.y;
          rPosArray[i * 3 + 2] = pt.z;
        }
        rPosAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    // Cleanup & Memory Management
    return () => {
      resizeObserver.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      
      // Dispose Three.js memory to prevent WebGL leaks
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
        if (obj instanceof THREE.Points) {
          obj.geometry.dispose();
          obj.material.dispose();
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [webGLSupported, compactMode, backgroundMode]);

  // Live Reactive Updates when Temperature or Closed Loop Prop changes
  useEffect(() => {
    if (!sceneRef.current) return;

    // Update Core Material & Emissive Light
    if (coreMeshRef.current) {
      const mat = coreMeshRef.current.material as THREE.MeshStandardMaterial;
      mat.color.setHex(thermalColors.hex);
      mat.emissive.setHex(thermalColors.emissiveHex);
      mat.emissiveIntensity = 1.2 + thermalColors.tNorm * 1.8;
    }

    if (coreLightRef.current) {
      coreLightRef.current.color.setHex(thermalColors.lightHex);
      coreLightRef.current.intensity = 2.0 + thermalColors.tNorm * 3.0;
    }

    if (particlesRef.current) {
      const pMat = particlesRef.current.material as THREE.PointsMaterial;
      pMat.color.setHex(thermalColors.particleHex);
    }

    // Update Recirculation Tube Appearance
    if (loopTubeMeshRef.current) {
      const tMat = loopTubeMeshRef.current.material as THREE.MeshStandardMaterial;
      tMat.color.setHex(closedLoopActive ? 0x10b981 : 0x475569);
      tMat.emissive.setHex(closedLoopActive ? 0x059669 : 0x000000);
      tMat.emissiveIntensity = closedLoopActive ? 1.4 : 0;
    }

    if (recirculationParticlesRef.current) {
      const rMat = recirculationParticlesRef.current.material as THREE.PointsMaterial;
      rMat.opacity = closedLoopActive ? 0.9 : 0.05;
    }
  }, [temperature, closedLoopActive, thermalColors]);

  // Handle View Mode Toggles (Reactor vs Molecular Lattice)
  useEffect(() => {
    if (reactorGroupRef.current && molecularGroupRef.current) {
      if (viewMode === 'reactor') {
        reactorGroupRef.current.visible = true;
        molecularGroupRef.current.visible = false;
      } else {
        reactorGroupRef.current.visible = false;
        molecularGroupRef.current.visible = true;
      }
    }
  }, [viewMode]);

  // Sync state if initialViewMode prop changes
  useEffect(() => {
    if (initialViewMode) {
      setViewMode(initialViewMode);
    }
  }, [initialViewMode]);

  // Pointer Interaction Handlers (Safe Drag Orbit without Hijacking Page Scroll)
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePosRef.current.x;
    const deltaY = e.clientY - previousMousePosRef.current.y;
    previousMousePosRef.current = { x: e.clientX, y: e.clientY };

    // Update target rotation with damping
    targetRotationRef.current.y += deltaX * 0.008;
    targetRotationRef.current.x = Math.max(-0.6, Math.min(0.6, targetRotationRef.current.x + deltaY * 0.008));
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  // Camera Preset Snapping
  const applyPreset = useCallback((preset: 'isometric' | 'cutaway' | 'recirculation') => {
    setActivePreset(preset);
    if (preset === 'isometric') {
      targetRotationRef.current = { x: 0.15, y: 0.35 };
      setViewMode('reactor');
    } else if (preset === 'cutaway') {
      targetRotationRef.current = { x: 0.02, y: 0.0 };
      setViewMode('reactor');
    } else if (preset === 'recirculation') {
      targetRotationRef.current = { x: 0.1, y: Math.PI * 0.48 };
      setViewMode('reactor');
    }
  }, []);

  if (!webGLSupported) {
    return <WebGLFallback temperature={temperature} closedLoopActive={closedLoopActive} className={className} />;
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative rounded-none rounded-tl-2xl overflow-hidden bg-[#080812] text-white select-none border border-ink/15 shadow-2xl",
        compactMode ? "h-[280px] sm:h-[320px]" : "h-[420px] sm:h-[480px]",
        backgroundMode && "!h-full !w-full !rounded-none !border-0 !shadow-none bg-transparent",
        className
      )}
      style={{ height: height || undefined }}
      data-slot="reactor-core-3d"
    >
      {/* Background Millimeter Technical Grid */}
      {!backgroundMode && (
        <div className="absolute inset-0 opacity-15 millimeter-grid pointer-events-none" />
      )}

      {/* 3D Canvas Viewport with Touch-Action Safe Pan-Y */}
      <div
        ref={canvasContainerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: 'pan-y' }}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-0 focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Interactive 3D Reactor Core Viewport. Drag horizontally to rotate."
      />

      {/* Loading Indicator Overlay (Fades out when ready) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#080812]/90 backdrop-blur-sm"
          >
            <div className="size-8 rounded-full border-2 border-specimen/30 border-t-specimen animate-spin" />
            <span className="mt-3 text-xs font-mono text-specimen tracking-wider uppercase">
              Compiling 3D Reactor Shaders...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard HUD Overlay (Disabled in backgroundMode) */}
      {!hideHUD && !backgroundMode && (
        <>
          {/* Scientific HUD: Top Left Technical Tag */}
          <div className="absolute top-3 left-3 z-10 pointer-events-none flex flex-col gap-1 font-mono text-[10px]">
            <div className="flex items-center gap-1.5 px-2 py-0.8 rounded-sm bg-[#0d0d1a]/90 border border-ink/20 text-specimen backdrop-blur-md">
              <Flame className="size-3 animate-pulse" />
              <span className="font-bold">
                {viewMode === 'reactor' ? `REACTOR VESSEL · ${temperature}°C` : 'MACROMOLECULAR INTERMEDIATE'}
              </span>
            </div>
            <div className="text-white/40 text-[9px] px-1">
              {viewMode === 'reactor' 
                ? (closedLoopActive ? '● Autothermal Reintegration Active' : '○ Open-Loop Exhaust Bypass')
                : 'Levoglucosan Transglycosylation Conformation'
              }
            </div>
          </div>

          {/* Top Right HUD: View Mode & Engine Badges */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 font-mono text-[10px]">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.8 rounded-sm bg-[#0d0d1a]/80 border border-ink/15 text-white/40 backdrop-blur-md">
              <Activity className="size-3 text-reagent" />
              <span>{fps} FPS · WebGL</span>
            </span>

            {/* View Mode Toggle (Reactor vs Molecular Lattice) */}
            <motion.button
              {...spring.press}
              {...silk.hover}
              onClick={() => setViewMode(viewMode === 'reactor' ? 'molecular' : 'reactor')}
              className="min-h-[44px] px-3 py-1.5 rounded-sm bg-[#0d0d1a]/90 hover:bg-[#0d0d1a] border border-ink/20 text-xs font-mono font-semibold text-white/70 flex items-center gap-1.5 shadow-sm backdrop-blur-md focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
              title={viewMode === 'reactor' ? 'Inspect Molecular Intermediate Lattice' : 'Return to Reactor Core'}
            >
              {viewMode === 'reactor' ? (
                <>
                  <Cpu className="size-3.5 text-specimen" />
                  <span>Molecular Lattice</span>
                </>
              ) : (
                <>
                  <Rotate3d className="size-3.5 text-[#2563eb]" />
                  <span>Reactor Core</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Bottom Floating Control Strip */}
          <div className="absolute bottom-3 inset-x-3 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
            {/* Preset Angle Buttons (Desktop/Full Mode) */}
            {!compactMode && viewMode === 'reactor' && (
              <div className="flex items-center gap-1 p-1 rounded-sm bg-[#0d0d1a]/90 border border-ink/15 backdrop-blur-md text-[11px] font-mono">
                <button
                  onClick={() => applyPreset('isometric')}
                  className={cn(
                    "min-h-[44px] px-2.5 py-1 rounded-sm transition-colors focus-visible:ring-1 focus-visible:ring-specimen focus-visible:outline-none",
                    activePreset === 'isometric' ? "bg-specimen/20 text-specimen font-bold border border-specimen/30" : "text-white/40 hover:text-white"
                  )}
                >
                  Isometric
                </button>
                <button
                  onClick={() => applyPreset('cutaway')}
                  className={cn(
                    "min-h-[44px] px-2.5 py-1 rounded-sm transition-colors focus-visible:ring-1 focus-visible:ring-specimen focus-visible:outline-none",
                    activePreset === 'cutaway' ? "bg-specimen/20 text-specimen font-bold border border-specimen/30" : "text-white/40 hover:text-white"
                  )}
                >
                  Core
                </button>
                <button
                  onClick={() => applyPreset('recirculation')}
                  className={cn(
                    "min-h-[44px] px-2.5 py-1 rounded-sm transition-colors focus-visible:ring-1 focus-visible:ring-specimen focus-visible:outline-none",
                    activePreset === 'recirculation' ? "bg-specimen/20 text-specimen font-bold border border-specimen/30" : "text-white/40 hover:text-white"
                  )}
                >
                  Recirc Loop
                </button>
              </div>
            )}

            {/* Rotation & Navigation Actions */}
            <div className="flex items-center gap-1.5 ms-auto">
              {/* Auto-rotation pause/play */}
              <motion.button
                {...spring.press}
                {...silk.hover}
                onClick={() => setAutoRotate(!autoRotate)}
                className="min-h-[44px] size-11 flex items-center justify-center rounded-sm bg-[#0d0d1a]/90 hover:bg-[#0d0d1a] border border-ink/20 text-white/50 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                title={autoRotate ? 'Pause 3D Turntable Rotation' : 'Resume 3D Turntable Rotation'}
                aria-label={autoRotate ? 'Pause 3D Turntable Rotation' : 'Resume 3D Turntable Rotation'}
              >
                {autoRotate ? <Pause className="size-3.5 text-specimen" /> : <Play className="size-3.5 text-reagent" />}
              </motion.button>

              {/* If in compact mode, provide link to open in laboratory workbench */}
              {compactMode && onExploreInLab && (
                <motion.button
                  {...spring.press}
                  {...silk.hover}
                  onClick={onExploreInLab}
                  className="min-h-[44px] px-3 py-1.5 rounded-sm bg-specimen hover:bg-specimen/80 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
                >
                  <Maximize2 className="size-3.5" />
                  <span>Full Lab Instrument</span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Non-intrusive Drag Interaction Hint */}
          <div className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none opacity-40 hover:opacity-10 transition-opacity hidden md:flex items-center gap-1.5 text-[9px] font-mono text-white/40">
            <Rotate3d className="size-3" />
            <span>Drag to orbit 3D</span>
          </div>
        </>
      )}

    </div>
  );
};
