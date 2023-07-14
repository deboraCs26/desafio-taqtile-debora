import React from 'react';
import './style.css';
import { RealEstateCard } from '../componentization/real-estate-card';
import { CarouselSection } from './index';
import { H2 } from '../typography/h2';
import { GetProperties } from '../graphql-query/use-query/use-query-properties';

interface CarouselSectionProps {
  title: string;
}

export const ReleasesSection = ({ title }: CarouselSectionProps) => {
  const { loading, error, properties } = GetProperties();

  if (loading) {
    return <div>Buscando categorias</div>;
  }

  if (error) {
    return <div>Ocorreu um erro ao buscar as categorias: {error.message}</div>;
  }

  return (
    <div className='carousel-container'>
      <H2 color='XDark'>{title}</H2>
      <CarouselSection>
        {properties.map((property) => (
          <RealEstateCard
            buyPrices={property.buyPrices.total}
            image={property.imageUrls?.[0]}
            city={property.address.state}
            state={property.address.city}
            streetNumber={property.address.streetNumber}
            district={property.address.district}
            numberOfBedrooms={property.bedrooms}
            numberOfBathrooms={property.bathrooms}
            area={property.area}

          />
        ))}
      </CarouselSection>
    </div>
  );
};
