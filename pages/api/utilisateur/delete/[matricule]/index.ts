import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { matricule } = req.query;
    const deleteUtilisateur = await prisma.utilisateur.delete({
      where: { matricule: matricule?.toString() },
    });
    return res.status(201).json(deleteUtilisateur);
  } catch (error) {
    return res.status(500).json(error);
  }
}
