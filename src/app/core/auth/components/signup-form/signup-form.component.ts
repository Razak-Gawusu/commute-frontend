import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  RadioGroupComponent,
} from '../../../../shared/components';
import { LucideAngularModule } from 'lucide-angular';
import { NgFor } from '@angular/common';
import { IUserOptions } from '../../../../interfaces';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services';

@Component({
  selector: 'cm-signup-form',
  standalone: true,
  imports: [
    NgFor,
    InputComponent,
    ButtonComponent,
    LucideAngularModule,
    RadioGroupComponent,
    ReactiveFormsModule,
  ],
  template: `<form
    (ngSubmit)="onRegister()"
    [formGroup]="formGroup"
    class="grid gap-6"
  >
    <cm-input
      label="First name"
      name="first_name"
      [required]="true"
      [formGroup]="formGroup"
    />
    <cm-input
      label="Last name"
      name="last_name"
      [required]="true"
      [formGroup]="formGroup"
    />
    <cm-input
      label="Email address"
      [required]="true"
      name="email"
      [formGroup]="formGroup"
    />
    <cm-input
      label="Password"
      [required]="true"
      type="password"
      name="password"
      [formGroup]="formGroup"
    />

    <cm-radio-group
      name="role"
      label="Choose what best describes your role"
      [options]="options"
      [required]="true"
      [formGroup]="formGroup"
    ></cm-radio-group>

    <cm-button [isLoading]="isLoading" class="w-full">Create Account</cm-button>
  </form>`,
})
export class SignupFormComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() options!: IUserOptions[];
  @Input() isLoading!: boolean;
  @Output() registerEvent = new EventEmitter();

  onRegister() {
    this.registerEvent.emit();
  }
}
