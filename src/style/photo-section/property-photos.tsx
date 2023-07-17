import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import frontHome from './image/frente-da-casa.png'
import  plantPots from './image/jarros-com-plantas-na-sala.png'
import  livingRoom from './image/sala.png'
import { PhotoCarousel } from '../photo-carousel/photo-carousel';


export const PhotoProperty = () => {
  const photos = [
    frontHome,
    livingRoom,
    plantPots,
  ];

  return (
    <PhotoCarousel photos={photos} />
  );
};
