import React, { ReactNode } from 'react';
import './carousel-section.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../carousel-componentization/carousel-real-estate';

interface CarouselProps {
  children: ReactNode[];
}

export const CategoryCarousel = ({ children }: CarouselProps) => {

  return (
    <Carousel
      responsive={responsive}
      customTransition="all .5s"
      additionalTransfrom={0}
      className="carousel-without-arrows"
      itemClass="carousel-item">
      {children}
    </Carousel>
  );
};
