import Image from 'next/image';
import React from 'react'

interface TeamCardProps {
    name: string;
    title: string;
    image: string;
    description: string;
}


const TeamCard: React.FC<TeamCardProps> = ({name, title, image, description}) => {
  return (
    <div className='flex flex-col gap-1 lg:pb-12'>


        <Image
          src={image}
          alt={description}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />

      <div className='flex flex-col gap-0 items-start'>
        <p className='text-3xl lg:text-xl font-syne tracking-wide'>
          {name}
        </p>
        <p className='text-lg lg:text-xs text-tertiary'>
          {title}
        </p>

      </div>
      
    </div>
  )
}

export default TeamCard
