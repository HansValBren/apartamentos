import Hero from "@/components/hero/Hero"
import Inmueble from "@/components/inmueble/Inmueble"
import ContactoForm from "@/components/contacto/ContactoForm"
export default function Home() {
  return (  
    <div className="flex flex-col min-h-screen">
     <section id="hero" className="bg-muted py-24 px-24 md:py-16 lg:py-20 h-screen flex items-center">
      <Hero />
     </section>

     <section id="bienes" className="px-24 py-10 md:py-16 lg:py-20">
      <Inmueble />
     </section>

     <section id="contacto" className="bg-muted px-24 py-10 md:py-16 lg:py-20">
      <ContactoForm />
     </section>
    </div>
  )
}
