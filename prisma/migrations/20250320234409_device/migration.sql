-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "device_id" INTEGER;

-- AlterTable
ALTER TABLE "NotificationPreference" ADD COLUMN     "device_id" INTEGER;

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "os" TEXT,
    "browser" TEXT,
    "isMobile" BOOLEAN NOT NULL DEFAULT false,
    "userAgent" TEXT,
    "brand" TEXT,
    "model" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationPreference" ADD CONSTRAINT "NotificationPreference_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;
