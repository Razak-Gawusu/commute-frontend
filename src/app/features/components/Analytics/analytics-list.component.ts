import { Component, Input } from '@angular/core';
import { Analytic } from '../../../interfaces';
import { AnalyticComponent } from './analytic-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-analytic-list',
  standalone: true,
  imports: [AnalyticComponent, CommonModule],
  template: ` <div class="flex flex-col gap-4 md:flex-row flex-wrap">
    <cm-analytic-card
      *ngFor="let item of analyticItems"
      [name]="item.name"
      [count]="item.count"
    />
  </div>`,
})
export class AnalyticListComponent {
  @Input() analyticItems: Analytic[] = [];
}
