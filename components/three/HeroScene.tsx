"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingGeometry from "./FloatingGeometry";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={2.2} color="#e8c77e" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#8a6f3d" />

      <Suspense fallback={null}>
        <FloatingGeometry />
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}
