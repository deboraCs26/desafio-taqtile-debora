import React from "react";
import {Description} from "./description";

export const PropertyCard = () => {
  const propertyData = {
    title: "Casa à venda em Osasco, bairro Bonfim, melhor da região!",
    explanation: "Descrição",
    description: "A casa se insere em um clima de paz, de natureza. A decoração acompanha a magia desse microclima ecológico que encanta adultos e crianças. A casa foi construída em madeira nobre. Decorada com lustres temáticos e estruturas que dão vida ao lugar. Ideal para todos que busquem descansar ou trabalhar e desejam morar na melhor região de Osasco-SP.",
    image: "caminho/para/imagem.jpg",
    price: 250000,
    address: "Avenida das Nações Unidas 3239, Complemento 245B, Bonfim, Osasco",
    bathrooms: 2,
    bedrooms: 2,
    area: "8x10 m²",
    pool: true,
    vacancy: true
  };

  return (
    <div>
      <Description propertyCard={propertyData} />
    </div>
  );
};
