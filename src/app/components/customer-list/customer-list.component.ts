import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Customer } from '../../models';
import * as CustomerStore from '../../reducers/customer.reducers';
import { selectCustomers } from '../../selectors/customer.selectors';
import { addCustomer, deleteCustomer, editCustomer } from '../../actions/customer.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constants } from 'src/app/shared/shared.constants';
import { SharedService } from 'src/app/shared/shared.services';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  customerEditFormGroup: FormGroup;
  customers$: Observable<Customer[]>;
  customerId: any;
  @ViewChild('closebutton') closebutton:any;

  constructor(private store: Store<CustomerStore.State>, private formBuilder: FormBuilder, public sharedService: SharedService) {
    this.customers$ = this.store.select(selectCustomers);
    this.customerEditFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern(constants.PHONE_REGEX)]],
    }); 
  }

  get customerEditFormGroupControls(){ return this.customerEditFormGroup.controls}

  deleteCustomer(customer: Customer): void {
    this.store.dispatch(deleteCustomer({ id: customer.id }));
  }
  editCustomer(customer: Customer){  
    this.customerId=customer.id;
    this.customerEditFormGroup.setValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      phoneNumber: customer.phoneNumber,
    }); 
  }
  onSubmit(){
    this.store.dispatch(
      editCustomer({
        customer: this.customerEditFormGroup.value as Customer,
        id: this.customerId
      })
    );
    this.customerEditFormGroup.reset();
    this.customerEditFormGroup.markAsUntouched();     
    this.closebutton.nativeElement.click();
  }
}
