-- CreateTable
CREATE TABLE "LeagueStat" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "skill" JSONB NOT NULL,
    "preference" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeagueStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeagueStat_memberId_key" ON "LeagueStat"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_name_nickname_key" ON "Member"("name", "nickname");

-- AddForeignKey
ALTER TABLE "LeagueStat" ADD CONSTRAINT "LeagueStat_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
