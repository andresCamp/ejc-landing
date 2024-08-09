import ProjectLandscapeFeature from '@/components/project/ProjectLandscapeFeature';
import { getPressPostBySlug } from '@/contentful'
import { PressPost } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
import PressPostCarousel from '@/app/(home)/components/PressPostCarousel';
import NavBar from '@/app/(home)/components/NavBar';

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
        <section key={index} className='flex flex-col justify-center items-center'>
          <p className='text-xl text-gray-600 font-syne my-8'>{paragraph}</p>
          {images[index] ? (
            <div className='w-1/2'>
              <Image src={images[index].url} alt={images[index].description} width={500} height={500} />
              <p>{images[index].description}</p>
            </div>
          ) : null}
        </section>
      ));

  return (
    <div className=' text-black'>

        <NavBar white={false} />

        <div className='flex flex-col gap-5'>
            <ProjectLandscapeFeature
                img={data.primaryImageLandscape.url}
                description={data.primaryImageLandscape.description}
            />
            <div className='px-6 lg:px-48'>
                <h3 className='font-syne text-3xl text-seconday'>{data.title}</h3>
                <p className='text-md text-tertiary font-syne font-thin'>
                    {new Date(data.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>

            <div className='flex flex-col items-center justify-center lg:pt-16'>
                <div className='px-6 lg:w-2/3'>
                    {renderContent()}
                </div>
            </div>
        </div>

        <PressPostCarousel />
    </div>
  )
}

export default Page
