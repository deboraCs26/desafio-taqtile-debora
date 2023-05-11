import './App.css';
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
export default function App() {
  return (
    <div>
      <Display>
        display
      </Display>

      <H1>Headline 1</H1>

      <H2>
        Headline 2
      </H2>

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
}
