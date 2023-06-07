import React from 'react';
import './card-category.css';
import { H3 } from '../typography/h3';
import { Body2 } from '../typography/body2';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const CardCategory = ({ image, title, description }: CardProps) => {

  return (
    <div className='category-card-container'>
      <img src={image} alt="Card" className="img" />
      <div className='category-card-text'>
        <H3>{title}</H3>
        <Body2>{description}</Body2>
      </div>
    </div>

  );
};
