import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
async function main() {
  const users = [
    {
      matricule: "2419",
      photo_profil: "user.png",
      nom: "RAMAMONJISOA",
      prenoms: "Andrianiony Antsatiana",
      genre: "M",
      isAdmin: true,
      telephone: "+261344027527",
      lieu_origine: "Antananarivo",
      niveau: "L3",
      mention: "Info",
      parcours: "GB",
      email: "ramantsa03@gmail.com",
      password: await bcrypt.hash("antsaram", 10), // Utiliser bcrypt pour crypter le mot de passe
    },
    {
      matricule: "2679",
      photo_profil: "user.png",
      nom: "FENONANTENAINA",
      prenoms: "Rantomahampy Armel",
      genre: "M",
      isAdmin: true,
      telephone: "+261348165677",
      lieu_origine: "Fianarantsoa",
      niveau: "L3",
      mention: "Info",
      parcours: "GB",
      email: "lemramimel@gmail.com",
      password: await bcrypt.hash("armel", 10), // Utiliser bcrypt pour crypter le mot de passe
    },
  ];

  for (const user of users) {
    await prisma.utilisateur.create({
      data: user,
    });
  }
  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
