import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import RobotModel from './RobotModel';

interface RobotScene3DProps {
  className?: string;
}

function RobotScene3D({ className }: RobotScene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [2, 0.5, 3], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.2}
            color="#ffffff"
            castShadow
          />
          <directionalLight
            position={[-10, -10, -5]}
            intensity={0.4}
            color="#00ffff"
          />
          
          {/* Rim lighting for tech effect */}
          <pointLight
            position={[0, 5, 10]}
            intensity={0.6}
            color="#00ffff"
          />
          
          {/* Side lighting */}
          <pointLight
            position={[-5, 0, 0]}
            intensity={0.3}
            color="#ff00ff"
          />
          
          {/* Environment for reflections */}
          <Environment preset="city" background={false} />
          
          {/* The Robot Model */}
          <Suspense fallback={null}>
            <RobotModel
              position={[0, -0.3, 0]}
              scale={0.3}
            />
          </Suspense>
          
          
          {/* Interactive controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
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

export default RobotScene3D;
