import { type } from "os";

export interface ContentfulImage {
    url: string;
    description: string;
}

interface ProjectData {
    sys: {
        id: string;
      };
}

interface TeamMember {
  fullName: string;
  title: string;
  primaryImagePortrait: ContentfulImage;
}

interface TeamMembersCollection {
  items: TeamMember[];
}

interface ArticleContent {
    json: string;
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

export interface StudioPage {
    title: string;
    headline: string;
    studioDescription: string;
    leadArchitect: TeamMember;
    leadArchitectDescription: string;
    teamMemberFeature1: TeamMember;
    teamMemberFeature2: TeamMember;
    teamMemberFeature3: TeamMember;
    teamMembersCollection: TeamMembersCollection;
    primaryImageSquare: ContentfulImage;
    primaryImageLandscape: ContentfulImage;
}


export interface OurShopPage {
    shopDescription: string;
    primaryImageSquare: ContentfulImage;
    portraitFeature1: ContentfulImage;
    portraitFeature2: ContentfulImage;
    ctaCopy: string;
}

export interface PressPost {
    title: string;
    slug: string;
    publishDate: string; // assuming publishDate is a string, change type if needed
    articleContent: ArticleContent;
    primaryImageLandscape: ContentfulImage;
    primaryImagePortrait: ContentfulImage;
}

export interface Project  {
    title: string;
    subtitle: string;
    slug: string;
    projectYear: string;
    projectType: string;
    projectLocation: string;
    projectDescription1: string;
    projectDescription2: string;
    primaryTileImage: ContentfulImage;
    primaryImageLandscape : ContentfulImage;
    primaryHoverImageLandscape : ContentfulImage;
    primaryImagePortrait : ContentfulImage;
    primaryHoverImagePortrait : ContentfulImage;
    squareFeature1: ContentfulImage;
    squareFeature2: ContentfulImage;
    portraitFeature1: ContentfulImage;
    portraitFeature2: ContentfulImage;
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
