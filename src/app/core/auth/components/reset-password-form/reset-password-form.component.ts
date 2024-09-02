import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-reset-password-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  template: `<form
    (ngSubmit)="onResetPassword()"
    [formGroup]="resetPasswordForm"
    class="grid gap-4"
  >
    <cm-input
      label="Password"
      [required]="true"
      name="password"
      [formGroup]="resetPasswordForm"
    />
    <cm-input
      label="Confirm Password"
      [required]="true"
      type="password"
      name="confirm_password"
      [formGroup]="resetPasswordForm"
    />

    <cm-button
      [isLoading]="authService.resetPasswordMutation.isPending()"
      class="w-full"
      >Save</cm-button
    >
  </form>`,
})
export class ResetPasswordFormComponent {
  authService: AuthService = inject(AuthService);
  resetPasswordForm: FormGroup<any>;

  constructor() {
    this.resetPasswordForm = this.authService.loginForm;
  }

  onResetPassword() {
    const { password } = this.resetPasswordForm.value;
    // replace with params.email
    const email = 'mutala@gmail.com';
    this.authService.resetPasswordMutation.mutate({ email, password });
  }
}
