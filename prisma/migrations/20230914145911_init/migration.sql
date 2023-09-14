-- CreateTable
CREATE TABLE "recentTemps" (
    "id" TEXT NOT NULL,
    "tempInC" DOUBLE PRECISION NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recentTemps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recentTemps_id_key" ON "recentTemps"("id");
