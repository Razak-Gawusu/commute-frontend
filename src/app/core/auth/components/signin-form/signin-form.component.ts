import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../../../shared/components';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    [formGroup]="formGroup"
    class="grid gap-4"
  >
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

    <cm-button
      [isLoading]="isLoading"
      [disabled]="formGroup.invalid"
      class="w-full"
      >Login</cm-button
    >
  </form>`,
})
export class SigninFormComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() isLoading!: boolean;
  @Output() loginEvent = new EventEmitter();

  onLogin() {
    this.loginEvent.emit();
  }
}
