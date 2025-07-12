import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {

  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: any[] = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales'
  ];
  public pieChartData: any = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {

  }

  changeData() {
    let data: string = JSON.stringify(this.pieChartData);
    let newData = JSON.parse(data);
    newData[0] += 10;
    this.pieChartData = newData;
  }
  ngOnInit() { }

}
