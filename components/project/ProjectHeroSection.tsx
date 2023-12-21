import React from 'react'
import Image from 'next/image'
import image from '../../../public/buvette1.png'
import Arrow from '../../public/arrow.svg'
import NavBar from '@/app/(home)/components/NavBar'
import Link from 'next/link'


interface ProjectHeroSectionProps {
  title: string
  subtitle: string
  type: string
  url: string
  desc: string
}

const ProjectHeroSection: React.FC<ProjectHeroSectionProps> = ({title, subtitle, type, url, desc}) => {
  return (
<div className='h-screen flex flex-col justify-between'>
  <NavBar white={true} />
  
  <div className='z-0 flex-grow'>
    <Image
      src={url}
      alt={desc}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}      
    />
  </div>

  <div className='z-50 flex justify-between items-end font-light text-xl p-12 text-white'>
    <div>
      <p className='uppercase tracking-widest'>{title}</p>
      <p className='text-sm tracking-wide text-stone-100'>{subtitle}</p>
    </div>

    <Link href={`/${type}`} className='flex flex-row items-center gap-2 hover:opacity-80 transition-opacity duration-300'>
      <Image src={Arrow} alt='' className='w-3.5 h-3.5 rotate-180 text-white' />
      <p className='text-lg'>Back to Projects</p>
    </Link>
  </div>
</div>



    // <div className='h-screen'>
    //   <NavBar
    //     white={true}
    //   />

      
    //   <div className='z-0'>
    //     <Image
    //       src={url}
    //       alt={desc}
    //       fill
    //       sizes="100vw"
    //       // placeholder='blur'
    //       style={{
    //         objectFit: 'cover',
    //       }}      
    //     />
    //   </div>


    //   <div className='z-50 text-white'>
    //     <p>{title}</p>
    //     <p>{subtitle}</p>
    //   </div>


    //   <Link href={`/${type}`}>
    //     <div className='z-50 text-white'>
    //       <p>Back to Projects</p>
    //     </div>
    //   </Link>

    // </div>
  )
}

export default ProjectHeroSection



       {/* <Image
            src={image}
            fill
            sizes="100vw"
            placeholder='blur'
            style={{
                objectFit: 'cover',
            }}            
            alt=""
        /> */}