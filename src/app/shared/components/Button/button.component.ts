import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule, NgIf } from '@angular/common';
import { VariantProps } from 'class-variance-authority';
import { HelperService, ComponentStyleService } from '../../index';

@Component({
  selector: 'cm-button',
  standalone: true,
  imports: [LucideAngularModule, NgIf, CommonModule],
  template: `
    <button
      (click)="onClick($event)"
      [type]="type"
      [disabled]="disabled"
      [ngClass]="[buttonVariants({ variant, size }), 'flex gap-2 items-center', class]"
    >
      <lucide-icon
        *ngIf="isLoading; else show"
        name="loaderCircle"
        class="animate-spin"
      />

      <ng-template #show>
        <ng-content></ng-content>
      </ng-template>
    </button>
  `,
})
export class ButtonComponent {
  buttonVariants;
  @Input() class?: string = '';
  @Input() isLoading?: boolean;
  @Input() disabled?: boolean;
  @Input() type?: 'button' | 'submit' | 'reset' | 'menu';
  @Input() size?: VariantProps<typeof this.variants.buttonVariants>['size'];
  @Input() variant?: VariantProps<
    typeof this.variants.buttonVariants
  >['variant'];
  @Output() click = new EventEmitter<any>();

  constructor(
    private helper: HelperService,
    private variants: ComponentStyleService
  ) {
    this.buttonVariants = variants.buttonVariants;
  }

  onClick($event: any) {
    this.click.emit($event);
  }
}
