'use server'

import { createClient } from "contentful"
import { ContentfulImage, Homepage, OurShopPage, PressPost, Project, StudioPage } from "./types";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})


const fetchContentfulData = async (query: string): Promise<any> => {
  const res: any = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  );
  const data = res.json();
  return data;
};


export const getHomepage = async (): Promise<Homepage> => {
  let query = `query {
      homepage(id:"6qnuy2gqPKGKM7SDV02r3H") {
        title
        heading
        philosophyQuote
        heroImage {
          url
          description
        }
        heroImagesCollection {
          items {
            url
            description
            title
          }
        }
        featuredProject1 {
          sys {
            id
          }
        }
        featuredProject2 {
          sys {
            id
          }
        }
        featuredProject3 {
          sys {
            id
          }
        }
        featuredProject4 {
          sys {
            id
          }
        }
        commercialProjectsCover {
          url
          description
        }
        residentialProjectsCover {
          url
          description
        }
        studioImageSquare {
          url
          description
        }
        studioImageSquareHover {
          url
          description
        }
        studioDescription
      }
    }`

  const res = await fetchContentfulData(query);
  const homepage: Homepage = res.data.homepage || [];
  return homepage;
}

export const getStudioPage = async (): Promise<StudioPage> => {
  let query = `query {
    studioPage(id: "2YwdDMtDSVmgzaSWSju1yw") {
      title
      headline
      studioDescription
      leadArchitect {
        fullName
        title
        primaryImagePortrait {
          url
          description
        }
      }
      leadArchitectDescription
      teamMemberFeature1 {
        fullName
        title
        primaryImagePortrait {
          url
          description
        }
      }
      teamMemberFeature2 {
        fullName
        title
        primaryImagePortrait {
          url
          description
        }
      }
      teamMemberFeature3 {
        fullName
        title
        primaryImagePortrait {
          url
          description
        }
      }
      teamMembersCollection {
        items {
          fullName
          title
          primaryImagePortrait {
            url
            description
          }
        }
      }
      primaryImageSquare{
        url
        description
      }
      primaryImageLandscape{
        url
        description
      }
      primaryImageLandscapeHover{
        url
        description
      }
    }
    }`

  const res = await fetchContentfulData(query);
  const studioPage: StudioPage = res.data.studioPage || [];
  return studioPage;
}

export const getShopPage = async (): Promise<OurShopPage> => {
  let query = `{
    ourShopPage( id: "3OpYOnn5pky6zBnt8zQYMA") {
      title
      shopDescription
      primaryImageSquare {
        url
        description
      }
      portraitFeature1 {
        url
        description
      }
      portraitFeature2 {
        url
        description
      }
      ctaCopy
    }
    }`

  const res = await fetchContentfulData(query);
  const ourShopPage: OurShopPage = res.data.ourShopPage || [];
  return ourShopPage;
}

// export const getProjectImage = async (id: string): Promise<Project> => {
//   let query = `{
//     project(id: "${id}") {
//       title
//       subtitle
//       slug
//       projectLocation
//       projectType
//       portraitCover {
//         url
//         description
//       }
//       landscapeFeature1 {
//         url
//         description
//       }
//       portraitFeature1 {
//         url
//         description
//       }
//       portraitFeature2 {
//         url
//         description
//       }
//     }
//   }`;
//   const res = await fetchContentfulData(query);
//   const project: Project = res.data.project || [];
//   return project;
// }

