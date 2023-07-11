import React from 'react';
import './card-category.css';
import { H3 } from '../typography/h3';
import { Body2 } from '../typography/body2';

interface CardProps {
  image: string;
  name: string;
  numberOfProperties: number;
}

export const CardCategory = ({ image, name, numberOfProperties }: CardProps) => {

  return (
    <div className='category-card-container'>
      <img src={image} alt="Card" className="img" />
      <div className='category-card-text'>
        <H3 color='XDark'>{name}</H3>
        <Body2 color='XDark'>{`${numberOfProperties} ${numberOfProperties === 1 ? "Imovel" :  "Imóveis"}`}</Body2>
      </div>
    </div>
  );
};
