import { FeaturevisorProvider } from '@featurevisor/react';
import { createInstance } from '@featurevisor/sdk';
import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import { ConfigProvider } from './context/ConfigContext';
import { fetchCharacter, fetchCharacters } from './loaders/CharacterLoader';
import { CharacterRouteParams } from './types/types';

const env = import.meta.env.VITE_ENVIRONMENT || 'preview';
const f = createInstance({
  datafileUrl: `https://d33lxt1sqp2sbb.cloudfront.net/datafiles/${env}/datafile-tag-all.json`,
});

const Characters = lazy(() => import('./pages/Characters'));
const CharacterDetails = lazy(() => import('./pages/CharacterDetails'));

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        loader: fetchCharacters,
        element: <Characters />,
      },
      {
        path: 'character/:id',
        loader: async ({ params }) => {
          return fetchCharacter({ params } as CharacterRouteParams);
        },
        element: <CharacterDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <FeaturevisorProvider instance={f}>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </FeaturevisorProvider>
  </React.StrictMode>,
);
