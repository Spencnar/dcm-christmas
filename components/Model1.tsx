'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

interface Model1Props {
  position?: [number, number, number]
}

export default function Model1({ position = [0, 0, 0] }: Model1Props) {
  const groupRef = useRef<any>(null)
  const { scene } = useGLTF('/models/snowman.glb')

  // Animate the model - gentle rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
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
useGLTF.preload('/models/snowman.glb')

