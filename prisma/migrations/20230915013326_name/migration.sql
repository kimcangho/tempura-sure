/*
  Warnings:

  - You are about to drop the `recentTemps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recentTemps";

-- CreateTable
CREATE TABLE "snapshots" (
    "id" TEXT NOT NULL,
    "tempInC" DOUBLE PRECISION NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "snapshots_id_key" ON "snapshots"("id");
