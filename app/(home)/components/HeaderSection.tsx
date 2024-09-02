'use client'
import { questrial } from '@/lib/fonts';
import React, { useState } from 'react'

interface HeaderSectionProps {
    text: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({text}) => {
  // State to track if the hover animation has been triggered
  const [hovered, setHovered] = useState(false);

  return (
    <div className='flex flex-col h-full w-full items-center px-8  justify-center py-48 group'
         onMouseEnter={() => setHovered(true)}>
      <div className='relative'>
        <h1 className={`${questrial.className} text-6xl sm:text-5xl mb-5 text-tertiary tracking-wider`}>
            {text}
        </h1>
        <div className={`absolute bottom-0 left-0 w-full lg:w-0 h-4 sm:h-5 bg-[#DFD8D0] transition-width  duration-500 ${hovered ? 'w-full' : ''}`}></div>
      </div>
    </div>
  )
}

export default HeaderSection;