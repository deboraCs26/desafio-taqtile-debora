import React, { ReactNode } from 'react';
import './photo-carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface PhotoCarouselProps {
  photos: string[];
  children?: ReactNode;
}

export const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos, children }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        className='img-carousel'
      >
        {photos.map((photo, index) => (
          <div key={index} className='carousel-item'>
            <img src={photo} alt={`Foto ${index + 1}`} className='photos-container' />
          </div>
        ))}
      </Carousel>
      {children}
    </div>
  );
};
