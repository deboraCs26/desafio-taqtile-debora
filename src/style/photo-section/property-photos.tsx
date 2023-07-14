import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import frenteDaCasa from './image/frente-da-casa.png'
import jarrosComPlantas from './image/jarros-com-plantas-na-sala.png'
import sala from './image/sala.png'
import { PhotoCarousel } from '../photo-carousel/photo-carousel';


export const PhotoProperty = () => {
  const photos = [
    frenteDaCasa,
    sala,
    jarrosComPlantas,
  ];

  return (
    <PhotoCarousel photos={photos} />
  );
};
