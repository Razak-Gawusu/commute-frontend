import { Routes } from '@angular/router';
import {
  SignupPage,
  SigninPage,
  ForgotPasswordPage,
  VerifyOTPPage,
  ResetPasswordPage,
} from '../pages';
import { AuthLayoutCompoment } from '../components';
import { CreatePasswordPage } from '../pages/create-password';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutCompoment,
    children: [
      { path: 'signin', component: SigninPage, title: 'signin | commute' },
      { path: 'signup', component: SignupPage, title: 'signup | commute' },
      {
        path: 'forgot-password',
        component: ForgotPasswordPage,
        title: 'Forgot password | commute',
      },
      {
        path: 'verify-otp',
        component: VerifyOTPPage,
        title: 'Verify OTP | commute',
      },
      {
        path: 'reset-password',
        component: ResetPasswordPage,
        title: 'Reset password | commute',
      },
      {
        path: 'create-password',
        component: CreatePasswordPage,
        title: 'Create password | commute',
      },
    ],
  },
];
