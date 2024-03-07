import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { Utilisateur } from "@prisma/client";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

type PasswordProps = {
  register: UseFormRegister<Utilisateur>;
};

const Password = ({ register }: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col align-baseline w-fit mb-2 sm:mb-8">
      <label htmlFor="password" className="label">
        Mot de passe *
      </label>
      <div className="relative m-0 p-0">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Le mot de passe est obligatoire",
            minLength: {
              value: 8,
              message: "Le mot de passe doit contenir au moins 8 caractères",
            },
          })}
          className={`input-form`}
          maxLength={60}
          autoComplete="off"
        />

        <span
          onClick={handleShowPassword}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
        >
          {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
        </span>
      </div>
    </div>
  );
};

export default Password;
