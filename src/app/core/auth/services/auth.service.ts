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
import { jwtDecode } from 'jwt-decode';

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
    private contants: ContantService
  ) {}

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

  options: IUserOptions[] = [
    { name: 'role', label: 'School', value: 'admin', icon: 'school' },
    { name: 'role', label: 'Driver', value: 'driver', icon: 'carTaxiFront' },
  ];

  signupMutation = injectMutation(() => ({
    mutationFn: (user: IUser) =>
      lastValueFrom(
        this.http.post<{ token: string }>(
          `${this.url}/api/v1/auth/register`,
          user
        )
      ),
    onSuccess: (res) => {
      const { token } = res;
      const decoded: IUser = jwtDecode(token);
      this.route.navigate([this.getRoute(decoded?.role)]);
    },
  }));

  signinMutation = injectMutation(() => ({
    mutationFn: (data: { email: string; password: string }) =>
      lastValueFrom(
        this.http.post<{ token: string }>(`${this.url}/api/v1/auth/login`, data)
      ),
    onSuccess: (res) => {
      const { token } = res;
      const decoded: IUser = jwtDecode(token);
      console.log({ decoded });
      this.route.navigate([this.getRoute(decoded?.role)]);
    },
  }));

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
