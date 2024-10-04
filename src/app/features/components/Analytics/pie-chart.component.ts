import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'cm-pie-chart',
  standalone: true,
  imports: [],
  styles: [
    `
      :host {
        flex-basis: 400px;
        align-self: stretch;
      }
    `,
  ],
  template: `<div class=" self-stretch h-full rounded-md">
    <canvas id="canvas_pie">{{ chart }}</canvas>
  </div>`,
})
export class PieChartComponent {
  ngOnInit(): void {
    this.createChart();
  }

  chart: any;

  createChart() {
    const chartData = {
      labels: ['Schools', 'Parents', 'Drivers'],
      datasets: [
        {
          label: 'Users',
          data: [20, 200, 50],
          backgroundColor: ['#92400e', '#d97706', '#fbbf24'],
          borderColor: ['#92400e', '#d97706', '#fbbf24'],
          hoverOffset: 4,
        },
      ],
    };

    this.chart = new Chart('canvas_pie', {
      type: 'pie',
      data: chartData,
    });
  }
}
