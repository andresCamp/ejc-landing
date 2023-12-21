import ProjectLandscapeFeature from '@/components/project/ProjectLandscapeFeature';
import { getPressPostBySlug } from '@/contentful'
import { PressPost, Project } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
import ArticleRenderer from '../components/ArticleRenderer';
import PressPostCarousel from '@/app/(home)/components/PressPostCarousel';
import NavBar from '@/app/(home)/components/NavBar';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const pressPostData: Promise<PressPost> = getPressPostBySlug(params.slug);
    const data = await pressPostData
    
    return {
        title: `EJC - ${data.title}`,
        description: data.title,
    }
}

const Page = async ({ params,}:{ params: {slug: string} }) => {

    const pressPostData: Promise<PressPost> = getPressPostBySlug(params.slug);

    const data = await pressPostData

    console.log(data)

  return (
    <div className=' text-black'>

        <NavBar white={false} />

        <div className='flex flex-col gap-5'>
            <ProjectLandscapeFeature
                img={data.primaryImageLandscape.url}
                description={data.primaryImageLandscape.description}
            />
            <div className='px-48'>
                <h3 className='font-syne text-3xl text-seconday'>{data.title}</h3>
                <p className='text-md text-tertiary font-syne font-thin'>
                    {new Date(data.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>

            {/* <ArticleRenderer 
                articleContent={data.articleContent.json}
            /> */}

        </div>


        <PressPostCarousel />

        



        {/* <Image
            src={data.primaryImageLandscape.url}
            alt={data.primaryImageLandscape.description}
            sizes="100vw"
            style={{
                width: '100%',
                height: 'auto',
            }}
            width={500}
            height={300}
        /> */}
    </div>
  )
}

export default Page
