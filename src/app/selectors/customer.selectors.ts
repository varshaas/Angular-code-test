import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/customer.reducers';

export const selectCustomerState = createFeatureSelector<fromCustomer.State>(
  fromCustomer.customerFeatureKey
);
export const selectCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.State) => state.customers
);
