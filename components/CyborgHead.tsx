import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CyborgHeadProps {
  position?: [number, number, number];
  scale?: number;
}

function CyborgHead({ position = [0, 0, 0], scale = 1 }: CyborgHeadProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Add rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Main head sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.9} 
          roughness={0.1}
          emissive={new THREE.Color(0x001a33)}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive={new THREE.Color(0x00ffff)}
          emissiveIntensity={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive={new THREE.Color(0x00ffff)}
          emissiveIntensity={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Cyber pattern lines */}
      <mesh position={[0, 0, 0.99]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1.2, 0.03, 0.03]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive={new THREE.Color(0xff00ff)}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0.99]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[1.2, 0.03, 0.03]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive={new THREE.Color(0xff00ff)}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Additional cyber elements */}
      <mesh position={[0, 0.5, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.6, 0.02, 0.02]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive={new THREE.Color(0x00ff88)}
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0, -0.3, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.8, 0.02, 0.02]} />
        <meshStandardMaterial 
          color="#00ff88" 
          emissive={new THREE.Color(0x00ff88)}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Side details */}
      <mesh position={[-0.8, 0, 0.3]} rotation={[0, Math.PI / 3, 0]}>
        <boxGeometry args={[0.2, 0.4, 0.1]} />
        <meshStandardMaterial 
          color="#333333" 
          metalness={0.8}
          roughness={0.2}
          emissive={new THREE.Color(0x0066ff)}
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0.8, 0, 0.3]} rotation={[0, -Math.PI / 3, 0]}>
        <boxGeometry args={[0.2, 0.4, 0.1]} />
        <meshStandardMaterial 
          color="#333333" 
          metalness={0.8}
          roughness={0.2}
          emissive={new THREE.Color(0x0066ff)}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Glowing particles around the head */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={i} position={[x, Math.sin(angle * 2) * 0.3, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color="#ffffff" 
              emissive={new THREE.Color(0xffffff)}
              emissiveIntensity={0.6}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default CyborgHead;
