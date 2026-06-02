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
      title: "Skills",
      icon: <IconCode className="h-full w-full" />,
      href: "/skills",
    },
    {
      title: "Projects",
      icon: <IconUser className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "Myself",
      icon: <IconMail className="h-full w-full" />,
      href: "/myself",
    },
    {
      title: "Blog",
      icon: <IconUser className="h-full w-full" />,
      href: "/blog",
    },
    {
      title: "AfterEffects",
      icon: <IconMail className="h-full w-full" />,
      href: "/after-effects",
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
