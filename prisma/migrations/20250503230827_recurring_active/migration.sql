-- AlterTable
ALTER TABLE "RecurringTransaction" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "nextExecutionDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT,
ALTER COLUMN "lastExecuted" SET DATA TYPE TEXT;
