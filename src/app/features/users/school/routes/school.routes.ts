import { Routes } from '@angular/router';
import {
  SchoolDashboardPage,
  SchoolParentPage,
  SchoolProfilePage,
  SchoolSettingsPage,
  SchoolTripsPage,
} from '../pages';
import { AdminDasboardLayout } from '../../../admin/components';

export const schoolRoutes: Routes = [
  {
    path: 'user/school/dashboard',
    component: AdminDasboardLayout,
    children: [
      { path: '', component: SchoolDashboardPage },
      { path: 'profile', component: SchoolProfilePage },
      { path: 'parent', component: SchoolParentPage },
      { path: 'trips', component: SchoolTripsPage },
      { path: 'settings', component: SchoolSettingsPage },
    ],
  },
];
