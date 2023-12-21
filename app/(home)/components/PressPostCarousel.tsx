
import PressTile from '@/app/press/components/PressTile';
import Button from '@/components/Button';
import ImageTile from '@/components/ImageTile';
import { getCarouselProjects, getPostCarousel } from '@/contentful';
import { PressPost, Project } from '@/types';
import { get } from 'http';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const PressPostCarousel = async () => {

    const pressPostsData = getPostCarousel();

    const data = await pressPostsData


    console.log(data)

  return (
    <div className='sm:px-48 pt-32 pb-16 flex flex-col gap-8 justify-center items-center'>
            
        {/* <h3 className=' font-medium text-xl'>@ESTUDIOJORGECAMPOS</h3> */}

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
            
            {/* {data.map( (post: PressPost, id: number) => (
                <PressTile
                    key={id}
                    img={post.primaryImagePortrait.url}
                    alt={post.primaryImagePortrait.description}
                    title={post.title}
                    slug={post.slug}
                    date={post.publishDate}
                />            
            ))} */}

            {data.map((post, index) => (
                <PressTile
                    key={index}
                    slug={post.slug}
                    title={post.title}
                    date={post.publishDate}
                    img={post.primaryImagePortrait.url}
                    alt={post.primaryImagePortrait.description}
                />
            ))}
        </div>

        <Button
            text='ALL PRESS'
            url='/press'
            type='button'
            />

   
    </div>
  )
}

export default PressPostCarousel
