"use client";
import ConfirmPassword from "@/components/utilisateur/ConfirmPassword";
import Password from "@/components/utilisateur/Password";
import { navigate } from "@/hooks/navigate";
import { uploadImg } from "@/lib/uploadImg";
import { Utilisateur } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function UtilisateurAjoutPage() {
  const router = useRouter();
  const utilisateur_form = useForm<Utilisateur>({
    defaultValues: {
      matricule: "",
      nom: "",
      prenoms: "",
      genre: "",
      isAdmin: false,
      telephone: "",
      lieu_origine: "",
      niveau: "",
      mention: "",
      parcours: "",
      email: "",
      password: "",
    },
  });

  // Téléversement du fichier image
  const [file, setFile] = useState<File>();
  useEffect(() => {
    if (!file) utilisateur_form.setValue("photo_profil", "user.png");
    else utilisateur_form.setValue("photo_profil", file.name);
  }, [file, utilisateur_form.setValue]);

  const handleUtilisateur: SubmitHandler<Utilisateur> = async (utilisateur) => {
    try {
      if (utilisateur_form.watch("password") === confirm_password) {
        const response = await fetch("/api/utilisateur/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(utilisateur),
        });
        if (response.ok) {
          console.log("Utilisateur créé avec succès");
          if (file) {
            const formData = new FormData();
            formData.append("file", file);
            let fileType = [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg",
              "image/gif",
              "image/webp",
              "image/apng",
              "image/heic",
              "image/heic",
              "image/bmp",
              "image/tiff",
              "image/tif",
              "image/pp2",
            ];
            if (!fileType.includes(file.type)) {
              alert("Le type de fichier n'est pas pris en charge.");
            }

            if (file.size > 4 * 1024 * 1024) {
              alert("La taille du fichier ne doit pas dépasser 4 Mo.");
            }

            if (file.size === 0) {
              alert("Pas de fichier choisi");
              return;
            }
            const url = await uploadImg(formData);
            let splitUrl = url.split(
              "https://1s8t6r0ul8oomt8j.public.blob.vercel-storage.com/"
            );
            let photo_profil = splitUrl[1];
            const matricule = utilisateur_form.watch("matricule");
            const response = await fetch(
              `/api/upload/photo_profil/${matricule}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: photo_profil,
              }
            );
            if (response.ok) console.log("Image uploader avec succès");
          }
          router.push("/utilisateur");
        } else console.error(response);
      } else alert("Confirmation de mot de passe incorrect");
    } catch (error) {
      console.log(error);
    }
  };

  const [confirm_password, setConfirmPassword] = useState("");
  const handleinputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={utilisateur_form.handleSubmit(handleUtilisateur)}>
        <div>
          <label htmlFor="matricule">Matricule *</label>
          <input type="text" {...utilisateur_form.register("matricule")} />
        </div>
        <div className="container-input">
          <label htmlFor="file" className="label">
            Photo de profil
          </label>
          <label
            htmlFor="file"
            className="flex items-center -bg--bg-primary-color text-xs w-[196px] h-[40px] overflow-hidden px-4  cursor-pointer border-[1px] rounded-md border-dashed  border-gray-700"
          >
            <span className="truncate">
              {`${file ? file.name : "Parcourir........"}`}
            </span>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="hidden"
              placeholder="Parcourir"
              multiple
            />
          </label>
        </div>
        <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" {...utilisateur_form.register("nom")} />
        </div>
        <div>
          <label htmlFor="prenoms">Prénom(s)</label>
          <input type="text" {...utilisateur_form.register("prenoms")} />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <select {...utilisateur_form.register("genre")}>
            <option value="">Sélectionnez le genre</option>
            <option value="M">Masculin</option>
            <option value="F">Féminin</option>
          </select>
        </div>
        <div>
          <label htmlFor="isAdmin">Admin</label>
          <input type="checkbox" {...utilisateur_form.register("isAdmin")} />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone</label>
          <input type="text" {...utilisateur_form.register("telephone")} />
        </div>
        <div>
          <label htmlFor="lieu_origine">Lieu d'origine</label>
          <input type="text" {...utilisateur_form.register("lieu_origine")} />
        </div>
        <div>
          <label htmlFor="niveau">Niveau</label>
          <select {...utilisateur_form.register("niveau")}>
            <option value="">Sélectionner niveau</option>
            <option value="L1">Licence 1</option>
            <option value="L2">Licence 2</option>
            <option value="L3">Licence 3</option>
            <option value="M1">Master I</option>
            <option value="M2">Master II</option>
          </select>
        </div>
        <div>
          <label htmlFor="mention">Mention</label>
          <select {...utilisateur_form.register("mention")}>
            <option value="">Sélectionner la mention</option>
            <option value="Info">Informatique</option>
            <option value="IA">Intelligence Artificiel</option>
          </select>
        </div>
        <div>
          <label htmlFor="parcours">Parcours</label>
          <select {...utilisateur_form.register("parcours")}>
            <option value="">Sélectionnez le parcours</option>
            <option value="GB-SR">GB-SR</option>
            <option value="GB">GB</option>
            <option value="SR">SR</option>
            <option value="IG">IG</option>
            <option value="GID">GID</option>
            <option value="OCC">OCC</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...utilisateur_form.register("email")} />
        </div>
        <div>
          <Password register={utilisateur_form.register} />
        </div>
        <div>
          <ConfirmPassword
            confirm_password={confirm_password}
            handleInputChange={handleinputChange}
          />
        </div>
        <button type="submit">Confirmer</button>
      </form>
    </div>
  );
}

export default UtilisateurAjoutPage;
