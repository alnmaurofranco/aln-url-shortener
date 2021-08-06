/*
  Warnings:

  - You are about to drop the `ShortUrl` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ShortUrl";

-- CreateTable
CREATE TABLE "short_urls" (
    "shortId" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "short_urls.shortId_unique" ON "short_urls"("shortId");
