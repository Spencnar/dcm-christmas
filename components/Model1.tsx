'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Box, Sphere, Cone } from '@react-three/drei'

interface Model1Props {
  position?: [number, number, number]
}

export default function Model1({ position = [0, 0, 0] }: Model1Props) {
  const groupRef = useRef<any>(null)

  // Animate the model - gentle rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Christmas Tree placeholder - Replace with your model */}
      {/* Tree trunk */}
      <Box args={[0.3, 0.8, 0.3]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Tree foliage - bottom layer */}
      <Cone args={[1.2, 1.5, 8]} position={[0, 1.2, 0]} castShadow>
        <meshStandardMaterial color="#165B33" />
      </Cone>
      
      {/* Tree foliage - middle layer */}
      <Cone args={[0.9, 1.2, 8]} position={[0, 2, 0]} castShadow>
        <meshStandardMaterial color="#1a6b3d" />
      </Cone>
      
      {/* Tree foliage - top layer */}
      <Cone args={[0.6, 1, 8]} position={[0, 2.6, 0]} castShadow>
        <meshStandardMaterial color="#1e7b47" />
      </Cone>
      
      {/* Star on top */}
      <Sphere args={[0.15, 16, 16]} position={[0, 3.3, 0]} castShadow>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Ornaments */}
      <Sphere args={[0.1, 16, 16]} position={[0.5, 1.5, 0.3]} castShadow>
        <meshStandardMaterial color="#C41E3A" metalness={0.8} roughness={0.2} />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[-0.4, 2, 0.4]} castShadow>
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[0.3, 2.5, 0.2]} castShadow>
        <meshStandardMaterial color="#C41E3A" metalness={0.8} roughness={0.2} />
      </Sphere>
      
      {/* Label */}
      <mesh position={[0, -0.8, 0]}>
        <planeGeometry args={[2, 0.3]} />
        <meshBasicMaterial color="#000000" opacity={0.5} transparent />
      </mesh>
    </group>
  )
}

// Instructions for replacing with your own model:
// 1. Export your model as .glb or .gltf format
// 2. Place it in the /public/models/ directory
// 3. Use the useGLTF hook from @react-three/drei:
//
// import { useGLTF } from '@react-three/drei'
// 
// export default function Model1({ position = [0, 0, 0] }: Model1Props) {
//   const { scene } = useGLTF('/models/your-model-1.glb')
//   return <primitive object={scene} position={position} scale={1} />
// }

