import React from 'react';
import './card-category.css';
import { H3 } from '../style/typography/h3';
import { Body2 } from '../style/typography/body2';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const CardCategory = ({ image, title, description }: CardProps) => {

  return (
    <div className="card-container">
      <div className='card'>
        <img src={image} alt="Card" className="img" />
        <div className='card-text'>
          <H3>{title}</H3>
          <Body2>{description}</Body2>
        </div>

      </div>

    </div>
  );
};
