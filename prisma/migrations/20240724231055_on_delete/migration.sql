-- DropForeignKey
ALTER TABLE "RespuestaContacto" DROP CONSTRAINT "RespuestaContacto_pregunta_id_fkey";

-- AddForeignKey
ALTER TABLE "RespuestaContacto" ADD CONSTRAINT "RespuestaContacto_pregunta_id_fkey" FOREIGN KEY ("pregunta_id") REFERENCES "PreguntaContacto"("pregunta_id") ON DELETE CASCADE ON UPDATE CASCADE;
