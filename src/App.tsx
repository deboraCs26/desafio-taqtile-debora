import React from 'react';
import './App.css';
import { Hero } from './style/hero-section';
import { Banner } from './style/banner';
import { VisitingCard } from './style/card-to-schedule-visits/visiting-card';
import { Display } from './style/typography/display';
import { H2 } from './style/typography/h2';
import { CardCategory } from './style/card-categorias-de-imoveis/card-category';
import { CategoryCarousel } from './style/category-carousel/carousel-section';
import imageCategory from './style/card-categorias-de-imoveis/cards/image-category.svg';
import imgVisiting from './style/card-to-schedule-visits/img/Img.png'

export default function App() {

  return (

    <div>
      <div className='App'>
        <Hero />
      </div>

      <Banner />

      <H2>Encontre o imóvel ideal para o seu estilo de vida!</H2>
      <CategoryCarousel>
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />
      <div>
        <VisitingCard
          bigPrice="R$ 250.000"
          image={imgVisiting}
          locationText="Condomínio"
          iptuText='IPTU'
          price='R$1450,00'
          condominiumPrice='R$450,00'
        />

      </div>
      <Display>
        display
      </Display>

        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />

      </CategoryCarousel>
    </div>
  );
};
