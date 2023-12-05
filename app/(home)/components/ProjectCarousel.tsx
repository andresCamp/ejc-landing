
import ImageTile from '@/components/ImageTile';
import { getCarouselProjects } from '@/contentful';
import { Project } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const ProjectCarousel = () => {

    const [projectsData, setProjectsData] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects= async () => {
            try {
                const data = await getCarouselProjects();

                // console.log(data[0])

                setProjectsData(data);
              
                setLoading(false);    
            } catch (error) {
                console.error('Error fetching homepage data:', error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
      }
      
      if (!projectsData) {
        return <div>Error loading data</div>;
      }


    // console.log(projectsData)

  return (
    <div className='bg-primary pt-32 pb-16 flex flex-col gap-8 justify-center items-center'>

        <div className='grid grid-cols-6 gap-4 '>
            {projectsData.map( (project: Project, id: number) => (
             
             <div key={id} className='group flex flex-col items-center gap-3'>
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
         
             <h3 className='opacity-0 group-hover:opacity-100 text-white text-xl font-light transition-opacity duration-300'>{project.title}</h3>
         </div>
         
         


            
            ))}
        </div>

        <h3 className='text-white font-medium text-2xl'>@ESTUDIOJORGECAMPOS</h3>
   
    </div>
  )
}

export default ProjectCarousel
