-- CreateTable
CREATE TABLE "files_uploaded" (
    "id" TEXT NOT NULL,
    "original_name" TEXT NOT NULL,
    "saved_name" TEXT NOT NULL,
    "extension_name" TEXT NOT NULL,
    "reference_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "files_uploaded_id_key" ON "files_uploaded"("id");
