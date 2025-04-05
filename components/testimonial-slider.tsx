"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Importador de Café, España",
    content:
      "La calidad del café oro de Mujeres del Norte es excepcional. Su compromiso con la sostenibilidad y el comercio justo se refleja en cada grano. Estamos orgullosos de ser sus socios comerciales.",
    image: "/persona1.jpg?height=100&width=100&text=Carlos",
  },
  {
    id: 2,
    name: "María González",
    role: "Distribuidora de Productos Orgánicos, México",
    content:
      "La miel de abeja que producen es simplemente incomparable. Su pureza y sabor han conquistado a nuestros clientes más exigentes. Además, trabajar con una cooperativa que empodera a mujeres rurales añade un valor incalculable.",
    image: "/persona2.webp?height=100&width=100&text=María",
  },
  {
    id: 3,
    name: "Segundo Castillo",
    role: "Chef Internacional, Estados Unidos",
    content:
      "La flor de Jamaica que producen Mujeres del Norte ha transformado mis creaciones culinarias. Su intenso color y sabor son únicos. Admiro profundamente el trabajo que realizan estas mujeres emprendedoras.",
    image: "/persona3.jpg?height=100&width=100&text=John",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 10000)
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
      <div className="mx-auto max-w-4xl">
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
          >
            <Card className="border-none bg-white shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-primary to-amber-700 p-8 md:col-span-2">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                      <svg width="100%" height="100%">
                        <pattern
                          id="pattern-circles"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                          patternContentUnits="userSpaceOnUse"
                        >
                          <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#fff"></circle>
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                      </svg>
                    </div>
                    <div className="relative flex flex-col items-center text-center text-white">
                      <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white/30 shadow-lg">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                      <p className="text-sm text-white/80">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 md:col-span-3">
                    <div className="relative">
                      <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary/10" />
                      <p className="mb-6 text-lg italic leading-relaxed text-gray-700">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Ver testimonio ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-white/90 md:-left-12"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Testimonio anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-white/90 md:-right-12"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente testimonio</span>
      </Button>
    </div>
  )
}

