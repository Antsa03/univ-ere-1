import Quiz from "@/components/Quiz";
import React from "react";

function QuizPage() {
  return (
    <div className="relative xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow py-4">
      <div className="bg-white/90 bg-blend-saturation  w-full h-fit sticky border-b border-gray-200 pl-8 inset-1 mb-2 z-50-">
        <h1 className="h1 mb-8">
          Orientation Filière: Déterminez votre voie vers le succès!
        </h1>
      </div>
      <div className="p-8 w-full z-0">
        <p>
          Choisir la bonne filière après le collège est une décision importante
          qui peut influencer votre avenir professionnel. Cette page est conçue
          pour vous aider à explorer vos options et à identifier la filière qui
          correspond le mieux à vos intérêts et aptitudes.
        </p>
      </div>
      <Quiz />
    </div>
  );
}

export default QuizPage;
