-- CreateTable
CREATE TABLE "JobListing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "expires" TIMESTAMP(3),
    "postedAt" TIMESTAMP(3),

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);
