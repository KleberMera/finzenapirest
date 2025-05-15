/*
  Warnings:

  - You are about to drop the column `daysBeforeNotify` on the `Debt` table. All the data in the column will be lost.
  - You are about to drop the column `notifyEnabled` on the `Debt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Debt" DROP COLUMN "daysBeforeNotify",
DROP COLUMN "notifyEnabled";

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "daysBeforeNotify" INTEGER;
