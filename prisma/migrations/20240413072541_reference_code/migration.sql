/*
  Warnings:

  - A unique constraint covering the columns `[reference_code]` on the table `files_uploaded` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "files_uploaded_reference_code_key" ON "files_uploaded"("reference_code");
