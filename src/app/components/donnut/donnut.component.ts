import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styles: [],
})
export class DonnutComponent implements OnInit {
  ngOnInit(): void {
    this.doughnutChartData.labels = this.doughnutChartLabels;
    this.doughnutChartData.datasets = [
      { data: this.data, backgroundColor: this.backgroundColor },
    ];
  }
  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() data: number[] = [350, 450, 100];
  @Input('colors') backgroundColor: string[] = [
    '#9E120E',
    '#FF5800',
    '#FFB414',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#9E120E', '#FF5800', '#FFB414'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
