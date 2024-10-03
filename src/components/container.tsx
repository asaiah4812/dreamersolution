"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import cover from '/public/screen.png'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl font-semibold md:text-[5rem] mb-5 text-black">
             Courage Hospital Site <br />
              <span className="text-2xl md:text-4xl font-medium mt-1 leading-none">
                Build with Python Django
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={cover}
          alt="hero"
          height={520}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
