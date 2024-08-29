import { Injectable } from '@angular/core';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

@Injectable({
  providedIn: 'root',
})
export class ClsxService {
  constructor() {}
  cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
}
