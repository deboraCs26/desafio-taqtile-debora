import React from 'react';
import './visiting-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Body2 } from '../typography/body2';
import { Caption } from '../typography/caption';
import { Price } from '../typography/medium-price';
import { ContainerCards } from '../Card-Container/card-container';
import { Label } from '../typography/LargeLabel';
import { Button } from '../button/button';
import { H3 } from '../typography/h3';


interface VisitingCardsProps {
  image: string;
  bigPrice: string;
  price: string;
  condominiumPrice: string;
  locationText: string;
  iptuText: string;
}

export const VisitingCard = ({ image, price, locationText, iptuText, condominiumPrice, bigPrice }: VisitingCardsProps) => {
  return (

    <ContainerCards>

      <div className='visiting-card-container'>
        <Price weight="bold" size="xxxLarge"> {bigPrice} </Price>
      </div>

      <div className='text-price-container'>
        <Body2 weight="bold">{locationText}</Body2>
        <div><Price weight="regular" size="medium"> {condominiumPrice} </Price></div>
      </div>

      <div className='text-container'>
        <Body2 weight="bold">{iptuText}</Body2>
        <Price weight="regular" size="medium"> {price} </Price>
      </div>

      <div className='text-img-container'>
        <img src={image} alt="Card" className="card-image" />
        <div className='text-content'>
          <Label weight='bold' color='dark'>
            Jonathan Marques <FontAwesomeIcon icon={faCheck} className='icon-container' />
          </Label>
          
          <Caption color='dark'>Imobilar corretora imobiliaria</Caption>
          <Caption color='dark'>CRECI-SP J22.004</Caption>
        </div>
      </div>

      <div className='button-container'>
        <Button variant='cta'>
          <FontAwesomeIcon icon={faWhatsapp} size='xl' className='icon-container' />Falar com o corretor
        </Button>
      </div>

      <div className='button-container'>
        <Button variant='primary'>Agendar visita</Button>
      </div>

      <div className='container-text-components'>
        <H3><FontAwesomeIcon icon={faHeart} className='icon-container' />Favoritar</H3>
        <H3><FontAwesomeIcon icon={faShareAlt} className='icon-container' />Compartilhar</H3>
      </div>

    </ContainerCards>
  );
};
