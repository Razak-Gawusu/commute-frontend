import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormSchema } from '../../../../utils';

@Component({
  selector: 'cm-signin-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
  template: `<form
    (ngSubmit)="onLogin()"
    [formGroup]="loginForm"
    class="grid gap-4"
  >
    <cm-input
      label="Email address"
      [required]="true"
      name="email"
      [formGroup]="loginForm"
    />
    <cm-input
      label="Password"
      [required]="true"
      type="password"
      name="password"
      [formGroup]="loginForm"
    />

    <cm-button
      [isLoading]="authService.signinMutation.isPending()"
      [disabled]="loginForm.invalid"
      class="w-full"
      >Login</cm-button
    >
  </form>`,
})
export class SigninFormComponent {
  authService: AuthService = inject(AuthService);
  loginForm: FormGroup<any>;

  constructor(formSchema: FormSchema) {
    this.loginForm = this.authService.generateForm([...formSchema.loginSchema]);
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    this.authService.signinMutation.mutate({
      email: email!,
      password: password!,
    });
  }
}
