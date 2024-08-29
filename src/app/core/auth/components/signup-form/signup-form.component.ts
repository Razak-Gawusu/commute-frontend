import {
  Component,
  inject,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  RadioGroupComponent,
} from '../../../../shared/components';
import { LucideAngularModule } from 'lucide-angular';
import { NgFor } from '@angular/common';
import { IUserOptions } from '../../../../interfaces';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-signup-form',
  standalone: true,
  imports: [
    NgFor,
    InputComponent,
    ButtonComponent,
    LucideAngularModule,
    RadioGroupComponent,
    ReactiveFormsModule,
  ],
  template: `<form
    (ngSubmit)="register()"
    [formGroup]="registerForm"
    class="grid gap-6"
  >
    <cm-input
      label="First name"
      name="first_name"
      [required]="true"
      [formGroup]="registerForm"
    />
    <cm-input
      label="Last name"
      name="last_name"
      [required]="true"
      [formGroup]="registerForm"
    />
    <cm-input
      label="Email address"
      [required]="true"
      name="email"
      [formGroup]="registerForm"
    />
    <cm-input
      label="Password"
      [required]="true"
      type="password"
      name="password"
      [formGroup]="registerForm"
    />

    <cm-radio-group
      name="role"
      label="Choose what best describes your role"
      [options]="options"
      [required]="true"
      [formGroup]="registerForm"
    ></cm-radio-group>

    <cm-button
      [isLoading]="authService.signupMutation.isPending()"
      class="w-full"
      >Create Account</cm-button
    >
  </form>`,
})
export class SignupFormComponent {
  registerForm: FormGroup<any>;
  options: IUserOptions[] = [];
  authService: AuthService = inject(AuthService);

  constructor() {
    this.registerForm = this.authService.registerForm;
    this.options = this.authService.options;
  }

  register() {
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
