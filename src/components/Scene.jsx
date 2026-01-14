import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Planet from './Planet';

// Planet data: distance from sun, size, color, speed
// Distances and sizes are stylized, not realistic
const planetsData = [
  { name: 'Mercury', distance: 1.5, size: 0.1, color: '#A5A5A5', speed: 1.2 },
  { name: 'Venus', distance: 2.2, size: 0.15, color: '#E3BB76', speed: 0.9 },
  { name: 'Earth', distance: 3.2, size: 0.16, color: '#2271BB', speed: 0.7 },
  { name: 'Mars', distance: 4.2, size: 0.12, color: '#C1440E', speed: 0.5 },
  { name: 'Jupiter', distance: 6.5, size: 0.6, color: '#D8CA9D', speed: 0.2 },
  { name: 'Saturn', distance: 9.0, size: 0.5, color: '#F4D03F', speed: 0.15 },
  { name: 'Uranus', distance: 11.5, size: 0.35, color: '#4FD0E7', speed: 0.1 },
  { name: 'Neptune', distance: 13.5, size: 0.34, color: '#4B70DD', speed: 0.08 },
];

const ResponsiveCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    // Adjust camera position based on aspect ratio
    const aspect = size.width / size.height;
    const baseDistance = 20; // Good for desktop (landscape)

    // If portrait (aspect < 1), move camera further back
    // The smaller the aspect (narrower), the further back we need to go
    if (aspect < 1) {
      const targetDistance = baseDistance / aspect;
      camera.position.set(0, targetDistance * 0.75, targetDistance);
    } else {
       // Reset to default for landscape
       camera.position.set(0, 15, 20);
    }
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 15, 20], fov: 45 }}>
      <ResponsiveCamera />

      {/* Lighting */}
      <ambientLight intensity={0.5} color="#444" />
      <pointLight position={[0, 0, 0]} intensity={3} color="#FDB813" distance={50} decay={1} />

      {/* Background Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Planets */}
      {planetsData.map((planet) => (
        <Planet
          key={planet.name}
          distance={planet.distance}
          size={planet.size}
          color={planet.color}
          speed={planet.speed}
        />
      ))}

      {/* Controls: Non-interactive but dynamic (auto-rotate) */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default Scene;
