import '../src/style/button/button.css';
import './App.css';
import { FormField } from './style/form/form';
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
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function App() {

  return (
    
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
        password
        minLength={8}
        error={true}
      />

      <Display>
        display
      </Display>
      <H1>Headline 1</H1>
      
      <H2>Headline 2</H2>

      <H2>Headline 2</H2>

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
