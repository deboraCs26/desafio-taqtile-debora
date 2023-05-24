import './App.css';
import { H1 } from './style/typography/h1';
import { Form } from './style/form/form';

export default function App() {
  return (
    <div>
      <H1>Formulario</H1>

      <div>
        <Form label='Nome'></Form>
        <Form label='Email'></Form>
        <Form caption="Caption" label='Senha'></Form>
      </div>

    </div>

  );
};
