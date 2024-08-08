import Hero from '@/components/hero/Hero';
import Inmueble from '@/components/inmueble/Inmueble';
import ContactoForm from '@/components/contacto/ContactoForm';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section id="hero" className="flex min-h-screen bg-muted px-24">
        <Hero />
      </section>

      <section id="inmuebles" className="flex min-h-screen items-center px-24 py-20">
        <Inmueble />
      </section>

      <section id="contacto" className="bg-muted px-24 py-10 md:py-16 lg:py-20">
        <ContactoForm />
      </section>
    </div>
  );
}
