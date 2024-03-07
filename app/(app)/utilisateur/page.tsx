"use client";
import { useDelete } from "@/hooks/useDelete";
import { useFechData } from "@/hooks/useFetchData";
import { Utilisateur } from "@prisma/client";
import Link from "next/link";
import React, { useEffect } from "react";

function UtilisateurListPage() {
  const { data, fetchData } = useFechData<Utilisateur>([]);
  useEffect(() => {
    fetchData("/api/utilisateur");
  }, []);

  const { isDeleting, error, handleDelete } = useDelete<Utilisateur>(
    "/api/utilisateur/delete",
    async () => {
      // Refetch data using the appropriate useClient function (assuming it exists)
      try {
        fetchData("/api/utilisateur");
      } catch (error) {
        console.error("Error refetching data:", error);
      }
    }
  );

  const deleteRecord = async (matricule: string) => {
    try {
      const response = await fetch(`/api/utilisateur/delete/${matricule}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Utilisateur supprimé avec succès");
        fetchData("/api/utilisateur");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-hidden relative xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow py-4">
      <div className="bg-white/90 bg-blend-saturation  w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2 z-50-">
        <h1 className="h1 mb-8">Utilisateur </h1>
      </div>
      <div className="p-8 w-full h-full px-8 z-0">
        <table className="table-auto w-full overflow-x-scroll">
          <thead>
            <tr>
              <th className="px-4 py-2">Matricule</th>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Prénom(s)</th>
              <th className="px-4 py-2">Genre</th>
              <th className="px-4 py-2">Admin</th>
              <th className="px-4 py-2">Téléphone</th>
              <th className="px-4 py-2">Lieu d'origine</th>
              <th className="px-4 py-2">Mention</th>
              <th className="px-4 py-2">Niveau</th>
              <th className="px-4 py-2">Parcours</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((utilisateur) => (
              <tr key={utilisateur.matricule}>
                <td className="px-4 py-2">{utilisateur.matricule}</td>
                <td className="px-4 py-2">{utilisateur.nom}</td>
                <td className="px-4 py-2">{utilisateur.prenoms}</td>
                <td className="px-4 py-2">
                  {utilisateur.genre === "M" ? "Masculin" : "Féminin"}
                </td>
                <td className="px-4 py-2">
                  {utilisateur.isAdmin ? "Oui" : "Non"}
                </td>
                <td className="px-4 py-2">{utilisateur.telephone}</td>
                <td className="px-4 py-2">{utilisateur.lieu_origine}</td>
                <td className="px-4 py-2">{utilisateur.mention}</td>
                <td className="px-4 py-2">{utilisateur.niveau}</td>
                <td className="px-4 py-2">{utilisateur.parcours}</td>
                <td className="px-4 py-2">{utilisateur.email}</td>
                <td className="px-4 py-2">
                  <Link href={`/utilisateur/modifier/${utilisateur.matricule}`}>
                    Modifier
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(utilisateur.matricule)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UtilisateurListPage;
