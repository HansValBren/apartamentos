import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
    const preguntas = await db.preguntaContacto.findMany(
        {
            orderBy: { pregunta_id: "desc" },
            include: {
                respuestaContacto: true
            }
        }
    )
    return NextResponse.json(preguntas)
}