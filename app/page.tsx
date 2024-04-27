import Intro from "@/components/intro";
import Image from "next/image";
import About from "@/components/about";
import Sectiondivider from "@/components/sectiondivider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro/>
    <Sectiondivider/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    
    </main>
  );
}
