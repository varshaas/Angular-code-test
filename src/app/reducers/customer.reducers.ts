import { Action, createReducer, on } from '@ngrx/store';
import * as uuid from 'uuid';
import * as MockData from './mock-data';

import * as CustomerActions from '../actions/customer.actions';
import { Customer } from '../models';

export const customerFeatureKey = 'customer';

export interface State {
  customers: Customer[];
}

export const initialState: State = {
  customers: MockData.customers
};

const customerReducer = createReducer(
  initialState,

  on(CustomerActions.addCustomer, (state, { customer }) => {
    const id = uuid.v4();
    return {
      ...state,
      customers: [...state.customers, { ...customer, id }],
    };
  }),

  on(CustomerActions.deleteCustomer, (state, { id }) => {
    return {
      ...state,
      customers: state.customers.filter((customer) => customer.id !== id),
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return customerReducer(state, action);
}
