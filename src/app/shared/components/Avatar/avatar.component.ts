import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cm-avatar',
  standalone: true,
  template: `
    <div class="w-10 h-10 bg-amber-800 rounded-full overflow-hidden p-1">
      <img [src]="src" alt="avatar" />
    </div>
  `,
})
export class AvatarComponent implements OnChanges {
  @Input() name!: string;
  src: string;

  constructor() {
    this.src = this.generateDiceImage(this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.src = this.generateDiceImage(changes['name'].currentValue);
  }

  generateDiceImage(name: string) {
    return `https://api.dicebear.com/9.x/initials/svg?seed=${name}&backgroundColor=92400e`;
  }
}
