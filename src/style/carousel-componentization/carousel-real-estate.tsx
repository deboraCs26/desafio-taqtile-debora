import React, { ReactNode } from 'react';
import './carousel-real-estate.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
  children: ReactNode[];
}

export const responsive = {
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

export const CarouselRealEstate = ({ children }: CarouselProps) => {

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
