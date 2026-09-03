"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.x += delta * 0.08;
    mesh.rotation.y += delta * 0.12;

    // Subtle pointer-driven tilt
    const targetX = pointer.y * 0.25;
    const targetY = pointer.x * 0.35;
    mesh.rotation.x += (targetX - mesh.rotation.x) * 0.02;
    mesh.rotation.y += (targetY - mesh.rotation.y) * 0.02;

    const t = state.clock.getElapsedTime();
    mesh.position.y = Math.sin(t * 0.6) * 0.18;
  });

  return (
    <mesh ref={meshRef} scale={1.65}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color="#cba158"
        emissive="#3a2a10"
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.85}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}
