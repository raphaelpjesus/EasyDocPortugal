/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Worker` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `Worker` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Worker_companyId_idx";

-- AlterTable
ALTER TABLE "Worker" ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "Worksite" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Worksite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorksiteCompany" (
    "id" TEXT NOT NULL,
    "worksiteId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leftAt" TIMESTAMP(3),

    CONSTRAINT "WorksiteCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorksiteWorker" (
    "id" TEXT NOT NULL,
    "worksiteId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leftAt" TIMESTAMP(3),

    CONSTRAINT "WorksiteWorker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorksiteMachine" (
    "id" TEXT NOT NULL,
    "worksiteId" TEXT NOT NULL,
    "machineId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leftAt" TIMESTAMP(3),

    CONSTRAINT "WorksiteMachine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Worksite_isActive_idx" ON "Worksite"("isActive");

-- CreateIndex
CREATE INDEX "WorksiteCompany_companyId_idx" ON "WorksiteCompany"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "WorksiteCompany_worksiteId_companyId_key" ON "WorksiteCompany"("worksiteId", "companyId");

-- CreateIndex
CREATE INDEX "WorksiteWorker_workerId_idx" ON "WorksiteWorker"("workerId");

-- CreateIndex
CREATE UNIQUE INDEX "WorksiteWorker_worksiteId_workerId_key" ON "WorksiteWorker"("worksiteId", "workerId");

-- CreateIndex
CREATE INDEX "WorksiteMachine_machineId_idx" ON "WorksiteMachine"("machineId");

-- CreateIndex
CREATE UNIQUE INDEX "WorksiteMachine_worksiteId_machineId_key" ON "WorksiteMachine"("worksiteId", "machineId");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_email_key" ON "Worker"("email");

-- AddForeignKey
ALTER TABLE "WorksiteCompany" ADD CONSTRAINT "WorksiteCompany_worksiteId_fkey" FOREIGN KEY ("worksiteId") REFERENCES "Worksite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorksiteCompany" ADD CONSTRAINT "WorksiteCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorksiteWorker" ADD CONSTRAINT "WorksiteWorker_worksiteId_fkey" FOREIGN KEY ("worksiteId") REFERENCES "Worksite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorksiteWorker" ADD CONSTRAINT "WorksiteWorker_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorksiteMachine" ADD CONSTRAINT "WorksiteMachine_worksiteId_fkey" FOREIGN KEY ("worksiteId") REFERENCES "Worksite"("id") ON DELETE CASCADE ON UPDATE CASCADE;
