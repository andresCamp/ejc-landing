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
    <div className='flex flex-col sm:flex-row gap-32 justify-center items-center py-32 px-8 sm:px-48'>
      <Image
        src={img}
        alt={alt}
        width={1000}
        height={300}
      />
      <div className='flex flex-col gap-6 justify-center items-start'>
        <p className='font-questrial text-tertiary leading-loose text-xl font-thin tracking-wide'>{description}</p>
        <Button text="THE STUDIO" url='/studio'/>
      </div>

    </div>
  )
}

export default AboutStudioSection
