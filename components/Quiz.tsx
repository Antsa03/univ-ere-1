"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type quizProps = {
  question: string;
  responses: {
    choice: string;
    value: "GB" | "SR";
  }[];
};

function Quiz() {
  let [countGB, setCountGB] = useState(0);
  let [countSR, setCountSR] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);
  const quiz: quizProps[] = [
    {
      question: "Qu'est-ce qui vous attire le plus 1 ?",
      responses: [
        {
          choice: " Concevoir et développer des logiciels",
          value: "GB",
        },
        {
          choice: "Gérer et administrer des bases de données",
          value: "SR",
        },
        {
          choice: "Installer et configurer des réseaux informatiques",
          value: "GB",
        },
        {
          choice: "L'apprentissage de nouveaux langages et technologies",
          value: "SR",
        },
      ],
    },
    {
      question: "Quel type d'applications souhaitez-vous développer 2 ",
      responses: [
        {
          choice: " Concevoir et développer des logiciels",
          value: "GB",
        },
        {
          choice: "Concevoir et développer des logiciels desktop",
          value: "SR",
        },
        {
          choice: "Installer des materiels réseaux",
          value: "GB",
        },
        {
          choice: "L'apprentissage de nouveaux langages et technologies",
          value: "SR",
        },
      ],
    },
    {
      question: "Quel type d'applications souhaitez-vous développer 3 ",
      responses: [
        {
          choice: " Concevoir et développer des logiciels",
          value: "GB",
        },
        {
          choice: "Gérer et administrer des bases de données",
          value: "GB",
        },
        {
          choice: "Installer des materiels réseaux",
          value: "SR",
        },
        {
          choice: "L'apprentissage de nouveaux langages et technologies",
          value: "GB",
        },
      ],
    },
    {
      question: "Quel type d'applications souhaitez-vous développer 4 ",
      responses: [
        {
          choice: " Concevoir et développer des logiciels",
          value: "GB",
        },
        {
          choice: "Gérer et administrer des bases de données",
          value: "SR",
        },
        {
          choice: "Installer et configurer des réseaux informatiques",
          value: "GB",
        },
        {
          choice: "L'apprentissage de nouveaux langages et technologies",
          value: "GB",
        },
      ],
    },
    {
      question: "Quel type d'applications souhaitez-vous développer 5 ",
      responses: [
        {
          choice: " Concevoir et développer des logiciels",
          value: "GB",
        },
        {
          choice: "Gérer et administrer des bases de données",
          value: "SR",
        },
        {
          choice: "Installer et configurer des réseaux informatiques",
          value: "GB",
        },
        {
          choice: "L'apprentissage de nouveaux langages et technologies",
          value: "SR",
        },
      ],
    },
  ];

  // useEffect(() => {
  //     localStorage.setItem('currentStep', currentStep.toString());
  //   }, [currentStep]);

  const finStep = () => {
    // localStorage.removeItem('currentStep');
    setCurrentStep(0);
    setCountSR((countSR = 0));
    setCountGB((countGB = 0));
    setChoices((prevChoice: string[]) => {
      return [];
    });
  };

  const progressWidth = `${((currentStep + 1) / quiz.length) * 100}%`;

  interface FormData {
    choix: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: any = (data: FormData) => {
    setChoices((prevChoices) => [...prevChoices, data.choix]);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onReset = () => {
    setChoices((prevChoices) => prevChoices.slice(0, prevChoices.length - 1));
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // useEffect(()=>{
  //     console.log(choices)
  // },[choices])

  const onConfirm = () => {
    choices.map((choice) => {
      if (choice == "GB") {
        setCountGB((countGB = countGB + 1));
        console.log("countGB" + countGB);
      } else {
        setCountSR((countSR = countSR + 1));
        console.log("countSR" + countSR);
      }
    });

    setShowResult(!showResult);
  };

  return (
    <div className="pl-8">
      <h2 className="h2 mb-4"> Quiz formulaire </h2>
      <div className="w-[80%]  my-3">
        <div className="relative  m-auto h-2 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 bg-green-500 h-full rounded-full"
            style={{ width: progressWidth }}
          ></div>
        </div>
      </div>

      <div className="text">
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep < quiz.length ? (
            <div className="">
              <div className="text uppercase text-custom-black mb-2">
                {quiz[currentStep].question}
              </div>
              {quiz[currentStep].responses?.map((rep, index) => {
                return (
                  <div key={index} className="flex text">
                    <input
                      type="radio"
                      value={rep.value}
                      {...register("choix", { required: true })}
                      className="mx-3"
                    />
                    <div>{rep.choice}</div>
                  </div>
                );
              })}

              <div className="flex justify-start">
                <button
                  className="btn text-white rounded-full mt-4"
                  type="submit"
                >
                  Suivant
                </button>
                {currentStep != 0 && (
                  <button
                    className="flex items-center justify-end px-2 py-1 text-custom-black font-bold rounded-lg mt-4 ml-16"
                    type="reset"
                    onClick={onReset}
                  >
                    Précédent
                  </button>
                )}
              </div>
              <div className="h-10 w-full text-center">
                {errors.choix && (
                  <span className="text-red-600 px-4 py-2 bg-red-200">
                    Champ obligatoire!
                  </span>
                )}
              </div>
            </div>
          ) : !showResult ? (
            <div>
              <button
                className="bg-gray-400 p-3 rounded-lg"
                type="reset"
                onClick={onReset}
              >
                Précédent
              </button>
              <button className="btn ml-8" onClick={onConfirm}>
                Confirmer
              </button>
            </div>
          ) : (
            <div className="h-full w-64 ">
              <div className="h-[80%] w-full justify-center items-center bg-green-200 flex space-x-6">
                <div>
                  <div className="text-3xl text-red-800"> GB </div>
                  <div className="text-center w-14">
                    {(countGB / quiz.length) * 100}%
                  </div>
                </div>
                <div>
                  <div className="text-3xl text-red-800">SR </div>
                  <div>{(countSR / quiz.length) * 100}%</div>
                </div>
              </div>
              <button
                className=" m-auto bg-green-600 p-3 rounded-lg"
                onClick={finStep}
              >
                {" "}
                Retour{" "}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Quiz;
