'use client'

import { Html } from '@react-three/drei'

export default function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-christmas-gold"></div>
        <p className="mt-4 text-christmas-white text-lg">Loading models...</p>
      </div>
    </Html>
  )
}

