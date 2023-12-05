import React from 'react'

interface HeaderSectionProps {
    text: string
}

const HeaderSection: React.FC<HeaderSectionProps> = ({text}) => {
  return (
    // <div className='flex flex-col items-center justify-center py-48'>
    //     <div>
    //         <h1 className='text-5xl text-[#7A7A7A] font-questrial '>{text}</h1>
    //         <div className='w-full h-5 bg-[#DFD8D0]'></div>
    //     </div>
    // </div>
    <div className='flex flex-col items-center justify-center py-48 group'>
    <div className='relative'>
        <h1 className='text-5xl mb-3 text-tertiary font-questrial'>
            {text}
        </h1>
        <div className='absolute bottom-0 left-0 w-0 h-5 bg-[#DFD8D0] group-hover:w-full transition-width duration-500'></div>
    </div>
</div>



  )
}

export default HeaderSection
