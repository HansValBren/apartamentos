/*
  Warnings:

  - You are about to drop the column `pregunta_numero` on the `PreguntaContacto` table. All the data in the column will be lost.
  - Added the required column `pregunta_telefono` to the `PreguntaContacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PreguntaContacto" DROP COLUMN "pregunta_numero",
ADD COLUMN     "pregunta_telefono" TEXT NOT NULL;
