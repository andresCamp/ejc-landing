import ProjectLandscapeFeature from '@/components/project/ProjectLandscapeFeature';
import { getPressPostBySlug } from '@/contentful'
import { PressPost, Project } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
import ArticleRenderer from '../components/ArticleRenderer';
import PressPostCarousel from '@/app/(home)/components/PressPostCarousel';
import NavBar from '@/app/(home)/components/NavBar';
import { ArticleContent } from '@/types'; // Import the ArticleContent type


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const pressPostData: Promise<PressPost> = getPressPostBySlug(params.slug);
    const data = await pressPostData

    console.log(data)
    
    return {
        title: `EJC - ${data.title}`,
        description: data.title,
    }
}

const Page = async ({ params,}:{ params: {slug: string} }) => {

    const pressPostData: Promise<PressPost> = getPressPostBySlug(params.slug);

    const data = await pressPostData


    const paragraphs = [data.paragraph1, data.paragraph2, data.paragraph3, data.paragraph4, data.paragraph5];
    const images = data.postImagesCollection.items;

    const renderContent = () => paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p className='text-xl text-gray-600 font-syne my-8'>{paragraph}</p>
          {images[index] ? (
            <Image src={images[index].url} alt={images[index].description} width={500} height={500} />
          ) : null}
        </React.Fragment>
      ));

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

            <div className='flex flex-col items-center justify-center pt-16'>
                <div className='w-1/2'>
                    {renderContent()}
                </div>
            </div>
        </div>

        <PressPostCarousel />
    </div>
  )
}

export default Page
