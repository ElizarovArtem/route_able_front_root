import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import React from 'react';

import { DefaultCatchBoundary } from './components/utils/DefaultCatchBoundary';
import { NotFound } from './components/utils/NotFound';
import { routeTree } from './routeTree.gen';

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
