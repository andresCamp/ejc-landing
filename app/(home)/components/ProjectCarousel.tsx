
import ImageTile from '@/components/ImageTile';
import { getCarouselProjects } from '@/contentful';
import { Project } from '@/types';
import { get } from 'http';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const ProjectCarousel = async () => {

    const carouselProjectData = getCarouselProjects();

    const data = await carouselProjectData


    // console.log(projectsData)

  return (
    <div className='bg-primary h-screen sm:h-full pt-32 pb-16 flex flex-col gap-8 justify-center items-center'>

        <div className='grid grid-cols-6 gap-4 '>
            {data.map( (project: Project, id: number) => (
             
             <Link href={`/${project.projectType}/${project.slug}`} className='group flex flex-col items-center gap-3' key={id}>
        
             <div className="relative">
                 <Image
                     src={project.primaryTileImage.url}
                     alt={project.primaryTileImage.description}
                     sizes="100vw"
                     style={{
                         width: '100%',
                         height: 'auto',
                     }}
                     width={500}
                     height={300}
                     className="transition-opacity duration-300 group-hover:opacity-90"
                 />
             </div>
         
             <h3 className='opacity-0 hidden sm:block group-hover:opacity-100 tracking-wider font-inter text-white text-md font-thin transition-opacity duration-300'>{project.title}</h3>
         </Link>
         
         


            
            ))}
        </div>

        <h3 className='text-white font-medium text-2xl'>@ESTUDIOJORGECAMPOS</h3>
   
    </div>
  )
}

export default ProjectCarousel
