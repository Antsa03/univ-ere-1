import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id_pub } = req.query;
    if (id_pub) {
      const deletePublication = await prisma.publication.delete({
        where: { id_pub: parseInt(id_pub?.toString()) },
      });
      return res.status(200).json(deletePublication);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
