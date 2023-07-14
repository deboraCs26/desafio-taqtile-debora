import React, { ReactNode } from 'react';
import './photo-carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../carousel-componentization/carousel-real-estate';

interface PhotoCarouselProps {
  photos: string[];
  children?: ReactNode;
}

export const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos, children }) => {
  return (
    <Carousel
      responsive={responsive}
      className='img-carousel'
    >
      {photos.map((photo, item) => (
        <div key={item} className='carousel-item'>
          <img src={photo} alt={`Foto ${item + 1}`} className='photos-container' />
        </div>
      ))}
      {children}
    </Carousel>
  );
};
