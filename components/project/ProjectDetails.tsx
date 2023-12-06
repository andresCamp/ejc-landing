import React from 'react'

interface ProjectDetailsProps {
    location: string
    subtitle: string
    year: string
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({location, subtitle, year}) => {
  return (
    <div className='flex flex-row items-start justify-between px-48 py-36'>
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
