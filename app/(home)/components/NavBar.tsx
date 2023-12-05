import Link from 'next/link'
import React from 'react'

interface NavBarProps {
  white: boolean
}

const NavBar: React.FC<NavBarProps> = ({white}) => {
  return (
    <nav className={ `flex flex-row absolute w-screen justify-between items-center px-12 py-8 ${white? "text-white" : "text-black"} z-50` }>
      <div className='flex flex-row gap-12 text-sm font-questrial'>
        <p>THE STUDIO</p>
        <p>COMMERCIAL</p>
        <p>RESIDENTIAL</p>
      </div>
        <Link href="/">
            <h2 className='text-3xl font-light font-syne'>Estudio Jorge Campos</h2>
        </Link>
      <div className='flex flex-row gap-12 text-sm font-questrial'>
        <p>OUR SHOP</p>
        <p>PRESS</p>
        <p>GET IN TOUCH</p>
      </div>
    </nav>
  )
}

export default NavBar
