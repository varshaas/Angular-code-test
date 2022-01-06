import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as CustomerStore from '../../reducers/customer.reducers';
import { addCustomer } from '../../actions/customer.actions';
import { Customer } from '../../models';
import { constants } from 'src/app/shared/shared.constants';
import { SharedService } from 'src/app/shared/shared.services';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent {
  customerFormGroup: FormGroup;
  constructor(
    private store: Store<CustomerStore.State>,
    private formBuilder: FormBuilder,
    public sharedService: SharedService
  ) {
    this.customerFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern(constants.PHONE_REGEX)]],
    });
  }

  get customerFormGroupControls(){ return this.customerFormGroup.controls}

  onSubmit(): void {
    this.store.dispatch(
      addCustomer({
        customer: this.customerFormGroup.value as Customer,
      })
    );
    this.customerFormGroup.reset();
    this.customerFormGroup.markAsUntouched();
  }

}
