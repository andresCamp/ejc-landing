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