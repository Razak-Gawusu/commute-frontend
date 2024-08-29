import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components';
import { RouterLink } from '@angular/router';
import { SigninFormComponent } from '../../components/signin-form/signin-form.component';

@Component({
  selector: 'cm-signup',
  imports: [SignupFormComponent, RouterLink],
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Get Started with Commute</h1>
      <p>Manage your ward's commuting easily starting from now!</p>
    </div>

    <cm-signup-form />

    <div>
      <p class="text-gray-600">
        Already have an account?
        <a
          routerLink="/auth/signin"
          class="text-black hover:text-amber-900 hover:underline"
          >Signin Here</a
        >
      </p>
    </div>
  </div>`,
  standalone: true,
})
export class SignupPage {
  constructor() {}
}
