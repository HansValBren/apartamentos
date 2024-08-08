import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const respuestas = await db.respuestaContacto.findMany({
    orderBy: { pregunta_id: 'desc' },
    include: {
      preguntaContacto: true,
    },
  });
  return respuestas;
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const newRespuesta = await db.respuestaContacto.create({
    data,
  });

  console.log(newRespuesta);
  return NextResponse.json(newRespuesta);
}

export async function DELETE(request: Request) {
  const data = await request.json();

  const deleteRespuesta = await db.respuestaContacto.delete({
    where: {
      respuesta_id: data.respuesta_id,
    },
  });
  console.log(deleteRespuesta);
  return NextResponse.json(deleteRespuesta);
}
