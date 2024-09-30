import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserOptions } from '../../../interfaces';
import { lastValueFrom } from 'rxjs';
import {
  injectQueryClient,
  injectMutation,
} from '@tanstack/angular-query-experimental';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantService, UserService } from '../../../shared';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // url = 'https://commute-backend-3a0o.onrender.com';
  url = 'http://localhost:8080';

  queryClient = injectQueryClient();
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router,
    private constants: ConstantService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  options: IUserOptions[] = [
    { name: 'role', label: 'School', value: 'admin', icon: 'school' },
    { name: 'role', label: 'Driver', value: 'driver', icon: 'carTaxiFront' },
  ];

  signupMutation = injectMutation(() => ({
    mutationFn: (user: IUser) =>
      lastValueFrom(
        this.http.post<{ token: string; message: string }>(
          `${this.url}/api/v1/auth/register`,
          user
        )
      ),
    onSuccess: (res) => {
      const { token, message } = res;
      this.toastr.success(message);
      this.userService.authenticate(token);
      this.route.navigate([this.getRoute(this.userService.role)]);
    },
    onError: (err: any) => {
      this.toastr.error(err.error.message);
    },
  }));

  signinMutation = injectMutation(() => ({
    mutationFn: (data: { email: string; password: string }) =>
      lastValueFrom(
        this.http.post<{ token: string; message: string }>(
          `${this.url}/api/v1/auth/login`,
          data
        )
      ),
    onSuccess: (res) => {
      const { token, message } = res;
      this.toastr.success(message);
      this.userService.authenticate(token);
      console.log(this.getRoute(this.userService.role));
      this.route.navigate([this.getRoute(this.userService.role)]);
    },
    onError: (err: any) => {
      this.toastr.error(err?.error?.message);
    },
  }));

  forgotPasswordMutation = injectMutation(() => {
    let email = '';

    return {
      mutationFn: (data: { email: string }) => {
        email = data.email;
        return lastValueFrom(
          this.http.post<{ data: { reset_code: string } }>(
            `${this.url}/api/v1/auth/send-reset-code`,
            data
          )
        );
      },
      onSuccess: (res) => {
        const { reset_code } = res.data;
        console.log({ reset_code });
        this.route.navigate([this.constants.routes.auth.verifyOTP], {
          queryParams: { email },
        });

        this.toastr.success('OTP sent successfully');
      },
      onError: (err: any) => {
        this.toastr.error(err.error.message);
      },
    };
  });

  verifyOTPMutation = injectMutation(() => {
    let email = '';
    return {
      mutationFn: (data: { email: string; reset_code: string }) => {
        email = data.email;
        return lastValueFrom(
          this.http.post<{ data: any; message: string }>(
            `${this.url}/api/v1/auth/verify-reset-code`,
            data
          )
        );
      },
      onSuccess: (res) => {
        this.toastr.success(res.message);
        this.route.navigate([this.constants.routes.auth.resetPassword], {
          queryParams: { email },
        });
      },
      onError: (err: any) => {
        this.toastr.error(err.error.message);
      },
    };
  });

  resetPasswordMutation = injectMutation(() => ({
    mutationFn: (data: { email: string; password: string }) =>
      lastValueFrom(
        this.http.patch<{ data: any; message: string }>(
          `${this.url}/api/v1/auth/reset-password`,
          data
        )
      ),
    onSuccess: (res) => {
      this.toastr.success(res.message);
      this.route.navigate([this.constants.routes.auth.login]);
    },
    onError: (err: any) => {
      this.toastr.error(err.error.message);
    },
  }));

  createPasswordMutation = injectMutation(() => ({
    mutationFn: (data: { new_password: string }) =>
      lastValueFrom(
        this.http.post<{ data: any; message: string }>(
          `${this.url}/api/v1/auth/create-password`,
          data
        )
      ),
    onSuccess: (res) => {
      this.toastr.success(res.message);
      this.route.navigate([this.constants.routes.auth.login]);
    },
    onError: (err: any) => {
      this.toastr.error(err.error.message);
    },
  }));

  changePasswordMutation = injectMutation(() => ({
    mutationFn: (data: { current_password: string; new_password: string }) =>
      lastValueFrom(
        this.http.post<{ data: any }>(
          `${this.url}/api/v1/auth/change-password`,
          data
        )
      ),
    onSuccess: (res) => {
      console.log({ res });
    },
    onError: (err) => {
      console.log({ err });
    },
  }));

  logout() {
    localStorage.removeItem('commute-user');
    this.route.navigate([this.constants.routes.auth.login]);
  }

  getRoute(type?: string | null) {
    switch (type) {
      case 'super_admin':
        return this.constants.routes.super_admin.dashboard;
      case 'driver':
        return this.constants.routes.user.driver.dashboard;
      case 'admin':
        return this.constants.routes.user.school.dashboard;
      case 'parent':
        return this.constants.routes.user.parent.dashboard;
      default:
        return this.constants.routes.auth.login;
    }
  }
}
