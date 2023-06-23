import React, { useState } from 'react';
import './App.css';
import { InfoTile } from './style/Info-Tile/info-tile';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Display } from './style/typography/display';
import { H1 } from './style/typography/h1';
import { H2 } from './style/typography/h2';
import { H3 } from './style/typography/h3';
import { H4 } from './style/typography/h4';
import { Body1 } from './style/typography/body1';
import { Body2 } from './style/typography/body2';
import { DT } from './style/typography/dt-dd';
import { Label } from './style/typography/LargeLabel';
import { Caption } from './style/typography/caption';
import { Price } from './style/typography/medium-price';
import { Button } from './style/button/button';
import { FormField } from './style/form/form';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CardCategory } from './style/card-categorias-de-imoveis/card-category';
import imageCategory from './style/card-categorias-de-imoveis/cards/image-category.svg';
import { Badge } from './style/badges/badge';
import { faSyncAlt, faImage, faVideo, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import imgCategory from './style/componentization/cards/card-imoveis.svg';
import { RealEstateCard } from './style/componentization/real-estate-card';
import { CarouselRealEstate } from './style/carousel-componentization/carousel-real-estate';

export default function App() {
  const [selectedBadge, setSelectedBadge] = useState('');

  const handleBadgeClick = (badge: string) => {
    setSelectedBadge(badge);
  };
  
  return (
    <div>
      <H1>Badges</H1>

      <Badge icon={faVideo}
        text="Video"
        selected={selectedBadge === 'video'}
        onClick={() => handleBadgeClick('video°')}
      />

      <Badge icon={faImage}
        text="Imagem"
        selected={selectedBadge === 'imagem'}
        onClick={() => handleBadgeClick('imagem')}
      />

      <Badge icon={faSyncAlt}
        text="360°"
        selected={selectedBadge === '360°'}
        onClick={() => handleBadgeClick('360°')}
      />

      <div>
        <h1>Carrossel de imóveis</h1>
        <CarouselRealEstate>
          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />

          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />
          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />
          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />
          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />
          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />
          <CardCategory
            image={imageCategory}
            title="Com Pricina"
            description="723,457 Imóveis"
          />

        </CarouselRealEstate>
      </div>


      <H2>Botão</H2>

      <div className="button-container">
        <Button variant="primary" icon={faSearch}>
          Button Label
        </Button>
      </div>
      <div className="button-container">
        <Button variant="primary" icon={faSearch} compact>
          Button Label
        </Button>
      </div>

      <div className="button-container">
        <Button variant="primary" compact disabled onClick={() => alert("primário funcionando")}>
          Button Label
        </Button>
      </div>

      <div className="button-container">
        <Button variant="primary" disabled onClick={() => alert("primário funcionando")}>
          Button Label
        </Button>
      </div>

      <div className="button-container item-button :hover">
        <Button variant="primary">
          Button Label
        </Button>
      </div>

      <div className="button-container">
        <Button variant="secondary">
          Button Label
        </Button>
      </div>
      <div className="button-container">
        <Button variant="secondary" compact>
          Button Label
        </Button>
      </div>

      <div className="button-container">
        <Button variant="cta">
          Button Label
        </Button>
      </div>

      <div className="button-container">
        <Button variant="cta" compact>
          Button Label
        </Button>
      </div>


      <div>
        <H1>Formulario</H1>
        <FormField
          label="Nome"
          icon={faExclamationTriangle}
          caption='Caption'
          minLength={3}
        />
        <FormField
          label="Email"
          icon={faExclamationTriangle}
          caption="Caption"
        />
        <FormField
          label="Senha"
          icon={faExclamationTriangle}
          caption="Caption"
          password={true}
          minLength={8}
          error={true}
        />
      </div>

      <Display>
        display
      </Display>

      <H3>Card categorias do imóvel</H3>
      <CardCategory
        image={imageCategory}
        title="Com Pricina"
        description="723,457 Imóveis"
      />

      <H4>
        Itens do imóvel
      </H4>

      <div>
        <InfoTile icon={faCar} text="1 Vaga" />
      </div>

      <Body1>
        body1
      </Body1>

      <Body2 weight="regular">
        body2
      </Body2>

      <div>
        <RealEstateCard
          image={imgCategory}
          price="R$ 400.000"
          cityAndState="Alphaville, SP"
          address="Barueri, 32394, São Paulo"
          numberOfBedrooms={3}
          numberOfBathrooms={2}
          area={35}
          iconIsFavorite={true}
        />
      </div>

      <Body2 weight="bold">
        body2
      </Body2>

      <Body2 weight="regular">
        body2
      </Body2>

      <DT weight="regular" >
        Definition of the Term
      </DT>

      <DT weight="bold">
        Definition of the Term
      </DT>

      <Label weight="bold" color="dark" size="large">
        Label large bold
      </Label>

      <Label weight="semiBold" color="dark" size="large">
        Label large Semibold
      </Label>

      <Label weight="regular" color="dark" size="large">
        Label large regular
      </Label>

      <Label weight="regular" color="white" size="medium">
        Label large
      </Label>

      <Caption>
        Caption
      </Caption>

      <Price size='xxxLarge' weight='bold'>
        Big Price
      </Price>

      <Price size='XLarge' weight='bold'>
        Medium Price
      </Price>

      <Price size='medium' weight='regular'>
        Small Price
      </Price>
    </div>

  );
};
