'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import Model1 from './Model1'
import Model2 from './Model2'
import Model3 from './Model3'
import LoadingSpinner from './LoadingSpinner'

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 3, 10], fov: 50 }}
      shadows
      className="w-full h-full"
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      
      {/* Main directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Fill light from the side */}
      <directionalLight
        position={[-5, 8, 3]}
        intensity={0.8}
        color="#ffffff"
      />
      
      {/* Back light for depth */}
      <directionalLight
        position={[0, 5, -10]}
        intensity={0.6}
        color="#4A90E2"
      />
      
      {/* Accent lights */}
      <pointLight position={[-10, 10, -10]} intensity={1} color="#FFD700" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C41E3A" />
      <pointLight position={[0, 8, 5]} intensity={0.8} color="#FFFFFF" />
      
      {/* Spotlights on each model */}
      <spotLight
        position={[-2.5, 8, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        target-position={[-2.5, 1, 0]}
      />
      <spotLight
        position={[3, 8, 5]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        target-position={[3, 1, 0]}
      />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* 3D Models */}
      <Suspense fallback={<LoadingSpinner />}>
        {/* Model 1 - Positioned on the left */}
        <Model1 position={[-2.5, 1, 0]} />
        
        {/* Model 2 - Positioned in the middle */}
        <Model2 position={[0, 1, 0]} />
        
        {/* Model 3 - Santa positioned on the right (larger) */}
        <Model3 position={[3, 1, 0]} />
        
        {/* Ground shadow */}
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.5}
          scale={20}
          blur={2}
          far={4}
        />
      </Suspense>
      
      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

