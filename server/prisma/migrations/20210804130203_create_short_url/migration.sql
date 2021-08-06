-- CreateTable
CREATE TABLE "ShortUrl" (
    "shortId" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl.shortId_unique" ON "ShortUrl"("shortId");
