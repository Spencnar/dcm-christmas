'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

interface Model3Props {
  position?: [number, number, number]
}

export default function Model3({ position = [0, 0, 0] }: Model3Props) {
  const groupRef = useRef<any>(null)
  const { scene } = useGLTF('/models/santa.glb')

  // Animate the model - gentle rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <primitive 
        object={scene.clone()} 
        scale={2}
      />
    </group>
  )
}

// Preload the model
useGLTF.preload('/models/santa.glb')

