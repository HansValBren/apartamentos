'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contacto() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    const data = new FormData(event.currentTarget);

    console.log(JSON.stringify(data));

    try {
      const response = await fetch('/api/contacto/pregunta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pregunta_name: data.get('name'),
          pregunta_telefono: data.get('phone'),
          pregunta_email: data.get('email'),
          pregunta_message: data.get('message'),
        }),
      });

      const newQuestion = await response.json();

      console.log(newQuestion);

      if (response.ok) {
        alert('Gracias por contactar con nosotros. En breve nos pondremos en contacto contigo.');
        console.log('Gracias por contactar con nosotros. En breve nos pondremos en contacto contigo.');
        formRef.current?.reset();
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold md:text-3xl">
          {sent === true ? `Gracias por contactarnos ${name}` : 'Contáctanos para más información'}
        </h2>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Nombre
              </label>
              <Input
                onChange={(e) => {
                  setName(e.target.value), setSent(false);
                }}
                type="text"
                id="name"
                name="name"
                placeholder="José López..."
                className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                Teléfono
              </label>
              <Input
                type="number"
                id="phone"
                name="phone"
                placeholder="8888 8888."
                className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="josé@gmail.com"
                className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Mensaje
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="¿Cómo podemos ayudarte?"
              className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:px-12 md:text-base"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
