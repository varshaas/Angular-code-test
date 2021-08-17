import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Customer } from '../../models';
import * as CustomerStore from '../../reducers/customer.reducers';
import { selectCustomers } from '../../selectors/customer.selectors';
import { deleteCustomer } from '../../actions/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerStore.State>) {
    this.customers$ = this.store.select(selectCustomers);
  }

  deleteCustomer(customer: Customer): void {
    this.store.dispatch(deleteCustomer({ id: customer.id }));
  }
}
