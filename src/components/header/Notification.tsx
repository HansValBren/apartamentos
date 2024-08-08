'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { BellIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Preguntas } from '@/app/types/pregunta';
import Link from 'next/link';
function Notification({ preguntas }: { preguntas: Preguntas }) {
  let cantidadPreguntasSinRespuesta = preguntas.filter((pregunta) => !pregunta.respuestaContacto).length;
  let preguntasSinRespuesta = preguntas.filter((pregunta) => !pregunta.respuestaContacto);
  console.log(preguntasSinRespuesta);

  const timeSince = (dateString: string) => {
    const date = new Date(dateString); //HORA DEL PEDIDO
    const now = new Date(); //HORA ACTUAL
    //restamoos el tiempo actual al tiempo del pedido
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return ` ${interval} horas`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return ` ${interval} minutos`;
    }
    return `${Math.floor(seconds)} segundos`;
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <BellIcon className="h-6 w-6" />
              {cantidadPreguntasSinRespuesta > 0 && (
                <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                  {cantidadPreguntasSinRespuesta}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Card className="border-0 shadow-none">
              <CardHeader className="border-b">
                <CardTitle>Notificaciones</CardTitle>
                <CardDescription>
                  Tienes {cantidadPreguntasSinRespuesta}{' '}
                  {cantidadPreguntasSinRespuesta === 1 ? 'consulta sin responder' : 'consultas sin responder'}.
                </CardDescription>
                <CardDescription className="text-blue-400 underline decoration-blue-400">
                  <Link href="/contacto">Ver todas las consultas</Link>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {preguntasSinRespuesta.map((pregunta) => (
                  <div
                    key={pregunta.pregunta_id}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">{pregunta.pregunta_name}</p>
                      <p className="text-sm text-muted-foreground">{pregunta.pregunta_email}</p>
                      <p className="text-sm text-muted-foreground">
                        Tel: {pregunta.pregunta_telefono.slice(0, 4)} {pregunta.pregunta_telefono.slice(4, 8)}{' '}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {timeSince(pregunta.pregunta_created_at.toString())}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </PopoverContent>
        </Popover>
      </DropdownMenu>
    </div>
  );
}

export default Notification;
