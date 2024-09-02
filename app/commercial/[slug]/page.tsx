import ProjectCarousel from '@/app/(home)/components/ProjectCarousel';
import ProjectDescription from '@/components/project/ProjectDescription';
import ProjectDetails from '@/components/project/ProjectDetails';
import ProjectHeroSection from '@/components/project/ProjectHeroSection';
import ProjectLandscapeFeature from '@/components/project/ProjectLandscapeFeature';
import ProjectPortraitFeatures from '@/components/project/ProjectPortraitFeatures';
import { getProjectBySlug } from '@/contentful'
import { Project } from '@/types';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const projectData: Promise<Project> = getProjectBySlug(params.slug);
    const data = await projectData
    
    return {
        title: `EJC - ${data.title}`,
        description: data.projectDescription1,
    }
}

const Page = async ({ params,}:{ params: {slug: string} }) => {

    const projectData: Promise<Project> = getProjectBySlug(params.slug);

    const data = await projectData

  return (
    <div className='w-full overflow-hidden'>
        <ProjectHeroSection
            title={data.title}
            subtitle={data.subtitle}
            type={data.projectType}
            url={data.primaryImageLandscape.url}
            desc={data.primaryImageLandscape.description}
        />

        <ProjectDescription
            img={data.squareFeature1.url}
            alt={data.squareFeature1.description}
            description={data.projectDescription1}
            left={true}
        />

        <ProjectPortraitFeatures
            img1={data.portraitFeature1.url}
            img1Description={data.portraitFeature1.description}
            img2={data.portraitFeature2.url}
            img2Description={data.portraitFeature2.description}
        />

        <ProjectLandscapeFeature
            img={data.primaryHoverImageLandscape.url}
            description={data.primaryHoverImageLandscape.description}
        />

        <ProjectDescription
            img={data.squareFeature2.url}
            alt={data.squareFeature2.description}
            description={data.projectDescription2}
            left={false}
        />


        <ProjectDetails
            location={data.projectLocation}
            subtitle={data.subtitle}
            year={data.projectYear}
        />

        <ProjectCarousel/>

      {/* Test {params.slug} {data.title} */}
    </div>
  )
}

export default Page
