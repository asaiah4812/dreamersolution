import { HoverEffect } from "./ui/card-hover-effect";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { IoFlask } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";


export function Tools() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HTML",
    description:
      "A tool Used for Displaying content in a website",
    icon:<IoLogoHtml5 className="text-5xl"/>,
  },
  {
    title: "CSS",
    description:
      "A tool i use for styling my Website to look beautiful.",
    icon: <IoLogoCss3 className="text-5xl"/>,
  },
  {
    title: "Python",
    description:
      "A tool i use for scripting your website",
    icon: <SiPython className="text-5xl"/>,
  },
  {
    title: "Django",
    description:
      "My Favourite framework for backend development.",
    icon: <SiDjango className="text-5xl" />,
  },
  {
    title: "Flask",
    description:
      "Another framework for backend development with Python",
    icon: <IoFlask className="text-5xl"/>,
  },
  {
    title: "Nextjs",
    description:
      "React Framework I Use for making fullstack web applications.",
    icon: <RiNextjsFill className="text-5xl"/>,
  },
];
