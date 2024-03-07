import prisma from "@/prisma/client";
import { Utilisateur } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "PUT")
      return res.status(401).json("Méthode non autorisé");
    const { matricule } = req.query;
    const excludedFields = ["password"];
    const utilisateurProps = Object.fromEntries(
      Object.entries(req.body).filter(([key]) => !excludedFields.includes(key))
    );
    const updateUtilisateur = await prisma.utilisateur.update({
      where: { matricule: matricule?.toString() },
      data: utilisateurProps,
    });

    return res.status(200).json(updateUtilisateur);
  } catch (error) {
    return res.status(500).json(error);
  }
}
