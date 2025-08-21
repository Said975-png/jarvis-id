import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface CyborgHeadProps {
  position?: [number, number, number];
  scale?: number;
}

// Fallback geometric head component
function FallbackHead() {
  const meshRef = useRef<THREE.Group>(null);

  // Add rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main head sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
          emissive={new THREE.Color(0x001122)}
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive={new THREE.Color(0x00ffff)}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive={new THREE.Color(0x00ffff)}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Cyber lines */}
      <mesh position={[0, 0, 0.95]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.8, 0.02, 0.02]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive={new THREE.Color(0xff00ff)}
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0.95]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.8, 0.02, 0.02]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive={new THREE.Color(0xff00ff)}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function CyborgHead({ position = [0, 0, 0], scale = 1 }: CyborgHeadProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [useGLB, setUseGLB] = useState(true);

  // Try to load GLB, but fallback to geometric head if it fails
  let gltfData;
  try {
    gltfData = useGLTF('https://cdn.builder.io/o/assets%2F48eedcb3a5ef489391d33a7eabf9e927%2F447f29228bdd4b7cb0c918645b9d99f8?alt=media&token=c162a2af-72d4-45a5-acd2-2be201a67a1d&apiKey=48eedcb3a5ef489391d33a7eabf9e927');
  } catch (error) {
    console.error('Failed to load GLB model, using fallback:', error);
    gltfData = null;
  }

  const { actions } = useAnimations(gltfData?.animations || [], meshRef);

  // Setup GLB model if loaded
  useEffect(() => {
    if (gltfData?.scene) {
      console.log('GLB model loaded successfully');
      
      // Enhance materials
      gltfData.scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          child.material.metalness = Math.max(child.material.metalness || 0, 0.7);
          child.material.roughness = Math.min(child.material.roughness || 1, 0.3);
          child.material.envMapIntensity = 1.2;

          // Add emissive glow to special parts
          if (child.material.name &&
              (child.material.name.toLowerCase().includes('eye') ||
               child.material.name.toLowerCase().includes('glow') ||
               child.material.name.toLowerCase().includes('light'))) {
            child.material.emissive = new THREE.Color(0x00ffff);
            child.material.emissiveIntensity = 0.2;
          }
        }
      });

      // Play animations
      if (actions && Object.keys(actions).length > 0) {
        Object.values(actions).forEach((action) => {
          if (action) {
            action.reset();
            action.play();
          }
        });
      }
    } else {
      console.log('Using fallback geometric head');
      setUseGLB(false);
    }
  }, [gltfData, actions]);

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {gltfData?.scene && useGLB ? (
        <primitive object={gltfData.scene} />
      ) : (
        <FallbackHead />
      )}
    </group>
  );
}

export default CyborgHead;
