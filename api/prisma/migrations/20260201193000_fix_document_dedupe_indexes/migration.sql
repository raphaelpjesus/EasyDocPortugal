-- 1) remove o índice errado (permite duplicados por causa de NULLs)
DROP INDEX IF EXISTS "Document_dedupe_owner";

-- 2) cria índices únicos parciais (corretos)
-- COMPANY: dedupe por (ownerType, companyId, docType, checksum) quando checksum existe
CREATE UNIQUE INDEX IF NOT EXISTS "Document_dedupe_company"
ON "Document" ("ownerType", "companyId", "docType", "checksum")
WHERE "ownerType" = 'COMPANY' AND "companyId" IS NOT NULL AND "checksum" IS NOT NULL;

-- WORKER
CREATE UNIQUE INDEX IF NOT EXISTS "Document_dedupe_worker"
ON "Document" ("ownerType", "workerId", "docType", "checksum")
WHERE "ownerType" = 'WORKER' AND "workerId" IS NOT NULL AND "checksum" IS NOT NULL;

-- MACHINE
CREATE UNIQUE INDEX IF NOT EXISTS "Document_dedupe_machine"
ON "Document" ("ownerType", "machineId", "docType", "checksum")
WHERE "ownerType" = 'MACHINE' AND "machineId" IS NOT NULL AND "checksum" IS NOT NULL;
