"use client";
import { Sujet } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function AddSujetPage() {
  const { data: session }: any = useSession();
  const sujet_form = useForm<Sujet>({
    defaultValues: {
      titre: "",
      description: "",
      matricule: "",
    },
  });

  useEffect(() => {
    if (session) sujet_form.setValue("matricule", session.user.id.toString());
  }, [session, sujet_form.setValue]);

  const handleSubmitSujet: SubmitHandler<Sujet> = async (sujet) => {
    const response = await fetch("/api/forum/sujet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sujet),
    });

    if (response.ok) {
      const sujet = await response.json();
      console.log("Sujet ajouté:", sujet);
      // Réinitialiser le formulaire
      sujet_form.reset();
    } else {
      console.error("Erreur lors de l'ajout du sujet");
    }
  };

  return (
    <form onSubmit={sujet_form.handleSubmit(handleSubmitSujet)}>
      <div>
        <label htmlFor="titre" className="label">
          Titre:
        </label>
        <input
          type="text"
          className="input"
          {...sujet_form.register("titre")}
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="label">
          Description:
        </label>
        <input
          type="text"
          className="input"
          {...sujet_form.register("description")}
          required
        />
      </div>
      <button type="submit" className="btn">
        Ajouter le sujet
      </button>
    </form>
  );
}

export default AddSujetPage;
