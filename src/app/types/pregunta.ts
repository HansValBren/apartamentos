import { RespuestaContacto } from "@prisma/client"

export type Preguntas = Pregunta[]
export interface Pregunta {
  pregunta_id: number
  pregunta_name: string
  pregunta_email: string
  pregunta_telefono: string
  pregunta_message: string,
  pregunta_seen: boolean,
  pregunta_created_at: Date

  respuestaContacto?: RespuestaContacto | null | undefined
}
