import ImageTile from '@/components/ImageTile'
import React from 'react'
import Image from 'next/image'

interface ProjectPortraitFeaturesProps {
  img1: string
  img1Description: string
  img2: string
  img2Description: string
}

const ProjectPortraitFeatures: React.FC<ProjectPortraitFeaturesProps> = ({img1, img1Description, img2, img2Description}) => {
  return (
    <div className='flex items-start justify-between gap-6 lg:gap-24 pt-6 lg:pt-24 px-6 lg:px-48 '>
        <div className=''>
          <Image
            src={img1}
            alt={img1Description}
            width={900}
            height={900}
          />
        </div>

        <div>
          <Image
              src={img2}
              alt={img2Description}
              width={900}
              height={900}
          />
        </div>
      


    </div>
  )
}

export default ProjectPortraitFeatures
