import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface ImageTileProps {
    img: string
    hoverImg: string
    slug: string
    description: string
    hoverDescription: string
    title: string
    subtitle: string
    location: string
    type: string
}

const ImageTile: React.FC<ImageTileProps> = ({img, hoverImg, slug, type, hoverDescription, description, title, subtitle, location }) => {
  
//     console.log(title)
//   console.log(`${type && "/"}${type}/${slug}`)

  
    return (
    <Link href={`${type && "/"}${type}/${slug}`}>
        <div className="group relative"> {/* Use group to apply hover state to children */}

            {/* active state (shown by default) */}
            {/* <div className="block group-hover:hidden transition duration-500">  */}
            {/* <div className="transition-opacity duration-0 opacity-100 group-hover:opacity-0">  */}
            <div className=""> 
                <Image
                    src={img}
                    alt={description}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                />
                {/* <Image
                    src={img}
                    alt={description}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                /> */}
            </div>

            {/* hover state */}
            {/* <div className="hidden group-hover:block transition duration-500">  */}
            <div className="transition-opacity duration-700 absolute inset-0 opacity-0 group-hover:opacity-100"> 
                <Image
                    src={hoverImg}
                    alt={hoverDescription}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className=' brightness-90'
              
                />
                <div className='flex flex-col items-start absolute mt-2'>
                    <h3 className='text-center text-2xl text-black font-questrial font-thin '>{title} {location && ` - ${location}`}</h3>
                    <h3 className='text-center text-lg text-[#7A7A7A] font-syne font-thin '>{subtitle}</h3>

                </div>
            </div>

        </div>
    </Link>


)
}

export default ImageTile


    // <Link href={`/projects/${slug}`}>
        
    //     {/* inactive state */}
    //     <div>

    //         <Image
    //             src={img}
    //             alt={description}
    //             fill
    //             sizes="100vw"
    //             // placeholder='blur'
    //             style={{
    //             objectFit: 'cover',
    //             }}
    //         />

    //     </div>

    //     {/* hover state */}
    //     <div>

    //         <Image
    //             src={img}
    //             alt={hoverDescription}
    //             fill
    //             sizes="100vw"
    //             // placeholder='blur'
    //             style={{
    //             objectFit: 'cover',
    //             }}
    //         />

    //         <h1 className='text-center text-3xl text-[#7A7A7A] font-questrial font-thin '>{title}</h1>
    //         <h1 className='text-center text-3xl text-[#7A7A7A] font-questrial font-thin '>{subtitle}</h1>
       
    //     </div>

    // </Link>