import prisma from "@/prisma/client";
import { Publication } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id_pub } = req.query;
    const publicationProps: Publication = req.body;
    if (id_pub) {
      const updatePublication = await prisma.publication.update({
        where: { id_pub: parseInt(id_pub?.toString()) },
        data: publicationProps,
      });
      return res.status(200).json(updatePublication);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
