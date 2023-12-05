import { createClient } from "contentful"
import { Homepage, Project } from "./types";

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





// type Homepage = {
//   title: string;
//   heading: string;
//   philosophyQuote: string;
//   heroImage: {
//     url: string;
//     description: string;
//   };
//   featuredProject1: {
//     sys: {
//       id: string;
//     };
//   };
//   featuredProject2: {
//     sys: {
//       id: string;
//     };
//   };
//   featuredProject3: {
//     sys: {
//       id: string;
//     };
//   };
//   featuredProject4: {
//     sys: {
//       id: string;
//     };
//   };
//   commercialProjectsCover: {
//     url: string;
//     description: string;
//   };
//   residentialProjectsCover: {
//     url: string;
//     description: string;
//   };
//   studioImageSquare: {
//     url: string;
//     description: string;
//   };
//   studioDescription: string;
// };


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
        studioDescription
      }
    }`

  const res = await fetchContentfulData(query);
  const homepage: Homepage = res.data.homepage || [];
  return homepage;
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