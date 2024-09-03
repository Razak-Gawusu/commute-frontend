import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ValdemortModule } from 'ngx-valdemort';

@Component({
  selector: 'cm-input',
  standalone: true,
  imports: [NgIf, LucideAngularModule, ReactiveFormsModule, ValdemortModule],
  template: `
    <div [formGroup]="formGroup" class="space-y-1">
      <label [for]="label" class="cursor-pointer"
        >{{ label }} <span *ngIf="required" class="text-red-500">*</span></label
      >
      <div
        class="h-12 rounded-md flex items-center overflow-hidden ring-1 ring-gray-200 focus-within-ring-1 focus-within:ring-amber-700"
      >
        <input
          [id]="label"
          [type]="showPassword ? 'text' : type"
          type="text"
          class="h-full w-full outline-none px-2"
          [formControlName]="name"
        />

        <button
          type="button"
          (click)="toggleShowPassword()"
          *ngIf="isPassword"
          class="m-2"
        >
          <lucide-icon
            [name]="showPassword ? 'eye' : 'eyeOff'"
            class="text-gray-400 w-5 h-5"
          ></lucide-icon>
        </button>
      </div>
      <val-errors errors [controlName]="name" [label]="label">
        <ng-template valError="required">
          <span class="text-xs text-red-500"> {{ label }} is required </span>
        </ng-template>
        <ng-template valError="email">
          <span class="text-xs text-red-500">
            The email must be a valid email address
          </span>
        </ng-template>
        <ng-template
          valError="max"
          let-error="error"
          class="text-xs text-red-500"
          ><span class="text-xs text-red-500">
            You must be at least {{ error.min }} years old
          </span>
        </ng-template>
      </val-errors>
    </div>
  `,
})
export class InputComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input() formGroup!: FormGroup<any>;
  @Input({ required: true }) label!: string;
  @Input() required?: boolean;
  @Input() type?: 'text' | 'password' | 'email' | 'button' = 'text';
  @Input() error?: boolean;
  isPassword: boolean = false;
  showPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isPassword = this.type === 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
