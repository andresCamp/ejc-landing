import React from 'react'
import Image from 'next/image'
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

const ProjectHeroSection: React.FC<ProjectHeroSectionProps> = ({ title, subtitle, type, url, desc }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fixed Navigation Bar at the top */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <NavBar white={true} />
      </header>

      {/* Full-Screen Background Image */}
      <div className="relative h-full w-full">
        <Image
          src={url}
          alt={desc}
          fill
          className="object-cover"
          style={{ zIndex: 0 }} // Ensures the image is below other elements
        />
            <div className="absolute top-0 left-0 right-0 opacity-40 h-48 bg-gradient-to-b from-black to-transparent z-10"></div>

      </div>

      {/* Bottom Section fixed to the bottom */}
      <footer className="absolute bottom-0 left-0 right-0 z-50 p-4 lg:p-12 text-white flex justify-between items-center">
        <div>
          <p className="uppercase tracking-widest text-xl">{title}</p>
          <p className="text-sm tracking-wide text-stone-100">{subtitle}</p>
        </div>

        <Link
          href={`/${type}`}
          className="flex flex-row items-center gap-2 hover:opacity-80 focus-visible:opacity-80 transition-opacity duration-300"
        >
          <Image src={Arrow} alt="Arrow Icon" aria-hidden="true" className="w-3.5 h-3.5 rotate-180" />
          <p className="text-lg">Back to Projects</p>
        </Link>
      </footer>
    </div>
  )
}

export default ProjectHeroSection


// import React from 'react'
// import Image from 'next/image'
// import image from '../../../public/buvette1.png'
// import Arrow from '../../public/arrow.svg'
// import NavBar from '@/app/(home)/components/NavBar'
// import Link from 'next/link'


// interface ProjectHeroSectionProps {
//   title: string
//   subtitle: string
//   type: string
//   url: string
//   desc: string
// }

// const ProjectHeroSection: React.FC<ProjectHeroSectionProps> = ({title, subtitle, type, url, desc}) => {
//   return (
// <div className='h-screen flex flex-col justify-between'>
//   <NavBar white={true} />
  
//   <div className='z-0 flex-grow'>
//     <Image
//       src={url}
//       alt={desc}
//       fill
//       style={{
//         objectFit: 'cover',
//       }}
//     />
//   </div>

//   <div className='z-50 flex justify-between items-center lg:items-end font-light text-xl p-4 lg:p-12 text-white'>
//     <div>
//       <p className='uppercase tracking-widest'>{title}</p>
//       <p className='text-sm tracking-wide text-stone-100'>{subtitle}</p>
//     </div>

//     <Link href={`/${type}`} className='flex flex-row items-center gap-2 hover:opacity-80 transition-opacity duration-300'>
//       <Image src={Arrow} alt='' className='w-3.5 h-3.5 rotate-180 text-white' />
//       <p className='text-lg'>Back to Projects</p>
//     </Link>
//   </div>
// </div>
//   )
// }

// export default ProjectHeroSection



//        {/* <Image
//             src={image}
//             fill
//             sizes="100vw"
//             placeholder='blur'
//             style={{
//                 objectFit: 'cover',
//             }}            
//             alt=""
//         /> */}