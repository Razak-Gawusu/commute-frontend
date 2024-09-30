import { Component, Input } from '@angular/core';

type Role = 'super admin' | 'admin' | 'driver' | 'school';

@Component({
  selector: 'cm-tag',
  standalone: true,
  imports: [],
  template: `
    <div
      class="bg-amber-700 text-white text-sm px-3 py-1 rounded-md capitalize"
    >
      {{ role }}
    </div>
  `,
})
export class TagComponent {
  @Input() role!: Role;
}
