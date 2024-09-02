import { Component } from '@angular/core';
import { SigninFormComponent } from '../../components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cm-signin',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto flex flex-col gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Login into Account</h1>
      <p class="text-sm text-gray-600">Enter email and password to login</p>
    </div>

    <cm-signin-form></cm-signin-form>

    <p class="text-gray-600 text-center">
      Forgot Password?
      <a
        routerLink="/auth/forgot-password"
        class="text-black hover:text-amber-900 hover:underline"
        >Reset Here</a
      >
    </p>

    <p class="text-gray-600 ">
      Don't have an account?
      <a
        routerLink="/auth/signup"
        class="text-black hover:text-amber-900 hover:underline"
        >Signup Here</a
      >
    </p>
  </div>`,
  imports: [SigninFormComponent, RouterLink],
})
export class SigninPage {}
