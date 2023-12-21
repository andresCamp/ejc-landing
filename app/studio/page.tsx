import { getStudioPage } from '@/contentful';
import { StudioPage } from '@/types';
import React from 'react'
import TeamCard from './components/TeamCard';
import LandscapeFeatureSection from '@/components/LandscapeFeatureSection';
import ProjectLandscapeFeature from '@/components/project/ProjectLandscapeFeature';
import NavBar from '../(home)/components/NavBar';
import Image from 'next/image';

const page = async () => {

  const studiopageData: Promise<StudioPage> = getStudioPage();

  const data = await studiopageData

  const teamMembers = data.teamMembersCollection.items.map((member, index) => 
    <TeamCard
      key={index}
      name={member.fullName}
      title={member.title}
      image={member.primaryImagePortrait.url}
      description={member.primaryImagePortrait.description}
    />
  )
  // const teamMembers = <div className='grid grid-cols-3'>{data.teamMembersCollection.items.map((member) => 
  //   <TeamCard
  //     name={member.fullName}
  //     title={member.title}
  //     image={member.primaryImagePortrait.url}
  //     description={member.primaryImagePortrait.description}
  //   />}</div>
  // )

  const firstLine = <div className='grid grid-cols-3 gap-16'>
    <TeamCard
      name={data.teamMemberFeature1.fullName}
      title={data.teamMemberFeature1.title}
      image={data.teamMemberFeature1.primaryImagePortrait.url}
      description={data.teamMemberFeature1.primaryImagePortrait.description}
    />
    <TeamCard
      name={data.teamMemberFeature2.fullName}
      title={data.teamMemberFeature2.title}
      image={data.teamMemberFeature2.primaryImagePortrait.url}
      description={data.teamMemberFeature2.primaryImagePortrait.description}
    />
    <TeamCard
      name={data.teamMemberFeature3.fullName}
      title={data.teamMemberFeature3.title}
      image={data.teamMemberFeature3.primaryImagePortrait.url}
      description={data.teamMemberFeature3.primaryImagePortrait.description}
    />
  </div>


console.log(firstLine.props.children[0].props)
  

  return (
    <div className='flex flex-col items-center px-48'>
      <NavBar  white={false}/>

      <h3 className='text-4xl font-questrial font-light text-tertiary pt-64 tracking-wider'>
        {data.headline}
      </h3>

      {/* <ProjectLandscapeFeature
        img={data.primaryImageLandscape.url}
        description={data.primaryImageLandscape.description}
      /> */}

        <Image
          src={data.primaryImageLandscape.url}
          alt={data.primaryImageLandscape.description}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
          className='py-24'
        />
      
      <p className='font-questrial text-tertiary text-lg leading-10'>
        {data.studioDescription}
      </p>


      <div className='flex flex-row items-center justify-start gap-12 py-24'>
        <div className='w-1/3'>
          <TeamCard
            name={data.leadArchitect.fullName}
            title={data.leadArchitect.title}
            image={data.leadArchitect.primaryImagePortrait.url}
            description={data.leadArchitect.primaryImagePortrait.description}
          />
        </div>

        <p className='px-16 text-lg leading-10 text-tertiary w-2/3'>{data.leadArchitectDescription}</p>
      </div>


      <div className='mb-16 w-full'>
        {firstLine}
        <div className='grid grid-cols-3 gap-16'>
          {teamMembers}
        </div>
     
      </div>
      
    </div>
  )
}

export default page
