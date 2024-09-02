import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreatePasswordFormComponent } from '../../components/create-password-form';
import { UserTagComponent } from '../../../../shared/components/UserTag/user-tag.component';

@Component({
  selector: 'cm-create-password',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Create Password</h1>
      <p class="text-sm text-gray-600">
        Enter your new password and confirm your new password
      </p>
    </div>

    <cm-user-tag />

    <cm-create-password-form />
  </div>`,
  imports: [CreatePasswordFormComponent, RouterLink, UserTagComponent],
})
export class CreatePasswordPage {}
