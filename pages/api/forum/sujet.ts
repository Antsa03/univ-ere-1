import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Server } from "socket.io";
import { createServer } from "http";

export function initSocket(server: any) {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket connecté");

    socket.on("new-reponse", (reponse) => {
      io.emit("update-sujet", reponse.id_sujet);
    });
  });
}

const prisma = new PrismaClient();
let io: Server;
const server = createServer();
initSocket(server);
server.listen(8080, () => {
  console.log("Serveur en écoute sur le port 8080");
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const sujets = await prisma.sujet.findMany({
        include: { utilisateur: true },
      });
      res.status(200).json(sujets);
      break;
    case "POST":
      const { titre, description, matricule } = req.body;
      const sujet = await prisma.sujet.create({
        data: {
          titre,
          description,
          matricule,
        },
        include: { utilisateur: true },
      });
      io.emit("new-sujet", sujet);
      res.status(201).json(sujet);
      break;
    case "DELETE":
      // Assurez-vous d'avoir un ID de sujet valide dans la requête
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ error: "ID de sujet manquant" });
      }

      // Supprimer le sujet
      const deletedSujet = await prisma.sujet.delete({
        where: { id_sujet: Number(id) },
      });

      // Emitter un événement pour informer les clients de la suppression
      io.emit("delete-sujet", deletedSujet.id_sujet);

      res
        .status(200)
        .json({ message: "Sujet supprimé", id: deletedSujet.id_sujet });
      break;
    default:
      res.status(405).json({ error: "Méthode non autorisée" });
  }
}
