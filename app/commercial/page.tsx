'use client'
import useFetchData from '@/components/useFetchData';
import React from 'react';
import { getCommercialProjects } from '@/contentful';
import { ProjectTile, ProjectTileLink } from '@/types';
import NavBar from '../(home)/components/NavBar';
import PortraitFeatureSection from '@/components/PortraitFeatureSection';
import LandscapeFeatureSection from '@/components/LandscapeFeatureSection';



const Page: React.FC = () => {
  const { data, loading, error } = useFetchData<ProjectTileLink[]>(getCommercialProjects);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  console.log(data);

  // const renderSections = () => {
  //   const sections = [];
  //   let isPortraitNext = true;

  //   for (let i = 0; i < data.length; i++) {
  //     if (isPortraitNext) {
  //       // Render Portrait section
  //       sections.push(
  //         <PortraitFeatureSection
  //           key={`portrait-${i}`}
  //           // project1={data[i].}
  //           // project2={data[i + 1]} // This can be undefined, handle accordingly in PortraitSection
  //           img1={data![i].portraitCover.url}
  //           hoverImg1={data![i].landscapeFeature1.url}
  //           slug1={data![i].slug}
  //           description1={data![i].portraitCover.description}
  //           hoverDescription1={data![i].portraitFeature1.description}
  //           title1={data![i].title}
  //           subtitle1={data![i].subtitle}
  //           location1={data![i].projectLocation}
  //           type1={data![i].projectType}
            
  //           img2={data![i + 1].portraitCover.url}
  //           hoverImg2={data![i + 1].landscapeFeature1.url}
  //           slug2={data![i + 1].slug}
  //           description2={data![i + 1].portraitCover.description}
  //           hoverDescription2={data![i + 1].portraitFeature1.description}
  //           title2={data![i + 1].title}
  //           subtitle2={data![i + 1].subtitle}
  //           location2={data![i + 1].projectLocation}
  //           type2={data![i + 1].projectType}
  //         />
  //       );
  //       i++; // Skip the next project as it's used in the portrait section
  //     } else {
  //       // Render Landscape section
  //       sections.push(
  //         // <LandscapeSection
  //         //   key={`landscape-${i}`}
  //         //   project={data[i]}
  //         // />
  //         <LandscapeFeatureSection
  //           key={`landscape-${i}`}
  //           img={data![i].portraitCover.url}
  //           hoverImg={data![i].landscapeFeature1.url}
  //           slug={data![i].slug}
  //           description={data![i].portraitCover.description}
  //           hoverDescription={data![i].portraitFeature1.description}
  //           title={data![i].title}
  //           subtitle={data![i].subtitle}
  //           location={data![i].projectLocation}
  //           type={data![i].projectType}
  //         />
  
  
  //       );
  //     }
  //     isPortraitNext = !isPortraitNext; // Toggle for the next iteration
  //   }

  //   return sections;
  // };


  const renderSections = () => {
    const sections = [];
    let isPortraitNext = true;
  
    for (let i = 0; i < data.length; i++) {
      if (isPortraitNext) {
        const project1 = data[i];
        const project2 = data[i + 1]; // This might be undefined
  
        sections.push(
          <PortraitFeatureSection
            key={`portrait-${i}`}
            img1={project1.portraitCover.url}
            hoverImg1={project1.landscapeFeature1.url}
            slug1={project1.slug}
            description1={project1.portraitCover.description}
            hoverDescription1={project1.portraitFeature1.description}
            title1={project1.title}
            subtitle1={project1.subtitle}
            location1={project1.projectLocation}
            type1={project1.projectType}
            
            img2={project2 ? project2.portraitCover.url : undefined}
            hoverImg2={project2 ? project2.landscapeFeature1.url : undefined}
            slug2={project2 ? project2.slug : undefined}
            description2={project2 ? project2.portraitCover.description : undefined}
            hoverDescription2={project2 ? project2.portraitFeature1.description : undefined}
            title2={project2 ? project2.title : undefined}
            subtitle2={project2 ? project2.subtitle : undefined}
            location2={project2 ? project2.projectLocation : undefined}
            type2={project2 ? project2.projectType : undefined}
          />
        );
  
        if (!project2) {
          break; // Exit the loop if there's no second project
        }
  
        i++; // Skip the next project as it's used in the portrait section
      } else {
        // Render Landscape section
        sections.push(
          <LandscapeFeatureSection
            key={`landscape-${i}`}
            img={data[i].portraitCover.url}
            hoverImg={data[i].landscapeFeature1.url}
            slug={data[i].slug}
            description={data[i].portraitCover.description}
            hoverDescription={data[i].portraitFeature1.description}
            title={data[i].title}
            subtitle={data[i].subtitle}
            location={data[i].projectLocation}
            type={data[i].projectType}
          />
        );
      }
      isPortraitNext = !isPortraitNext; // Toggle for the next iteration
    }
  
    return sections;
  };
  



  // Render your component with data
  return (
    <div>
      <NavBar
        white={false}
      />
      {renderSections()}

    </div>
  );
};

export default Page;
