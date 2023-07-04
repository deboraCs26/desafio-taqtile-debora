import React from 'react';
import './carousel-section.css';
import { CategoryCarousel } from './carousel-section';
import { H2 } from '../typography/h2';

interface CarouselSectionProps {
  title: string;
}

export const CarouselSection = ({ title }: CarouselSectionProps) => {
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

  return (
    <div>
      <H2 color='Xdark'>{title}</H2>
      <CategoryCarousel>
        {categories.map((category, index) => (
          <div key={index}>
            <img src={category.imageUrl} alt='' />
          </div>
        ))}
      </CategoryCarousel>
    </div>
  );
};
