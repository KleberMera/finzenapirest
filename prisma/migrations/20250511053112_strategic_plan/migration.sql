-- CreateTable
CREATE TABLE "StrategyPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "datajson" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StrategyPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StrategyPlan" ADD CONSTRAINT "StrategyPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
