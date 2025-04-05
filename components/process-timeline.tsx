"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

const processSteps = [
  {
    id: 1,
    title: "Cultivo Responsable",
    description:
      "Nuestros productos son cultivados siguiendo prácticas agrícolas sostenibles, respetando el medio ambiente y garantizando la calidad desde la siembra.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#8B4513]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 22V2l10 5-10 5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Cosecha Selectiva",
    description:
      "Realizamos una cosecha selectiva, recogiendo solo los frutos en su punto óptimo de maduración para asegurar el mejor sabor y calidad.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#8B4513]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15v2a4 4 0 0 0 4 4h4" />
        <path d="M16 4h2a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M9 15h.01" />
        <path d="M15 15h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Procesamiento Cuidadoso",
    description:
      "Procesamos nuestros productos con métodos tradicionales mejorados con tecnología apropiada, preservando sus características naturales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#8B4513]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
        <path d="M12 13a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3Z" />
        <path d="M18 2H6" />
        <path d="M17 7H7" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Control de Calidad",
    description:
      "Cada lote de producción pasa por rigurosos controles de calidad para garantizar que solo los mejores productos lleguen a nuestros clientes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#8B4513]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Empaque y Exportación",
    description:
      "Empacamos nuestros productos en materiales eco-amigables y los preparamos para su exportación, cumpliendo con todos los estándares internacionales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#8B4513]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
        <polyline points="2.32 6.16 12 11 21.68 6.16" />
        <line x1="12" y1="22.76" x2="12" y2="11" />
      </svg>
    ),
  },
]

//  Función para retornar imagen según ID
const getImageById = (id: number): string => {
  switch (id) {
    case 1:
      return "/cultivoresp.jpg"
    case 2:
      return "/selectiva.jpg"
    case 3:
      return "/procesamientomiel.jpeg"
    case 4:
      return "/calidad.jpg"
    case 5:
      return "/empaque.webp"
    default:
      return "/images/default.png"
  }
}

export default function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>

      <div className="grid gap-16">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:text-right" : ""}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary shadow-lg">
                <span className="text-lg font-bold text-white">{step.id}</span>
                <span className="absolute -inset-1 animate-ping rounded-full bg-primary opacity-20"></span>
              </div>
            </div>

            {/* Content */}
            <div className={`${index % 2 === 0 ? "md:order-first" : "md:order-last"}`}>
              <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                <div className="h-2 bg-gradient-to-r from-primary to-amber-500"></div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">{step.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className={`${index % 2 === 0 ? "md:order-last" : "md:order-first"}`}>
              <div className="relative h-[250px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={getImageById(step.id)}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


