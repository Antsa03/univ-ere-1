"use client";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AppLayout from "./(app)/layout";
import Loading from "./loading";
export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "authenticated")
    return (
      <AppLayout>
        <div></div>
      </AppLayout>
    );
  if (status === "loading") return <Loading />;
  if (!session) router.push("/login");
  return <div></div>;
}
