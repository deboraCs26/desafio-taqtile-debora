import React from 'react';
import './App.css';
import { Separator } from './style/separator/separator';
import { Hero } from './style/hero-section';
import { Banner } from './style/banner';
import { Footer } from './style/footer';
import { ReleasesSection } from './style/carousel-section/releases-section';
import { CarouselSection } from './style/category-carousel/categories';
import { Menu } from './style/header';

export default function App() {


  return (

    <div>
      <Menu />

      <Separator size="large" />
      <Hero />

      <Separator size="large" />
      <CarouselSection title='Encontre o imóvel ideal para o seu estilo de vida!' />

      <Separator size="large" />
      <Banner />

      <Separator size="large" />
      <ReleasesSection title='Lançamentos que você pode se interessar!' />

      <Separator size="large" />
      <Footer />
    </div>
  );
};
