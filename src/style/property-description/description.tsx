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
import { H2 } from "../typography/h2";
import { colors } from "../colors";
import { Separator } from "../separator/separator";
import imageDoCard from "./image-do-card/img.png"
import { VisitingCard } from "../visiting-card/visiting-card";

interface DescriptionProps {
  propertyCard: {
    title: string;
    explanation: string;
    description: string;
    address: string;
    bathrooms: number;
    bedrooms: number;
    area: string;
    pool: boolean;
    vacancy: boolean;
  };
};

const iconStyle = {
  color: colors.neutral.neutralXDark
};

export const Description = ({ propertyCard } : DescriptionProps ) => {
 
  const description = [
    { propertyCard: <FontAwesomeIcon icon={faBed} className="icon" style={iconStyle} size="lg" />, title: `${propertyCard.bedrooms} Quartos` },
    { propertyCard: <FontAwesomeIcon icon={faBath} className="icon" style={iconStyle} size="lg" />, title: `${propertyCard.bathrooms} Banheiros` },
    { propertyCard: <FontAwesomeIcon icon={faRuler} className="icon" style={iconStyle} size="lg" />, title: propertyCard.area },
    { propertyCard: propertyCard.pool && <FontAwesomeIcon icon={faSwimmingPool} className="icon" style={iconStyle} size="lg" />, title: "Piscina" },
    { propertyCard: propertyCard.vacancy && <FontAwesomeIcon icon={faCar} className="icon" style={iconStyle} size="lg" />, title: "1 Vaga" },
  ];

  return (
    <div className="description-container">
      <div className="text-description">
        <div className="title-properties">
          <H1 color="XDark">{propertyCard.title}</H1>
        </div>

        <div className="andress">
          <img src={location} alt="endereço do imóvel" />
          <Separator size="small" horizontal />
          <Body2 color="XDark">{propertyCard.address}</Body2>
        </div>

        <Separator size="XLarge" />
        <ContainerCard>
          <div className="card-description">
            {description.map((item, id) => (
              <div className="item" key={id}>
                {item.propertyCard}
                <H4 color="XDark" weight="semiBold">{item.title}</H4>
              </div>
            ))}
          </div>
        </ContainerCard>

        <Separator size="XLarge" />
        <div className="description" >
          <H2 color="XDark">{propertyCard.explanation}</H2>

          <Body2 color="XDark">
            {propertyCard.description}
          </Body2>
        </div>
      </div>

      <div className="visiting-card">
        <VisitingCard
          image={imageDoCard}
          bigPrice="R$250.000"
          condominiumPrice="Condomínio"
          locationText="1450,00"
          iptuText="IPTU"
          price="450,00"
          description="Jonathan Marques"
          captions={["Imobilar Corretora Imobiliária", "CRECI-SP J22.004"]}
          icon
        />
      </div>

    </div>
  );
};
