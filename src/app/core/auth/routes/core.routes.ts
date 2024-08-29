import { Routes } from '@angular/router';
import { SignupPage, SigninPage } from '../pages';
import { AuthLayoutCompoment } from '../components';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutCompoment,
    children: [
      { path: 'signin', component: SigninPage, title: 'signin | commute' },
      { path: 'signup', component: SignupPage, title: 'signup | commute' },
    ],
  },
];
