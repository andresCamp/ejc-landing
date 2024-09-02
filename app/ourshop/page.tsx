import ProjectPortraitFeatures from '@/components/project/ProjectPortraitFeatures';
import { getShopPage } from '@/contentful';
import { OurShopPage } from '@/types';
import React from 'react'
import NavBar from '../(home)/components/NavBar';
import Image from 'next/image';
import InterestForm from './components/InterestForm';
import PageTitle from '@/components/PageTitle';
import { questrial } from '@/lib/fonts';

const page = async () => {

    const shoppageData: Promise<OurShopPage> = getShopPage();

    const data = await shoppageData

    // console.log(data)

  return (
    <div className='flex flex-col lg:mb-32 w-full overflow-x-clip'>
      <NavBar white={false} />

      <PageTitle title='Our Shop'/>


      <div className='flex flex-col md:flex-row px-16 lg:px-48 lg:pt-36 items-center justify-center gap-6 lg:gap-32'>
        <p className={`${questrial.className} leading-10 text-lg text-tertiary`}>
          {data.shopDescription}
        </p>

        <Image
            src={data.primaryImageSquare.url}
            alt={data.primaryImageSquare.description}
            width={500}
            height={300}
            className='w-full lg:w-1/2'
        />
      </div>


      <div className='px-10 '>
        <ProjectPortraitFeatures
          img1={data.portraitFeature1.url}
          img1Description={data.portraitFeature1.description}
          img2={data.portraitFeature2.url}
          img2Description={data.portraitFeature2.url}
        />
      </div>

      <div className='flex flex-col items-center justify-center px-16 py-12 lg:pt-32'>
        <InterestForm 
          message={data.ctaCopy}
        />
      
      </div>
    </div>
  )
}

export default page
