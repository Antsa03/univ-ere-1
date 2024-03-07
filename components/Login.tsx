"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Password from "./Password";
import { navigate } from "@/hooks/navigate";
import GoogleInput from "./GoogleInput";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (res?.error) {
        alert(res?.error);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigationResetPassword = () => {
    if (user.email === "") {
      return;
    }
    router.push(`/password-reset/${user.email}`);
  };

  return (
    <div className="relative py-6 sm:max-w-xl sm:mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative px-4 py-6 mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <div className="max-w-md mx-auto flex items-center space-x-5 justify-center mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Se connecter
          </h1>
        </div>

        <div className="max-w-md mx-auto  justify-center items-center mb-8">
          <GoogleInput />
        </div>

        <div className="max-w-md mx-auto text-black">
          <div className="flex items-center justify-between mb-8">
            <span className="w-1/3 border-b md:w-2/5"></span>
            <a className="text-xs text-gray-500 uppercase" href="#">
              ou
            </a>
            <span className="w-1/3 border-b  md:w-2/5"></span>
          </div>

          <div className="mb-4">
            <label className="label">Adresse e-mail *</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(event) => handleInputChange(event)}
              className="input"
              required
              placeholder="xxxxx@example.com"
            />
          </div>

          <Password
            password={user.password}
            handleInputChange={handleInputChange}
          />

          <button
            type="submit"
            className="py-3 px-6 mb-3 block  bg-green-600 hover:bg-green-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md shadow-green-200 focus:outline-none rounded-md sm:hover:scale-[1.005]"
          >
            Connexion
          </button>

          <button
            onClick={handleNavigationResetPassword}
            className="label mb-8"
          >
            Mot de passe oublié?
          </button>

          <div className="flex items-center justify-between">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a
              className="text-sm text-gray-500 uppercase dark:text-gray-400 hover:underline"
              href="#"
            >
              Créer un compte
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
