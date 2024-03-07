"use client";
import AddSujetPage from "@/components/forum/SujetForm";
import SujetsPage from "@/components/forum/Sujets";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Sujets() {
  useEffect(() => {
    const socket = io("http://localhost:8080"); // Assurez-vous que l'URL correspond à celle de votre serveur

    socket.on("new-sujet", (sujet) => {
      console.log("Nouveau sujet reçu:", sujet);
      // Mettez à jour l'état du composant ou effectuez d'autres actions ici
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="relative xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow py-4">
      <div className="bg-white/90 bg-blend-saturation  w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2 z-50-">
        <h1 className="h1 mb-8">Forum de partage </h1>
      </div>
      <div className="p-8 w-full h-full z-0 flex flex-col gap-4">
        <AddSujetPage />
        <SujetsPage />
      </div>
    </div>
  );
}
