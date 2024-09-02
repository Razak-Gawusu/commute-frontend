import { Component } from '@angular/core';
import { SigninFormComponent } from '../../components';
import { RouterLink } from '@angular/router';
import { VerifyOTPormComponent } from '../../components/verify-otp-form/verify-otp-form.component';

@Component({
  selector: 'cm-verify-otp',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Verify OTP</h1>
      <p class="text-sm text-gray-600">Enter verification OTP</p>
    </div>

    <cm-verify-otp-form />
  </div>`,
  imports: [VerifyOTPormComponent],
})
export class VerifyOTPPage {}
