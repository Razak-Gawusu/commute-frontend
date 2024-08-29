import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  QueryClient,
  provideAngularQuery,
} from '@tanstack/angular-query-experimental';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { requestInterceptor } from './interceptors';
import { icons, LucideAngularModule } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(icons)),
    provideHttpClient(withFetch(), withInterceptors([requestInterceptor])),
    provideAngularQuery(new QueryClient()),
  ],
};
