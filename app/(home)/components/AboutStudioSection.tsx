import Button from '@/components/Button'
import ImageTile from '@/components/ImageTile'
import SimpleImageTile from '@/components/SimpleImageTile'
import Image from 'next/image'
import React from 'react'

interface AboutStudioSectionProps {
    img: string
    imgHover: string
    alt: string
    altHover: string
    description: string
}

const AboutStudioSection: React.FC<AboutStudioSectionProps> = ({img, imgHover, alt, altHover, description}) => {
  return (
    <div className='flex flex-col sm:flex-row gap-32 justify-center items-center py-32 px-8 sm:px-48'>
      <SimpleImageTile
        img={img}
        hoverImg={imgHover}
        description={alt}
        hoverDescription={altHover}
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
