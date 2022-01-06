import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer';

export const addCustomer = createAction(
  '[Customer] addCustomer',
  props<{ customer: Customer }>()
);

export const deleteCustomer = createAction(
  '[Customer] deleteCustomer',
  props<{ id: string }>()
);

export const editCustomer = createAction(
  '[Customer] editCustomer',
  props<{ customer: Customer, id: string }>()
);
