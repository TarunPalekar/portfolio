"use client";
import React from 'react'
import Sectionheading from './sectionheading';
import { projectsData } from '@/lib/data';
import Project from './project';
import Blurprop from './blurprop';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
  const {ref}=useSectionInView("Projects", 0.5);
  return (

   <section className="scroll-mt-28 mb-28 " 
   id="projects"
   ref={ref}
  >
    <Blurprop/>
    <Sectionheading>My Project</Sectionheading>
    <div >
        {projectsData.map((project, index)=>(
            <React.Fragment key={index}>
                <Project {...project}/>
            </React.Fragment>

        ))}


    </div>
   </section>
  )
}
