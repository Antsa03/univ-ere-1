import prisma from "@/prisma/client";
import { Utilisateur } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "PUT")
      return res.status(401).json("Méthode non autorisé");
    const { email } = req.query;
    const { password } = req.body;
    const updateUtilisateur = await prisma.utilisateur.update({
      where: { email: email?.toString() },
      data: {
        password: await bcrypt.hash(password, 10),
      },
    });

    return res.status(200).json(updateUtilisateur);
  } catch (error) {
    return res.status(500).json(error);
  }
}
