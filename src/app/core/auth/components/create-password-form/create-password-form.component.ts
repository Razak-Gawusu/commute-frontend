import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
    [formGroup]="formGroup"
    class="grid gap-4"
  >
    <cm-input
      label="Password"
      [required]="true"
      name="new_password"
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
export class CreatePasswordFormComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() isLoading!: boolean;
  @Output() createPasswordEvent = new EventEmitter();

  onCreatePassword() {
    this.createPasswordEvent.emit();
  }
}
