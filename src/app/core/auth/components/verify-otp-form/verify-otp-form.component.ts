import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';
import { ResendCodeCountdownComponent } from '../resend-otp';

@Component({
  selector: 'cm-verify-otp-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
    ResendCodeCountdownComponent,
  ],
  template: `<form
    (ngSubmit)="onVerifyOTP()"
    [formGroup]="formGroup"
    class="grid gap-4"
  >
    <cm-input
      label="OTP code"
      [required]="true"
      name="reset_code"
      [formGroup]="formGroup"
    />

    <cm-resend-code-countdown (resendCodeEvent)="onResendOTP()" />

    <cm-button [isLoading]="isLoading" class="w-full">Verify OTP</cm-button>
  </form>`,
})
export class VerifyOTPFormComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() isLoading!: boolean;
  @Output() verifyOTPEvent = new EventEmitter();
  @Output() resendOTPEvent = new EventEmitter();

  onVerifyOTP() {
    this.verifyOTPEvent.emit();
  }
  onResendOTP() {
    this.resendOTPEvent.emit();
  }
}
