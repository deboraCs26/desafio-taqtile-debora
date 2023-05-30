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
      <FormField label='Nome' />
      <FormField label='Email' />
      <FormField caption="Caption" password label="Senha" icon={faExclamationTriangle} />

      <Display>
        display
      </Display>

      <H2>Headline 2</H2>

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
