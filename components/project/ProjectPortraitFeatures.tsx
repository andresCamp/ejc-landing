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
    <div className='flex items-start justify-between pt-36 px-48'>
        <div className='w-2/5'>
        <Image
          src={img1}
          alt={img1Description}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />


        </div>

        <div className='w-2/5'>
        <Image
                    src={img2}
                    alt={img2Description}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                />
        {/* <ImageTile 
            img={img2}
            hoverImg={img2}
            slug='residential'
            description={img2Description}
            hoverDescription={img2Description}
            title='Residential Projects'
            subtitle='View'
            location=''
            type=''
        /> */}
        </div>
      


    </div>
  )
}

export default ProjectPortraitFeatures
