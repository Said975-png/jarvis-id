import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface CyborgHeadProps {
  position?: [number, number, number];
  scale?: number;
}

function CyborgHead({ position = [0, 0, 0], scale = 1 }: CyborgHeadProps) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the GLB model
  const { scene } = useGLTF('https://cdn.builder.io/o/assets%2Fc75c23a61583432b9fe88e8b462fa661%2Fadf99729adc44391ac16b2eabde15205?alt=media&token=643613e8-23af-4fd9-bf01-0fa8bcb1023a&apiKey=c75c23a61583432b9fe88e8b462fa661');

  // Animate the model
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      // Slow rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      // Slight head tilt
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  useEffect(() => {
    if (scene) {
      // Set up materials for a more cyber look
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
          child.material.envMapIntensity = 1.5;
          
          // Add emissive glow to certain parts
          if (child.material.name && child.material.name.includes('eye')) {
            child.material.emissive = new THREE.Color(0x00ffff);
            child.material.emissiveIntensity = 0.3;
          }
        }
      });
    }
  }, [scene]);

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default CyborgHead;
