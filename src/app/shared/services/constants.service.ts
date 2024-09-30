import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  routes = {
    home: '/',
    auth: {
      login: '/auth/signin',
      signup: '/auth/signup',
      forgotPassword: '/auth/forgot-password',
      verifyOTP: '/auth/verify-otp',
      resetPassword: '/auth/reset-password',
      createPassword: '/auth/create-password',
    },
    super_admin: {
      dashboard: '/admin/dashboard',
      schools: '/admin/dashboard/schools',
      drivers: '/admin/dashboard/drivers',
      trips: '/admin/dashboard/trips',
      settings: '/admin/dashboard/settings',
      customer_support: '/admin/dashboard/customer-support',
    },
    user: {
      driver: {
        dashboard: '/user/driver/dashboard',
        settings: '/user/driver/dashboard/settings',
      },
      parent: {
        dashboard: '/user/parent/dashboard',
        settings: '/user/parent/dashboard/settings',
      },
      school: {
        dashboard: '/user/school/dashboard',
        settings: '/user/school/dashboard/settings',
      },
    },
  };
}
