import ProjectPortraitFeatures from '@/components/project/ProjectPortraitFeatures';
import { getShopPage } from '@/contentful';
import { OurShopPage } from '@/types';
import React from 'react'
import NavBar from '../(home)/components/NavBar';
import Image from 'next/image';
import InterestForm from './components/InterestForm';

const page = async () => {

    const shoppageData: Promise<OurShopPage> = getShopPage();

    const data = await shoppageData

    console.log(data)

  return (
    <div className='flex flex-col gap-12 mb-32'>
      <NavBar white={false} />

      <div className='flex flex-row px-48 pt-60 items-center justify-center gap-32'>
        <p className='leading-10 font-questrial text-lg text-tertiary'>
          {data.shopDescription}
        </p>

        <Image
            src={data.primaryImageSquare.url}
            alt={data.primaryImageSquare.description}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
            className='w-1/2'
        />
      </div>


      <ProjectPortraitFeatures
         img1={data.portraitFeature1.url}
         img1Description={data.portraitFeature1.description}
         img2={data.portraitFeature2.url}
         img2Description={data.portraitFeature2.url}
      />

      <div className='flex flex-col items-center justify-center py-12 pt-32'>
        <InterestForm 
          message={data.ctaCopy}
        />
      
      </div>
    </div>
  )
}

export default page
