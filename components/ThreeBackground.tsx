'use client';
/* React Three Fiber is an imperative paradigm: particles are RNG-seeded, the
   geometry buffer is mutated in the animation frame loop, and the canvas is
   mounted only on capable devices after a client capability check. The React
   Compiler purity/immutability/effect rules don't model this and misfire here. */
/* eslint-disable react-hooks/purity, react-hooks/immutability, react-hooks/set-state-in-effect */
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = 0;
    }
    return [pos, vel] as const;
  }, [count]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    const posAttr = mesh.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const ix = i * 3, iy = i * 3 + 1;
      posArr[ix] += velocities[ix] + mouse.current.x * 0.001;
      posArr[iy] += velocities[iy] + mouse.current.y * 0.001;
      if (Math.abs(posArr[ix]) > 5) velocities[ix] *= -1;
      if (Math.abs(posArr[iy]) > 5) velocities[iy] *= -1;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#58A6FF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function ThreeBackground() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dataSaver = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!isMobile && !prefersReduced && !dataSaver) setShow(true);
  }, []);

  if (!show) {
    return (
      <div className="hero-bg" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(88, 166, 255, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(121, 192, 255, 0.06) 0%, transparent 50%)'
      }} />
    );
  }

  return (
    <div className="hero-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
        <Particles count={180} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
