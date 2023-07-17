import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../home';
import { AboutUs } from '../pages/about-us';
import { Contact } from '../pages/contact';
import { HomePage } from '../pages/home-page';

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
  {
    path: '/home',
    element: <HomePage />,
  },
]);

export { RouterProvider, router }
