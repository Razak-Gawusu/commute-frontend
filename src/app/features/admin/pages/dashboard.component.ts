import { Component } from '@angular/core';
import { AnalyticListComponent } from '../../components/Analytics/analytics-list.component';
import { Analytic } from '../../../interfaces';
import { LineGraphComponent } from '../../components/Analytics/line-graph.component';
import { PieChartComponent } from '../../components/Analytics/pie-chart.component';

@Component({
  selector: 'cm-super-admin-dashboard',
  standalone: true,
  imports: [AnalyticListComponent, LineGraphComponent, PieChartComponent],
  template: `
    <div class="grid gap-24">
      <cm-analytic-list [analyticItems]="analyticsItems" />

      <div class="flex flex-col gap-4 items-stretch lg:flex-row">
        <cm-line-graph />

        <cm-pie-chart />
      </div>
    </div>
  `,
})
export class AdminDashboardPage {
  analyticsItems: Analytic[] = [
    { name: 'schools', count: 5 },
    { name: 'parents', count: 75 },
    { name: 'drivers', count: 20 },
    { name: 'trips', count: 177 },
  ];
}
