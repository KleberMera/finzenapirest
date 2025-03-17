-- CreateTable
CREATE TABLE "Meta" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "target_amount" DECIMAL(65,30) NOT NULL,
    "deadline" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetaTracking" (
    "id" SERIAL NOT NULL,
    "meta_id" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "note" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetaTracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meta" ADD CONSTRAINT "Meta_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaTracking" ADD CONSTRAINT "MetaTracking_meta_id_fkey" FOREIGN KEY ("meta_id") REFERENCES "Meta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
