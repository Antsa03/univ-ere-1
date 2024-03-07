import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Server } from "socket.io";
import { createServer } from "http";

const prisma = new PrismaClient();
let io: Server;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { contenu, id_sujet, matricule } = req.body;
      const reponse = await prisma.reponse.create({
        data: {
          contenu,
          id_sujet,
          matricule,
        },
        include: { utilisateur: true },
      });
      // Emettre un événement socket.io pour la nouvelle réponse
      io.emit("new-reponse", reponse);
      res.status(201).json(reponse);
      break;
    default:
      res.status(405).json({ error: "Méthode non autorisée" });
  }
}

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

const server = createServer();
initSocket(server);
server.listen(8080, () => {
  console.log("Serveur en écoute sur le port 8080");
});
