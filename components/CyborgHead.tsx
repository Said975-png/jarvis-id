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
  const { scene, animations } = useGLTF('https://cdn.builder.io/o/assets%2F4847e10f08ed460fac2dbfb433800491%2Fe69000f6a4c34a82ae02084b28dc4d2b?alt=media&token=3591f96a-3d7f-4e0d-bef3-9f07491086a6&apiKey=4847e10f08ed460fac2dbfb433800491');

  // Setup animations from GLB file
  const { actions } = useAnimations(animations, meshRef);

  // Play all animations from the GLB file
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log('Available animations:', Object.keys(actions));
      Object.values(actions).forEach((action, index) => {
        if (action) {
          action.reset();
          action.play();
          console.log(`Playing animation ${index + 1}:`, action.getClip().name);
        }
      });
    } else {
      console.log('No animations found in GLB file');
    }
  }, [actions]);

  // Also log when animations array changes
  useEffect(() => {
    if (animations) {
      console.log('GLB animations loaded:', animations.length, 'animations');
      animations.forEach((clip, index) => {
        console.log(`Animation ${index + 1}: ${clip.name}, duration: ${clip.duration}s`);
      });
    }
  }, [animations]);

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
