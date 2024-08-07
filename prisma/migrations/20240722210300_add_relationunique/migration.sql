/*
  Warnings:

  - A unique constraint covering the columns `[respuestaContactoId]` on the table `PreguntaContacto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PreguntaContacto_respuestaContactoId_key" ON "PreguntaContacto"("respuestaContactoId");
