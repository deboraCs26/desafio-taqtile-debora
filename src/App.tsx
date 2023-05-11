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
        <h1>
          display
        </h1>
      </Display>

      <div>
        <H1>Headline 1</H1>
      </div>

      <div>
        <H2>
          Headline 2
        </H2>
      </div>

      <div>
        <H3>Headline 3</H3>
      </div>

      <div>
        <H4>
          Headline 4
        </H4>
      </div>

      <div>
        <Body1>
          <p>body1</p>
        </Body1>
      </div>

      <div>
        <Body2 fontFamily="Poppins" size="large" weight="regular" color="neutralXDark">
          <p>body2</p> 
        </Body2>
      </div>
      <div>
        <Body2  fontFamily="Poppins" size="large" color="neutralXDark" weight="bold">
          <p>body2</p>
        </Body2>
      </div>
      <div>
        <Body2 fontFamily="Poppins" size="large" weight="regular" color="neutralXDark">
          <p>body2</p>
        </Body2>
      </div>

      <div>
        <DT fontFamily="Poppins" size="medium" weight='regular' color='neutralXDark'>
          <p>
            Definition of the Term
          </p>

        </DT>
      </div>

      <div>
        <DT fontFamily="Poppins" size="medium" weight='bold' color='neutralXDark'>
          <p>
            Definition of the Term
          </p>

        </DT>
      </div>

      <div>
        <LargeLabel fontFamily="Poppins" weight='bold' color="dark" size="large">
          <label>Label large bold</label>
        </LargeLabel>
      </div>
      <div>
        <LargeLabel fontFamily="Poppins" weight='semibold' color="dark" size="large">
          <label>Label large Semibold</label>
        </LargeLabel>
      </div>
      <div>
        <LargeLabel fontFamily="Poppins" weight='regular' color="dark" size="large">
          <label>Label large regular</label>
        </LargeLabel>
      </div>
      <div>
        <LargeLabel fontFamily="Poppins" weight='regular' color="white" size="medium">
          <label>Label large</label>
        </LargeLabel>
      </div>

      <div>
        <Caption>
          <caption>
            Caption
          </caption>
        </Caption>

      </div>

      <div>
        <Price fontFamily="Poppins" size='xxxLarge' color='neutralXDark' weight='bold'>
          <p>
          Big Price
          </p>
        </Price>
      </div>

      <div>
        <Price fontFamily="Poppins" size='xLarge' color='neutralXDark' weight='bold'>
          <p>
          Medium Price
          </p>
        </Price>
      </div>

      <div>
        <Price fontFamily="Poppins" size='medium' color='neutralXDark' weight='regular'>
          <p>
          Small Price
          </p>
        </Price>
      </div>

    </div>

  );
}


