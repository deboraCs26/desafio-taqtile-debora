import React from "react";
import { colors } from "../colors";
import { Items } from "./items-list";
import { faUtensils, faLeaf, faCar, faBell, faLightbulb, faHome, faDiceFive, faPersonSwimming, faLaugh, faDoorClosed, faBasketballBall, faPaw, faElevator, faGamepad, faTshirt } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "../separator/separator";

export const PropertyItems = () => {
  const itemsProperty = [
    { icon: faUtensils, text: "Cozinha americana", color: colors.cta },
    { icon: faLeaf, text: "Jardim", color: colors.cta },
    { icon: faLeaf, text: "Área de serviço", color: colors.cta },
    { icon: faCar, text: "Garagem", color: colors.cta },
    { icon: faBell, text: "Sistema de campainha", color: colors.cta },
  ];

  const itemsPrivate = [
    { icon: faLightbulb, text: "Mobilias", color: colors.neutral.neutralLight },
    { icon: faHome, text: "Cobertura", color: colors.neutral.neutralLight },
    { icon: faDiceFive, text: "Chuveiro a gás", color: colors.neutral.neutralLight },
    { icon: faPersonSwimming, text: "Piscina privada", color: colors.neutral.neutralLight },
  ];

  const itemsCondominium = [
    { icon: faPersonSwimming, text: "Piscina", color: colors.cta },
    { icon: faLaugh, text: "Playground", color: colors.cta },
    { icon: faDoorClosed, text: "Portaria", color: colors.cta },
    { icon: faBasketballBall, text: "Quadra esportiva", color: colors.cta },
    { icon: faPaw, text: "Área pet", color: colors.cta },
  ];

  const itemsCondominiumPrivate = [
    { icon: faElevator, text: "Elevador", color: colors.neutral.neutralLight },
    { icon: faGamepad, text: "Brinquedoteca", color: colors.neutral.neutralLight },
    { icon: faTshirt, text: "Lavanderia", color: colors.neutral.neutralLight },
    { icon: faCar, text: "Estacionamento", color: colors.neutral.neutralLight },
  ];


  return (
    <div className="property-list-container">
      <div className="property-list">
        <Items title="O que esse lugar oferece" />

        <div className="list-container">
          <Items itemsNeutral={itemsProperty} />
          <Items itemsCta={itemsPrivate} />
        </div>
      </div>

      <Separator size="XLarge" />
      <div className="property-list">
        <Items title="Disponível no condomínio" />

        <div className="list-container">
          <Items itemsNeutral={itemsCondominium} />
          <Items itemsCta={itemsCondominiumPrivate} />
        </div>
      </div>
    </div>
  );
};
