import React from "react";
import { colors } from "../colors";
import { ProximitySection } from "./proximity-section";
import { faUtensils, faLeaf, faGraduationCap, faHospital, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Proximity = () => {

  const proximityIcon = [
    { icon: faUtensils, title: "Restaurantes bem avaliados", text: "Cabanã Osasco,  Salva Burguer, Jin Chef e O Bom do Baião.", color: colors.neutral.neutralLight },
    { icon: faLeaf, title: "Parques e áreas verdes", text: "2° Floresta Urbana de Osasco, Parque Chico Mendes e Praça Laurindo de Camargo.", color: colors.neutral.neutralLight },
    { icon: faGraduationCap, title: "Escolas e colégios", text: "E.E. Profº Francisco Casabona, ETEC Professor André Bogasian e Colégio Padre Anchieta.", color: colors.neutral.neutralLight },
    { icon: faGraduationCap, title: "Faculdades", text: "Universidade Estácio - Polo Osasco, Universidade Anhembi Morumbi e FNJ - Faculdade Nove de Julho.", color: colors.neutral.neutralLight },
    { icon: faHospital, title: "Hospitais", text: "Hospital Nossa Senhora de Fátima e Hospital Geral de Carapicuíba.", color: colors.neutral.neutralLight },
    { icon: faShoppingCart, title: "Mercados", text: "Atacadão, Mercado Moretti Bittencourt e Mercado Municipal de Osasco.", color: colors.neutral.neutralLight },

  ];

  return (
    <div className="proximity-container">
      <div className="proximity-list">
        <ProximitySection title="Proximidades" proximityIcons={proximityIcon} />
      </div>
    </div>
  );
};
