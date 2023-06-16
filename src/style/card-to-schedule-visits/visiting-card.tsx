import React from 'react';
import './visiting-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Body2 } from '../typography/body2';
import { Caption } from '../typography/caption';
import { Price } from '../typography/medium-price';
<<<<<<< HEAD
import { ContainerCards } from '../card-container/card-container';
import { Label } from '../typography/LargeLabel';
=======
import { ContainerCard } from '../card-container/card-container';
import { LargeLabel } from '../typography/LargeLabel';
>>>>>>> a6f626d (completed visit scheduling componentization task)
import { Button } from '../button/button';
import { H3 } from '../typography/h3';


interface VisitingCardsProps {
  image: string;
  bigPrice: string;
  price: string;
<<<<<<< HEAD
  condominiumPrice: string;
  locationText: string;
  iptuText: string;
}

export const VisitingCard = ({ image, price, locationText, iptuText, condominiumPrice, bigPrice }: VisitingCardsProps) => {
  return (

    <ContainerCards>
=======
  smallPrice: string;
  address: string;
  additionalValue: string;
  cityAndState: string;
  cityState: string;
  favoritar: string;
  compartilhar: string;
}

export const VisitingCard = ({ image, price, cityAndState, address, cityState, smallPrice, additionalValue, bigPrice, favoritar, compartilhar }: VisitingCardsProps) => {
  return (
    <ContainerCard>
>>>>>>> a6f626d (completed visit scheduling componentization task)

      <div className='visiting-card-container'>
        <Price weight="bold" size="xxxLarge"> {bigPrice} </Price>
      </div>

      <div className='text-price-container'>
<<<<<<< HEAD
        <Body2 weight="bold">{locationText}</Body2>
        <div><Price weight="regular" size="medium"> {condominiumPrice} </Price></div>
      </div>

      <div className='text-container'>
        <Body2 weight="bold">{iptuText}</Body2>
=======
        <Body2 weight="bold">{cityAndState}</Body2>
        <div><Price weight="regular" size="medium"> {smallPrice} </Price></div>
      </div>

      <div className='text-container'>
        <Body2 weight="bold">{cityState}</Body2>
>>>>>>> a6f626d (completed visit scheduling componentization task)
        <Price weight="regular" size="medium"> {price} </Price>
      </div>

      <div className='text-img-container'>
        <img src={image} alt="Card" className="card-image" />
        <div className='text-content'>
<<<<<<< HEAD
          <Label weight='bold' color='dark'>
            Jonathan Marques <FontAwesomeIcon icon={faCheck} className='icon-container' />
          </Label>
          
          <Caption color='dark'>Imobilar corretora imobiliaria</Caption>
          <Caption color='dark'>CRECI-SP J22.004</Caption>
=======
          <LargeLabel weight='bold' color='Xdark'>
            Jonathan Marques <FontAwesomeIcon icon={faCheck} className='icon-container' />
          </LargeLabel>
          <Caption>{address}</Caption>
          <Caption>{additionalValue}</Caption>
>>>>>>> a6f626d (completed visit scheduling componentization task)
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
<<<<<<< HEAD
        <H3><FontAwesomeIcon icon={faHeart} className='icon-container' />Favoritar</H3>
        <H3><FontAwesomeIcon icon={faShareAlt} className='icon-container' />Compartilhar</H3>
      </div>

    </ContainerCards>
=======
        <H3><FontAwesomeIcon icon={faHeart} className='icon-container' />{favoritar}</H3>
        <H3><FontAwesomeIcon icon={faShareAlt} className='icon-container' />{compartilhar}</H3>
      </div>

    </ContainerCard>
>>>>>>> a6f626d (completed visit scheduling componentization task)
  );
};
