import { RegisterFields } from './types';

export const initialValuesRegister = {
  [RegisterFields.firstName]: '',
  [RegisterFields.lastName]: '',
  [RegisterFields.email]: '',
  [RegisterFields.password]: '',
};

export const registerFieldsPerson = [
  {
    name: RegisterFields.firstName,
    label: 'Name',
    placeholder: 'Name',
    fullWidth: true,
  },
  {
    name: RegisterFields.lastName,
    label: 'Last name',
    placeholder: 'Last name',
    fullWidth: true,
  },
];
export const registerFieldsSecurity = [
  {
    name: RegisterFields.email,
    label: 'Email',
    placeholder: 'Email',
    fullWidth: true,
  },
  {
    name: RegisterFields.password,
    label: 'Password',
    placeholder: 'Password',
    fullWidth: true,
  },
];
