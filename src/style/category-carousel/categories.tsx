import React from 'react';
import './carousel-section.css';
import { CardCategory } from '../card-categorias-de-imoveis/card-category';
import { CategoryCarousel } from './carousel-section';
import { H2 } from '../typography/h2';
import { GetCategories } from '../graphql-query/use-query';
import { Category } from '../graphql-query/categories';

interface CarouselSectionProps {
  title: string;
}

export const CarouselSection = ({ title }: CarouselSectionProps) => {
  const { loading, error, categories } = GetCategories();

  if (loading) {
    return <div>Buscando categorias</div>;
  }

  if (error) {
    return <div>Ocorreu um erro ao buscar as categorias: {error.message}</div>;
  }

  return (
    <div className='carousel-container'>
      <H2 color='XDark'>{title}</H2>
      <CategoryCarousel>
        {categories.map((category: Category) => (
          <CardCategory
              key={category.id}
              name={category.name}
              image={category.imageUrl}
              numberOfProperties={category.numberOfProperties}
            />
        ))}
      </CategoryCarousel>
    </div>
  );
};
