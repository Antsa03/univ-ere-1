import React from "react";

function PersonelPage() {
  const responsables = [
    {
      id: "1",
      title: "Responsable mention informatique",
      name: "M. Haja Louis RABETAFIKA",
      fonction: "Maître de Conférences",
    },
    {
      id: "2",
      title: "Responsable mention intelligence artificielle",
      name: "M. DIMBISOA William Germain",
      fonction: "Maître de Conférences",
    },
    {
      id: "3",
      title: "Président du Conseil d'Ecole",
      name: "Mme Marie Dieudonné Michel Razafindrandriatsimaniry",
      fonction: "",
    },
    {
      id: "4",
      title: "Directeur",
      name: "M. MAHATODY Thomas",
      fonction: "Docteur HDR",
    },
    {
      id: "5",
      title: "Président du collège des enseignants",
      name: "M. RAFAMANTANANTSOA Fontaine",
      fonction: "Professeur",
    },
    {
      id: "6",
      title: "Responsable parcours GB (Génie logiciel et Base de données)",
      name: "M. RALAIVAO Jean Christian",
      fonction: "Assistant d’Enseignement Supérieur et de Recherche",
    },
    {
      id: "7",
      title: "Responsable parcours ASR (Administration des Services et Réseau)",
      name: "M. SIAKA",
      fonction: "Assistant d’Enseignement Supérieur et de Recherche",
    },
    {
      id: "8",
      title: "Responsable parcours IG (Informatique Générale)",
      name: "M. GILANTE Gesazafy",
      fonction: "Assistant d’Enseignement Supérieur et de Recherche",
    },
    {
      id: "9",
      title: "Responsable parcours GID (Gouvernance et Ingénierie de Données)",
      name: "Mme RATIANANTITRA Volatiana Marielle",
      fonction: "Maître de Conférences",
    },
    {
      id: "10",
      title: "Responsable parcours OCC (Objets Connectés et Cybersécurité)",
      name: "M. RAZAFIMAHATRATRA Hajarisena",
      fonction: "Maître de Conférences",
    },
    {
      id: "11",
      title: "Secrétariat principal",
      name: "M. RABEMANANTSOA Auguste Patrice",
      fonction: "",
    },
    {
      id: "12",
      title: "Chef de service de scolarité",
      name: "Mme Raharisoa Mahaleolaza Dinamalala",
      fonction: "",
    },
  ];
  return (
    <div className="relative  xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow py-8">
      <div className="top-0 bg-white/80 w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2">
        <h1 className="h1 mb-8">Personnels </h1>
      </div>

      <div className="pl-8 py-2 mb-4">
        <h2 className="h2 mb-4">
          Présentation de l'équipe pédagogique de l'ENI Fianarantsoa
        </h2>
        <ul className="list-none space-y-4">
          {responsables.map((responsable) => {
            return (
              <li
                className="p-6 bg-custom-card rounded-md border-custom-gray border-2 max-w-2xl"
                key={responsable.id}
              >
                <h3>{responsable.title}</h3>
                <p>
                  {responsable.name} - {responsable.fonction}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PersonelPage;
