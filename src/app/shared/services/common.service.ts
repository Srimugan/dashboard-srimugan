import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class CommonService {
    investmentFormValues = signal({});

    setFormValues(val: any) {
        this.investmentFormValues.set(val);
    }

    getFormValues(): any {
        return this.investmentFormValues();
    }
}