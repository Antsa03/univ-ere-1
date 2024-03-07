-- CreateTable
CREATE TABLE "Utilisateur" (
    "matricule" VARCHAR(10) NOT NULL,
    "nom" VARCHAR(50) NOT NULL,
    "prenoms" VARCHAR(50),
    "isAdmin" BOOLEAN NOT NULL,
    "telephone" VARCHAR(15) NOT NULL,
    "lieu_origine" TEXT NOT NULL,
    "niveau" VARCHAR(2) NOT NULL,
    "mention" VARCHAR(4) NOT NULL,
    "parcours" VARCHAR(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("matricule")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id_pub" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "matricule" VARCHAR(10) NOT NULL,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id_pub")
);

-- CreateTable
CREATE TABLE "Commentaire" (
    "id_commentaire" SERIAL NOT NULL,
    "commentaire" TEXT NOT NULL,
    "id_pub" INTEGER NOT NULL,
    "matricule" VARCHAR(10) NOT NULL,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id_commentaire")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_matricule_key" ON "Utilisateur"("matricule");

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "Utilisateur"("matricule") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_id_pub_fkey" FOREIGN KEY ("id_pub") REFERENCES "Publication"("id_pub") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "Utilisateur"("matricule") ON DELETE CASCADE ON UPDATE CASCADE;
