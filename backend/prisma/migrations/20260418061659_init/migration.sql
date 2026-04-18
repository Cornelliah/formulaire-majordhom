-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "civilite" TEXT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "demandeVisite" BOOLEAN NOT NULL DEFAULT false,
    "etreRappele" BOOLEAN NOT NULL DEFAULT false,
    "plusDePhotos" BOOLEAN NOT NULL DEFAULT false,
    "disponibilites" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);
