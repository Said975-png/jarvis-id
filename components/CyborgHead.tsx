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
  const { scene, animations } = useGLTF('https://cdn.builder.io/o/assets%2F48eedcb3a5ef489391d33a7eabf9e927%2F447f29228bdd4b7cb0c918645b9d99f8?alt=media&token=c162a2af-72d4-45a5-acd2-2be201a67a1d&apiKey=48eedcb3a5ef489391d33a7eabf9e927');

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
