import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cm-forgot-password-form',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    LucideAngularModule,
  ],
  template: `<form
    (ngSubmit)="onForgotPassword()"
    [formGroup]="formGroup"
    class="grid gap-4"
  >
    <cm-input
      label="Email address"
      [required]="true"
      name="email"
      [formGroup]="formGroup"
    />

    <cm-button [isLoading]="isLoading" class="w-full">Send OTP</cm-button>
  </form>`,
})
export class ForgotPasswordFormComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() isLoading!: boolean;
  @Output() forgotPasswordEvent = new EventEmitter();

  onForgotPassword() {
    this.forgotPasswordEvent.emit();
  }
}
