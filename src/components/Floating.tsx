import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Dribbble, Facebook, Instagram, Linkedin } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "@Drea Mer",
      icon: (
        <Facebook className="h-full w-full text-neutral-500"/>
      ),
      href: "https://web.facebook.com/asaiah.henson.7",
    },

    {
      title: "@asaiah",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500" />
      ),
      href: "https://www.linkedin.com/in/asaiah-henson-440bb62a6/",
    },
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500"/> 
      ),
      href: "#",
    },
    {
      title: "@asaiah2023",
      icon: (
        <Dribbble className="h-full w-full text-neutral-500" />
      ),
      href: "https://dribbble.com/asaiah2023",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "@dreamer_Webdev",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/dreamer_webdev",
    },
    {
      title: "@asaiah4812",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/asaiah4812",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
