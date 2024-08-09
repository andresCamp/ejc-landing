import React, { ReactNode } from 'react'

interface ProjectDetailsProps {
    location: string
    subtitle: string
    year: string
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({location, subtitle, year}) => {
  return (
    <div className='flex flex-col lg:flex-row items-start gap-8 justify-between text-2xl lg:text-base px-6 lg:px-48 py-24'>
      <p>Project Specs</p>
      <div>
        <p>LOCATION</p>
        <p>{location}</p>
      </div>
      <div>
        <p>TYPE</p>
        <p>{subtitle}</p>
      </div>
      <div>
        <p>YEAR</p>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default ProjectDetails