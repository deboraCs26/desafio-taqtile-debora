import React from 'react';
import './card-imoveis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Body2 } from '../typography/body2';
import { Caption } from '../typography/caption';
import { Price } from '../typography/medium-price';

interface CardProps {
  icon: IconDefinition;
  image: string;
  title: string;
  text: string;
  description: string;
  icon1: IconDefinition;
  caption1: string;
  icon2: IconDefinition;
  caption2: string;
  icon3: IconDefinition;
  caption3: string;
}

export const RealEstateCard = ({ image, title, description, icon, text, icon1, caption1, icon2, caption2, icon3, caption3 }: CardProps) => {

  return (
    <div className='card'>
      <div>
        <img src={image} alt="Card" className="img" />
      </div>

      <div className='text-price'>
        <Price weight='bold' size='XLarge'>{description}</Price>
        {!!icon && <FontAwesomeIcon icon={icon} size='xl' />}
      </div>

      <div className='card-text'>
        <Body2 weight='bold'>{title}</Body2>
        <Caption>{text}</Caption>
      </div>

      <div className='card-components'>
        <FontAwesomeIcon icon={icon1} />
        <Caption>{caption1}</Caption>
        <FontAwesomeIcon icon={icon2} />
        <Caption>{caption2}</Caption>
        <FontAwesomeIcon icon={icon3} />
        <Caption>{caption3}</Caption>
      </div>

    </div>

  );
};
