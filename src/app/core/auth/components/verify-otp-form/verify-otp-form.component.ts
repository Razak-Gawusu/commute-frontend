import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-verify-otp-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  template: `<form
    (ngSubmit)="onVerifyOTP()"
    [formGroup]="verifyOTPForm"
    class="grid gap-4"
  >
    <cm-input
      label="OTP code"
      [required]="true"
      name="otp"
      [formGroup]="verifyOTPForm"
    />

    <cm-button
      [isLoading]="authService.forgotPasswordMutation.isPending()"
      class="w-full"
      >Verify OTP</cm-button
    >
  </form>`,
})
export class VerifyOTPormComponent {
  authService: AuthService = inject(AuthService);
  verifyOTPForm: FormGroup<any>;

  constructor() {
    this.verifyOTPForm = this.authService.verifyOTPForm;
  }

  onVerifyOTP() {
    const { otp } = this.verifyOTPForm.value;
    this.authService.verifyOTPMutation.mutate({ otp });
  }
}
