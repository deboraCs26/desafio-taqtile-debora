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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}
