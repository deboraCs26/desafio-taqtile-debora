import React from 'react';
import './style.css';
import image from './image/banner-img.png'
import { Display } from '../typography/display';
import { Body1 } from '../typography/body1';
import { colors } from '../colors';
import bannerIcon from '../banner/image/Iconsax/Linear/icon.svg'

const styleBanner = {
  background: colors.accessory.banner,
}

export const Banner = () => {

  const handleBuscarClick = () => {
    alert('Em construção');
  };

  return (

    <section className='banner-container'>
      <div style={styleBanner} className='banner-content' onClick={handleBuscarClick}>
        <div className='banner-image banner-img'>
          <img src={image} alt="Banner" />
        </div>

        <div className='banner-text'>
          <Display color='white'>Melhores imóveis</Display>
          <Body1 color='white'>Confira opções que podem ser uma grande oportunidade!</Body1>

        </div>
        <img src={bannerIcon} alt="Icon" className='banner-icon' />
      </div>
    </section>
  );
};
