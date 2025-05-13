"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Menú desplegable cuando está abierto */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background shadow-md border-t flex flex-col items-center space-y-4 py-6 z-50 md:hidden">
          <a href="#inicio" onClick={toggleMenu} className="text-sm font-medium hover:text-primary">Inicio</a>
          <a href="#nosotras" onClick={toggleMenu} className="text-sm font-medium hover:text-primary">Nosotras</a>
          <a href="#productos" onClick={toggleMenu} className="text-sm font-medium hover:text-primary">Productos</a>
          <a href="#proceso" onClick={toggleMenu} className="text-sm font-medium hover:text-primary">Proceso</a>
          <a href="#certificaciones" onClick={toggleMenu} className="text-sm font-medium hover:text-primary">Certificaciones</a>
          <a href="#contacto" onClick={toggleMenu} className="text-sm font-medium hover:text-primary">Contacto</a>
        </div>
      )}
    </>
  )
}
