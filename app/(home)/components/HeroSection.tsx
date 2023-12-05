import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'
import image from '../../../public/buvette1.png'


interface HeroSectionProps {
  url: string
  desc: string
}

const HeroSection: React.FC<HeroSectionProps> = ({url, desc}) => {
  return (
    <div className='h-screen'>
      <NavBar
        white={true}
      />

      
      <div className='z-0'>
        <Image
          src={url}
          alt={desc}
          fill
          sizes="100vw"
          // placeholder='blur'
          style={{
            objectFit: 'cover',
          }}      
        />
      </div>

      
 

    </div>
  )
}

export default HeroSection



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