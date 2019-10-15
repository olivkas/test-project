import Home from './pages/Home';

import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      }
    ]
  }
];
