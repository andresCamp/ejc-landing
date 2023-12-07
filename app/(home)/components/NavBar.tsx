import Link from 'next/link'
import React from 'react'

interface NavBarProps {
  white: boolean
}

const NavBar: React.FC<NavBarProps> = ({white}) => {
  return (
    <nav className={ `flex flex-row absolute w-screen justify-between items-center px-12 py-8 ${white? "text-white" : "text-black"} z-50` }>
      <div className='flex flex-row gap-12 text-sm font-questrial'>
        <Link href={"/studio"} className='hover:scale-95 transition-scale duration-500'>
          <p>THE STUDIO</p>
        </Link>
        <Link href={"/commercial"} className='hover:scale-95 transition-scale duration-500'>
          <p>COMMERCIAL</p>
        </Link>
        <Link href={"/residential"} className=' hover:scale-95 transition-scale duration-500'>
          <p>RESIDENTIAL</p>
        </Link>
      </div>
        <Link href="/" className='hover:scale-95 transition-scale duration-500'>
            <h2 className='text-3xl font-light font-syne'>Estudio Jorge Campos</h2>
        </Link>
      <div className='flex flex-row gap-12 text-sm font-questrial'>
      <Link href={"/residential"} className=' hover:scale-95 transition-scale duration-500'>
        <p>OUR SHOP</p>
      </Link>
      <Link href={"/residential"} className=' hover:scale-95 transition-scale duration-500'>
        <p>PRESS</p>
      </Link>
      <Link href={"/residential"} className=' hover:scale-95 transition-scale duration-500'>
        <p>GET IN TOUCH</p>
      </Link>
      </div>
    </nav>
  )
}

export default NavBar
