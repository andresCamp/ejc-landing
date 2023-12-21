import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PressTileProps {
    img: string
    alt: string
    title: string
    slug: string
    date: string
}

const PressTile: React.FC<PressTileProps> = ({img, alt, slug, title, date}) => {
  return (
    <Link href={`/press/${slug}`} className='group'>
        <Image
            src={img}
            alt={alt}
            sizes="100vw"
            style={{
                width: '100%',
                height: 'auto',
            }}
            width={500}
            height={300}
            className="transition-opacity duration-500 group-hover:opacity-90"
        />
        <div className='flex flex-col items-start mt-2'>
            <h3 className='text-left text-lg w-80 text-black font-questrial font-thin break-words transition-opacity duration-500 group-hover:opacity-50'>{title}</h3>
            {/* <h3 className='text-center text-lg text-[#7A7A7A] font-syne font-thin '>{date}</h3> */}
            <h3 className='text-center text-md text-[#7A7A7A] font-syne font-thin transition-opacity duration-500 group-hover:opacity-80'>
                {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </h3>
        </div>
    </Link>
    // <div className='absolute inset-0'>
    //     <Image
    //         src={img}
    //         alt={alt}
    //         sizes="100vw"
    //         style={{
    //             width: '100%',
    //             height: 'auto',
    //         }}
    //         width={500}
    //         height={300}
    //     />
    //     <div className='flex flex-col items-start absolute mt-2'>
    //         <h3 className='text-center text-2xl text-black font-questrial font-thin '>{title} {location && ` - ${location}`}</h3>
    //         <h3 className='text-center text-lg text-[#7A7A7A] font-syne font-thin '>{date}</h3>

    //     </div>
    // </div>
  )
}

export default PressTile
