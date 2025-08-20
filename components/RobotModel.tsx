import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface RobotModelProps {
  position?: [number, number, number];
  scale?: number;
}

function RobotModel({ position = [0, 0, 0], scale = 1 }: RobotModelProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Load the GLB model with animations
  let scene, animations;
  try {
    const gltf = useGLTF('https://cdn.builder.io/o/assets%2F88c65c82286b4ed695827a48fd87b6f4%2Fcb53974d82584bdaa2fb0a65c924e739?alt=media&token=f220db93-dba1-43ec-b702-445a0084458d&apiKey=88c65c82286b4ed695827a48fd87b6f4');
    scene = gltf.scene;
    animations = gltf.animations;
  } catch (error) {
    console.error('Error loading GLB model:', error);
    return null;
  }

  // Setup animations from GLB file
  const { actions } = useAnimations(animations, meshRef);

  // Play all animations from the GLB file
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log('Available robot animations:', Object.keys(actions));
      Object.values(actions).forEach((action, index) => {
        if (action) {
          action.reset();
          action.play();
          console.log(`Playing robot animation ${index + 1}:`, action.getClip().name);
        }
      });
    } else {
      console.log('No animations found in robot GLB file');
    }
  }, [actions]);

  // Also log when animations array changes
  useEffect(() => {
    if (animations) {
      console.log('Robot GLB animations loaded:', animations.length, 'animations');
      animations.forEach((clip, index) => {
        console.log(`Robot Animation ${index + 1}: ${clip.name}, duration: ${clip.duration}s`);
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
            child.material.metalness = Math.max(child.material.metalness || 0, 0.8);
            child.material.roughness = Math.min(child.material.roughness || 1, 0.2);
            child.material.envMapIntensity = 1.5;

            // Add subtle emissive glow to tech parts
            if (child.material.name &&
                (child.material.name.toLowerCase().includes('eye') ||
                 child.material.name.toLowerCase().includes('glow') ||
                 child.material.name.toLowerCase().includes('light') ||
                 child.material.name.toLowerCase().includes('screen'))) {
              child.material.emissive = new THREE.Color(0x00ffff);
              child.material.emissiveIntensity = 0.3;
            }
          }
        }
      });
    }
  }, [scene]);

  // Smooth rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default RobotModel;
