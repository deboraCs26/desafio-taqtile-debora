import '../src/style/button/button.css';
import './App.css';
import './style/button/button.css';
import { Display } from './style/typography/display';
import { H1 } from './style/typography/h1';
import { H2 } from './style/typography/h2';
import { H3 } from './style/typography/h3';
import { H4 } from './style/typography/h4';
import { Body1 } from './style/typography/body1';
import { Body2 } from './style/typography/body2';
import { DT } from './style/typography/dt-dd';
import { LargeLabel } from './style/typography/LargeLabel';
import { Caption } from './style/typography/caption';
import { Price } from './style/typography/medium-price';
import { Button } from './style/button/props-button';
import Icon from './style/button/Iconsax/Linear/Vector.png';


export default function App() {

  return (
    <div>
      <div>
        <H1>Stylegruide</H1>

        <H2>Botão</H2>
        <div className="button">
          <Button variant="primary">
            Button Label
            <span className="icon">
              <img src={Icon} alt="icone de uma lupa" />
            </span>
          </Button>
        </div>
        <div className="button">
          <Button variant="primary" height="defaultCompact">
            Button Label
          </Button>
        </div>

        <div className="button">
          <Button variant="primary" height="defaultCompact" onClick={() => alert("primário funcionando")}>
            Button Label
          </Button>
        </div>

        <div className="button">
          <Button variant="primary" onClick={() => alert("primário funcionando")}>
            Button Label
          </Button>
        </div>

        <div className="button item-button :hover">
          <Button variant="primary">
            Button Label
          </Button>
        </div>

        <div className="button">
          <Button variant="secondary">
            Button Label
          </Button>
        </div>
        <div className="button">
          <Button variant="secondary" height="defaultCompact">
            Button Label
          </Button>
        </div>

        <div className="button">
          <Button variant="cta">
            Button Label
          </Button>
        </div>

        <div className="button">
          <Button variant="cta" height="defaultCompact">
            Button Label
          </Button>
        </div>
      </div>

      <Display>
        display
      </Display>

      <H3>Headline 3</H3>

      <H4>
        Headline 4
      </H4>

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

      <LargeLabel weight="bold" color="dark" size="large">
        Label large bold
      </LargeLabel>

      <LargeLabel weight="semiBold" color="dark" size="large">
        Label large Semibold
      </LargeLabel>

      <LargeLabel weight="regular" color="dark" size="large">
        Label large regular
      </LargeLabel>

      <LargeLabel weight="regular" color="white" size="medium">
        Label large
      </LargeLabel>

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
