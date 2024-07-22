import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";


export default function Contacto() {
    return (
        <div className="container mx-auto min-w-screen-lg px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Contáctanos para más información</h2>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Nombre
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="José López..."
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
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
        </div>
    )
}
