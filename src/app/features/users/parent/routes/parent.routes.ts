import { Routes } from '@angular/router';
import {
  ParentDashboardPage,
  ParentProfilePage,
  ParentSettingsPage,
  ParentTripsPage,
} from '../pages';
import { AdminDasboardLayout } from '../../../admin/components';

export const parentRoutes: Routes = [
  {
    path: 'user/parent/dashboard',
    component: AdminDasboardLayout,
    children: [
      { path: '', component: ParentDashboardPage },
      { path: 'profile', component: ParentProfilePage },
      { path: 'trips', component: ParentTripsPage },
      { path: 'settings', component: ParentSettingsPage },
    ],
  },
];
