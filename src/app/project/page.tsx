import React from 'react'

import project from '../../lib/project.json';
import { ThreeDCardDemo } from '@/components/Card';


interface ProTextProps {
  id: number;
  title: string;
  url: string;
  src: string;
  src1: string;
  src2: string;
  src3: string;
  desc: string;
  shortDesc: string;
  price: number;
}

const Projects = () => {
    const projects:ProTextProps[] = project.projects; 
  return (
    <div>
         <section>

<div className="flex items-center flex-col md:flex-row flex-wrap gap-x-4 gap-y-3 w-[80%] mx-auto">
  {
    projects.map(project => (
      <ThreeDCardDemo
      key={project.id}
      href={project.url}
      title={project.title}
      src={project.src}
      desc={project.shortDesc}
      price={project.price}
      />

    ))
  }
</div>
 
</section>
    </div>
  )
}

export default Projects