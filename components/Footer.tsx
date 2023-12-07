import Link from 'next/link'
import React from 'react'
import ButtonWhite from './ButtonWhite'
import Image from 'next/image'
import Arrow from '../public/arrow.svg'
import  HubspotForm  from './HubspotForm'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-16 bg-secondary text-[#E7E6E2] font-thin py-12 px-24'>
      

      <div className='flex flex-row justify-between items-start'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-lg'>ESTUDIO JORGE CAMPOS</h2>
          <div className='flex flex-row gap-12 text-xs'>
            <Link href='/commercial'>
              <h3>COMMERCIAL</h3>
            </Link>

            <Link href='/residential'>
              <h3>RESIDENTIAL</h3>
            </Link>

            <Link href='/ourshop'>
              <h3>OUR SHOP</h3>
            </Link>

            <Link href='/studio'>
              <h3>THE STUDIO</h3>
            </Link>

            <Link href='/contact'>
              <h3>GET IN TOUCH</h3>
            </Link>
          </div>
        </div>

        {/* <div className='flex flex-col items-start justify-start'> */}
          {/* <h3 className='text-xs font-syne text-[#979693]'>Sign up for our seasonal newsletter</h3> */}
          <div>

            <HubspotForm />

            {/* <ButtonWhite text='SIGN UP' /> */}

          </div>
        {/* </div> */}
      </div>

      <div className='flex flex-col gap-4'>
        <div className='h-px w-full bg-[#979693]'></div>

        <div className='flex flex-row gap-4'>
          <Link href='/'>
            <Image src={Arrow} alt='' />
          </Link>
          
          <Link href='/'>
            <Image src={Arrow} alt='' />
          </Link>
          
          <Link href='/'>
            <Image src={Arrow} alt='' />
          </Link>

          <Link href='/'>
            <Image src={Arrow} alt='' />
          </Link>

        </div>
      </div>






    </footer>
  )
}

export default Footer
