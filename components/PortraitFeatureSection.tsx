import ImageTile from '@/components/ImageTile'
import React from 'react'

interface PortraitFeatureSectionProps {
  img1: string;
  hoverImg1: string;
  slug1: string;
  description1: string;
  hoverDescription1: string;
  title1: string;
  subtitle1: string;
  location1: string;
  type1: string;

  img2?: string;
  hoverImg2?: string;
  slug2?: string;
  description2?: string;
  hoverDescription2?: string;
  title2?: string;
  subtitle2?: string;
  location2?: string;
  type2?: string;
}

const PortraitFeatureSection: React.FC<PortraitFeatureSectionProps> = ({
  img1, hoverImg1, slug1, description1, hoverDescription1, title1, subtitle1, location1, type1,
  img2, hoverImg2, slug2, description2, hoverDescription2, title2, subtitle2, location2, type2
}) => {
  return (
      <div className='flex items-start justify-between py-12 lg:py-36 px-16 lg:px-48'>
          <div className='w-full lg:w-2/5'>
              <ImageTile 
                  img={img1}
                  hoverImg={hoverImg1}
                  slug={slug1}
                  description={description1}
                  hoverDescription={hoverDescription1}
                  title={title1}
                  subtitle={subtitle1}
                  location={location1}
                  type={type1}
              />
          </div>

          { img2  &&( 
          <div className='lg:w-2/5'>
              <ImageTile 
                  img={img2}
                  hoverImg={hoverImg2 || img2}
                  slug={slug2 || ''}
                  description={description2 || ''}
                  hoverDescription={hoverDescription2 || ''}
                  title={title2 || ''}
                  subtitle={subtitle2 || ''}
                  location={location2 || ''}
                  type={type2 || ''}
              />
          </div>)
          }
      </div>
  );
}


export default PortraitFeatureSection


{/* <div className='w-2/5'>
            { img2 && hoverImg2 && slug2 && description2 && hoverDescription2 && title2 && subtitle2 && location2 && type2 &&
              <ImageTile 
                  img={img2}
                  hoverImg={hoverImg2}
                  slug={slug2}
                  description={description2}
                  hoverDescription={hoverDescription2}
                  title={title2}
                  subtitle={subtitle2}
                  location={location2}
                  type={type2}
              />}
          </div>

 
 */}