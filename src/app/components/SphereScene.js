import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { TextureLoader, MeshBasicMaterial } from 'three';

const SphereScene = () => {
  const sphereRef = useRef();

  const texture = useLoader(TextureLoader, '/images/earth.jpeg'); // Replace with the actual path to your image


  useFrame(() => {
    // Rotate the sphere in the animation loop
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={sphereRef} args={[2, 64, 64]}> {/* Increase the sphere size */}
      <meshLambertMaterial attach="material" map={texture}  />
    </Sphere>
  );
};

export default SphereScene;
