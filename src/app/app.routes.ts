import { Routes } from '@angular/router';
import { routes as coreRoutes } from './core';
import { featureRoutes } from './features';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/signin' },
  ...coreRoutes,
  ...featureRoutes,
];
