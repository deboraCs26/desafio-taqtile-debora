import React from 'react';
import './visiting-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Body2 } from '../typography/body2';
import { Caption } from '../typography/caption';
import { Price } from '../typography/medium-price';
import { ContainerCard } from '../card-container/card-container';
import { Label } from '../typography/large-label';
import { Button } from '../button/button';
import { H3 } from '../typography/h3';
import { colors } from '../colors';
import { Separator } from '../separator/separator';

interface VisitingCardProps {
  image: string;
  bigPrice: string;
  locationText: string;
  iptuText: string;
  price: string;
  condominiumPrice: string;
  description: string;
  captions: string[];
  icon: boolean;
  iconColor?: "red" | "grey";
  serviceFeeLabel?: string;
  serviceFeeValue?: string;
  rentLabel?: string;
  rentValue?: string;
  value?: string;
  amount?: string;
}

export const VisitingCard = ({ image, bigPrice, locationText, iptuText, price, condominiumPrice, description, captions, icon, iconColor, serviceFeeLabel, serviceFeeValue, rentLabel, rentValue, value, amount }: VisitingCardProps) => {
  const heartIcon = icon ? faHeartSolid : faHeartRegular;
  const heartIconClass = iconColor === "red" ? colors.feedback.feedbackError : "";

  return (
    <ContainerCard>
      <div className="card-price">
        <Price weight="bold" size="xxxLarge" color='XDark'> {bigPrice} </Price>
      </div>

      <div className="text-price-container">
        <Body2 weight="bold" color='XDark'>{condominiumPrice}</Body2>
        <Price weight="regular" size="medium" color='XDark'> {locationText} </Price>
      </div>

      <div className="text-container">
        <Body2 weight="bold" color='XDark'>{iptuText}</Body2>
        <Price weight="regular" size="medium" color='XDark'> {price} </Price>
      </div>

      {serviceFeeLabel && serviceFeeValue && (
        <div className="card-text-container">
          <div className="card-body2-text-container">
            <Body2 weight="bold">{serviceFeeLabel}</Body2>
            <Price weight="regular" size="medium" color='XDark'> {serviceFeeValue} </Price>
          </div>

          <div className="card-body2-text-container">
            <Body2 weight="bold">{rentLabel}</Body2>
            <Price weight="regular" size="medium"> {rentValue} </Price>
          </div>
        </div>
      )}

      {value && amount && (
        <div className="card-price-text-container">
          <Body2 weight="bold">{value}</Body2>
          <Price weight="bold" size="xxxLarge"> {amount} </Price>
        </div>
      )}

      <div className='text-img-container'>
        <img src={image} alt='Card' className='card-image' />
        <div className='text-content'>
          <Label weight='bold' color='Xdark'>
            {description} <FontAwesomeIcon icon={faCheck} className='icon-container' />
          </Label>

          {captions.map((caption, index) => (
            <Caption key={index} color='dark'>{caption}</Caption>
          ))}
        </div>
      </div>

      <div className='card-button-container'>
        <Button variant='cta' expand>
          <FontAwesomeIcon icon={faWhatsapp} size='xl' className='icon-container' />
          Falar com o corretor
        </Button>

        <Separator size='medium' />
        <Button variant='primary' expand>
          Agendar visita
        </Button>
      </div>
          
      <Separator size='large' />
      <div className='container-text-components'>
        <H3 color='XDark' weight='regular'><FontAwesomeIcon
          icon={heartIcon}
          className="icon-container"
          style={heartIconClass ? { color: colors.feedback.feedbackError } : {}} />Favoritar</H3>
        <H3 color='XDark' weight='regular'><FontAwesomeIcon icon={faShareAlt} className='icon-container' /> Compartilhar</H3>
      </div>
      <Separator size='large' />
    </ContainerCard>
  );
};
