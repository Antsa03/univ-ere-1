import Sidebar from "@/components/Sidebar";
import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen  max-w-[1540px] mx-8">
      {/* Sidebar */}
      <Sidebar />

      {/* <div>
      <button onClick={() => signOut()} >Se déconnecter</button>
       <h1>Vous êtes connectés</h1>
      </div> */}
      {children}
    </main>
  );
}

export default AppLayout;
