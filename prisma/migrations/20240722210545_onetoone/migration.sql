/*
  Warnings:

  - You are about to drop the column `respuestaContactoId` on the `PreguntaContacto` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PreguntaContacto_respuestaContactoId_key";

-- AlterTable
ALTER TABLE "PreguntaContacto" DROP COLUMN "respuestaContactoId";
