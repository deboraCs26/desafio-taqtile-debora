import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../home';
import { AboutUs } from '../pages/about-us';
import { Contact } from '../pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quem-somos',
    element: <AboutUs />,
  },
  {
    path: '/contato',
    element: <Contact />,
  },
]);

export { RouterProvider, router }
