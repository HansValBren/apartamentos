/*
  Warnings:

  - Added the required column `pregunta_numero` to the `PreguntaContacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PreguntaContacto" ADD COLUMN     "pregunta_numero" TEXT NOT NULL;
