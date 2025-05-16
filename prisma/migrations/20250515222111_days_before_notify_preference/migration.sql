/*
  Warnings:

  - You are about to drop the column `daysBeforeNotify` on the `Notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "daysBeforeNotify";

-- AlterTable
ALTER TABLE "NotificationPreference" ADD COLUMN     "daysBeforeNotify" INTEGER;
