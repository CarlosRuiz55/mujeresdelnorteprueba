"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Coffee, Droplet, Flower, Wheat } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Café Oro SHG",
    description:
      "Nuestro café oro SHG (Strictly High Grown) es cultivado en alturas superiores a los 1,200 metros sobre el nivel del mar, bajo sombra y con prácticas sostenibles.",
    color: "#8B4513",
    image: "/productocafe.png?height=600&width=600&text=Café+Oro+SHG",
    icon: Coffee,
    features: [
      "Cultivado en altura (1,200+ msnm)",
      "Proceso de beneficiado húmedo",
      "Secado al sol",
      "Certificación orgánica",
    ],
  },
  {
    id: 2,
    name: "Miel de Abeja",
    description:
      "Nuestra miel de abeja es 100% natural y orgánica. Su sabor es suave y delicado, con un aroma floral distintivo que refleja la biodiversidad de nuestra región.",
    color: "#DAA520",
    image: "/productomiel.png?height=600&width=600&text=Miel+de+Abeja",
    icon: Droplet,
    features: [
      "100% pura y natural",
      "Sin aditivos ni conservantes",
      "Proceso de extracción en frío",
      "Rica en antioxidantes",
      "Propiedades medicinales",
    ],
  },
  {
    id: 3,
    name: "Flor de Jamaica",
    description:
      "Nuestra flor de Jamaica es cultivada sin agroquímicos, preservando su intenso color rojo y sus propiedades antioxidantes. Ideal para infusiones, postres y bebidas refrescantes, aporta un sabor único y beneficios para la salud.",
    color: "#C41E3A",
    image: "/jamaica.webp?height=600&width=600&text=Flor+de+Jamaica",
    icon: Flower,
    features: [
      "Cultivo orgánico certificado",
      "Alto contenido de antioxidantes",
      "Secado natural al sol",
      "Sabor intenso y aromático",
      "Versátil para múltiples usos",
    ],
  },
  {
  id: 4,
  name: "Granos Básicos",
  description:
    "Nuestros granos básicos Frijol, Maíz y Sorgo son seleccionados cuidadosamente para garantizar calidad, frescura y valor nutricional. Cultivados de manera sostenible, forman la base de una alimentación saludable y equilibrada.",
  color: "#D4A373",
  image: "/granosbasicos.png?height=600&width=600&text=Granos+Básicos",
  icon: Wheat,
  features: [
    "Ricos en proteínas, fibra y energía natural",
    "Cultivo responsable y sostenible",
    "Ideales para una variedad de platillos tradicionales",
    "Libre de agroquímicos sintéticos",
  ],
},

]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const currentProduct = products[currentIndex]
  const IconComponent = currentProduct.icon

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            className="relative"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px] md:h-[600px]" style={{ backgroundColor: `${currentProduct.color}10` }}>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 50%, ${currentProduct.color}30, transparent 70%)`,
                  }}
                ></div>
                <Image
                  src={currentProduct.image || "/placeholder.svg"}
                  alt={currentProduct.name}
                  fill
                  className="object-contain p-8"
                />
                <div
                  className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: currentProduct.color }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
              </div>
              <div
                className="flex flex-col justify-center p-8 md:p-12"
                style={{ backgroundColor: `${currentProduct.color}05` }}
              >
                <div
                  className="mb-2 inline-block rounded-full px-3 py-1 text-sm font-medium"
                  style={{ backgroundColor: `${currentProduct.color}20`, color: currentProduct.color }}
                >
                  Producto Destacado
                </div>
                <h3 className="mb-4 font-serif text-3xl font-bold md:text-4xl" style={{ color: currentProduct.color }}>
                  {currentProduct.name}
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">{currentProduct.description}</p>

                <div className="mb-8 space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${currentProduct.color}20` }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={currentProduct.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="rounded-full px-8"
                    style={{ backgroundColor: currentProduct.color, color: "white" }}
                    asChild
                  >
                    <a href="#contacto">Más información</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => {
              if (isAnimating) return
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`group relative h-3 w-12 overflow-hidden rounded-full transition-all ${index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            aria-label={`Ver ${product.name}`}
          >
            <span
              className={`absolute left-0 top-0 h-full w-full transform transition-transform duration-2000 ease-in-out ${index === currentIndex ? "translate-x-0" : "-translate-x-full"
                }`}
              style={{ backgroundColor: product.color }}
            ></span>
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm hover:bg-white"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior producto</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm hover:bg-white"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente producto</span>
      </Button>
    </div>
  )
}

