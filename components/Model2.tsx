'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere, Torus, Cylinder } from '@react-three/drei'

interface Model2Props {
  position?: [number, number, number]
}

export default function Model2({ position = [0, 0, 0] }: Model2Props) {
  const groupRef = useRef<any>(null)

  // Animate the model - gentle bobbing motion
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Snowman placeholder - Replace with your model */}
      
      {/* Bottom snowball */}
      <Sphere args={[0.8, 32, 32]} position={[0, 0.3, 0]} castShadow>
        <meshStandardMaterial color="#FFFAFA" />
      </Sphere>
      
      {/* Middle snowball */}
      <Sphere args={[0.6, 32, 32]} position={[0, 1.3, 0]} castShadow>
        <meshStandardMaterial color="#FFFAFA" />
      </Sphere>
      
      {/* Head snowball */}
      <Sphere args={[0.4, 32, 32]} position={[0, 2.1, 0]} castShadow>
        <meshStandardMaterial color="#FFFAFA" />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.05, 16, 16]} position={[-0.15, 2.2, 0.35]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.05, 16, 16]} position={[0.15, 2.2, 0.35]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Carrot nose */}
      <Cylinder args={[0.02, 0.08, 0.3, 8]} position={[0, 2.1, 0.5]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <meshStandardMaterial color="#FF6347" />
      </Cylinder>
      
      {/* Hat base */}
      <Cylinder args={[0.5, 0.5, 0.05, 32]} position={[0, 2.45, 0]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Cylinder>
      
      {/* Hat top */}
      <Cylinder args={[0.3, 0.3, 0.4, 32]} position={[0, 2.7, 0]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Cylinder>
      
      {/* Hat band */}
      <Torus args={[0.31, 0.05, 16, 32]} position={[0, 2.52, 0]} castShadow>
        <meshStandardMaterial color="#C41E3A" />
      </Torus>
      
      {/* Buttons */}
      <Sphere args={[0.06, 16, 16]} position={[0, 1.5, 0.58]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.06, 16, 16]} position={[0, 1.2, 0.6]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.06, 16, 16]} position={[0, 0.9, 0.62]} castShadow>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Arms */}
      <Cylinder args={[0.05, 0.05, 1, 8]} position={[-0.7, 1.3, 0]} rotation={[0, 0, Math.PI / 3]} castShadow>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 1, 8]} position={[0.7, 1.3, 0]} rotation={[0, 0, -Math.PI / 3]} castShadow>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      
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
// export default function Model2({ position = [0, 0, 0] }: Model2Props) {
//   const { scene } = useGLTF('/models/your-model-2.glb')
//   return <primitive object={scene} position={position} scale={1} />
// }

