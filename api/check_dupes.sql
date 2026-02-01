-- DUPLICADOS por COMPANY
SELECT "ownerType", "companyId", "docType", "checksum", COUNT(*) AS total
FROM "Document"
WHERE "ownerType" = 'COMPANY' AND "checksum" IS NOT NULL
GROUP BY "ownerType", "companyId", "docType", "checksum"
HAVING COUNT(*) > 1;

-- DUPLICADOS por WORKER
SELECT "ownerType", "workerId", "docType", "checksum", COUNT(*) AS total
FROM "Document"
WHERE "ownerType" = 'WORKER' AND "checksum" IS NOT NULL
GROUP BY "ownerType", "workerId", "docType", "checksum"
HAVING COUNT(*) > 1;

-- DUPLICADOS por MACHINE
SELECT "ownerType", "machineId", "docType", "checksum", COUNT(*) AS total
FROM "Document"
WHERE "ownerType" = 'MACHINE' AND "checksum" IS NOT NULL
GROUP BY "ownerType", "machineId", "docType", "checksum"
HAVING COUNT(*) > 1;
