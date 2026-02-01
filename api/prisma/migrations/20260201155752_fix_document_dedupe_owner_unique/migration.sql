/*
  Warnings:

  - A unique constraint covering the columns `[ownerType,docType,checksum,companyId,workerId,machineId]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Document_dedupe_company";

-- DropIndex
DROP INDEX "Document_dedupe_machine";

-- DropIndex
DROP INDEX "Document_dedupe_worker";

-- CreateIndex
CREATE UNIQUE INDEX "Document_dedupe_owner" ON "Document"("ownerType", "docType", "checksum", "companyId", "workerId", "machineId");
