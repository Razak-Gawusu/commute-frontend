import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
    [formGroup]="formGroup"
    class="grid gap-4"
  >
    <cm-input
      label="Password"
      [required]="true"
      type="password"
      name="password"
      [formGroup]="formGroup"
    />
    <cm-input
      label="Confirm Password"
      [required]="true"
      type="password"
      name="confirm_password"
      [formGroup]="formGroup"
    />

    <cm-button [isLoading]="isLoading" class="w-full">Save</cm-button>
  </form>`,
})
export class ResetPasswordFormComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() isLoading!: boolean;
  @Output() resetPasswordEvent = new EventEmitter();

  onResetPassword() {
    this.resetPasswordEvent.emit();
  }
}
