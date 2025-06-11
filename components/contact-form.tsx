"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React, { useState } from "react"

// 🔁 Reemplaza esta URL por la de tu formulario (del modo 'ver' NO del editor), tambien reemplazar el "entry" para cada input
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdLa3MKm-yaUJ-ufeDmu3VYqlEaIYOtb-Tg3ptGHo55nm_TlA/formResponse"


export default function ContactForm() {
  const [asunto, setAsunto] = useState("")

  return (
    <form
      action={GOOGLE_FORM_ACTION_URL}
      method="POST"
      target="_blank"
      className="grid gap-6"
    >
      <div className="grid gap-3">
        <Label htmlFor="nombre">Nombre completo</Label>
        <Input
          id="nombre"
          name="entry.14297671" 
          placeholder="Tu nombre"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="correo">Correo electrónico</Label>
        <Input
          id="correo"
          name="entry.363773858" 
          type="email"
          required
          placeholder="tu@email.com"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="telefono">Teléfono</Label>
        <Input
          id="telefono"
          name="entry.859854857" 
          placeholder="Tu número"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="asunto">Asunto</Label>
        <Select onValueChange={setAsunto}>
          <SelectTrigger className="bg-white/50 border-primary/20">
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
        {/* Campo oculto que envía el asunto seleccionado */}
        <input
          type="hidden"
          name="entry.1702768838" 
          value={asunto}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          name="entry.1852062817" 
          rows={5}
          required
          placeholder="Escribe tu mensaje..."
        />
      </div>
      <Button type="submit" className="bg-gradient-to-r from-primary to-amber-600 text-white">
        Enviar mensaje
      </Button>
    </form>
  )
}

