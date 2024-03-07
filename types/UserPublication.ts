import { Publication } from "@prisma/client";

export default interface UserPublication extends Publication {
  photo_profil: string;
  nom: string;
  prenoms: string | null;
}
