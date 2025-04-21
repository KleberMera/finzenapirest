/*
  Warnings:

  - You are about to drop the column `device_id` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `NotificationPreference` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_device_id_fkey";

-- DropForeignKey
ALTER TABLE "NotificationPreference" DROP CONSTRAINT "NotificationPreference_user_id_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "device_id";

-- AlterTable
ALTER TABLE "NotificationPreference" DROP COLUMN "user_id";
