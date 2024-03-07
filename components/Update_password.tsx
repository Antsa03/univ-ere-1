"use client";
import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

interface PasswordForm {
  password: string;
  confirm_password: string;
}

interface Update_passwordProps {
  register: UseFormRegister<PasswordForm>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<PasswordForm>;
}

function Update_password({
  register,
  handleSubmit,
  errors,
}: Update_passwordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <label htmlFor="password" className="label">
            Nouveau mot de passe *
          </label>
          <div className="relative m-0 p-0">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Le nouveau mot de passe est obligatoire",
                minLength: {
                  value: 8,
                  message:
                    "Le nouveau mot de passe doit contenir au moins 8 caractères",
                },
              })}
              className={`input-form ${
                errors?.password?.message ? "hasError" : ""
              }`}
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
          <p className="p-error">{errors?.password?.message}</p>
        </div>
        <div className="container-input">
          <label htmlFor="confirm_password" className="label">
            Confirmation de mot de passe *
          </label>
          <div className="relative m-0 p-0">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirm_password", {
                required: "La confirmation de passe est obligatoire",
              })}
              className={`input-form ${
                errors?.confirm_password?.message ? "hasError" : ""
              }`}
              maxLength={60}
              autoComplete="off"
            />
            <span
              onClick={handleShowConfirmPassword}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
            >
              {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
            </span>
          </div>
          <p className="p-error">{errors?.confirm_password?.message}</p>
        </div>
        <button type="submit" className="button-add-info">
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default Update_password;
