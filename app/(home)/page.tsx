'use client'
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { get } from 'http'
import { getHomepage, getProjectImage } from '@/contentful'
import { useEffect, useState } from 'react'
import { Homepage, Project, ProjectImage } from '@/types'
import HeaderSection from './components/HeaderSection'
import QuoteSection from './components/QuoteSection'
import ProjectsSelection from './components/ProjectsSelection'
import ImageTile from '@/components/ImageTile'
import Button from '@/components/Button'
import AboutStudioSection from './components/AboutStudioSection'
import ProjectCarousel from './components/ProjectCarousel'
import LandscapeFeatureSection from '@/components/LandscapeFeatureSection'

// interface HomepageProps {
//   homepageData: Homepage
// }


const Page = () => {
  const [homepageData, setHomepageData] = useState<Homepage | null>(null);
  const [loading, setLoading] = useState(true);
  const [featuredProjects, setFeaturedProjects] = useState<ProjectImage[] | null>(null);


  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        const data = await getHomepage();

        setHomepageData(data);

        const featuredProject1 = await getProjectImage(data.featuredProject1.sys.id)
        const featuredProject2 = await getProjectImage(data.featuredProject2.sys.id)
        const featuredProject3 = await getProjectImage(data.featuredProject3.sys.id)
        const featuredProject4 = await getProjectImage(data.featuredProject4.sys.id)

        setFeaturedProjects([
          featuredProject1,
          featuredProject2,
          featuredProject3,
          featuredProject4,
      ])
      
      
      setLoading(false);
      
      
      
    } catch (error) {
      console.error('Error fetching homepage data:', error);
      setLoading(false);
    }
  };
  
  fetchHomepageData();
}, []);

// console.log(homepageData)

if (loading) {
  return <div>Loading...</div>;
}

if (!homepageData) {
  return <div>Error loading data</div>;
}

// const url = homepageData?.heroImage.url


return (
  <div className='h-screen'>
      <HeroSection url={homepageData.heroImage.url} desc={homepageData.heroImage.description}/>


      <HeaderSection text={homepageData.heading}/>

      <LandscapeFeatureSection
        img={featuredProjects![0].portraitCover.url}
        hoverImg={featuredProjects![0].landscapeFeature1.url}
        slug={featuredProjects![0].slug}
        description={featuredProjects![0].portraitCover.description}
        hoverDescription={featuredProjects![0].portraitFeature1.description}
        title={featuredProjects![0].title}
        subtitle={featuredProjects![0].subtitle}
        location={featuredProjects![0].projectLocation}
        type={featuredProjects![0].projectType}
      />
    

      {/* <div className=''>
        <ImageTile 
          img={featuredProjects![0].portraitCover.url}
          hoverImg={featuredProjects![0].landscapeFeature1.url}
          slug={featuredProjects![0].slug}
          description={featuredProjects![0].portraitCover.description}
          hoverDescription={featuredProjects![0].portraitFeature1.description}
          title={featuredProjects![0].title}
          subtitle={featuredProjects![0].subtitle}
          location={featuredProjects![0].projectLocation}
        />
      </div> */}

      <ProjectsSelection
        img1={homepageData.commercialProjectsCover.url}
        img1Description={homepageData.commercialProjectsCover.description}
        img2={homepageData.residentialProjectsCover.url}
        img2Description={homepageData.residentialProjectsCover.description}
        />

      <LandscapeFeatureSection
        img={featuredProjects![1].portraitCover.url}
        hoverImg={featuredProjects![1].landscapeFeature1.url}
        slug={featuredProjects![1].slug}
        description={featuredProjects![1].portraitCover.description}
        hoverDescription={featuredProjects![1].portraitFeature1.description}
        title={featuredProjects![1].title}
        subtitle={featuredProjects![1].subtitle}
        location={featuredProjects![1].projectLocation}
        type={featuredProjects![1].projectType}
      />

    



      {/* <Button/> */}




      <QuoteSection text={homepageData.philosophyQuote}/>


      <ProjectCarousel />


      <AboutStudioSection
        img={homepageData.studioImageSquare.url}
        alt={homepageData.studioImageSquare.description}
        description={homepageData.studioDescription}
      />


      <div className='flex flex-col justify-between items-start py-56 px-32 gap-4 bg-black font-syne text-8xl text-white'>
        <h2>10 years</h2>
        <h2>building spaces</h2>
        <h2>that tell a story</h2>
      </div>


      {/* Use homepageData here */}
      {/* <div className='text-6xl '>
          <h2>{homepageData.title}</h2>
          <h2>TEST test gourd</h2>
          
          <h2>{homepageData.philosophyQuote}</h2>
          <h2>{(homepageData.heroImage.url)}</h2>

    
          
          <Image
            src={homepageData.heroImage.url}
            alt={homepageData.heroImage.description}
            width={100}
            height={100}
          />


      </div> */}




    </div>
  );
}


export default Page




// const homepageData = getHomepage()

// console.log(homepageData)

// const fetchHomepageData = async () => {
//   try {
//     const homepageData = await getHomepage();
//     console.log(homepageData);
//   } catch (error) {
//     console.error('Error fetching homepage data:', error);
//   }
// };

// fetchHomepageData();

// export default function Home() {
//   return (
//     <div>
//       <HeroSection />

//       <div className='h-screen flex justify-center items-center text-6xl'>
//           <h2>Architecture Connected to Culture.</h2>
//       </div>

//     </div>
//   )
// }










// const query = `
//   query {
//     homepage(id:"6qnuy2gqPKGKM7SDV02r3H") {
//       title
//       heading
//       philosophyQuote}
//     }`

// async function getProjects() {
//   await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/?access_token=I3CN5hm6eeWzXm0m4Mv0Zd_F4pT1sMs8pKVYwfZ1DP0`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({query})
//     }
//     )
//   .then((res) => res.json())
//   .then((data) => console.log(data))
// }

// getProjects()

// console.log(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_ACCESS_TOKEN)


    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>