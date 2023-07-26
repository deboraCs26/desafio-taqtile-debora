import React from "react";
import { Description } from "./description";
import { VisitingCard } from "../visiting-card/visiting-card";
import imageDoCard from "./image-do-card/img.png"
import { Separator } from "../separator/separator";

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

  const imovelData = {
    image: imageDoCard,
    bigPrice: "R$250.000",
    condominiumPrice: "Condomínio",
    locationText: "1450,00",
    iptuText: "IPTU",
    price: "450,00",
    description: "Jonathan Marques",
    captions: ["Imobilar Corretora Imobiliária", "CRECI-SP J22.004"],
    icon: true,
  };

  return (
    <div className="property-card-container">
      <div className="property-card-section">
        <Description propertyCard={propertyData} />
      </div>

      <Separator size="XLarge" horizontal />
      <Separator size="XLarge" horizontal />
      <div className="property-visinting">
        <VisitingCard {...imovelData} />
      </div>
    </div>
  );
};
