'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  left: string
  animationDuration: string
  animationDelay: string
  fontSize: string
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // Generate snowflakes
    const flakes: Snowflake[] = []
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 10}s`,
        fontSize: `${Math.random() * 1 + 0.5}em`,
      })
    }
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

