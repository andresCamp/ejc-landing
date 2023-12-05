import { type } from "os";

interface ContentfulImage {
    url: string;
    description: string;
}

interface ProjectData {
    sys: {
        id: string;
      };
}

export interface Homepage {
    title: string;
    heading: string;
    philosophyQuote: string;
    heroImage: ContentfulImage;
    featuredProject1: ProjectData;
    featuredProject2: ProjectData;
    featuredProject3: ProjectData;
    featuredProject4: ProjectData;
    commercialProjectsCover: ContentfulImage;
    residentialProjectsCover: ContentfulImage;
    studioImageSquare: ContentfulImage;
    studioDescription: string;
};

export interface Project  {
    title: string;
    subtitle: string;
    slug: string;
    projectYear: string;
    projectType: string;
    projectDescription1: string;
    projectDescription2: string;
    projectLocation: string;
    primaryTileImage: ContentfulImage;
    primaryImageLandscape : ContentfulImage;
    primaryHoverImageLandscape : ContentfulImage;
    primaryImagePortrait : ContentfulImage;
    primaryHoverImagePortrait : ContentfulImage;
};

// export interface ProjectImage {
//     title: string;
//     subtitle: string;
//     projectLocation: string;
//     slug: string;
//     primaryImageLandscape : ContentfulImage;
//     primaryHoverImageLandscape : ContentfulImage;
//     primaryImagePortrait : ContentfulImage;
//     primaryHoverImagePortrait : ContentfulImage;
//     projectType: string;
// };

// export interface ProjectTile {
//     slug: string;
//     title: string;
//     subtitle: string;
//     projectLocation: string;
//     projectType: string;
//     : ContentfulImage;
//     portraitCover: ContentfulImage;
//     landscapeFeature1: ContentfulImage;
//     portraitFeature1: ContentfulImage;

//     primaryImageLandscape : ContentfulImage;
//     primaryHoverImageLandscape : ContentfulImage;
//     primaryImagePortrait : ContentfulImage;
//     primaryHoverImagePortrait : ContentfulImage;
// }
