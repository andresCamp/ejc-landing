import React from 'react'

interface QuoteSectionProps {
    text: string
}

const QuoteSection: React.FC<QuoteSectionProps> = ({text}) => {
  return (
    <div className='flex flex-col items-center justify-center py-48 px-8 sm:px-48'>
            <h1 className='text-center text-3xl text-[#7A7A7A] font-questrial font-thin tracking-wider leading-relaxed'>{text}</h1>
            {/* <div className='w-full h-5 bg-[#DFD8D0]'></div> */}
    </div>
  )
}

export default QuoteSection
