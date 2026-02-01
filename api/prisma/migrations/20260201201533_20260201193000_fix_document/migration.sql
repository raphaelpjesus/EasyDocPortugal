/*
  Warnings:

  - A unique constraint covering the columns `[ownerType,docType,checksum,companyId,workerId,machineId]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Document_dedupe_owner" ON "Document"("ownerType", "docType", "checksum", "companyId", "workerId", "machineId");
