import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
    const respuestas = await db.respuestaContacto.findMany(
        {
            orderBy: { pregunta_id: "desc" },
            include: {
                preguntaContacto: true
            }
        }
    )
    return NextResponse.json(respuestas)
}