import React from 'react';
import './App.css';
import { Banner } from './style/banner';
import { H2 } from './style/typography/h2';
import { CardCategory } from './style/card-categorias-de-imoveis/card-category';
import imageCategory from './style/card-categorias-de-imoveis/cards/image-category.svg';
import { CategoryCarousel } from './style/category-carousel/carousel-section';

export default function App() {

  return (

    <div>
      <Banner />
      <H2 color='Xdark'>Encontre o imóvel ideal para o seu estilo de vida!</H2>
      <CategoryCarousel>
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
        <CardCategory
          image={imageCategory}
          title="Com Pricina"
          description="723,457 Imóveis"
        />

      </CategoryCarousel>
    </div>
  );
};
