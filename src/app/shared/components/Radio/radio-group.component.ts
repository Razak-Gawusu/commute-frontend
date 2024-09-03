import { Component, Input } from '@angular/core';
import { RadioItemComponent } from './radio-item.component';
import { LucideAngularModule } from 'lucide-angular';
import { NgFor, NgIf } from '@angular/common';
import { IUserOptions } from '../../../interfaces';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'cm-radio-group',
  standalone: true,
  template: ` <div [formGroup]="formGroup" class="space-y-1">
    <label
      >{{ label }} <span *ngIf="required" class="text-red-500">*</span></label
    >

    <div class="flex gap-4">
      <cm-radio-item
        *ngFor="let item of options"
        [name]="name"
        [value]="item.value"
        [label]="item.label"
        [formGroup]="formGroup"
        class="w-full h-28 flex justify-center items-center"
      >
        <div
          *ngIf="item.icon"
          class="flex flex-col justify-center items-center"
        >
          <lucide-icon
            [name]="item.icon"
            class="w-8 h-8 md:w-10 md:h-10"
          ></lucide-icon>
          <p class="md:text-xl">{{ item.label }}</p>
        </div>
      </cm-radio-item>
    </div>
  </div>`,
  imports: [
    RadioItemComponent,
    LucideAngularModule,
    NgFor,
    NgIf,
    ReactiveFormsModule,
  ],
})
export class RadioGroupComponent {
  @Input() formGroup!: FormGroup<any>;
  @Input() required?: boolean;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) options!: IUserOptions[];

  constructor() {}
}
