import { questrial } from '@/lib/fonts'
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
    return (
        <Link href={`${type && "/"}${type}/${slug}`}>
            <div className="group relative">
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

                    <div className='flex flex-col sm:hidden items-start absolute mt-2'>
                        <h3 className={`${questrial.className} text-left text-2xl text-black font-thin tracking-wide break-words leading-6`}>{title} {location && ` - ${location}`}</h3>
                        <h3 className='text-left text-md text-[#cacaca] tracking-wide font-inter font-light leading-5'>{subtitle}</h3>
                    </div>

                </div>

                {/* hover state */}
                <div className="transition-opacity hidden sm:block duration-700 absolute inset-0 opacity-0 group-hover:opacity-100"> 
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
                        <h3 className={`${questrial.className} text-left text-2xl text-black font-thin tracking-wide break-words leading-6`}>{title} {location && ` - ${location}`}</h3>
                        <h3 className='text-left text-md text-[#cacaca] tracking-wide font-inter font-light leading-5'>{subtitle}</h3>

                    </div>
                </div>

            </div>
        </Link>
    )
}

export default ImageTile