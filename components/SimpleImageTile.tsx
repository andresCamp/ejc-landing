import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface SimpleImageTileProps {
    img: string
    hoverImg: string
    description: string
    hoverDescription: string
    width: number
    height: number
}

const SimpleImageTile: React.FC<SimpleImageTileProps> = ({img, hoverImg, hoverDescription, description, height, width}) => {
    return (
        <div className="group relative"> {/* Use group to apply hover state to children */}
            {/* active state (shown by default) */}
            <div className=""> 
                <Image
                    src={img}
                    alt={description}
                    width={width}
                    height={height}
                />

            </div>

            {/* hover state */}
            <div className="transition-opacity hidden sm:block duration-700 absolute inset-0 opacity-0 group-hover:opacity-100"> 
                <Image
                    src={hoverImg}
                    alt={hoverDescription}
                    width={width}
                    height={height}
                    className=' brightness-90'
                />
            </div>
        </div>
    )
}

export default SimpleImageTile


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