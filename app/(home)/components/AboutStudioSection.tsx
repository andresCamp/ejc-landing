import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

interface AboutStudioSectionProps {
    img: string
    alt: string
    description: string
}

const AboutStudioSection: React.FC<AboutStudioSectionProps> = ({img, alt, description}) => {
  return (
    <div className='flex flex-row gap-32 justify-center items-center py-32 px-32'>
      <Image
        src={img}
        alt={alt}
        width={1000}
        height={300}
      />
      <div className='flex flex-col gap-2 justify-center items-start'>
        <p className='font-questrial text-tertiary leading-8 text-xl font-thin'>{description}</p>
        <Button text="THE STUDIO"/>
      </div>

    </div>
  )
}

export default AboutStudioSection
