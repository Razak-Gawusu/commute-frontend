import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContantService {
  routes = {
    home: '/',
    auth: {
      login: 'auth/signin',
      signup: 'auth/signup',
      forgotPassword: 'auth/forgot-password',
      verifyOTP: 'auth/verify-otp',
      resetPassword: 'auth/reset-password',
      createPassword: 'auth/create-password',
    },
    user: {
      driver: { dashboard: 'user/driver/dashboard' },
      parent: { dashboard: 'user/parent/dashboard' },
      school: { dashboard: 'user/school/dashboard' },
    },
  };
}
