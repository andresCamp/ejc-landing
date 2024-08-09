import Button from '@/components/Button'
import { questrial } from '@/lib/fonts'
import Image from 'next/image'
import React, { ReactNode } from 'react'

interface ProjectDescriptionProps {
    left: boolean
    img: string
    alt: string
    description: string
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({img, alt, left,  description}) => {
  return (
    <div className='pt-6 lg:pt-24 px-6 lg:px-48'>

        <div className={`flex flex-col lg:flex-row ${left ? "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row-reverse"} gap-6 lg:gap-32 justify-center items-center`}>
          <Description>
            {description}
          </Description>

          <Image
            src={img}
            alt={alt}
            width={1000}
            height={300}
            className='w-full lg:w-1/2'
          />
        </div>




    </div>
  )
}

export default ProjectDescription


const Description: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-start lg:w-1/2'>
            <p className={`${questrial.className} text-tertiary leading-8 text-2xl lg:text-xl font-thin tracking-wide`}>{children}</p>
    </div>  
  )
}