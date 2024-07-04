'use client'
import React, { useState } from 'react'

interface HeaderSectionProps {
    text: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({text}) => {
  // State to track if the hover animation has been triggered
  const [hovered, setHovered] = useState(false);

  return (
    <div className='flex flex-col h-screen sm:h-full items-center px-8 sm:px-0 justify-center py-48 group'
         onMouseEnter={() => setHovered(true)}>
      <div className='relative'>
        <h1 className=' text-6xl sm:text-5xl mb-4 text-tertiary font-questrial tracking-wider'>
            {text}
        </h1>
        <div className={`absolute bottom-0 left-0 w-0 h-4 sm:h-5 bg-[#DFD8D0] transition-width duration-500 ${hovered ? 'w-full' : ''}`}></div>
      </div>
    </div>
  )
}

export default HeaderSection;




// 'use client'
// import React from 'react'

// interface HeaderSectionProps {
//     text: string
// }

// const HeaderSection: React.FC<HeaderSectionProps> = ({text}) => {
//   return (
//     // <div className='flex flex-col items-center justify-center py-48'>
//     //     <div>
//     //         <h1 className='text-5xl text-[#7A7A7A] font-questrial '>{text}</h1>
//     //         <div className='w-full h-5 bg-[#DFD8D0]'></div>
//     //     </div>
//     // </div>
//     <div className='flex flex-col h-screen sm:h-full items-center px-8 sm:px-0 justify-center py-48 group'>
//     <div className='relative'>
//         <h1 className=' text-6xl sm:text-5xl mb-3 text-tertiary font-questrial tracking-wider'>
//             {text}
//         </h1>
//         <div className='absolute bottom-0 left-0 w-0 h-4 sm:h-5 bg-[#DFD8D0] group-hover:w-full transition-width duration-500'></div>
//     </div>
// </div>



//   )
// }

// export default HeaderSection
