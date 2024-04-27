import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types"; 
import { time } from "console";
export function useSectionInView(sectionNamr:SectionName, threshold=0.75){
    const { ref, inView } = useInView({
        threshold,
      });
      const{setActiveSection, timeOfLastClick}=useActiveSectionContext();

      useEffect(()=>{
        if(inView&&Date.now()-timeOfLastClick>1000){
            setActiveSection(sectionNamr)
        }
      },[inView, setActiveSection, timeOfLastClick, sectionNamr])
      return {ref,};
}