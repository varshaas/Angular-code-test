import * as uuid from 'uuid';
import { Customer } from '../models';

export const customers = [
  {
    id: uuid.v4(),
    firstName: 'Charles',
    lastName: 'Babbage',
    phoneNumber: '0412 123 123',
  },
  {
    id: uuid.v4(),
    firstName: 'Alan',
    lastName: 'Turing',
    phoneNumber: '(03) 9599 1234',
  },
  {
    id: uuid.v4(),
    firstName: 'Ada',
    lastName: 'Lovelace',
    phoneNumber: '+61 423 345 567',
  },
] as Customer[];
