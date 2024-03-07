import prisma from "@/prisma/client";
import UserPublication from "@/types/UserPublication";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await prisma.publication.findMany({
      include: {
        utilisateur: true,
      },
    });

    const publication: UserPublication[] = response.map((pub) => {
      return {
        id_pub: pub.id_pub,
        matricule: pub.matricule,
        description: pub.description,
        type: pub.type,
        image: pub.image,
        photo_profil: pub.utilisateur.photo_profil,
        nom: pub.utilisateur.nom,
        prenoms: pub.utilisateur.prenoms,
      };
    });
    return res.status(200).json(publication);
  } catch (error) {
    return res.status(500).json(error);
  }
}
