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
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CardCategory } from './style/card-categorias-de-imoveis/card-category';
import imageCategory from './style/card-categorias-de-imoveis/cards/image-category.svg';

export default function App() {

  return (
    <div>
      <div>
        <H1>Stylegruide</H1>

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
