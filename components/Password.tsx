"use client";
import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

interface PasswordProps {
  password: string;
  handleInputChange: Function;
}

const Password = ({ password, handleInputChange }: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="password"
        className="label"
      >
        Mot de passe *
      </label>
      <div className="relative m-0 p-0 border-none">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(event) => handleInputChange(event)}
          className="input"
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
