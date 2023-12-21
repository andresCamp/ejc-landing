import Link from 'next/link';
import React from 'react';

interface NavBarProps {
  white: boolean;
}

interface LinkItem {
  href: string;
  label: string;
}

const NavBar: React.FC<NavBarProps> = ({ white }) => {
  const links: LinkItem[] = [
    { href: '/studio', label: 'THE STUDIO' },
    { href: '/commercial', label: 'COMMERCIAL' },
    { href: '/residential', label: 'RESIDENTIAL' },
    { href: '/ourshop', label: 'OUR SHOP' },
    { href: '/press', label: 'PRESS' },
    { href: '/contact', label: 'GET IN TOUCH' },
  ];

  return (
    <nav className={`flex md:flex-row relative flex-col w-screen px-4 md:px-24 py-4 md:py-8 justify-between md:items-center ${white ? 'text-white' : 'text-black'} z-50`}>
      <div className='md:hidden flex justify-center mb-4'>
        <Link href="/" className='hover:scale-95 transition-scale duration-500'>
          <h2 className='text-3xl font-light font-syne tracking-wide'>Estudio Jorge Campos</h2>
        </Link>
      </div>
      <div className='hidden md:flex md:flex-row gap-12 text-sm font-questrial'>
        {links.slice(0, 3).map((link) => (
          <Link href={link.href} key={link.href} className='hover:scale-95 transition-scale duration-500'>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className='md:flex hidden'>
        <Link href="/" className='hover:scale-95 transition-scale duration-500'>
          <h2 className='text-4xl font-light font-syne tracking-wide'>Estudio Jorge Campos</h2>
        </Link>
      </div>
      <div className='hidden md:flex md:flex-row gap-12 text-sm font-questrial'>
        {links.slice(3).map((link) => (
          <Link href={link.href} key={link.href} className='hover:scale-95 transition-scale duration-500'>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className='flex md:hidden flex-wrap justify-center gap-4 text-base font-questrial'>
        {links.map((link) => (
          <Link href={link.href} key={link.href} className='hover:scale-95 transition-scale duration-500'>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;





// import Link from 'next/link'
// import React from 'react'

// interface NavBarProps {
//   white: boolean
// }

// const NavBar: React.FC<NavBarProps> = ({white}) => {
//   return (
//     <nav className={ `flex flex-row absolute w-screen justify-between items-center px-12 py-8 ${white? "text-white" : "text-black"} z-50` }>
//       <div className='flex flex-row gap-12 text-sm font-questrial'>
//         <Link href={"/studio"} className='hover:scale-95 transition-scale duration-500'>
//           <p>THE STUDIO</p>
//         </Link>
//         <Link href={"/commercial"} className='hover:scale-95 transition-scale duration-500'>
//           <p>COMMERCIAL</p>
//         </Link>
//         <Link href={"/residential"} className=' hover:scale-95 transition-scale duration-500'>
//           <p>RESIDENTIAL</p>
//         </Link>
//       </div>
//         <Link href="/" className='hover:scale-95 transition-scale duration-500'>
//             <h2 className='text-3xl font-light font-syne tracking-wide'>Estudio Jorge Campos</h2>
//         </Link>
//       <div className='flex flex-row gap-12 text-sm font-questrial'>
//       <Link href={"/ourshop"} className=' hover:scale-95 transition-scale duration-500'>
//         <p>OUR SHOP</p>
//       </Link>
//       <Link href={"/press"} className=' hover:scale-95 transition-scale duration-500'>
//         <p>PRESS</p>
//       </Link>
//       <Link href={"/contact"} className=' hover:scale-95 transition-scale duration-500'>
//         <p>GET IN TOUCH</p>
//       </Link>
//       </div>
//     </nav>
//   )
// }

// export default NavBar