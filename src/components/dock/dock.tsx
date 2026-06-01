"use client";

import React from "react";
import { FloatingDock } from "../dock";
import { IconHome, IconCode, IconUser, IconMail } from "@tabler/icons-react";

const dock = () => {
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
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "/contact",
    },
  ];

  return (
    <div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default dock;
