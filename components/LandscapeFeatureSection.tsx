import ImageTile from '@/components/ImageTile'
import Image from 'next/image'
import { type } from 'os'
import React from 'react'

interface LandscapeFeatureSectionProps {
    img: string
    hoverImg: string
    slug: string
    description: string
    hoverDescription: string
    title: string
    subtitle: string
    location: string   
    type: string
}

const LandscapeFeatureSection: React.FC<LandscapeFeatureSectionProps> = ({img, hoverImg, slug, type, description, hoverDescription, title, subtitle, location}) => {
  
  // console.log(slug)
  // console.log(type)
  
  return (
    <div className='px-48'>
       <ImageTile 
          img={img}
          hoverImg={hoverImg}
          slug={slug}
          description={description}
          hoverDescription={description}
          title={title}
          subtitle={subtitle}
          location={location}
          type={type}
        />
   
    </div>
  )
}

export default LandscapeFeatureSection
