import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

interface ProjectDescriptionProps {
    left: boolean
    img: string
    alt: string
    description: string
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({img, alt, left,  description}) => {
  return (
    <div className='pt-36 px-48'>

      {
      left ?
        <div className='flex flex-row gap-32 justify-center items-center '>
          <div className='flex flex-col gap-2 justify-center items-start w-1/2'>
            <p className='font-questrial text-tertiary leading-8 text-xl font-thin tracking-wide'>{description}</p>
          </div>
    
          <Image
            src={img}
            alt={alt}
            width={1000}
            height={300}
            className='w-1/2'
          />
        </div>
      :
        <div className='flex flex-row gap-32 justify-center items-center '>
          <Image
            src={img}
            alt={alt}
            width={1000}
            height={300}
            className='w-1/2'
          />

          <div className='flex flex-col gap-2 justify-center items-start w-1/2'>
            <p className='font-questrial text-tertiary leading-8 text-xl font-thin tracking-wide'>{description}</p>
          </div>
        </div>
      }



    </div>
  )
}

export default ProjectDescription
