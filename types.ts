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
    portraitCover: string;
    tileCover: string;
    projectDescription1: string;
    squareFeature1: string;
    portraitFeature1: string;
    portraitFeature2: string;
    landscapeFeature1: string;
    squareFeature2: string;
    projectDescription2: string;
    projectLocation: string;
    projectStatus: string;
    projectYear: string;
    projectTeam: string;
    projectType: string;
};

export interface ProjectImage {
    title: string;
    subtitle: string;
    projectLocation: string;
    slug: string;
    portraitCover: ContentfulImage;
    landscapeFeature1: ContentfulImage;
    portraitFeature1: ContentfulImage;
    portraitFeature2: ContentfulImage;
    projectType: string;
};

export interface ProjectTile  {
    title: string;
    tileCover: ContentfulImage
}

export interface ProjectTileLink {
    slug: string;
    title: string;
    subtitle: string;
    projectLocation: string;
    projectType: string;
    tileCover: ContentfulImage;
    portraitCover: ContentfulImage;
    landscapeFeature1: ContentfulImage;
    portraitFeature1: ContentfulImage;
}
