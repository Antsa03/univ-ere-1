import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { matricule } = req.query;
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { matricule: matricule?.toString() },
    });
    res.status(200).json(utilisateur);
  } catch (error) {
    return res.status(500).json(error);
  }
}
