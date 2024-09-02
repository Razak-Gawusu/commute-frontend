import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-create-password-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  template: `<form
    (ngSubmit)="onCreatePassword()"
    [formGroup]="createPasswordForm"
    class="grid gap-4"
  >
    <cm-input
      label="Password"
      [required]="true"
      name="new_password"
      [formGroup]="createPasswordForm"
    />
    <cm-input
      label="Confirm Password"
      [required]="true"
      type="password"
      name="confirm_password"
      [formGroup]="createPasswordForm"
    />

    <cm-button
      [isLoading]="authService.createPasswordMutation.isPending()"
      class="w-full"
      >Save</cm-button
    >
  </form>`,
})
export class CreatePasswordFormComponent {
  authService: AuthService = inject(AuthService);
  createPasswordForm: FormGroup<any>;

  constructor() {
    this.createPasswordForm = this.authService.createPasswordForm;
  }

  onCreatePassword() {
    const { new_password } = this.createPasswordForm.value;
    this.authService.createPasswordMutation.mutate({ new_password });
  }
}
