import prisma from "@/prisma/client";
import { Utilisateur } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST")
      return res.status(401).json("Méthode non autorisé");
    const utilisateurProps: Utilisateur = req.body;
    const createUtilisateur = await prisma.utilisateur.create({
      data: {
        ...utilisateurProps,
        password: await bcrypt.hash(utilisateurProps.password, 10),
      },
    });

    return res.status(200).json(createUtilisateur);
  } catch (error) {
    return res.status(500).json(error);
  }
}
