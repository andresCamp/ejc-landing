import Link from 'next/link'
import React from 'react'
import ButtonWhite from './ButtonWhite'
import Image from 'next/image'
import Arrow from '../public/arrow.svg'
import instagram from '@/public/Instagram.svg'
import linkedin from '@/public/Linkedin.svg'
import NewsletterForm from './NewsletterForm'

const Footer = () => {
  return (
    <div className='h-full w-full flex flex-col justify-end'>
      <div className='flex flex-col  items-start justify-center z-50 h-full py-8 px-8 sm:px-32 gap-4 bg-black font-syne text-6xl lg:text-8xl text-white'>
        <h2>10 years</h2>
        <h2>building spaces</h2>
        <h2>that tell a story</h2>
      </div>

      <footer className='flex flex-col z-50 gap-8 bg-secondary text-[#E7E6E2] py-8 px-6 md:py-12 md:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-base md:text-lg'>ESTUDIO JORGE CAMPOS</h2>

            <div className='flex flex-row flex-wrap gap-6 text-sm'>
              <Link href='/commercial'>
                <h3 className='hover:text-primary'>COMMERCIAL</h3>
              </Link>
              <Link href='/residential'>
                <h3 className='hover:text-primary'>RESIDENTIAL</h3>
              </Link>
              <Link href='/ourshop'>
                <h3 className='hover:text-primary'>OUR SHOP</h3>
              </Link>
            </div>

            <div className='flex flex-row flex-wrap gap-6 text-sm'>
              <Link href='/studio'>
                <h3 className='hover:text-primary'>THE STUDIO</h3>
              </Link>
              <Link href='/contact'>
                <h3 className='hover:text-primary'>GET IN TOUCH</h3>
              </Link>
            </div>
          </div>
          <NewsletterForm />
        </div>

        {/* Locations Section */}
        <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-bold'>CDMX</h3>
            <p className='text-sm'>
              <a href="https://maps.app.goo.gl/GTnXzsRupkvrf6Gt5" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                Cda. de la Paz 18, Escandón I Secc,<br />
                Miguel Hidalgo, 11800<br />
                Ciudad de México, CDMX, Mexico
              </a>
            </p>
            <p className='text-sm'>
              <a href="tel:+525586633301" className='hover:text-primary'>
                Tel: +52 55 8663 3301
              </a>
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-bold'>BARCELONA</h3>
            <p className='text-sm'>
              <a href="https://maps.google.com/?q=Pla de Palau 2, 0210, 08003 Barcelona, España" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                Pla de Palau 2, 0210, 08003<br />
                Barcelona, España
              </a>
            </p>
            <p className='text-sm'>
              <a href="tel:+34636525655" className='hover:text-primary'>
                Tel: +34 636 525 655
              </a>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='h-px w-full bg-[#979693]'></div>
          <div className='flex flex-row gap-4'>
            {/* Instagram */}
            <Link href='https://www.instagram.com/estudiojorgecampos/' className='font-syne hover:opacity-75'>
              Instagram
            </Link>

            {/* Linkedin */}
            <Link href='https://mx.linkedin.com/company/estudiojorgecampos' className='font-syne hover:opacity-75'>
              Linkedin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
