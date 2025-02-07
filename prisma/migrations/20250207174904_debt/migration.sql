/*
  Warnings:

  - A unique constraint covering the columns `[notificationToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "notificationToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_notificationToken_key" ON "User"("notificationToken");
