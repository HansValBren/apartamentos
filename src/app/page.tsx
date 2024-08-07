import Hero from "@/components/hero/Hero"
import Inmueble from "@/components/inmueble/Inmueble"
import ContactoForm from "@/components/contacto/ContactoForm"
export default function Home() {
  return (  
    <div className="flex flex-col min-h-screen">
     <section id="hero" className="bg-muted min-h-screen px-24 flex">
      <Hero />
     </section>

     <section id="inmuebles" className="min-h-screen flex items-center py-20 px-24">
      <Inmueble />
     </section>

     <section id="contacto" className="bg-muted px-24 py-10 md:py-16 lg:py-20">
      <ContactoForm />
     </section>
    </div>
  )
}
