import { useRoutes } from 'react-router-dom';
import Main from '../layouts/Main';

import Home from '../pages/Home';
import About from '../pages/About';
import ArticlePage from '../pages/ArticlePage';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <About />,
          path: 'about',
        },
        {
          element: <ArticlePage />,
          path: 'article',
        },
      ],
    },
  ]);
}
