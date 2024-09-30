import { Routes } from '@angular/router';
import { AdminDasboardLayout } from '../../../admin/components';
import {
  DriverDashboardPage,
  DriverProfilePage,
  DriverSettingsPage,
  DriverTripsPage,
} from '../pages';

export const driverRoutes: Routes = [
  {
    path: 'user/driver/dashboard',
    component: AdminDasboardLayout,
    children: [
      { path: '', component: DriverDashboardPage },
      { path: 'profile', component: DriverProfilePage },
      { path: 'trips', component: DriverTripsPage },
      { path: 'settings', component: DriverSettingsPage },
    ],
  },
];
