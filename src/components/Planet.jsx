import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Planet = ({ distance, size, color, speed }) => {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    // Basic orbital mechanics: simple circular orbit
    const t = clock.getElapsedTime() * speed;
    const x = distance * Math.cos(t);
    const z = distance * Math.sin(t);
    if (planetRef.current) {
        planetRef.current.position.set(x, 0, z);
    }
  });

  return (
    <>
      {/* Orbit Path - Visualized as a thin ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.02, distance + 0.02, 128]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.2} />
      </mesh>

      {/* Planet Mesh */}
      <mesh ref={planetRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
    </>
  );
};

export default Planet;
