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
  template: `<div
    class=" self-stretch h-full rounded-md p-4 border border-amber-900/20 flex flex-col justify-between"
  >
    <h1>Users</h1>

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
          backgroundColor: [
            'rgb(120 53 15 / 0.4)',
            'rgb(120 53 15 / 0.6)',
            'rgb(120 53 15 / 0.8)',
          ],
          borderColor: [
            'rgb(120 53 15 / 0.4)',
            'rgb(120 53 15 / 0.6)',
            'rgb(120 53 15 / 0.8)',
          ],
          borderWidth: 1,
          hoverOffset: 5,
        },
      ],
    };

    this.chart = new Chart('canvas_pie', {
      type: 'pie',
      data: chartData,
    });
  }
}
