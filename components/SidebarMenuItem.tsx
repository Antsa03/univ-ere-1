import Link from "next/link";
import React from "react";

type SidebarItemProps = {
  text: string;
  Icon: React.FC<{ className?: string }>;
  active?: boolean;
  href: string;
};

function SidebarMenuItem({ text, Icon, active, href }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="hoverEffect flex items-center text-custom-nav justify-center xl:justify-start text-lg space-x-3"
    >
      <Icon className={`h-7 ${active ? "text-custom-green" : ""}`} />
      <span
        className={`${active ? " text-custom-green" : ""} hidden xl:inline`}
      >
        {text}
      </span>
    </Link>
  );
}

export default SidebarMenuItem;
