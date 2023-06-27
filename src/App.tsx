import React from 'react';
import './App.css';
import { Hero } from './style/hero-section';
import { Banner } from './style/banner';
import { Footer } from './style/footer';
import { H2 } from './style/typography/h2';
import { CardCategory } from './style/card-categorias-de-imoveis/card-category';
import { CategoryCarousel } from './style/category-carousel/carousel-section';
import imageCategory from './style/card-categorias-de-imoveis/cards/image-category.svg';

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
      
      <Footer/>
    </div>
    

  );
};
