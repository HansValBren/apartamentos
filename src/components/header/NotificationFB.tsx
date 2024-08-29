'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { BellIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { type Preguntas } from '@/app/types/pregunta';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '@/app/loading';

function NotificationFB({ preguntas }: { preguntas: Preguntas }) {
  const router = useRouter();
  const [cantNotiShown, setCantNotiShown] = useState(3);
  const [newCant, setNewCant] = useState(0);
  const [newId, setNewId] = useState<number[]>([]);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const cantidadPreguntasSinLeer = preguntas.filter((pregunta) => !pregunta.pregunta_seen).length;
  console.log(cantidadPreguntasSinLeer);
  const cantidadPreguntasSinRespuesta = preguntas.filter((pregunta) => !pregunta.respuestaContacto).length;
  console.log(cantidadPreguntasSinRespuesta);

  useEffect(() => {
    if (inView) {
      setCantNotiShown((prev) => prev + 3);
    }
  }, [inView]);

  const timeSince = (dateString: string) => {
    const date = new Date(dateString); // HORA DEL PEDIDO
    const now = new Date(); // HORA ACTUAL
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

  async function handleOnClick() {
    setCantNotiShown(3);
    if (cantidadPreguntasSinLeer === 0) {
      return;
    }
    const response = await fetch('/api/contacto/pregunta', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const editLeido = await response.json();

    if (response.status === 200) {
      console.log(editLeido);
      router.refresh();
    }
    console.log(editLeido);
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              onClick={() => {
                setNewCant(cantidadPreguntasSinLeer);
                setNewId(
                  preguntas.filter((pregunta) => !pregunta.pregunta_seen).map((pregunta) => pregunta.pregunta_id),
                );
                handleOnClick();
              }}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <BellIcon className="h-6 w-6" />
              {cantidadPreguntasSinLeer > 0 && (
                <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                  {cantidadPreguntasSinLeer}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Card className="border-0 shadow-none">
              <CardHeader className="border-b">
                {/* <img className='w-10' src='/apa.jpg' alt="logo" /> */}
                <CardTitle>
                  {newCant === 1
                    ? `(${newCant}) Nueva notificación`
                    : newCant > 1
                      ? `(${newCant}) Nuevas notificaciones`
                      : 'No hay nuevas notificaciones'}
                </CardTitle>
                <CardDescription>
                  {cantidadPreguntasSinRespuesta > 1
                    ? `Tienes ${cantidadPreguntasSinRespuesta} consultas sin responder`
                    : cantidadPreguntasSinRespuesta === 1
                      ? `Tienes ${cantidadPreguntasSinRespuesta} consulta sin responder`
                      : `No tienes consultas por responder`}
                  .
                </CardDescription>
                <CardDescription className="text-blue-400 underline decoration-blue-400">
                  <Link href="/contacto">Ver más detalles</Link>
                </CardDescription>
              </CardHeader>
              <CardContent
                className={`max-h-[430px] overflow-y-scroll p-4 ${preguntas.length < 3 && 'scrollbar-hide max-h-[380px]'}`}
              >
                {preguntas.slice(0, cantNotiShown).map((pregunta) => (
                  <div
                    key={pregunta.pregunta_id}
                    className={`mb-4 grid grid-cols-[25px_1fr] rounded-md p-2 ${newId.includes(pregunta.pregunta_id) && 'bg-indigo-200'} items-start pb-4 last:mb-0 last:pb-0`}
                  >
                    {!pregunta.respuestaContacto ? (
                      <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-indigo-500" />
                    ) : (
                      <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-white" />
                    )}
                    <div className="grid gap-1">
                      <p className="text-sm font-medium"># {pregunta.pregunta_id}</p>
                      <p className="text-sm font-medium">{pregunta.pregunta_name}</p>
                      <p className="text-sm text-muted-foreground">{pregunta.pregunta_email}</p>
                      <p className="text-sm text-muted-foreground">
                        Tel: {pregunta.pregunta_telefono.slice(0, 4)} {pregunta.pregunta_telefono.slice(4, 8)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Hace {timeSince(pregunta.pregunta_created_at.toString())}
                      </p>
                    </div>
                  </div>
                ))}
                {cantNotiShown <= preguntas.length ? (
                  <div ref={ref} className="py-2 text-center">
                    <Loading />
                  </div>
                ) : (
                  <p className="text-center text-sm text-muted-foreground">No hay más notificaciones</p>
                )}
              </CardContent>
              {/* {preguntas.length === cantNotiShown && (
                <CardFooter className="pt-2">
                  <Button
                    onClick={
                      cantNotiShown >= preguntas.length
                        ? () => setCantNotiShown(3)
                        : () => setCantNotiShown(preguntas.length)
                    }
                    className={`mx-auto bg-zinc-900 hover:bg-zinc-800
                          ${cantNotiShown >= 3 && 'mt-2'} 
                          ${cantNotiShown >= preguntas.length && 'mt-0'}`}
                  >
                    {preguntas.length > cantNotiShown ? (
                      <div className="flex gap-1 items-center">
                        Ver más <ChevronsDown className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="flex gap-1 items-center">
                        Ver menos <ChevronsUp className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </CardFooter>
              )} */}
            </Card>
          </PopoverContent>
        </Popover>
      </DropdownMenu>
    </div>
  );
}

export default NotificationFB;
