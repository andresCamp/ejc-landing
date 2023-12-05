import ImageTile from '@/components/ImageTile'
import React from 'react'

interface ProjectsSelectionProps {
  img1: string
  img1Description: string
  img2: string
  img2Description: string
}

const ProjectsSelection: React.FC<ProjectsSelectionProps> = ({img1, img1Description, img2, img2Description}) => {
  return (
    <div className='flex items-start justify-between py-36 px-48'>
        <div className='w-2/5'>
        <ImageTile 
            img={img1}
            hoverImg={img1}
            slug='commercial'
            description={img1Description}
            hoverDescription={img1Description}
            title='Commercial Projects'
            subtitle='View'
            location=''
            type=''
        />

        </div>

        <div className='w-2/5'>
        <ImageTile 
            img={img2}
            hoverImg={img2}
            slug='residential'
            description={img2Description}
            hoverDescription={img2Description}
            title='Residential Projects'
            subtitle='View'
            location=''
            type=''
        />
        </div>
      


    </div>
  )
}

export default ProjectsSelection
