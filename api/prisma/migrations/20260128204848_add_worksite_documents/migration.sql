-- CreateTable
CREATE TABLE "WorksiteDocument" (
    "id" TEXT NOT NULL,
    "worksiteId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "status" "DocumentStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "notes" TEXT,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorksiteDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WorksiteDocument_worksiteId_idx" ON "WorksiteDocument"("worksiteId");

-- CreateIndex
CREATE INDEX "WorksiteDocument_documentId_idx" ON "WorksiteDocument"("documentId");

-- CreateIndex
CREATE INDEX "WorksiteDocument_status_idx" ON "WorksiteDocument"("status");

-- CreateIndex
CREATE UNIQUE INDEX "WorksiteDocument_worksiteId_documentId_key" ON "WorksiteDocument"("worksiteId", "documentId");

-- AddForeignKey
ALTER TABLE "WorksiteDocument" ADD CONSTRAINT "WorksiteDocument_worksiteId_fkey" FOREIGN KEY ("worksiteId") REFERENCES "Worksite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorksiteDocument" ADD CONSTRAINT "WorksiteDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
