import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './route/home';
import { WhoAre } from './route/pages/who-we-are';
import { Contact } from './route/pages/contact';

const client = new ApolloClient({
  uri: 'https://taqtile-challenge-api-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quem-somos',
    element: <WhoAre />,
  },
  {
    path: '/contato',
    element: <Contact />,
  },
]);

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
