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

      // Reset form after 3 seconds
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
          <h3 className="mb-2 text-xl font-bold text-green-800">¡Mensaje Enviado!</h3>
          <p className="text-green-700">Gracias por contactarnos. Te responderemos a la brevedad.</p>
        </motion.div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="grid gap-6"
        >
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
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
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
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
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
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subject">Asunto</Label>
            <Select onValueChange={handleSelectChange} value={formData.subject}>
              <SelectTrigger
                id="subject"
                className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
              >
                <SelectValue placeholder="Selecciona un asunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Información general</SelectItem>
                <SelectItem value="purchase">Compra de productos</SelectItem>
                <SelectItem value="wholesale">Ventas al por mayor</SelectItem>
                <SelectItem value="partnership">Propuesta de colaboración</SelectItem>
                <SelectItem value="other">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="rounded-lg border-primary/20 bg-white/50 px-4 py-3 focus:border-primary focus:ring-primary"
            />
          </div>
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
