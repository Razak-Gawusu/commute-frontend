import { Component, inject, OnInit } from '@angular/core';
import { VerifyOTPFormComponent } from '../../components';
import { FormSchemaService } from '../../../../shared';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cm-verify-otp',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Verify OTP</h1>
      <p class="text-sm text-gray-600">Enter verification OTP</p>
    </div>

    <cm-verify-otp-form
      (verifyOTPEvent)="onVerifyOTP()"
      (resendOTPEvent)="onResendOTP()"
      [formGroup]="verifyOTPForm"
      [isLoading]="authService.verifyOTPMutation.isPending()"
    />
  </div>`,
  imports: [VerifyOTPFormComponent],
})
export class VerifyOTPPage implements OnInit {
  authService: AuthService = inject(AuthService);
  verifyOTPForm: FormGroup<any>;
  email: string = '';
  constructor(private route: ActivatedRoute, formSchema: FormSchemaService) {
    this.verifyOTPForm = formSchema.generateForm([
      ...formSchema.verifyOTPSchema,
    ]);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  onResendOTP() {
    this.authService.forgotPasswordMutation.mutate({
      email: this.email,
    });
  }

  onVerifyOTP() {
    const { reset_code } = this.verifyOTPForm.value;

    this.authService.verifyOTPMutation.mutate({
      reset_code,
      email: this.email,
    });
  }
}
