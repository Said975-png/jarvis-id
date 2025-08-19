import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import CyborgHead from './CyborgHead';

interface Scene3DProps {
  className?: string;
}

function Scene3D({ className }: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [2, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            color="#ffffff"
            castShadow
          />
          <directionalLight
            position={[-10, -10, -5]}
            intensity={0.3}
            color="#00ffff"
          />
          
          {/* Rim lighting for cyber effect */}
          <pointLight
            position={[0, 0, 10]}
            intensity={0.5}
            color="#ff00ff"
          />
          
          {/* Environment for reflections */}
          <Environment preset="city" />
          
          {/* The Cyborg Head */}
          <CyborgHead 
            position={[0, -0.5, 0]} 
            scale={2}
          />
          
          {/* Contact shadows for realism */}
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.3}
            scale={5}
            blur={2}
            far={2}
          />
          
          {/* Optional orbit controls for interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene3D;
