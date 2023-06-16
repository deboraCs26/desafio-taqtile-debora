import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface CarouselRealEstateProps {
  children: React.ReactNode;
}

export function CarouselRealEstate({ children }: CarouselRealEstateProps) {
  return (
    <div className="carousel">
      <Carousel responsive={responsive}>{children}</Carousel>
    </div>
  );
}
