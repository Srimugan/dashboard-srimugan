import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss']
})
export class InvestmentDetailsComponent {

  investmentForm = new FormGroup({
    assetType: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
    purchasePrice: new FormControl("", Validators.required),
    purchaseDate: new FormControl("", Validators.required),
  });

  investmentFormSubscription!: Subscription;
  isPreview = false;



  constructor(public commonService: CommonService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.investmentFormSubscription = this.investmentForm.valueChanges.subscribe((res: any) => {
      this.commonService.setFormValues(res);
    })
  }

  public onSubmit() {
    if (this.investmentForm.valid) {
      this.isPreview = true;
    } else {
      this.toastr.error("invalid form");
    }


  }

  public actions(type: string) {
    if (type === "confirm") {
      const formValues = this.commonService.getFormValues();
      localStorage.clear();
      localStorage.setItem("formValues", JSON.stringify(formValues));
      this.investmentForm.reset();
    }
    this.isPreview = false;

  }

  ngOnDestroy() {
    this.investmentFormSubscription.unsubscribe();
  }

}
