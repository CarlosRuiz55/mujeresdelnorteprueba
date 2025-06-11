"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    id: 1,
    name: "Licencia Sanitaria Minsa - Nicaragua",
    description:
      "Certifica que nuestras instalaciones y procesos cumplen con todas las normativas de higiene y seguridad, avaladas por el Ministerio de Salud (Minsa) de Nicaragua.",
    image: "/certificado.svg?height=200&width=200&text=CERTIFICADO",
  },
  {
    id: 2,
    name: "SHG (Strictly High Grown)",
    description:
      "Nuestro café es cultivado a más de 1,200 metros sobre el nivel del mar, lo que garantiza una calidad superior reconocida internacionalmente.",
    image: "/certi3.svg?height=200&width=200&text=SHG",
  }
]

export default function CertificationGrid() {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        {certifications.map((cert) => (
          <Card key={cert.id} className="rounded-2xl border border-gray-200 bg-white shadow-md transition-all">
            <div className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] p-6">
              <div className="relative flex flex-col items-center">
                <div className="h-28 w-28 rounded-full border-4 border-white shadow-md overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={90}
                    height={90}
                    className="object-contain rounded-full"
                  />
                </div>

                <span className="mt-4 inline-block rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white shadow">
                  Certificado
                </span>
              </div>
            </div>

            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-gray-800">{cert.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

