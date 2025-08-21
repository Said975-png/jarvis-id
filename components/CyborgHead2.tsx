import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CyborgHead2Props {
  position?: [number, number, number];
  scale?: number;
}

function CyborgHead2({ position = [0, 0, 0], scale = 1 }: CyborgHead2Props) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('https://cdn.builder.io/o/assets%2F4bfc3042e2754fe4abee3daa8a953dcc%2F6d48170a62fe4a7384e4d3ce35481b38?alt=media&token=78310b8a-c375-4487-ab35-f8182786cb38&apiKey=4bfc3042e2754fe4abee3daa8a953dcc');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations
    Object.keys(actions).forEach((key) => {
      actions[key]?.play();
    });
  }, [actions]);

  useFrame((state) => {
    if (group.current) {
      // Gentle floating animation
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      
      // Subtle rotation
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Apply materials and effects to the model
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Enhance materials for cyber effect
          if (child.material) {
            child.material.needsUpdate = true;
            
            // Add emissive glow to certain parts
            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.emissive = new THREE.Color(0x001122);
              child.material.emissiveIntensity = 0.2;
              child.material.metalness = 0.8;
              child.material.roughness = 0.2;
            }
          }
          
          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model
useGLTF.preload('https://cdn.builder.io/o/assets%2F4bfc3042e2754fe4abee3daa8a953dcc%2F6d48170a62fe4a7384e4d3ce35481b38?alt=media&token=78310b8a-c375-4487-ab35-f8182786cb38&apiKey=4bfc3042e2754fe4abee3daa8a953dcc');

export default CyborgHead2;
