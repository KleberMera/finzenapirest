/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `RecurringTransaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "date" TEXT,
ADD COLUMN     "recurringTransactionId" INTEGER,
ADD COLUMN     "time" TEXT;

-- AlterTable
ALTER TABLE "RecurringTransaction" DROP COLUMN "dayOfWeek";

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recurringTransactionId_fkey" FOREIGN KEY ("recurringTransactionId") REFERENCES "RecurringTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
