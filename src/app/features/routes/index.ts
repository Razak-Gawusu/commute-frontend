import { Routes } from '@angular/router';
import { driverRoutes, parentRoutes, schoolRoutes } from '../users';

export const featureRoutes: Routes = [
  ...driverRoutes,
  ...parentRoutes,
  ...schoolRoutes,
];
