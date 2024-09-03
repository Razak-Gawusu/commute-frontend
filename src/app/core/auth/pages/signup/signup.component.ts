import { Component, inject } from '@angular/core';
import { SignupFormComponent } from '../../components';
import { RouterLink } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services';
import { FormSchemaService } from '../../../../shared';

@Component({
  selector: 'cm-signup',
  imports: [SignupFormComponent, RouterLink],
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Get Started with Commute</h1>
      <p>Manage your ward's commuting easily starting from now!</p>
    </div>

    <cm-signup-form
      [formGroup]="registerForm"
      [isLoading]="authService.signupMutation.isPending()"
      (registerEvent)="onRegister()"
      [options]="authService.options"
    />

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
  registerForm: FormGroup<any>;
  authService: AuthService = inject(AuthService);

  constructor(formSchema: FormSchemaService) {
    this.registerForm = formSchema.generateForm([...formSchema.registerSchema]);
  }

  onRegister() {
    const { first_name, last_name, email, password, role } =
      this.registerForm.value;

    this.authService.signupMutation.mutate({
      first_name,
      last_name,
      email,
      password,
      role,
    });
  }
}
