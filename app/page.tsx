import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/product-carousel"
import ProcessTimeline from "@/components/process-timeline"
import CertificationGrid from "@/components/certification-grid"
import ContactForm from "@/components/contact-form"
import { ArrowRight, ChevronDown } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg">
              <Image
                src="/feminismo.svg?height=48&width=48&text=Logo"
                alt="Mujeres del Norte Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-primary">Mujeres del Norte</span>
              <span className="text-xs text-muted-foreground">Cooperativa Multisectorial</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#inicio"
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#nosotras"
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Nosotras
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#productos"
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Productos
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#proceso"
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Proceso
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#certificaciones"
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Certificaciones
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contacto"
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/90 via-[#8B4513]/70 to-[#8B4513]/90 mix-blend-multiply"></div>
          <div className="relative h-screen max-h-[800px] overflow-hidden">
            <Image
              src="/mujeresconcafe.webp?height=1080&width=1920&text=Mujeres+Productoras"
              alt="Mujeres del Norte - Cooperativa de mujeres productoras"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <div className="relative mb-6 inline-block">
                <span className="absolute -inset-1 rounded-full bg-white/20 blur-xl"></span>
                <div className="relative rounded-full border border-white/30 bg-white/10 px-6 py-1 text-sm backdrop-blur-sm">
                  Empoderamiento femenino en el sector agroindustrial
                </div>
              </div>
              <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                <span className="block">Mujeres</span>
                <span className="block mt-2 text-[#6aa84f]">del Norte</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed md:text-xl lg:text-2xl">
                Cooperativa multisectorial de mujeres productoras de café oro exportable, miel de abeja y flor de
                Jamaica con calidad certificada
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-amber-500 px-8 text-white shadow-lg transition-all hover:bg-amber-600 hover:shadow-amber-500/30"
                >
                  <Link href="#productos" className="flex items-center gap-2">
                    Nuestros Productos
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <Link href="#contacto">Contacto</Link>
                </Button>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <Link
                href="#nosotras"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ChevronDown className="h-6 w-6 text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="nosotras" className="relative overflow-hidden py-24">
          <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-200/20 to-amber-500/30 blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-red-200/20 to-red-500/30 blur-3xl"></div>

          <div className="container relative">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Nuestra Historia
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Tradición y Empoderamiento
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary/60 to-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full border border-primary/20"></div>
                <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full border border-primary/20"></div>
                <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/presidenta.jpg?height=1200&width=800&text=Mujeres+Trabajando"
                    alt="Mujeres productoras trabajando"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <blockquote className="text-white">
                      <p className="mb-4 text-lg italic">
                        "Nuestro trabajo no solo produce alimentos de calidad, sino que transforma vidas y comunidades
                        enteras."
                      </p>
                      <footer className="font-medium">— Presidenta de la Cooperativa</footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Nuestra Misión</h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Fortalecer la autonomía económica y social de mujeres feministas rurales mediante la producción y
                    exportación de café oro SHG, miel de abeja y jamaica de alta calidad, bajo un modelo de comercio
                    justo y sostenible. A través de nuestro trabajo, generamos oportunidades económicas equitativas que
                    empoderan a nuestras socias y transforman sus comunidades, promoviendo la justicia social y la
                    protección del medio ambiente.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Nuestra Historia</h3>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">
                    Mujeres del Norte nació del sueño colectivo de mujeres rurales que buscaban independencia económica
                    y reconocimiento de su labor en el campo.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Nuestro compromiso con la producción sostenible y la mejora de la calidad de vida de nuestras
                    productoras nos ha permitido crecer y desarrollarnos como una organización líder en el sector
                    agroindustrial.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Nuestros Valores</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Empoderamiento femenino", "Equidad", "Comercio justo", "Calidad y compromiso", "Respeto"].map(
                      (value, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-3 transition-colors hover:bg-primary/10"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="font-medium">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="productos" className="relative overflow-hidden py-24">
          <div className="absolute top-0 left-0 h-[800px] w-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-fixed bg-center opacity-5"></div>

          <div className="container relative">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Productos de Calidad
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Nuestros Productos
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Ofrecemos productos de la más alta calidad, cultivados con prácticas sostenibles y procesados con el
                cuidado que solo las manos expertas de nuestras productoras pueden brindar.
              </p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary/60 to-primary mx-auto rounded-full"></div>
            </div>

            <ProductCarousel />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-24">
          <div className="container">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Testimonios
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary/60 to-primary mx-auto rounded-full"></div>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="py-24">
          <div className="container">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Del Campo a su Mesa
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">Nuestro Proceso</h2>
              <p className="mt-4 text-lg text-gray-700">
                Desde el cultivo hasta la exportación, cada etapa de nuestro proceso productivo está diseñada para
                asegurar la máxima calidad de nuestros productos.
              </p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary/60 to-primary mx-auto rounded-full"></div>
            </div>

            <ProcessTimeline />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificaciones" className="bg-gradient-to-br from-amber-50 to-amber-100 py-24">
          <div className="container">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Garantía de Calidad
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Nuestras Certificaciones
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Contamos con certificaciones que avalan nuestro compromiso con la excelencia y la sostenibilidad en
                todos nuestros procesos.
              </p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary/60 to-primary mx-auto rounded-full"></div>
            </div>

            <CertificationGrid />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="relative overflow-hidden py-24">
          <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-200/20 to-amber-500/30 blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-red-200/20 to-red-500/30 blur-3xl"></div>

          <div className="container relative">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Estamos para Servirte
              </div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl">Contáctanos</h2>
              <p className="mt-4 text-lg text-gray-700">
                Estamos interesados en escuchar tus inquietudes y establecer relaciones comerciales duraderas.
              </p>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary/60 to-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-primary">Envíanos un mensaje</h3>
                <ContactForm />
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-8 rounded-2xl bg-primary/5 p-8">
                  <h3 className="mb-6 text-2xl font-bold text-primary">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Teléfono</h4>
                        <p className="text-gray-700">+505 1234 5678</p>
                        <p className="text-gray-700">+505 8765 4321</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Correo Electrónico</h4>
                        <p className="text-gray-700">info@mujeresdelnorte.org</p>
                        <p className="text-gray-700">ventas@mujeresdelnorte.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Ubicación</h4>
                        <p className="text-gray-700">Esteli, Nicaragua</p>
                        <p className="text-gray-700">Región Norte, Centroamérica</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-primary to-amber-700 p-8 text-white">
                  <h3 className="mb-4 text-xl font-bold">Horario de Atención</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-gray-200">
          <div className="relative h-full w-full">
            <Image
              src="/diosas.jpg?height=400&width=1920&text=Mapa+Jinotega+Nicaragua"
              alt="Mapa de ubicación"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <h3 className="text-lg font-bold text-primary">Mujeres del Norte</h3>
                <p className="text-gray-700">Esteli, Nicaragua</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#6d3710] to-[#8B4513] text-white">
        <div className="container py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=48&width=48&text=Logo"
                    alt="Mujeres del Norte Logo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block text-xl font-bold tracking-tight">Mujeres del Norte</span>
                  <span className="text-xs text-white/70">Cooperativa Multisectorial</span>
                </div>
              </div>
              <p className="text-white/80">
                Cooperativa multisectorial de mujeres productoras comprometidas con la calidad, la sostenibilidad y el
                empoderamiento femenino.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-110"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-110"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-110"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Enlaces Rápidos</h3>
              <nav className="grid gap-3">
                <Link href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </Link>
                <Link href="#nosotras" className="text-white/80 hover:text-white transition-colors">
                  Nosotras
                </Link>
                <Link href="#productos" className="text-white/80 hover:text-white transition-colors">
                  Productos
                </Link>
                <Link href="#proceso" className="text-white/80 hover:text-white transition-colors">
                  Proceso
                </Link>
                <Link href="#certificaciones" className="text-white/80 hover:text-white transition-colors">
                  Certificaciones
                </Link>
                <Link href="#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Nuestros Productos</h3>
              <nav className="grid gap-3">
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Café Oro SHG
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Miel de Abeja
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Flor de Jamaica
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Productos Derivados
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Paquetes Especiales
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Boletín Informativo</h3>
              <p className="mb-4 text-white/80">
                Suscríbete para recibir noticias sobre nuestros productos, eventos y promociones especiales.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full rounded-l-lg border-0 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="rounded-r-lg bg-amber-500 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-600">
                  Suscribir
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Mujeres del Norte. Todos los derechos reservados.</p>
            <p className="mt-2">
              Diseñado con <span className="text-red-400">♥</span> para el empoderamiento de las mujeres nicaragüenses
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

