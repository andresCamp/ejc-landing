import React from 'react';
import Image from 'next/image';
import { ContentfulImage } from '@/types';

interface LogoGridProps {
  logos: ContentfulImage[];
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">

      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center ">
          <Image
            src={logo.url}
            alt={logo.description || `Client logo ${index + 1}`}
            width={150}
            height={100}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;