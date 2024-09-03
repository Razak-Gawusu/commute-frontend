import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserOptions } from '../../../interfaces';
import { lastValueFrom } from 'rxjs';
import {
  injectQueryClient,
  injectMutation,
} from '@tanstack/angular-query-experimental';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContantService, UserService } from '../../../shared';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://commute-backend-3a0o.onrender.com';

  queryClient = injectQueryClient();
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router,
    private contants: ContantService,
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
      this.route.navigate([this.getRoute(this.userService.getRole())]);
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
      this.route.navigate([this.getRoute(this.userService.getRole())]);
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
        this.route.navigate([this.contants.routes.auth.verifyOTP], {
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
        this.route.navigate([this.contants.routes.auth.resetPassword], {
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
      this.route.navigate([this.contants.routes.auth.login]);
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
      this.route.navigate([this.contants.routes.auth.login]);
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
    this.route.navigate([this.contants.routes.auth.login]);
  }

  getRoute(type?: string | null) {
    switch (type) {
      case 'driver':
        return this.contants.routes.user.driver.dashboard;
      case 'admin':
        return this.contants.routes.user.school.dashboard;
      case 'parent':
        return this.contants.routes.user.parent.dashboard;
      default:
        return this.contants.routes.auth.login;
    }
  }
}
