"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import SphereScene from './SphereScene';


const Scene = () => {
  return (
    <div className="h-screen"> {/* Set the container height to 100% of the screen */}

    <Canvas className='h-full  bg-transparent		'>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <SphereScene />
    </Canvas>
    </div>

  );
};

export default Scene;


