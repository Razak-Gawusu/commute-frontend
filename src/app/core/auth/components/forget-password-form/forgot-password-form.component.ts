import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-forgot-password-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  template: `<form
    (ngSubmit)="onForgotPassword()"
    [formGroup]="forgetPasswordForm"
    class="grid gap-4"
  >
    <cm-input
      label="Email address"
      [required]="true"
      name="email"
      [formGroup]="forgetPasswordForm"
    />

    <cm-button
      [isLoading]="authService.forgotPasswordMutation.isPending()"
      class="w-full"
      >Send OTP</cm-button
    >
  </form>`,
})
export class ForgotPasswordFormComponent {
  authService: AuthService = inject(AuthService);
  forgetPasswordForm: FormGroup<any>;

  constructor() {
    this.forgetPasswordForm = this.authService.loginForm;
  }

  onForgotPassword() {
    const { email, password } = this.forgetPasswordForm.value;
    this.authService.forgotPasswordMutation.mutate({ email });
  }
}
