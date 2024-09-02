import ImageTile from '@/components/ImageTile';
import { getCarouselProjects } from '@/contentful';
import { Project } from '@/types';
import { get } from 'http';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ProjectCarousel = async () => {
    const carouselProjectData = getCarouselProjects();
    const data = await carouselProjectData;

    return (
        <div className='bg-primary min-h-screen pt-32 pb-16 flex flex-col gap-8 justify-center items-center'>
            <div className='w-full overflow-hidden'>
                <div className='flex flex-nowrap overflow-x-auto gap-4 pb-4 px-4 snap-x snap-mandatory transparent-scrollbar'>
                    {data.map((project, id) => (
                        <Link href={`/${project.projectType}/${project.slug}`} className='group flex flex-col items-center gap-3 flex-shrink-0 snap-center' key={id}>
                            <div className="relative">
                                <Image
                                    src={project.primaryTileImage.url}
                                    alt={project.primaryTileImage.description}
                                    sizes="(max-width: 768px) 80vw, 300px"
                                    style={{
                                        width: '80vw',
                                        maxWidth: '300px',
                                        height: 'auto',
                                    }}
                                    width={300}
                                    height={200}
                                    className="transition-opacity duration-300 group-hover:opacity-90"
                                />
                            </div>
                            <h3 className='tracking-wider font-inter text-white text-xl font-thin sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300'>{project.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <Link href='https://www.instagram.com/estudiojorgecampos/'>
                <h3 className='text-white font-medium text-2xl hover:opacity-75'>@ESTUDIOJORGECAMPOS</h3>
            </Link>
        </div>
    )
}

export default ProjectCarousel;

