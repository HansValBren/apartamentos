-- CreateTable
CREATE TABLE "PreguntaContacto" (
    "pregunta_id" SERIAL NOT NULL,
    "pregunta_name" TEXT NOT NULL,
    "pregunta_email" TEXT NOT NULL,
    "pregunta_message" TEXT NOT NULL,
    "pregunta_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PreguntaContacto_pkey" PRIMARY KEY ("pregunta_id")
);

-- CreateTable
CREATE TABLE "RespuestaContacto" (
    "respuesta_id" SERIAL NOT NULL,
    "respuesta_message" TEXT NOT NULL,
    "respuesta_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pregunta_id" INTEGER NOT NULL,

    CONSTRAINT "RespuestaContacto_pkey" PRIMARY KEY ("respuesta_id")
);

-- AddForeignKey
ALTER TABLE "RespuestaContacto" ADD CONSTRAINT "RespuestaContacto_pregunta_id_fkey" FOREIGN KEY ("pregunta_id") REFERENCES "PreguntaContacto"("pregunta_id") ON DELETE RESTRICT ON UPDATE CASCADE;
