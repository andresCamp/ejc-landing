import { getPressPosts } from '@/contentful'
import { get } from 'http'
import React from 'react'
import PressTile from './components/PressTile'
import { PressPost } from '@/types'
import NavBar from '../(home)/components/NavBar'
import PageTitle from '@/components/PageTitle'

const page = async () => {

  const pressPosts: Promise<PressPost[]> = getPressPosts()

  const data = await pressPosts

  return (
    <div className='min-h-screen text-black w-full overflow-x-clip'>
      <NavBar white={false}/>

      <PageTitle title='Press'/>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-16 lg:px-48 lg:py-36'>
          {data.map((post, index) => (
              <PressTile
                  key={index}
                  slug={post.slug}
                  title={post.title}
                  date={post.publishDate}
                  img={post.primaryImagePortrait.url}
                  alt={post.primaryImagePortrait.description}
              />
          ))}
      </div>

    </div>
  )
}

export default page