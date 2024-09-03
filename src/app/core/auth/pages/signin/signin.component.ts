import { Component, inject } from '@angular/core';
import { SigninFormComponent } from '../../components';
import { RouterLink } from '@angular/router';
import { FormSchemaService } from '../../../../shared';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-signin',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto flex flex-col gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Login into Account</h1>
      <p class="text-sm text-gray-600">Enter email and password to login</p>
    </div>

    <cm-signin-form
      [formGroup]="loginForm"
      [isLoading]="authService.signinMutation.isPending()"
      (loginEvent)="onLogin()"
    />

    <p class="text-gray-600 text-center">
      Forgot Password?
      <a
        routerLink="/auth/forgot-password"
        class="text-black hover:text-amber-900 hover:underline"
        >Reset Here</a
      >
    </p>

    <p class="text-gray-600 ">
      Don't have an account?
      <a
        routerLink="/auth/signup"
        class="text-black hover:text-amber-900 hover:underline"
        >Signup Here</a
      >
    </p>
  </div>`,
  imports: [SigninFormComponent, RouterLink],
})
export class SigninPage {
  loginForm: FormGroup<any>;
  authService: AuthService = inject(AuthService);

  constructor(formSchema: FormSchemaService) {
    this.loginForm = formSchema.generateForm([...formSchema.loginSchema]);
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    this.authService.signinMutation.mutate({
      email: email!,
      password: password!,
    });
  }
}
