import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyWithDecimalDirective } from './numberonly.directive';


@NgModule({
  declarations: [
    InvestmentDetailsComponent,
    NumbersOnlyWithDecimalDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: InvestmentDetailsComponent }])
  ]
})
export class CoreModule { }
