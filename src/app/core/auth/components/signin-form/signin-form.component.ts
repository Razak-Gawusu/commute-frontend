import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-signin-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  template: `<form
    (ngSubmit)="onLogin()"
    [formGroup]="loginForm"
    class="grid gap-4"
  >
    <cm-input
      label="Email address"
      [required]="true"
      name="email"
      [formGroup]="loginForm"
    />
    <cm-input
      label="Password"
      [required]="true"
      type="password"
      name="password"
      [formGroup]="loginForm"
    />

    <cm-button
      [isLoading]="authService.signinMutation.isPending()"
      class="w-full"
      >Login</cm-button
    >
  </form>`,
})
export class SigninFormComponent {
  authService: AuthService = inject(AuthService);
  loginForm: FormGroup<any>;

  constructor() {
    this.loginForm = this.authService.loginForm;
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authService.signinMutation.mutate({ email, password });
  }
}
