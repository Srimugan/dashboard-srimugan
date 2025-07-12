import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardMainComponent }]),
    NgChartsModule
  ],
})
export class DashboardModule { }
