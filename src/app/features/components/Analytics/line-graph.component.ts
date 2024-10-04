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
  template: `<div>
    <h1>line graph</h1>
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
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          lineTension: 0.3,
          backgroundColor: '#fef3c7',
          borderColor: '#d97706',
          pointBackgroundColor: '#b45309',
          pointRadius: 2,
        },
      ],
    };

    this.chart = new Chart('canvas_line', {
      type: 'line',
      data: chartData,
      options: {
        aspectRatio: 2.15,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
