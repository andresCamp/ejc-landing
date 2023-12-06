import ImageTile from '@/components/ImageTile'
import Image from 'next/image'
import { type } from 'os'
import React from 'react'

interface ProjectLandscapeFeatureProps {
    img: string
    description: string
}

const ProjectLandscapeFeature: React.FC<ProjectLandscapeFeatureProps> = ({img, description}) => {
  
  // console.log(slug)
  // console.log(type)
  
  return (
    <div className='pt-36 px-48'>
         <Image
          src={img}
          alt={description}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />
      
       {/* <ImageTile 
          img={img}
          hoverImg={hoverImg}
          slug={slug}
          description={description}
          hoverDescription={description}
          title={title}
          subtitle={subtitle}
          location={location}
          type={type}
        /> */}
   
    </div>
  )
}

export default ProjectLandscapeFeature
