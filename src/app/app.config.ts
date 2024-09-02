import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
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
import { ToastrModule, provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick(icons),
      BrowserModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
    ),
    provideHttpClient(withFetch(), withInterceptors([requestInterceptor])),
    provideAngularQuery(new QueryClient()),
    provideAnimations(),
    provideToastr(),
  ],
};
