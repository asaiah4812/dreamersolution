"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import projectflow from '../lib/project.json'
import { ThreeProps } from "@/lib/interface";




const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl rounded-full ring-1 ring-slate-300 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-black hover:text-opacity-70 transition-colors">
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/project">Web Development</HoveredLink>
            <HoveredLink href="/project">Interface Design</HoveredLink>
            <HoveredLink href="/project">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/project">Branding</HoveredLink>
          </div>
        </MenuItem>

       <MenuItem setActive={setActive} active={active} item="Products">
  <div className="min-w-full text-sm grid md:grid-cols-2 gap-10 p-4">
    {projectflow.projects.slice(0, 4).map((project: ThreeProps) => (
      <ProductItem
        key={project.id}
        title={project.title}
        href={project.url}
        src={project.src}
        description={project.shortDesc}
      />
    ))}
  </div>
</MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
        <div className="flex flex-col gap-3">
        <Link href="/about" className="text-black hover:text-opacity-70 transition-colors">
          About Asaiah
        </Link>
        <Link href="/about" className="text-black hover:text-opacity-70 transition-colors">
          About My Company
        </Link>

        </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
