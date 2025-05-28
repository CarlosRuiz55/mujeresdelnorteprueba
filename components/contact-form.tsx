"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
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
          <h3 className="mb-2 text-xl font-bold text-green-800">
            ¡Mensaje Enviado!
          </h3>
          <p className="text-green-700">
            Gracias por contactarnos. Te responderemos a la brevedad.
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid gap-6"
        >
          {/* Campo oculto requerido por Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid gap-3">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Tu número de teléfono"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="subject">Asunto</Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.subject}
            >
              <SelectTrigger id="subject">
                <SelectValue placeholder="Selecciona un asunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Información general</SelectItem>
                <SelectItem value="purchase">Compra de productos</SelectItem>
                <SelectItem value="wholesale">Ventas al por mayor</SelectItem>
                <SelectItem value="partnership">
                  Propuesta de colaboración
                </SelectItem>
                <SelectItem value="other">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      )}
    </>
  )
}


