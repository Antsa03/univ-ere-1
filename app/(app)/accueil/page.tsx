import React from "react";
import ENI from "@/public/images/eni.jpg";
import Image from "next/image";

function AccueilPage() {
  return (
    <div className="relative ml-24 flex flex-col pt-8 w-full h-screen items-center justify-start  xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow">
      <div className="bg-white/90 bg-blend-saturation  w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2 z-50-">
        <h1 className="h1 mb-8">Accueil </h1>
      </div>
      <div className="p-8 w-full h-full z-0">
        {" "}
        <div className="text-left">
          <h1 className="h1 text-left">
            Bienvenue à l'ENI,{" "}
            <span className="h1 text-custom-green">
              l'école d'ingénieurs de référence.
            </span>
          </h1>
          <p className="text mt-2 mb-8">
            Découvrez notre établissement d'excellence, formant les ingénieurs
            de demain.
          </p>
        </div>
        <Image
          src={ENI}
          alt="photos ENI"
          className="max-w-sm rounded-lg shadow-2xl block mt-8"
          width={1000}

        />
      </div>
    </div>
  );
}

export default AccueilPage;
