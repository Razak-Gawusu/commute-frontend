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
import { ContantService } from '../../../utils';
import { UserService } from '../../../shared';
import { ToastrService } from 'ngx-toastr';

type foB = {
  name: string;
  initialValue: string;
  validators: any[];
};

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

  registerForm = this.fb.group({
    first_name: this.fb.control('', Validators.required),
    last_name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.email),
    password: this.fb.control('', Validators.required),
    role: this.fb.control(''),
  });

  loginForm = this.fb.group({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  forgotPasswordForm = this.fb.group({
    email: this.fb.control('', Validators.required),
  });

  resetPasswordForm = this.fb.group({
    password: this.fb.control('', Validators.required),
    confirm_password: this.fb.control('', Validators.required),
  });

  createPasswordForm = this.fb.group({
    new_password: this.fb.control('', Validators.required),
    confirm_password: this.fb.control('', [Validators.required]),
  });

  verifyOTPForm = this.fb.group({
    otp: this.fb.control('', Validators.required),
  });

  // generate form {name: string, initialValue: string, isRequired: boolean, errorMessage: string}[]

  generateForm(arr: foB[]) {
    const obj = Object.create({});

    for (let item of arr) {
      obj[item.name] = this.fb.control(item.initialValue || '', [
        ...item.validators,
      ]);
    }

    return this.fb.group({ ...obj }, { updateOn: 'blur' });
  }

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
    onError: (err) => {
      this.toastr.error(err.message);
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

  forgotPasswordMutation = injectMutation(() => ({
    mutationFn: (data: { email: string }) =>
      lastValueFrom(
        this.http.post<{ data: any }>(
          `${this.url}/api/v1/auth/send-reset-code`,
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

  verifyOTPMutation = injectMutation(() => ({
    mutationFn: (data: { otp: string }) =>
      lastValueFrom(
        this.http.post<{ data: any }>(
          `${this.url}/api/v1/auth/verify-reset-code`,
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

  resetPasswordMutation = injectMutation(() => ({
    mutationFn: (data: { email: string; password: string }) =>
      lastValueFrom(
        this.http.patch<{ data: any }>(
          `${this.url}/api/v1/auth/reset-password`,
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

  createPasswordMutation = injectMutation(() => ({
    mutationFn: (data: { new_password: string }) =>
      lastValueFrom(
        this.http.post<{ data: any }>(
          `${this.url}/api/v1/auth/create-password`,
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
