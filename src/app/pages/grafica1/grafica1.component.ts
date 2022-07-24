import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = [
    'Download Sales 1',
    'In-Store Sales 1',
    'Mail-Order Sales 1',
  ];

  public data1: number[] = [50, 450, 100];

  public labels2: string[] = [
    'Download Sales 2',
    'In-Store Sales 2',
    'Mail-Order Sales 2',
  ];

  public data2: number[] = [50, 10, 100];

  public labels3: string[] = [
    'Download Sales 3',
    'In-Store Sales 3',
    'Mail-Order Sales 3',
  ];

  public data3: number[] = [50, 450, 0];

  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }
}
