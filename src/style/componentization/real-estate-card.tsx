import React from 'react';
import './real-estate-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Body2 } from '../typography/body2';
import { Caption } from '../typography/caption';
import { Price } from '../typography/medium-price';

interface RealEstateCardProps {
  image: string;
  price: string;
  cityAndState: string;
  address: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  area: number;
  iconIsFavorite: boolean;
}

export const RealEstateCard = ({ image, price, cityAndState, address, numberOfBedrooms, numberOfBathrooms, area, iconIsFavorite }: RealEstateCardProps) => {
  const heartIcon = iconIsFavorite ? faHeartSolid : faHeartRegular;

  return (
    
    <div className='real-estate-card'>
      <div>
        <img src={image} alt="Card" className="real-estate-card-image" />
      </div>

      <div className='text-price'>
        <Price weight="bold" size="XLarge"> {price} </Price>
        <FontAwesomeIcon icon={heartIcon} size='xl' />
      </div>

      <div className="card-text">
        <Body2 weight="bold">{cityAndState}</Body2>
        <Caption color='dark'>{address}</Caption>
      </div>

      <div className="card-components">
        <FontAwesomeIcon icon={faBed} />
        <Caption color='dark'>{numberOfBedrooms} quartos</Caption>
        <FontAwesomeIcon icon={faBath} />
        <Caption color='dark'>{numberOfBathrooms} banheiros</Caption>
        <FontAwesomeIcon icon={faChartArea} />
        <Caption color='dark'>{area} m²</Caption>
      </div>
    </div>
  );
};
