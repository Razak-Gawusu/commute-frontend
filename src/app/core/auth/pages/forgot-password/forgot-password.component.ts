import { Component, inject } from '@angular/core';
import { SigninFormComponent } from '../../components';
import { RouterLink } from '@angular/router';
import { ForgotPasswordFormComponent } from '../../components/forget-password-form';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services';
import { FormSchemaService } from '../../../../shared';

@Component({
  selector: 'cm-forgot-password',
  standalone: true,
  providers: [],
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Forgot Password</h1>
      <p class="text-sm text-gray-600">
        Enter your Registered email address to proceed
      </p>
    </div>

    <cm-forgot-password-form
      (forgotPasswordEvent)="onForgotPassword()"
      [formGroup]="forgotPasswordForm"
      [isLoading]="authService.forgotPasswordMutation.isPending()"
    />
    <p class="text-gray-600 text-center">
      Remember password?
      <a
        routerLink="/auth/signin"
        class="text-black hover:text-amber-900 hover:underline"
        >Signin</a
      >
    </p>
  </div>`,
  imports: [ForgotPasswordFormComponent, RouterLink],
})
export class ForgotPasswordPage {
  forgotPasswordForm: FormGroup<any>;
  authService: AuthService = inject(AuthService);

  constructor(formSchema: FormSchemaService) {
    this.forgotPasswordForm = formSchema.generateForm([
      ...formSchema.forgotPasswordSchema,
    ]);
  }

  onForgotPassword() {
    const { email } = this.forgotPasswordForm.value;

    this.authService.forgotPasswordMutation.mutate({
      email: email!,
    });
  }
}
