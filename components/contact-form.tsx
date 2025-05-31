"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPk7Jw4HZH60WD1RarBRBM7wI3ugQyWyL9sRayv23c-bk_hX9uStHyQqkDqTEG5XmVnw/exec"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Correo: "",
    Telefono: "",
    asunto: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, asunto: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const dataToSend = {
        ...formData,
        fecha: new Date().toISOString(), // siempre envía fecha actual ISO
      }

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error(`Error en el envío: ${response.statusText}`)
      }

      const result = await response.json()
      console.log("Respuesta del servidor:", result)

      setIsSubmitted(true)
      setFormData({
        Nombre: "",
        Correo: "",
        Telefono: "",
        asunto: "",
        mensaje: "",
      })

      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Error inesperado al enviar el formulario")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex h-full flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-green-800">¡Mensaje Enviado!</h3>
          <p className="text-green-700">Gracias por contactarnos. Te responderemos a la brevedad.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="Nombre" className="text-sm font-medium">
              Nombre completo
            </Label>
            <Input
              id="Nombre"
              name="Nombre"
              placeholder="Tu nombre"
              required
              value={formData.Nombre}
              onChange={handleChange}
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="Correo" className="text-sm font-medium">
              Correo electrónico
            </Label>
            <Input
              id="Correo"
              name="Correo"
              type="email"
              placeholder="tu@email.com"
              required
              value={formData.Correo}
              onChange={handleChange}
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="Telefono" className="text-sm font-medium">
              Teléfono
            </Label>
            <Input
              id="Telefono"
              name="Telefono"
              placeholder="Tu número de teléfono"
              value={formData.Telefono}
              onChange={handleChange}
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="asunto" className="text-sm font-medium">
              Asunto
            </Label>
            <Select onValueChange={handleSelectChange} value={formData.asunto}>
              <SelectTrigger
                id="asunto"
                className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
              >
                <SelectValue placeholder="Selecciona un asunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Información general">Información general</SelectItem>
                <SelectItem value="Compra de productos">Compra de productos</SelectItem>
                <SelectItem value="Ventas al por mayor">Ventas al por mayor</SelectItem>
                <SelectItem value="Propuesta de colaboración">Propuesta de colaboración</SelectItem>
                <SelectItem value="Otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mensaje" className="text-sm font-medium">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              required
              value={formData.mensaje}
              onChange={handleChange}
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="relative mt-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-amber-600 px-6 py-3 font-medium text-white transition-all hover:from-primary/90 hover:to-amber-500"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </div>
            ) : (
              "Enviar mensaje"
            )}
          </Button>
        </form>
      )}
    </>
  )
}
