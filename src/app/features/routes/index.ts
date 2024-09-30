import { Routes } from '@angular/router';
import { driverRoutes, parentRoutes, schoolRoutes } from '../users';
import { adminRoutes } from '../admin';

export const featureRoutes: Routes = [
  ...driverRoutes,
  ...parentRoutes,
  ...schoolRoutes,
  ...adminRoutes,
];
