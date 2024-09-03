import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'cm-radio-item',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: ` <div [formGroup]="formGroup" class="w-full">
    <input
      type="radio"
      [id]="value"
      [value]="value"
      [formControlName]="name"
      name="role"
      class="peer sr-only"
    />
    <label
      [for]="value"
      [ngClass]="[
        'rounded-md border-[1.5px] border-gray-000 p-4 hover:bg-accent hover:bg-amber-800/5 peer-checked:border-amber-800 peer-checked:text-amber-800 peer-checked:bg-amber-800/5',
        class
      ]"
    >
      <ng-content></ng-content>
    </label>
  </div>`,
})
export class RadioItemComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string | number | boolean;
  @Input() class: string = '';

  constructor() {}
}
