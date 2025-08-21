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
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            color="#ffffff"
            castShadow
          />
          <directionalLight
            position={[-5, -5, -5]}
            intensity={0.5}
            color="#00ffff"
          />

          {/* Rim lighting for cyber effect */}
          <pointLight
            position={[0, 0, 8]}
            intensity={0.8}
            color="#ff00ff"
          />
          
          {/* Subtle environment for reflections without visible background */}
          <Environment preset="city" background={false} />
          
          {/* The Cyborg Head */}
          <CyborgHead
            position={[0, 0, 0]}
            scale={1.3}
          />
          
          {/* Contact shadows for realism */}
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.3}
            scale={5}
            blur={2}
            far={2}
          />
          
          {/* Interactive controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3.5}
            autoRotate
            autoRotateSpeed={0.8}
            dampingFactor={0.05}
            enableDamping
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene3D;
