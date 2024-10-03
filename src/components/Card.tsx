"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface MeProps {
  src: string;
  title: string;
  desc: string;
  url: string;
  price: number;
}


export function ThreeDCardDemo({src, title, desc, url, price}: MeProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://hensonport.vercel.app"
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-medium"
          >
            &#8358; {price}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={url}
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            Check me out
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
