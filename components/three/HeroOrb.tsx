"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/** Lightweight hero object: a wireframe icosahedron around a faint solid core. No drei, no postprocessing. */
function Orb() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.15;
    g.rotation.x += (pointer.y * 0.3 - g.rotation.x) * 0.03;
    g.position.y = Math.sin(state.clock.getElapsedTime() * 0.7) * 0.12;
  });
  return (
    <group ref={group} scale={1.45}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#d6336c" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.55}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#b4bfd3" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh scale={1.25} rotation={[0.6, 0.3, 0]}>
        <torusGeometry args={[1, 0.006, 8, 96]} />
        <meshBasicMaterial color="#b4bfd3" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function HeroOrb() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 40 }} gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 5]} intensity={2} color="#f0558c" />
      <Orb />
    </Canvas>
  );
}
