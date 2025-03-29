-- CreateTable
CREATE TABLE "SalaryHistory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "salary_amount" DECIMAL(65,30) NOT NULL,
    "effective_date" TIMESTAMP(3) NOT NULL,
    "month_name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalaryHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SalaryHistory" ADD CONSTRAINT "SalaryHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
