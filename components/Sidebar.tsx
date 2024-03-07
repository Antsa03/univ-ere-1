"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/16/solid";
import Logo from "@/public/images/logo.png";
import {
  ClipboardIcon,
  HashtagIcon,
  MapIcon,
  UsersIcon,
  AcademicCapIcon,
  FolderMinusIcon,
} from "@heroicons/react/24/outline";

import Rajo from "@/public/images/rajo.jpg";
import { signOut } from "next-auth/react";

const menuItems = [
  {
    text: "Accueil",
    Icon: HomeIcon,
    href: "/accueil",
    active: true, // Adjust "active" based on actual route
  },
  { text: "Système LMD", Icon: HashtagIcon, href: "/systeme-lmd" },
  { text: "Personnel", Icon: UsersIcon, href: "/personnel" },
  { text: "Utilisateur", Icon: UsersIcon, href: "/utilisateur" },

  { text: "Carte", Icon: MapIcon, href: "/map" },
  { text: "Orientation", Icon: AcademicCapIcon, href: "/quiz" },
  { text: "Publication", Icon: ClipboardIcon, href: "/publication" },
  { text: "Forum", Icon: FolderMinusIcon, href: "/forum" },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full z-50">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src={Logo}
          alt="Logo of Twitter"
          className="rounded-full"
        ></Image>
      </div>
      <nav className="inline-block mt-4 mb-2.5 xl:items-start">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.text}
            text={item.text}
            Icon={item.Icon}
            href={item.href}
            active={item.href === pathname}
          />
        ))}
      </nav>

      <button
        className="bg-custom-btn-green text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline mt-auto"
        onClick={() => signOut()}
      >
        Se déconnecter
      </button>

      <div className="hoverEffect h-18 text-gray-700 flex items-center justify-center xl:justify-start my-4">
        <Image
          src={Rajo}
          alt="user-image"
          className="h-8 w-8 rounded-full xl:mr-2 "
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="text"> Antsa </h4>
          <p className="text font-semibold">ramantsa03@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
