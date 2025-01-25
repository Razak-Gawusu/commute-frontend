import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'cm-line-graph',
  standalone: true,
  imports: [],
  styles: [
    `
      :host {
        flex-grow: 1;
      }
    `,
  ],
  template: `<div class="p-4 rounded-md border border-amber-900/20">
    <div class="flex justify-between items-center">
      <h1>Total trips</h1>

      <button>weekly</button>
    </div>
    <canvas id="canvas_line" height="300">{{ chart }}</canvas>
  </div>`,
})
export class LineGraphComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }

  chart: any;

  createChart() {
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Trips',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          lineTension: 0.3,
          backgroundColor: 'rgb(120 53 15 / 0.2)',
          borderColor: 'rgb(120 53 15 / 0.7)',
          pointBackgroundColor: '#b45309',
          pointRadius: 2,
          borderWidth: 1,
        },
      ],
    };

    this.chart = new Chart('canvas_line', {
      type: 'line',
      data: chartData,
      options: {
        aspectRatio: 2.15,
        scales: {
          x: {
            grid: {
              color: 'rgb(120 53 15 / 0.2)',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgb(120 53 15 / 0.2)',
            },
          },
        },
      },
    });
  }
}
