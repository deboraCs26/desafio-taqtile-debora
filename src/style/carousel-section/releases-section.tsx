import React from 'react';
import './style.css';
import { CarouselSection} from './index';
import { H2 } from '../typography/h2';

interface CarouselSectionProps {
  title: string;
}

const categories = [
  {
    name: 'Seção de lançamentos',
    imageUrl: 'https://user-images.githubusercontent.com/119463609/251038153-2e961418-2eab-484d-a69e-676d7db4b325.png',
    numberOfProperties: 500
  },
  {
    name: 'Seção de lançamentos',
    imageUrl: 'https://user-images.githubusercontent.com/119463609/251038153-2e961418-2eab-484d-a69e-676d7db4b325.png',
    numberOfProperties: 500
  },
  {
    name: 'Seção de lançamentos',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL321o66Mn0NEtfHO3kC-enQC2SogHd9oFjhu3wuFFDGjJPCLhK7Yu6gl93NwyeRofxY&usqp=CAU',
    numberOfProperties: 600
  },
];

export const ReleasesSection = ({ title }: CarouselSectionProps) => {
 
  return (
    <div>
      <H2 color='Xdark'>{title}</H2>
      <CarouselSection>
        {categories.map((category, id) => (
          <div key={id}>
            <img src={category.imageUrl} alt='' />
          </div>
        ))}
      </CarouselSection>
    </div>
  );
};
