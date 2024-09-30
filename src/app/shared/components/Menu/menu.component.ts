import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cm-menu',
  standalone: true,
  imports: [MenuModule, LucideAngularModule],
  template: `
    <div class="card flex justify-content-center">
      <p-menu class="p-item" #menu [model]="items" [popup]="true" />
      <button
        (click)="menu.toggle($event)"
        class="grid place-items-center h-10 w-10 rounded-sm hover:border hover:bg-gray-100"
      >
        <lucide-icon
          [name]="iconName || 'chevronDown'"
          size="20"
          color="#4b5563"
        />
      </button>
    </div>
  `,
})
export class MenuComponent {
  @Input() items!: MenuItem[];
  @Input() iconName?: string;
}
