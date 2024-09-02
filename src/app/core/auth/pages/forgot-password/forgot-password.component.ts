import { Component } from '@angular/core';
import { SigninFormComponent } from '../../components';
import { RouterLink } from '@angular/router';
import { ForgotPasswordFormComponent } from '../../components/forget-password-form';

@Component({
  selector: 'cm-forgot-password',
  standalone: true,
  providers: [],
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Forgot Password</h1>
      <p class="text-sm text-gray-600">
        Enter your Registered email address to proceed
      </p>
    </div>

    <cm-forgot-password-form />
    <p class="text-gray-600 text-center">
      Remember password?
      <a
        routerLink="/auth/signin"
        class="text-black hover:text-amber-900 hover:underline"
        >Signin</a
      >
    </p>
  </div>`,
  imports: [ForgotPasswordFormComponent, RouterLink],
})
export class ForgotPasswordPage {}
