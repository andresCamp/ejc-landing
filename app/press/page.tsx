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

    console.log(data)

    // const tiles = () => {
    //     <PressTile
    //         key={data[0].title}  
    //         title={data[0].title}
    //         date={data[0].publishDate}
    //         img={data[0].primaryImageLandscape.url}
    //         alt={data[0].primaryImageLandscape.description}
    //     />
    // }

    // const tiles =        <PressTile
    //         key={data[0].title}  
    //         title={data[0].title}
    //         date={data[0].publishDate}
    //         img={data[0].primaryImageLandscape.url}
    //         alt={data[0].primaryImageLandscape.description}
    //     />


  return (
    <div className='h-screen text-black'>
      <NavBar white={false}/>

      <PageTitle title='Press'/>

      <div className='grid grid-cols-3 gap-4 px-48 py-36'>
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


    {/* {tiles()} */}



      {/* {data.map((post) => (
        <PressTile
            key={post.title}  
            title={post.title}
            date={post.publishDate}}
            img={post.primaryImageLandscape.url}
            alt={post.primaryImageLandscape.description}
        />
       ))} */}

       {/* {
        data.map((post)=> 
            <PressTile
            // key={post.title}  
            title={post.title}
            date={post.publishDate}}
            img={post.primaryImageLandscape.url}
            alt={post.primaryImageLandscape.description}
        />
        )

    } */}