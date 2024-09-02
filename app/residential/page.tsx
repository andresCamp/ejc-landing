// 'use client'
import React from 'react';
import { getResidentialProjects } from '@/contentful';
import { Project } from '@/types';
import NavBar from '../(home)/components/NavBar';
import PortraitFeatureSection from '@/components/PortraitFeatureSection';
import LandscapeFeatureSection from '@/components/LandscapeFeatureSection';
import { Metadata } from 'next';
import PageTitle from '@/components/PageTitle';

export const metadata: Metadata = {
  title: `EJC - Residential Projects`,
}

const Page: React.FC = async () => {
  const residentialProjectsData: Promise<Project[]> = getResidentialProjects();
  const data = await residentialProjectsData;

  const renderMobileLayout = () => {
    return data.map((project, index) => (
      <div key={`mobile-${index}`} className="md:hidden">
        <PortraitFeatureSection
          img1={project.primaryImagePortrait.url}
          hoverImg1={project.primaryHoverImagePortrait.url}
          slug1={project.slug}
          description1={project.primaryImagePortrait.description}
          hoverDescription1={project.primaryHoverImagePortrait.description}
          title1={project.title}
          subtitle1={project.subtitle}
          location1={project.projectLocation}
          type1={project.projectType}
        />
      </div>
    ));
  };

  const renderDesktopLayout = () => {
    const sections = [];
    let isPortraitNext = true;

    for (let i = 0; i < data.length; i++) {
      if (isPortraitNext) {
        const project1 = data[i];
        const project2 = data[i + 1]; // This might be undefined

        sections.push(
          <div key={`desktop-portrait-${i}`} className="hidden md:block">
            <PortraitFeatureSection
              img1={project1.primaryImagePortrait.url}
              hoverImg1={project1.primaryHoverImagePortrait.url}
              slug1={project1.slug}
              description1={project1.primaryImagePortrait.description}
              hoverDescription1={project1.primaryHoverImagePortrait.description}
              title1={project1.title}
              subtitle1={project1.subtitle}
              location1={project1.projectLocation}
              type1={project1.projectType}
              
              img2={project2 ? project2.primaryImagePortrait.url : undefined}
              hoverImg2={project2 ? project2.primaryHoverImagePortrait.url : undefined}
              slug2={project2 ? project2.slug : undefined}
              description2={project2 ? project2.primaryImagePortrait.description : undefined}
              hoverDescription2={project2 ? project2.primaryHoverImagePortrait.description : undefined}
              title2={project2 ? project2.title : undefined}
              subtitle2={project2 ? project2.subtitle : undefined}
              location2={project2 ? project2.projectLocation : undefined}
              type2={project2 ? project2.projectType : undefined}
            />
          </div>
        );

        if (!project2) {
          break; // Exit the loop if there's no second project
        }

        i++; // Skip the next project as it's used in the portrait section
      } else {
        sections.push(
          <div key={`desktop-landscape-${i}`} className="hidden md:block">
            <LandscapeFeatureSection
              img={data[i].primaryImageLandscape.url}
              hoverImg={data[i].primaryHoverImageLandscape.url}
              slug={data[i].slug}
              description={data[i].primaryImageLandscape.description}
              hoverDescription={data[i].primaryHoverImageLandscape.description}
              title={data[i].title}
              subtitle={data[i].subtitle}
              location={data[i].projectLocation}
              type={data[i].projectType}
            />
          </div>
        );
      }
      isPortraitNext = !isPortraitNext; // Toggle for the next iteration
    }

    return sections;
  };

  return (
    <div className='min-h-screen w-full overflow-x-clip pb-12'>
      <NavBar white={false} />
      <PageTitle title='Residential Projects' />
      {renderMobileLayout()}
      {renderDesktopLayout()}
    </div>
  );
};

export default Page;
