import { Injectable } from '@angular/core';
import { cva } from 'class-variance-authority';

@Injectable({
  providedIn: 'root',
})
export class ComponentStyleService {
  public buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-amber-900 text-white hover:bg-amber-800',
          secondary: 'bg-slate-700 text-white hover:bg-slate-600',
          outline: 'border border-[#CDD3D3] bg-white hover:bg-gray-100',
          link: 'text-black hover:underline',
          destructive: 'bg-red-500 text-white hover:bg-red-600',
          ghost: 'bg-transparent hover:text-amber-700',
          white: 'bg-white text-red-500',
        },
        size: {
          default: 'h-12 px-4 py-2 rounded-md',
          sm: 'h-9 rounded-md px-3',
          lg: 'rounded-md px-8 py-4 text-xl',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  );
}
