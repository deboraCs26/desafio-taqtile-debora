import React from 'react';
import './carousel-section.css';
import { CategoryCarousel } from './carousel-section';
import { H2 } from '../typography/h2';

interface CarouselSectionProps {
  title: string;
}

const categories = [
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 500
  },
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 500
  },
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 500
  },
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 500
  },
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 500
  },
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 500
  },
  {
    name: 'Com piscina',
    imageUrl: 'https://storage.cloud.google.com/instituto-taqtile/desafio/piscina.png',
    numberOfProperties: 600
  }
];

export const CarouselSection = ({ title }: CarouselSectionProps) => {
 

  return (
    <div className='carousel-container'>
      <H2 color='XDark'>{title}</H2>
      <CategoryCarousel>
        {categories.map((category, id) => (
          <div key={id}>
            <img src={category.imageUrl} alt='imagem categoria de imóveis' />
          </div>
        ))}
      </CategoryCarousel>
    </div>
  );
};
