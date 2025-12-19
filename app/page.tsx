'use client'

import Scene3D from '@/components/Scene3D'
import Snowfall from '@/components/Snowfall'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Snowfall effect */}
      <Snowfall />
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center text-christmas-white glow-text">
            🎄 Merry Christmas 🎄
          </h1>
        </div>
      </header>

      {/* 3D Scene */}
      <div className="w-full h-full mt-96">
        <Scene3D />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-christmas-white text-sm md:text-base">
            Use your mouse to rotate the scene • Scroll to zoom
          </p>
        </div>
      </footer>
    </main>
  )
}

