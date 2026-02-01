/*
  Warnings:

  - A unique constraint covering the columns `[ownerType,companyId,docType,checksum]` on the table `Document` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerType,workerId,docType,checksum]` on the table `Document` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerType,machineId,docType,checksum]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX IF NOT EXISTS "Document_checksum_idx" ON "Document"("checksum");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Document_dedupe_company" ON "Document"("ownerType", "companyId", "docType", "checksum");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Document_dedupe_worker" ON "Document"("ownerType", "workerId", "docType", "checksum");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Document_dedupe_machine" ON "Document"("ownerType", "machineId", "docType", "checksum");
