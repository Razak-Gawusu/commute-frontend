import { Injectable } from '@angular/core';
import { cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { Config } from 'tailwind-merge';

@Injectable({
  providedIn: 'root',
})
export class CvaService {
  cvAuthority(base: any, config?: any) {
    return cva(base, config);
  }
}
