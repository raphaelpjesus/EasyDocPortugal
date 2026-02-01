/*
  Warnings:

  - You are about to drop the column `addedAt` on the `WorksiteDocument` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `WorksiteDocument` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `WorksiteDocument` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "WorksiteDocument_status_idx";

-- DropIndex
DROP INDEX "WorksiteDocument_worksiteId_idx";

-- AlterTable
ALTER TABLE "WorksiteDocument" DROP COLUMN "addedAt",
DROP COLUMN "notes",
DROP COLUMN "status",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "leftAt" TIMESTAMP(3);
