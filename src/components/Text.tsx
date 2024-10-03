"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ``;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
