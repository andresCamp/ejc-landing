import { questrial } from '@/lib/fonts'
import React from 'react'

const PageTitle: React.FC<{title: string}> = ({title}) => {
  return (
    <div className="sticky top-0 z-40 transform rotate-90 origin-bottom-left ml-2">
        <p className={`${questrial.className} text-3xl lg:text-5xl whitespace-nowrap`}>{title}</p>
    </div>
  )
}

export default PageTitle
