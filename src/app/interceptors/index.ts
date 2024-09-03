import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../shared';

export const requestInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const userService: UserService = inject(UserService);

  const token = userService.getToken();

  const clone = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

  return next(clone);
};
