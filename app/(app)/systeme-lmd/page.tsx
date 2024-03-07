import React from "react";
import styles from "@/css/card.module.css";

function SystemeLmdPage() {
  return (
    <div className="relative h-screen xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow py-8">
      <div className="bg-transparent  w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2">
        <h1 className="h1 mb-8">Système LMD</h1>
      </div>
      {/* <div classNameNameName={`${styles.magicpattern} w-28 h-28 overflow-hidden`} ></div> */}
      <div className="pl-8 py-2 mb-4">
        <h2 className="h2 mb-4">Quelques définitions:</h2>
        <ul className="text-left space-y-2 text-gray-500 dark:text-gray-400 mb-2">
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text">
              Chaque semestre permet de valider 30 crédits.
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text">
              Semestre: Unité d’Enseignement regroupées.
            </span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text">UE: Segment pédagogique cohérent</span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text">
              Crédit : Unité de mesure de l'effort d'apprentissage
            </span>
          </li>
        </ul>
      </div>

      <div className="pl-8">
        <h2 className="h2 mb-6">
          Le système LMD est un principe général qui institue trois niveaux de
          diplômes :
        </h2>
        <div className="flex space-x-12">
          <div className="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
            <p className="text-lg font-bold font-sans">Licence</p>
            <div className="py-3">
              <p className="text">
                Licence (bac+3) d’une durée de 3 années soit 6 semestres
              </p>
            </div>
          </div>
          <div className="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
            <p className="text-lg font-bold font-sans">Master</p>
            <div className="py-3">
              <p className="text">
                Master (bac+5) d'une durée de 2 années soit 4 semestres
              </p>
            </div>
          </div>
          <div className="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
            <p className="text-lg font-bold font-sans">Doctorat</p>
            <div className="py-3">
              <p className="text">
                Licence (bac+3) d’une durée de 3 années soit 6 semestres
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemeLmdPage;
