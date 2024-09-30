import { Routes } from '@angular/router';
import {
  AdminCustomerSupportPage,
  AdminDashboardPage,
  AdminDriversPage,
  AdminSchoolsPage,
  AdminSettingsPage,
  AdminTripsPage,
} from '../pages';
import { AdminDasboardLayout } from '../components';

export const adminRoutes: Routes = [
  {
    path: 'admin/dashboard',
    component: AdminDasboardLayout,
    children: [
      { path: '', component: AdminDashboardPage },
      { path: 'schools', component: AdminSchoolsPage },
      { path: 'drivers', component: AdminDriversPage },
      { path: 'trips', component: AdminTripsPage },
      { path: 'settings', component: AdminSettingsPage },
      { path: 'customer-support', component: AdminCustomerSupportPage },
    ],
  },
];
