import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import dynamic from 'next/dynamic'
import CanvasLoader from '../Loader';


// const Computers = dynamic(() => import("./Computers"))
import Computers from './Computers';

const ParentComputers = () => {
    return (
      <Canvas
        framerloop="demand"
        shadows
        camera={{position: [20,3,5], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}  
          />
          <Computers />
          <Preload all />
        </Suspense>
  
      </Canvas>
    )
  }

export default ParentComputers