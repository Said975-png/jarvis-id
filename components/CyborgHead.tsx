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
  const { scene, animations } = useGLTF('https://cdn.builder.io/o/assets%2Fe6139e79bb234565a87f250d05a56e59%2F3e944de5073248999457188b7bc42dc5?alt=media&token=6e3c48a2-cd2a-4b13-88ed-05450feff663&apiKey=e6139e79bb234565a87f250d05a56e59');

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
      console.log('GLB model loaded successfully');

      // Enhance materials and set green/teal colors
      scene.traverse((child: any) => {
        if (child.isMesh) {
          if (child.material) {
            // Clone material to avoid affecting other instances
            child.material = child.material.clone();

            // Set body color to teal/green, but head/face to black
            if (child.material.name &&
                (child.material.name.toLowerCase().includes('head') ||
                 child.material.name.toLowerCase().includes('face'))) {
              child.material.color = new THREE.Color(0x000000); // Black face
              child.material.emissive = new THREE.Color(0x000000);
              child.material.emissiveIntensity = 0.0;
            } else if (child.material.name &&
                (child.material.name.toLowerCase().includes('body') ||
                 child.material.name.toLowerCase().includes('main') ||
                 !child.material.name.toLowerCase().includes('eye'))) {
              child.material.color = new THREE.Color(0x00ccaa); // Teal body
              child.material.emissive = new THREE.Color(0x002222);
              child.material.emissiveIntensity = 0.1;
            }

            // Enhance metallic properties
            child.material.metalness = Math.max(child.material.metalness || 0, 0.6);
            child.material.roughness = Math.min(child.material.roughness || 1, 0.4);
            child.material.envMapIntensity = 1.0;

            // Keep eyes yellow/bright
            if (child.material.name &&
                (child.material.name.toLowerCase().includes('eye') ||
                 child.material.name.toLowerCase().includes('glow') ||
                 child.material.name.toLowerCase().includes('light'))) {
              child.material.color = new THREE.Color(0xffff00); // Yellow
              child.material.emissive = new THREE.Color(0xffff00);
              child.material.emissiveIntensity = 0.8;
            }
          }
        }
      });
    }
  }, [scene]);

  // Add subtle rotation animation if model is static
  useFrame((state) => {
    if (meshRef.current) {
      // Only add rotation if no animations are playing
      if (!actions || Object.keys(actions).length === 0) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      }
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {scene ? (
        <primitive object={scene} />
      ) : (
        // Simple fallback while loading
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive={new THREE.Color(0x001122)}
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}
    </group>
  );
}

export default CyborgHead;
