import { NextResponse } from "next/server";
import { type Preguntas, type Pregunta } from "@/app/types/pregunta"
import db from "@/lib/db";

export async function GET() {
    const preguntas: Preguntas = await db.preguntaContacto.findMany({
        orderBy: { pregunta_id: "desc" },
        include: {
            respuestaContacto: true
        }
    })
    
    //si se pasa como nextresponse y se hace el json a la hora de leerlo en el componente no sirven los strings de los dates
    // return NextResponse.json(preguntas)

    return preguntas
}

export async function PATCH() {
    
    const preguntas: Preguntas = await db.preguntaContacto.findMany()

    if (preguntas.filter((pregunta) => !pregunta.pregunta_seen === true).length === 0) {
        console.log(`No hay preguntas}`)
        return NextResponse.json({message: 'No hay preguntas sin leer', status: 204})
    }

    const editPregunta = await db.preguntaContacto.updateMany({
        data:{
            pregunta_seen: true
        }
        
    })  
    console.log(`Preguntas editadas: ${editPregunta.count}`)
    return NextResponse.json(editPregunta)
}

export async function POST(request: Request) {
    const data = await request.json();
    console.log(data)
    const newPregunta: Pregunta = await db.preguntaContacto.create({
        data
    })  
    console.log(newPregunta)
    return NextResponse.json(newPregunta)
}

export async function DELETE (request: Request) {
    const data = await request.json();
    console.log(data)

    const deletedPregunta: Pregunta = await db.preguntaContacto.delete({
        where: {
            pregunta_id: data.pregunta_id
        }
    })
    console.log(deletedPregunta)
    return NextResponse.json(deletedPregunta)
}