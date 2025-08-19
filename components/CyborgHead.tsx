import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface CyborgHeadProps {
  position?: [number, number, number];
  scale?: number;
}

function CyborgHead({ position = [0, 0, 0], scale = 1 }: CyborgHeadProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Load the GLB model with animations
  const { scene, animations } = useGLTF('https://cdn.builder.io/o/assets%2Fc75c23a61583432b9fe88e8b462fa661%2Fadf99729adc44391ac16b2eabde15205?alt=media&token=643613e8-23af-4fd9-bf01-0fa8bcb1023a&apiKey=c75c23a61583432b9fe88e8b462fa661');

  // Setup animations from GLB file
  const { actions } = useAnimations(animations, meshRef);

  // Play all animations from the GLB file
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.play();
        }
      });
    }
  }, [actions]);

  useEffect(() => {
    if (scene) {
      // Enhance materials while preserving original textures
      scene.traverse((child: any) => {
        if (child.isMesh) {
          if (child.material) {
            // Enhance metallic properties
            child.material.metalness = Math.max(child.material.metalness || 0, 0.7);
            child.material.roughness = Math.min(child.material.roughness || 1, 0.3);
            child.material.envMapIntensity = 1.2;

            // Add subtle emissive glow to eyes or glowing parts
            if (child.material.name &&
                (child.material.name.toLowerCase().includes('eye') ||
                 child.material.name.toLowerCase().includes('glow') ||
                 child.material.name.toLowerCase().includes('light'))) {
              child.material.emissive = new THREE.Color(0x00ffff);
              child.material.emissiveIntensity = 0.2;
            }
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
