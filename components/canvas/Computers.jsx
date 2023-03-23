import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader';

import dynamic from 'next/dynamic';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// let GLTFLoader

const Computers = () => {

  // GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader

  const [glft, setGlft] = useState();

  useEffect(() => {
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    setGlft(gltf)
  }, [])

  // const path = 'http://localhost:3000/public/desktop_pc/scene.gltf'
  // const computer = useGLTF('./scene.gltf')
  // const computer2 = useTexture('@/public/textures/Material_baseColor.jpeg')
  // const computer = useGLTF('http://localhost:3000/public/desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15} 
        groundColor="black"
      />
      <pointLight intensity={1} />
      <primitive object={gltf.scene} />
    </mesh>
  )
}

export default Computers;