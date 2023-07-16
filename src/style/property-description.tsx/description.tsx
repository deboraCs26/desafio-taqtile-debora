import React from "react";
import './description.css';
import { H1 } from "../typography/h1";
import { Body2 } from "../typography/body2";
import location from "./icon/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faCar } from '@fortawesome/free-solid-svg-icons';
import { faSwimmingPool, faRuler, faBed } from '@fortawesome/free-solid-svg-icons';
import { ContainerCard } from "../card-container/card-container";
import { H4 } from "../typography/h4";
import { colors } from "../colors";
import { Separator } from "../separator/separator";

interface PropertyDescriptionProps {
  bathrooms?: number;
  bedrooms?: number;
  area?: string;
  pool?: boolean;
  vacancy?: boolean;
}

const iconStyle = {
  color: colors.neutral.neutralXDark
}

export const Description = ({ bathrooms, bedrooms, area, pool, vacancy }: PropertyDescriptionProps) => {

  const description = [
    { icon: <FontAwesomeIcon icon={faBed} className="icon" style={iconStyle} size="lg" />, title: `${bathrooms} Quartos` },
    { icon: <FontAwesomeIcon icon={faBath} className="icon" style={iconStyle} size="lg" />, title: `${bedrooms} Banheiros` },
    { icon: <FontAwesomeIcon icon={faRuler} className="icon" style={iconStyle} size="lg" />, title: `${area}` },
    { icon: pool && <FontAwesomeIcon icon={faSwimmingPool} className="icon" style={iconStyle} size="lg" />, title: "Piscina" },
    { icon: vacancy && <FontAwesomeIcon icon={faCar} className="icon" style={iconStyle} size="lg" />, title: "1 Vaga" },
  ];

  return (
    <div>
      <div>
        <H1>Casa à venda em Osasco,  bairro Bonfim, melhor da região!</H1>
      </div>

      <Separator size="XLarge" />
      <div className="andress">
        <img src={location} alt="endereço do imóvel" />
        <Separator size="small" horizontal />
        <Body2 color="XDark">Avenida das Nações Unidas 3239, Complemento 245B, Bonfim, Osasco</Body2>
      </div>

      <Separator size="XLarge" />
      <ContainerCard>
        <div className="card-description">
          {description.map((item, id) => (
            <div className="item" key={id}>
              {item.icon}
              <H4 color="XDark" weight="semiBold">{item.title}</H4>
            </div>
          ))}
        </div>
      </ContainerCard>
    </div>
  );

};
