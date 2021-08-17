import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as CustomerStore from '../../reducers/customer.reducers';
import { addCustomer } from '../../actions/customer.actions';
import { Customer } from '../../models';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent {
  customerFormGroup: FormGroup;
  constructor(
    private store: Store<CustomerStore.State>,
    private formBuilder: FormBuilder
  ) {
    this.customerFormGroup = this.formBuilder.group({
      firstName: null,
      lastName: null,
      phoneNumber: null,
    });
  }

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
