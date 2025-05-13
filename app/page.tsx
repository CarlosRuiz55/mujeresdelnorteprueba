import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/product-carousel"
import ProcessTimeline from "@/components/process-timeline"
import CertificationGrid from "@/components/certification-grid"
import ContactForm from "@/components/contact-form"
import { ArrowRight, ChevronDown } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import MobileMenuToggle from "@/components/MobileMenuToggle"

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
          {/* Menu resposive movil */}
          <MobileMenuToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative">
          {/* Fondo gradiente más suave solo detrás del texto */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative h-screen max-h-[800px] overflow-hidden">
            <Image
              src="/mujeresconcafe.webp"
              alt="Mujeres del Norte - Cooperativa de mujeres productoras"
              fill
              className="object-cover object-center"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              {/* Badge con efecto de pulso */}
              <div className="mb-5 animate-pulse rounded-full border border-white/30 bg-white/10 px-6 py-1 text-sm backdrop-blur-sm shadow-lg">
                Empoderamiento femenino en el sector agroindustrial
              </div>

              {/* Título impactante */}
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
                Mujeres
                <span className="block mt-2 text-[#f4a10b]">del Norte</span>
              </h1>
              {/* Subtítulo más fuerte */}
              <p className="mt-4 text-xl text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.7)] max-w-xl">
                Cooperativa de mujeres productoras de café oro, miel de abeja y flor de Jamaica con calidad certificada.
              </p>

              {/* Botones visibles */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#productos"
                  className="rounded-full bg-[#c41e3a] px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform" // <-- Color actualizado aquí
                >
                  Nuestros Productos →
                </Link>
                <Link
                  href="#contacto"
                  className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Scroll hacia abajo */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
              <Link
                href="#nosotras"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
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
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    Somos una cooperativa de base multisectorial de mujeres, brindando servicios para el desarrollo social,
                    comprometida con el enfoque agroecológico lideradas por mujeres, y sustentada en la economía con la producción
                    agroecológica. La diversificación de rubros para la generación de ingresos económicos, con empoderamiento ideológico
                    organizativo, con estrategias que vincule la comercialización de nuestras producciones a nivel nacional e internacional.

                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Nuestra Historia</h3>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700 text-justify">
                    La Cooperativa Multisectorial Mujeres del Norte R.L. (COPEMUJER R.L.), ubicada en la comunidad Los Llanos
                    No. 1, municipio de Pueblo Nuevo, Estelí, fue constituida el 18 de noviembre de 2004 por 36 mujeres socias
                    de la misma comunidad.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    Desde sus inicios, ha trabajado bajo principios de gobernanza participativa,
                    organizándose mediante un consejo de administración, una junta de vigilancia, una comisión de
                    educación cooperativa, y representación ante la central Las Diosas R.L. Su enfoque ha sido el
                    empoderamiento económico, social y productivo de las mujeres rurales
                  </p>
                </div>

                <div>
                  <h3 className="mb-8 text-4xl font-extrabold text-center text-primary">
                    Nuestros Valores
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      {
                        label: "Empoderamiento femenino",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m-4-4h8m-4-7a4 4 0 100-8 4 4 0 000 8z" />
                          </svg>
                        ),
                        color: "bg-pink-500",
                      },
                      {
                        label: "Solidaridad",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.333 0-2.667 1.333-4 4 1.333 2.667 2.667 4 4 4s2.667-1.333 4-4c-1.333-2.667-2.667-4-4-4z" />
                          </svg>
                        ),
                        color: "bg-emerald-500",
                      },
                      {
                        label: "Autonomía",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ),
                        color: "bg-indigo-500",
                      },
                      {
                        label: "Educación",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                          </svg>
                        ),
                        color: "bg-blue-500",
                      },
                      {
                        label: "Cooperación",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8a9 9 0 110-18 9 9 0 010 18z" />
                          </svg>
                        ),
                        color: "bg-yellow-500",
                      },
                      {
                        label: "Respeto",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105.895-2 2-2h6a2 2 0 012 2v4a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4z M2 12h4v-4v8" />
                          </svg>
                        ),
                        color: "bg-red-500",
                      },
                      {
                        label: "Igualdad",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17H8m8-4H8m8-4H8" />
                          </svg>
                        ),
                        color: "bg-purple-500",
                      },
                    ].map(({ label, icon, color }, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center rounded-2xl border border-primary/10 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl text-center"
                      >
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${color} shadow-md`}>
                          {icon}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">{label}</h4>
                      </div>
                    ))}
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
                        <p className="text-gray-700">mujeresdelnorte.rl@gmail.com</p>
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
                        <p className="text-gray-700">Pueblo Nuevo, Esteli, Nicaragua</p>
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
                    src="/feminismo.svg?height=48&width=48&text=Logo"
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
                {/* Instagram */}
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

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@coopmujeresdelnorte?is_from_webapp=1&sender_device=pc"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="transition-transform group-hover:scale-110"
                  >
                    <path d="M232,72.58a63.87,63.87,0,0,1-48-23.18V152a72,72,0,1,1-72-72,8,8,0,0,1,0,16,56,56,0,1,0,56,56V24a8,8,0,0,1,13.52-5.66A48,48,0,0,0,232,64a8,8,0,0,1,0,16Z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
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
                <Link href="#productos" className="text-white/80 hover:text-white transition-colors">
                  Café Oro SHG
                </Link>
                <Link href="#productos" className="text-white/80 hover:text-white transition-colors">
                  Miel de Abeja
                </Link>
                <Link href="#productos" className="text-white/80 hover:text-white transition-colors">
                  Flor de Jamaica
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

