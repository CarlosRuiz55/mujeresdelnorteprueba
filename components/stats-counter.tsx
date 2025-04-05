"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

const stats = [
  { id: 1, value: 250, label: "Mujeres Productoras", suffix: "+" },
  { id: 2, value: 15, label: "Años de Experiencia", suffix: "+" },
  { id: 3, value: 4, label: "Certificaciones", suffix: "" },
  { id: 4, value: 30, label: "Países Importadores", suffix: "+" },
]

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const timers = stats.map((stat, i) => {
      return setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const easeOutQuad = 1 - (1 - progress) * (1 - progress)

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts]
          newCounts[i] = Math.floor(easeOutQuad * stat.value)
          if (frame === totalFrames) {
            newCounts[i] = stat.value
            clearInterval(timers[i])
          }
          return newCounts
        })
      }, frameDuration)
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [isInView])

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={stat.id} className="text-center">
          <div className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            {isInView ? counts[index] : 0}
            {stat.suffix}
          </div>
          <div className="text-sm font-medium uppercase tracking-wider text-white/80 md:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

