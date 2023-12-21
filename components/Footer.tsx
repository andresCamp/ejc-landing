import Link from 'next/link'
import React from 'react'
import ButtonWhite from './ButtonWhite'
import Image from 'next/image'
import Arrow from '../public/arrow.svg'
import NewsletterForm from './NewsletterForm'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-8 bg-secondary text-[#E7E6E2] py-8 px-6 md:py-12 md:px-24'>
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
      <div className='flex flex-col gap-4'>
        <div className='h-px w-full bg-[#979693]'></div>
        <div className='flex flex-row gap-4'>
          {/* Repeat Arrow Link as needed */}
          <Link href='/'>
            <h3>
              <Image src={Arrow} alt='Navigation Arrow' width={40} height={40} />
            </h3>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer


// import Link from 'next/link'
// import React from 'react'
// import ButtonWhite from './ButtonWhite'
// import Image from 'next/image'
// import Arrow from '../public/arrow.svg'
// import  HubspotForm  from './HubspotForm'
// import NewsletterForm from './NewsletterForm'

// const Footer = () => {
//   return (
//     <footer className='flex flex-col gap-16 bg-secondary text-[#E7E6E2] font-thin py-12 px-24'>
      

//       <div className='flex flex-row justify-between items-start'>
//         <div className='flex flex-col gap-6'>
//           <h2 className='text-lg'>ESTUDIO JORGE CAMPOS</h2>
//           <div className='flex flex-row gap-12 text-xs'>
//             <Link href='/commercial'>
//               <h3>COMMERCIAL</h3>
//             </Link>

//             <Link href='/residential'>
//               <h3>RESIDENTIAL</h3>
//             </Link>

//             <Link href='/ourshop'>
//               <h3>OUR SHOP</h3>
//             </Link>

//             <Link href='/studio'>
//               <h3>THE STUDIO</h3>
//             </Link>

//             <Link href='/contact'>
//               <h3>GET IN TOUCH</h3>
//             </Link>
//           </div>
//         </div>

//            <div>


//             <NewsletterForm />



//           </div>

//       </div>

//       <div className='flex flex-col gap-4'>
//         <div className='h-px w-full bg-[#979693]'></div>

//         <div className='flex flex-row gap-4'>
//           <Link href='/'>
//             <Image src={Arrow} alt='' />
//           </Link>
          
//           <Link href='/'>
//             <Image src={Arrow} alt='' />
//           </Link>
          
//           <Link href='/'>
//             <Image src={Arrow} alt='' />
//           </Link>

//           <Link href='/'>
//             <Image src={Arrow} alt='' />
//           </Link>

//         </div>
//       </div>






//     </footer>
//   )
// }

// export default Footer
