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
  const { scene, animations } = useGLTF('https://cdn.builder.io/o/assets%2Fe6139e79bb234565a87f250d05a56e59%2Ffec500306e63447f9b4f9e18bf0ee4ba?alt=media&token=e202cfb1-757a-436a-8108-68d399fe8436&apiKey=e6139e79bb234565a87f250d05a56e59');

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

      // Keep original colors and materials, just enhance lighting
      scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          // Enhance metallic properties while preserving original colors
          child.material.metalness = Math.max(child.material.metalness || 0, 0.7);
          child.material.roughness = Math.min(child.material.roughness || 1, 0.3);
          child.material.envMapIntensity = 1.2;
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
        <group>
          <primitive object={scene} />
          {/* Add extra white eyes to make sure they're visible */}
          <mesh position={[-0.15, 0.3, 0.8]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive={new THREE.Color(0xffffff)}
              emissiveIntensity={2.0}
              metalness={0.0}
              roughness={0.0}
            />
          </mesh>
          <mesh position={[0.15, 0.3, 0.8]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive={new THREE.Color(0xffffff)}
              emissiveIntensity={2.0}
              metalness={0.0}
              roughness={0.0}
            />
          </mesh>
        </group>
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
