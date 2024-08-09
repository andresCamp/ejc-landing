import { questrial } from '@/lib/fonts';
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
    <nav className={`flex xl:flex-row relative flex-col w-screen px-4 xl:px-24 py-4 xl:py-8 justify-between xl:items-center ${white ? 'text-white' : 'text-black'} z-50`}>
      <div className='xl:hidden flex justify-center mb-4'>
        <Link href="/" className='hover:opacity-50 transition-all duration-500'>
          <h2 className='text-3xl font-light font-syne tracking-wide'>Estudio Jorge Campos</h2>
        </Link>
      </div>
      <div className={`${questrial.className} hidden xl:flex xl:flex-row gap-12 text-sm`}>
        {links.slice(0, 3).map((link) => (
          <Link href={link.href} key={link.href} className='hover:opacity-50 transition-all duration-500'>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className='xl:flex hidden'>
        <Link href="/" className='hover:opacity-50 transition-all duration-500'>
          <h2 className='text-4xl font-light font-syne tracking-wide'>Estudio Jorge Campos</h2>
        </Link>
      </div>
      <div className={`${questrial.className} hidden xl:flex xl:flex-row gap-12 text-sm`}>
        {links.slice(3).map((link) => (
          <Link href={link.href} key={link.href} className='hover:opacity-50 transition-all duration-500'>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className={`${questrial.className} flex xl:hidden flex-wrap justify-center gap-4 text-base`}>
        {links.map((link) => (
          <Link href={link.href} key={link.href} className='hover:opacity-50 transition-all duration-500'>
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;