export const getProject = async (id: string): Promise<Project> => {
  let query = `{
    project(id: "${id}") {
      title
      slug
      subtitle
      projectLocation
      projectType
      primaryImageLandscape {
        url
        description
      }
      primaryHoverImageLandscape {
        url
        description
      }
      primaryImagePortrait {
        url 
        description
      }
      primaryHoverImagePortrait {
        url
        description
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const project: Project = res.data.project || [];
  return project;
}

export const getCarouselProjects= async (): Promise<Project[]> => {
  let query = `{
    projectCollection {
      items {
        primaryTileImage {
          url
          description
        }
        title
        projectType
        slug
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const carouselProjects: Project[] = res.data.projectCollection.items || [];
  return carouselProjects;
}



export const getCommercialProjects = async (): Promise<Project[]> => {
  let query = `{
    projectCollection(where: { projectType: "commercial" }) {
      items {
        slug
        subtitle
        title
        projectLocation
        projectType
        primaryTileImage {
          url
          description
        }
        primaryImageLandscape {
          url
          description
        }
        primaryHoverImageLandscape {
          url
          description
        }
        primaryImagePortrait {
          url
          description
        }
        primaryHoverImagePortrait {
          url
          description
        }
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const commercialProjects: Project[] = res.data.projectCollection.items || [];
  return commercialProjects;
}

export const getResidentialProjects = async (): Promise<Project[]> => {
  let query = `{
    projectCollection(where: { projectType: "residential" }) {
      items {
        slug
        subtitle
        title
        projectLocation
        projectType
        primaryTileImage {
          url
          description
        }
        primaryImageLandscape {
          url
          description
        }
        primaryHoverImageLandscape {
          url
          description
        }
        primaryImagePortrait {
          url
          description
        }
        primaryHoverImagePortrait {
          url
          description
        }
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const residentialProjects: Project[] = res.data.projectCollection.items || [];
  return residentialProjects;
}


export const getProjectBySlug = async (slug: string): Promise<Project> => {
  let query = `{
    projectCollection(where: { slug: "${slug}" }, limit: 1) {
      items {
        title
        slug
        subtitle
        projectType
        projectLocation
        projectYear
        projectDescription1
        projectDescription2 
        primaryImageLandscape {
          url
          description
        }
        primaryHoverImageLandscape {
          url
          description
        }
        squareFeature1 {
          url
          description
        }
        squareFeature2 {
          url
          description
        }
        portraitFeature1 {
          url
          description
        }
        portraitFeature2 {
          url
          description
        }
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const project: Project = res.data.projectCollection.items[0] || [];
  return project;
}


export const getPressPostBySlug = async (slug: string): Promise<PressPost> => {
  let query = `query {
    pressPostCollection(where: { slug: "${slug}" }, limit: 1) {
      items{
        title
        slug
        publishDate
        primaryImageLandscape {
          url
          description
        }
        primaryImagePortrait {
          url
          description
        }
        paragraph1
        paragraph2
        paragraph3
        paragraph4
        paragraph5
        postImagesCollection {
          items {
            url
            description
          }
        }
      }
    }
  }`;


  const res = await fetchContentfulData(query);
  const pressPost: PressPost = res.data.pressPostCollection.items[0] || [];
  return pressPost;
}

export const getPressPosts = async (): Promise<PressPost[]> => {
  let query = `{
    pressPostCollection {
      items {
        primaryImagePortrait {
          url
          description
        }
        title
        slug
        publishDate
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const pressPosts: PressPost[] = res.data.pressPostCollection.items || [];
  return pressPosts;
}

export const getAsset = async (id: string): Promise<ContentfulImage> => {
  let query = `query {
    asset(id: ${id}){
      url
      description
    }
  }`;
  const res = await fetchContentfulData(query);
  const assetData: ContentfulImage = res.data.asset || [];
  return assetData;
}

export const getPostCarousel = async (): Promise<PressPost[]> => {
  let query = `query {
    pressPostCollection(order: publishDate_DESC, limit: 3) {
      items {
        title
        slug
        publishDate
        articleContent {
          json
        }
        primaryImageLandscape {
          url
          description
        }
        primaryImagePortrait {
          url
          description
        }
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const pressPostsData: PressPost[] = res.data.pressPostCollection.items || [];
  return pressPostsData;
}



// export const getProjects = async (): Promise<Project[]> => {
//   let query = `{
//     projectCollection {
//       items {
//         title
//         subtitle
//         slug
//         primaryImageLandscape {
//           url
//         }
//         tileImage {
//           url
//         }
//         projectDescription1
//         squareFeature1 {
//           url
//         }
//         portraitFeature1 {
//           url
//         }
//         portraitFeature2 {
//           url
//         }
//         landscapeFeature1 {
//           url
//         }
//         squareFeature2 {
//           url
//         }
//         projectDescription2
//         projectLocation
//         projectStatus
//         projectYear
//         projectTeam
//         projectType
//       }
//     }
//   }`;
//   const res = await fetchContentfulData(query);
//   const projects: Project[] = res.data.projectCollection.items || [];
//   return projects;
// };