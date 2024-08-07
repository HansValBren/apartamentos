"use client"
import { type Preguntas, type Pregunta } from "@/app/types/pregunta"
import { Button } from "@/components/ui/button"
import { Trash2, ChevronLeft } from "lucide-react";
import { useState } from "react"
import { useRouter } from "next/navigation"

function PreguntasList({ preguntas }: { preguntas: Preguntas }) {

    const [clicked, setClicked] = useState(false)
    const [id, setId] = useState(0)
    const [message, setMessage] = useState("")

    const router = useRouter()
    const handleOnClick = (pregunta: Pregunta) => {
        setClicked(true)
        if (clicked === true && id === pregunta.pregunta_id) {
            setMessage("")
            setClicked(false)
        }
        if (clicked === true && id !== pregunta.pregunta_id) {
            setClicked(true)
        }
    }
    async function createRespuesta() {


        console.log(message)

        try {
            const response = await fetch('/api/contacto/respuesta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pregunta_id: id,
                    respuesta_message: message,
                }),
            })

            const newRespuesta = await response.json()

            console.log(newRespuesta)

            if (response.ok) {
                alert('Respuesta enviada')
                console.log('Gracias por contactar con nosotros. En breve nos pondremos en contacto contigo.')
                setMessage("")
                setClicked(false)
                router.refresh()
            }

        } catch (error) {
            console.error(error)
        }
    }
    async function deleteRespuesta(respuesta_id: number | undefined) {
        try {
            const response = await fetch('/api/contacto/respuesta', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    respuesta_id: respuesta_id,
                }),
            })

            const deletedRespuesta = await response.json()

            console.log(deletedRespuesta)

            if (response.ok) {
                alert('Respuesta eliminada')
                console.log('Respuesta eliminada')
                setClicked(false)
                router.refresh()
            }

        } catch (error) {
            console.error(error)
        }
    }
    async function deletePregunta(pregunta_id: number) {
        try {
            const response = await fetch('/api/contacto/pregunta', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pregunta_id: pregunta_id,
                }),
            })

            const deletedPregunta = await response.json()

            console.log(deletedPregunta)

            if (response.ok) {
                alert('Pregunta eliminada')
                console.log('Pregunta eliminada')
                setClicked(false)
                router.refresh()
            }

        } catch (error) {
            console.error(error)
        }
    }

    let cantidadPreguntasSinRespuesta = preguntas.filter((pregunta) => !pregunta.respuestaContacto).length

    return (
        <div className="">
            <h2 className="text-3xl font-semibold my-10">Consultas por responder: {cantidadPreguntasSinRespuesta}</h2>
            {preguntas.map((pregunta) => (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 border-b-2 pb-4"
                    key={pregunta.pregunta_id}>
                    <h2># {pregunta.pregunta_id}</h2>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Consulta</h2>
                        <h3 className="text-lg font-normal">{pregunta.pregunta_name}</h3>
                        <p className="text-foreground">{pregunta.pregunta_email}</p>
                        <p>Teléfono: {pregunta.pregunta_telefono.slice(0, 4)} {pregunta.pregunta_telefono.slice(4, 8)}  </p>
                        <p className="text-foreground">Mensaje: {pregunta.pregunta_message}</p>
                        <p className="text-foreground">Visto: {pregunta.pregunta_seen ? 'Si' : 'No'}</p>
                        <p className="text-foreground">{pregunta.pregunta_created_at.toLocaleString('es-ES', {
                            weekday: 'long', // Nombre completo del día
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit', 
                            minute: '2-digit',
                            second: '2-digit',
                        })}</p>
                        <Button onClick={() => deletePregunta(pregunta.pregunta_id)}
                            className="mt-4 flex gap-2 bg-rose-600 hover:bg-rose-500"><Trash2 className="w-6 h-6" />
                            Eliminar consulta
                        </Button>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Respuesta</h2>
                        {
                            !pregunta.respuestaContacto
                                ? <div className="space-y-2">
                                    {
                                        clicked === true && id === pregunta.pregunta_id
                                            ? <div>
                                                <textarea onChange={(e) => setMessage(e.target.value)}
                                                    className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary" name="respuesta_message" id="message" />
                                            </div>
                                            : <p className="text-foreground">Aún no hay respuesta</p>
                                    }
                                    <div className="flex items-center">
                                    <Button className={`${clicked === true && id === pregunta.pregunta_id
                                        ? 'bg-foreground hover:bg-foreground/80'
                                        : 'bg-sky-600 hover:bg-sky-500'
                                        }`}
                                        onClick={() => {
                                            handleOnClick(pregunta),
                                                setId(pregunta.pregunta_id)
                                        }}
                                    >{clicked === true && id === pregunta.pregunta_id ? <ChevronLeft className="w-6 h-6" /> : 'Responder'}</Button>
                                    {
                                        clicked === true && id === pregunta.pregunta_id
                                            && <Button className="ml-1 bg-green-600 hover:bg-emerald-500"
                                                onClick={() => createRespuesta()}>Responder</Button>
                                    }
                                    </div>
                                </div>

                                : <p className="text-foreground">{pregunta.respuestaContacto?.respuesta_message}</p>

                        }
                        <p className="text-foreground">
                            {pregunta.respuestaContacto?.respuesta_created_at.toLocaleString('es-ES', {
                                weekday: 'long', // Nombre completo del día
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            })}
                        </p>
                        {pregunta.respuestaContacto &&
                            <Button className="mt-4 flex gap-2"
                                onClick={() => deleteRespuesta(pregunta.respuestaContacto?.respuesta_id)}>
                                <Trash2 className="w-6 h-6" />
                                Eliminar respuesta
                            </Button>
                        }

                    </div>
                </div>
            ))}
        </div>
    )
}

export default PreguntasList
