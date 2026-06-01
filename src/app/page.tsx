"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconCode, IconUser, IconMail } from "@tabler/icons-react";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "/contact",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <FloatingDock items={links} />
    </main>
  );
}
