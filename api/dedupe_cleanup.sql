-- Mantém o mais recente por (ownerType, companyId, docType, checksum) quando checksum NÃO é NULL
WITH ranked AS (
  SELECT
    id,
    ROW_NUMBER() OVER (
      PARTITION BY "ownerType", "companyId", "docType", "checksum"
      ORDER BY "createdAt" DESC
    ) AS rn
  FROM "Document"
  WHERE "checksum" IS NOT NULL AND "companyId" IS NOT NULL
)
DELETE FROM "Document"
WHERE id IN (SELECT id FROM ranked WHERE rn > 1);
