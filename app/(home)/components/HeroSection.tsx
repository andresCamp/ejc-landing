'use client'
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

const HeroSection: React.FC<{ images: any }> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to manage fade effect

  // Effect to cycle through images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // Start by fading out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.items.length);
        setFade(true); // Fade in the new image
      }, 700); // Shortened to 250ms for faster transition
    }, 8000); // Change image every 5000 milliseconds

    return () => clearInterval(timer);
  }, [images.items.length]);

  return (
    <div className='h-screen bg-black relative'>  {/* Ensure the container is relative */}
      <NavBar white={true} />
      <div className='z-0'>
        {images.items.length > 0 && (
          <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={images.items[currentImageIndex].url}
              alt={images.items[currentImageIndex].description}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}    
              className='z-0'
            />
            <p className={`absolute bottom-0 right-0 m-7 text-white z-50 text-base md:text-xl`}>
              {images.items[currentImageIndex].title}
            </p>  {/* Title displayed in the bottom right corner */}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;

// import React from 'react'
// import NavBar from './NavBar'
// import Image from 'next/image'
// import image from '../../../public/buvette1.png'
// import { HeroImagesCollection } from '@/types'

// const HeroSection: React.FC<{images: any }> = ({images}) => {

//   console.log("Iamges :",images.items)
//   return (
//     <div className='h-screen'>
//       <NavBar
//         white={true}
//       />
//       <div className='z-0'>
//         <Image
//           src={images.items[0].url}
//           alt={images.items[0].description}
//           fill
//           sizes="100vw"
//           // placeholder='blur'
//           style={{
//             objectFit: 'cover',
//           }}    
//           className='z-0'  
//         />
//       </div>
//     </div>
//   )
// }

// export default HeroSection



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