import React from "react";
import { Description } from "./description";
<<<<<<< HEAD
import { Separator } from "../separator/separator";
import { PropertyItems } from "../property-items/items";
import { ProximitySection } from "../proximity-section/proximity-section";
import { colors } from "../colors";
import { PropertyMap } from "../location-map/location";
import { faUtensils, faLeaf, faGraduationCap, faHospital, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
=======
import { Proximity } from "../proximity-section/proximity";
import { Separator } from "../separator/separator";
import { PropertyItems } from "../property-items/items";
>>>>>>> 6a77155 (proximity section task)

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

  const proximityIcon = [
    { icon: faUtensils, title: "Restaurantes bem avaliados", text: "Cabanã Osasco,  Salva Burguer, Jin Chef e O Bom do Baião.", color: colors.neutral.neutralLight },
    { icon: faLeaf, title: "Parques e áreas verdes", text: "2° Floresta Urbana de Osasco, Parque Chico Mendes e Praça Laurindo de Camargo.", color: colors.neutral.neutralLight },
    { icon: faGraduationCap, title: "Escolas e colégios", text: "E.E. Profº Francisco Casabona, ETEC Professor André Bogasian e Colégio Padre Anchieta.", color: colors.neutral.neutralLight },
    { icon: faGraduationCap, title: "Faculdades", text: "Universidade Estácio - Polo Osasco, Universidade Anhembi Morumbi e FNJ - Faculdade Nove de Julho.", color: colors.neutral.neutralLight },
    { icon: faHospital, title: "Hospitais", text: "Hospital Nossa Senhora de Fátima e Hospital Geral de Carapicuíba.", color: colors.neutral.neutralLight },
    { icon: faShoppingCart, title: "Mercados", text: "Atacadão, Mercado Moretti Bittencourt e Mercado Municipal de Osasco.", color: colors.neutral.neutralLight },

  ];

  return (
    <div className="description-section-container">
      <Description propertyCard={propertyData} />
  
      <Separator size="XLarge" />
      <PropertyItems />
  
      <Separator size="XLarge" />

      <div className="location-container">

      <div className="proximity-container">
        <div className="proximity-list">
        </div>
        <ProximitySection title="Proximidades" proximityIcons={proximityIcon} />
      </div>
      
        <div className="map-container">
          <PropertyMap />
        </div>
      </div>
    </div>
  );
};
