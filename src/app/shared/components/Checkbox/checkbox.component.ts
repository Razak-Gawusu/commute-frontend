import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-checkbox',
  standalone: true,
  template: `
    <div>
      <label for="">{{ label }}</label>
      <input type="checkbox" [disabled]="disabled" />
    </div>
  `,
  imports: [],
})
export class CheckboxComponent {
  @Input({ required: true }) label!: string;
  @Input() disabled: boolean = false;
}
