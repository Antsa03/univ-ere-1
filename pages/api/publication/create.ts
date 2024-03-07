import prisma from "@/prisma/client";
import { Publication } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST")
      return res.status(401).json("Méthode non autorisé");
    const publicationProps: Publication = req.body;
    const createPublication = await prisma.publication.create({
      data: {
        description: publicationProps.description,
        type: publicationProps.type,
        matricule: publicationProps.matricule,
        image: publicationProps.image,
      },
    });
    return res.status(200).json(createPublication);
  } catch (error) {
    return res.status(500).json(error);
  }
}
