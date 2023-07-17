import React from "react";
import './description.css';
import { H1 } from "../typography/h1";
import { Body2 } from "../typography/body2";
import location from "./icon/location.png"
import imageDoCard from "./image-do-card/Img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faCar } from '@fortawesome/free-solid-svg-icons';
import { faSwimmingPool, faRuler, faBed } from '@fortawesome/free-solid-svg-icons';
import { ContainerCard } from "../card-container/card-container";
import { H4 } from "../typography/h4";
import { H2 } from "../typography/h2";
import { colors } from "../colors";
import { Separator } from "../separator/separator";
import { VisitingCard } from "../visiting-card/visiting-card";

interface PropertyDescriptionProps {
  bathrooms?: number;
  bedrooms?: number;
  area?: string;
  pool?: boolean;
  vacancy?: boolean;
}

const iconStyle = {
  color: colors.neutral.neutralXDark
};

export const Description = ({ bathrooms, bedrooms, area, pool, vacancy }: PropertyDescriptionProps) => {

  const description = [
    { icon: <FontAwesomeIcon icon={faBed} className="icon" style={iconStyle} size="lg" />, title: `${bathrooms} Quartos` },
    { icon: <FontAwesomeIcon icon={faBath} className="icon" style={iconStyle} size="lg" />, title: `${bedrooms} Banheiros` },
    { icon: <FontAwesomeIcon icon={faRuler} className="icon" style={iconStyle} size="lg" />, title: area },
    { icon: pool && <FontAwesomeIcon icon={faSwimmingPool} className="icon" style={iconStyle} size="lg" />, title: "Piscina" },
    { icon: vacancy && <FontAwesomeIcon icon={faCar} className="icon" style={iconStyle} size="lg" />, title: "1 Vaga" },
  ];

  return (
    <div className="description-container">
      <div className="text-description">
        <div className="title-properties">
          <H1 color="XDark">Casa à venda em Osasco,  bairro Bonfim, melhor da região!</H1>
        </div>

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

        <Separator size="XLarge" />
        <div className="description" >
          <H2 color="XDark">Descrição</H2>

          <Body2 color="XDark">
            A casa se insere em um clima de paz, de natureza. A decoração acompanha a magia desse microclima ecológico que encanta a adultos e crianças. A casa foi construída em madeira nobre. Decorada com lustres temáticos e estruturas que dão vida ao lugar. Ideal para todos que busquem descansar ou trabalhar e desejam morar na melhor região de Osasco- SP.
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
