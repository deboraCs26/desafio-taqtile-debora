import './App.css';
import { colors } from './style/colors';
import { H1 } from './style/typography/h1';
import { H2 } from './style/typography/h2';
import { H3 } from './style/typography/h3';
import { H4 } from './style/typography/h4';
import { Body1 } from './style/typography/body1';
import { Body2 } from './style/typography/body2';
export default function App() {
  return (
    <div>
      <H1>Headline 1</H1>
      <div>
        <H2>Headline 2</H2>
      </div>
      <div> <div>
        <H3>Headline 3</H3>
      </div></div>
      <div><H4>Headline 4</H4></div>
      <div><Body1>
        body1
      </Body1></div>
      <div><Body2 weight='bold'>
       
      </Body2></div>
    </div>


  );
}


