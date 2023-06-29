import React from 'react';
import './App.css';
import { Hero } from './style/hero-section';
import { Banner } from './style/banner';
import { VisitingCard } from './style/visiting-card/visiting-card';
import { H2 } from './style/typography/h2';
import { CardCategory } from './style/card-categorias-de-imoveis/card-category';
import { CategoryCarousel } from './style/category-carousel/carousel-section';
import imageCategory from './style/card-categorias-de-imoveis/cards/image-category.svg';
import imgVisiting from './style/visiting-card/img/Img.png'

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
      <div>
        <VisitingCard
          bigPrice="R$ 250.000"
          image={imgVisiting}
          locationText="Condomínio"
          iptuText='IPTU'
          price='R$1450,00'
          condominiumPrice='R$450,00'
          description=' Jonathan Marques'
          captions={['Imobilar corretora imobiliária', 'CRECI-SP J22.004']}
          icon
        />

        <VisitingCard
          bigPrice="R$ 2900.00"
          image={imgVisiting}
          locationText="Condomínio"
          iptuText="IPTU"
          price="R$ 100,00"
          condominiumPrice="R$ 450,00"
          description="Jonathan Marques"
          captions={['Imobilar corretora imobiliária', 'CRECI-SP J22.004']}
          icon
          iconColor='red'
          serviceFeeLabel="Taxas Extras"
          serviceFeeValue="R$ 100,00"
          rentLabel="Aluguel Mensal"
          rentValue="R$ 2.250,00"
          value='Total'
          amount='2900,00'
        />

      </div>
    </div>
    
  );
};
