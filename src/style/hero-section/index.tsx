import React from 'react';
import './style.css';
import image from './image-hero/image1.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Display } from '../typography/display';
import { Body1 } from '../typography/body1';
import { Button } from '../button/button';
import { Label } from '../typography/large-label';
import { Separator } from '../separator/separator';

export const Hero = () => {

  const handleSearchClick = () => {
    alert('Em construção');
  };

  return (
    <section className='hero-container'>
      <img src={image} alt="" />

      <div className='hero-text-container'>
        <div className='hero-display-text'>
          <Display color='cta'>Encontre seu espaço no mundo!</Display>
          <Separator size='medium' />
          <div className='hero-body-text'>
            <Body1 color='dark'>Os melhores imóveis de acordo com as suas preferências.</Body1>
          </div>
        </div>
        <Separator size='XLarge' />
        <div className='button-hero'>
          <Button variant='primary' compact expand icon={faSearch} onClick={handleSearchClick}>
            <Label weight='semiBold' color='white'>
              Buscar
            </Label>
          </Button>
        </div>
      </div>
    </section>
  );
};
