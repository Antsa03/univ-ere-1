"use client";
import Login from "@/components/Login";
import { navigate } from "@/hooks/navigate";
import { useSession } from "next-auth/react";
import React from "react";

function LoginPage() {
  const { data: session, status } = useSession();
  if (status === "authenticated") navigate("/");
  return <Login />;
}

export default LoginPage;
