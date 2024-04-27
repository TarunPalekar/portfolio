"use client";
import React from 'react'
type Sectionheadingprops={
    children:React.ReactNode;
}

export default function Sectionheading({children}:Sectionheadingprops) {
     
    return (
        <div className= " text-3xl font-medium capitalize mb-8 text-center">
            {children}
            
        </div>
    
    )

}
 

