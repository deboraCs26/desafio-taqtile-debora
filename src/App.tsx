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
import { PrimayButton } from '../src/style/button/primary';
import { SecondaryButton } from './style/button/secondary';
import { CtaButton } from './style/button/cta';
export default function App() {
  return (
    <div>
      <Display>
        display
      </Display>

      <H1>Headline 1</H1>

      <div>
        <PrimayButton onClick={() => alert('primário funcionando')} variant='primary' height="default" color="white">
          Button Label
        </PrimayButton>
      </div>

      <H2>
        Headline 2
      </H2>

      <div>
        <PrimayButton variant="primary" height='defaultCompact' color="white">
          Button Label
        </PrimayButton>
      </div>

      <H3>Headline 3</H3>

      <div>
        <PrimayButton variant="secondary" height="defaultCompact" color="white">
          Button Label
        </PrimayButton>
      </div>

      <H4>
        Headline 4
      </H4>

      <div>
        <PrimayButton variant="secondary" height="default" color="white">
          Button Label
        </PrimayButton>
      </div>

      <Body1>
        body1
      </Body1>
      <div>
        <PrimayButton onClick={() => alert('primário funcionando')} variant='primary' height="default" color="white">
          Button Label
        </PrimayButton>
      </div>

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
      <div>
        <SecondaryButton>
          Button Label
        </SecondaryButton>
      </div>

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

      <div>
        <CtaButton height='default'>
          Button Label
        </CtaButton>
      </div>

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

      <div>
        <CtaButton>
          Button Label
        </CtaButton>
      </div>
    </div>

  );
};
