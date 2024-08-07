/*
  Warnings:

  - A unique constraint covering the columns `[pregunta_id]` on the table `RespuestaContacto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RespuestaContacto_pregunta_id_key" ON "RespuestaContacto"("pregunta_id");
