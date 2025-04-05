"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

const certifications = [
  {
    id: 1,
    name: "Certificación Orgánica",
    description:
      "Garantiza que nuestros productos son cultivados sin el uso de pesticidas, fertilizantes sintéticos u organismos genéticamente modificados.",
    image: "/certi1.svg?height=200&width=200&text=Certificación+Orgánica",
  },
  {
    id: 2,
    name: "Fair Trade",
    description:
      "Certifica que nuestros productos son comercializados bajo condiciones justas, asegurando precios dignos para nuestras productoras.",
    image: "/certi2.svg?height=200&width=200&text=Fair+Trade",
  },
  {
    id: 3,
    name: "SHG (Strictly High Grown)",
    description:
      "Certifica que nuestro café es cultivado a alturas superiores a los 1,200 metros sobre el nivel del mar, lo que garantiza su calidad superior.",
    image: "/certi3.svg?height=200&width=200&text=SHG",
  },
  {
    id: 4,
    name: "Buenas Prácticas Agrícolas",
    description:
      "Avala que nuestros procesos productivos siguen estándares de calidad, sostenibilidad y respeto al medio ambiente.",
    image: "/certi4.svg?height=200&width=200&text=Buenas+Prácticas+Agrícolas",
  },
]

export default function CertificationGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group h-full overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/20 p-8">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
              <div className="relative flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/50 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain p-4" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                  Certificado
                </div>
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="mb-3 text-xl font-bold text-primary">{cert.name}</h3>
              <p className="text-gray-700">{cert.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

