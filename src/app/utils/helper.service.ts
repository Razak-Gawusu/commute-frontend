import { Injectable } from '@angular/core';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  toKebabCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  routes = {
    home: '/',
    auth: { login: '/admin/signin', signup: '/admin/signup' },
    user: { driver: { dashboard: '/driver/dashboard' } },
  };
}
