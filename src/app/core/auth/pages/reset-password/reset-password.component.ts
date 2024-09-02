import { Component } from '@angular/core';
import { ResetPasswordFormComponent } from '../../components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cm-reset-password',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Reset Password</h1>
      <p class="text-sm text-gray-600">
        Enter your new password and confirm your new password
      </p>
    </div>

    <cm-reset-password-form />
  </div>`,
  imports: [ResetPasswordFormComponent, RouterLink],
})
export class ResetPasswordPage {}
