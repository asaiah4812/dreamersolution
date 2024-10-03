import { ThreeDCardDemo } from "@/components/Card";
import { HeroScrollDemo } from "@/components/container";
import { MacbookScrollDemo } from "@/components/Macbook";
import MarqueeDemo from "@/components/testimonials";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import project from '../lib/project.json';
import { Tools } from "@/components/Tools";
import TextAnimation from "@/components/TextAnime";
import Button from "@/components/Button";
import { ThreeProps } from "@/lib/interface";




export default function Home() {
  const projects:ThreeProps[] = project.projects.slice(0, 3);  
  return (
    <div className="mt-[8rem]">
      <div className="text-center w-[95%] md:w-[70%] xl:w-[60%] mx-auto py-3">
        <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl py-4 bg-gradient-to-r from from-cyan-500 text-transparent bg-clip-text to-pink-500">Welcome to DreamerSolution</h1>
        <TextGenerateEffect words="Are you a final-year computer science student feeling overwhelmed by your project? Look no further! Our innovative software is designed to streamline your project journey and help you achieve academic excellence."/>
      </div>
      <section>

        <div className="flex items-center justify-center flex-col flex-wrap md:flex-row gap-x-4  w-[80%] mx-auto">
          {
            projects.map(project => (
              <ThreeDCardDemo
              key={project.id}
              url={project.url}
              title={project.title}
              src={project.src}
              desc={project.shortDesc}
              price={project.price}
              />

            ))
          }
        </div>
        <div className="flex items-center justify-center">
          <Button href="/project" text="View More"/>
        </div>
      </section>
      <TextAnimation/>
      <div>
      <HeroScrollDemo/>
      </div>
      <section>
        <div>
          <Tools/>
        </div>
      </section>
      <div>
        <MacbookScrollDemo/>
      </div>
      <div>
        <h2 className="text-center font-medium text-2xl text-slate-600 py-2">Testimonials</h2>
      <MarqueeDemo/>
      </div>
    </div>
  );
}
