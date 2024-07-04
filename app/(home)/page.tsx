// 'use client'
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { getHomepage, getProject } from '@/contentful'
// import { useEffect, useState } from 'react'
import { Homepage, Project } from '@/types'
import HeaderSection from './components/HeaderSection'
import QuoteSection from './components/QuoteSection'
import ProjectsSelection from './components/ProjectsSelection'
import ImageTile from '@/components/ImageTile'
import Button from '@/components/Button'
import AboutStudioSection from './components/AboutStudioSection'
import ProjectCarousel from './components/ProjectCarousel'
import LandscapeFeatureSection from '@/components/LandscapeFeatureSection'
import Footer from '@/components/Footer'
import PressPostCarousel from './components/PressPostCarousel'

// interface HomepageProps {
//   homepageData: Homepage
// }


const Page = async () => {
    const homepageData: Promise<Homepage> = getHomepage();

    const data = await homepageData

    const featuredProject1 = await getProject(data.featuredProject1.sys.id)
    const featuredProject2 = await getProject(data.featuredProject2.sys.id)
    const featuredProject3 = await getProject(data.featuredProject3.sys.id)
    const featuredProject4 = await getProject(data.featuredProject4.sys.id)

    // console.log(data.heroImagesCollection)


return (
  <div className='h-full'>
      <HeroSection images={data.heroImagesCollection}/>
      {/* <HeroSection images={data.heroImagesCollection} url={data.heroImage.url} desc={data.heroImage.description}/> */}


      <HeaderSection text={data.heading}/>

      <LandscapeFeatureSection
        img={featuredProject1.primaryImageLandscape.url}
        hoverImg={featuredProject1.primaryHoverImageLandscape.url}
        slug={featuredProject1.slug}
        description={featuredProject1.primaryImageLandscape.description}
        hoverDescription={featuredProject1.primaryHoverImageLandscape.description}
        title={featuredProject1.title}
        subtitle={featuredProject1.subtitle}
        location={featuredProject1.projectLocation}
        type={featuredProject1.projectType}
      />
    

      {/* <div className=''>
        <ImageTile 
          img={featuredProjects![0].portraitCover.url}
          hoverImg={featuredProjects![0].landscapeFeature1.url}
          slug={featuredProjects![0].slug}
          description={featuredProjects![0].portraitCover.description}
          hoverDescription={featuredProjects![0].portraitFeature1.description}
          title={featuredProjects![0].title}
          subtitle={featuredProjects![0].subtitle}
          location={featuredProjects![0].projectLocation}
        />
      </div> */}

      <ProjectsSelection
        img1={data.commercialProjectsCover.url}
        img1Description={data.commercialProjectsCover.description}
        img2={data.residentialProjectsCover.url}
        img2Description={data.residentialProjectsCover.description}
        />

      <LandscapeFeatureSection
        img={featuredProject2.primaryImageLandscape.url}
        hoverImg={featuredProject2.primaryHoverImageLandscape.url}
        slug={featuredProject2.slug}
        description={featuredProject2.primaryImageLandscape.description}
        hoverDescription={featuredProject2.primaryHoverImageLandscape.description}
        title={featuredProject2.title}
        subtitle={featuredProject2.subtitle}
        location={featuredProject2.projectLocation}
        type={featuredProject2.projectType}
      />

    



      {/* <Button/> */}




      <QuoteSection text={data.philosophyQuote}/>


      <ProjectCarousel />


      <AboutStudioSection
        img={data.studioImageSquare.url}
        imgHover={data.studioImageSquareHover.url}
        alt={data.studioImageSquare.description}
        altHover={data.studioImageSquareHover.description}
        description={data.studioDescription}
      />


      <PressPostCarousel />


      {/* <div className='flex flex-col justify-between items-start py-56 px-8 sm:px-32 gap-4 bg-black font-syne text-8xl text-white'>
        <h2>10 years</h2>
        <h2>building spaces</h2>
        <h2>that tell a story</h2>
      </div> */}




    </div>
  );
}


export default Page