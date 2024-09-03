import { Component, inject, OnInit } from '@angular/core';
import { ResetPasswordFormComponent } from '../../components';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../services';
import { FormSchemaService } from '../../../../shared';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cm-reset-password',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Reset Password</h1>
      <p class="text-sm text-gray-600">
        Enter your new password and confirm your new password
      </p>
    </div>

    <cm-reset-password-form
      [formGroup]="resetPasswordForm"
      [isLoading]="authService.resetPasswordMutation.isPending()"
      (resetPasswordEvent)="onResetPassword()"
    />
  </div>`,
  imports: [ResetPasswordFormComponent, RouterLink],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm: FormGroup<any>;
  authService: AuthService = inject(AuthService);
  email: string = '';

  constructor(private route: ActivatedRoute, formSchema: FormSchemaService) {
    this.resetPasswordForm = formSchema.generateForm(
      formSchema.resetPasswordSchema
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.email = params['email'])
    );
  }

  onResetPassword() {
    const { password } = this.resetPasswordForm.value;

    this.authService.resetPasswordMutation.mutate({
      email: this.email,
      password,
    });
  }
}
