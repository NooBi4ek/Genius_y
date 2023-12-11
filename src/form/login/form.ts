import { useFormik } from 'formik';
import { LoginFields, LoginFormValues } from './types';
import { loginSchema } from './validation';

export const initialValuesLogin = {
  [LoginFields.email]: '',
  [LoginFields.password]: '',
};

export const loginField = [
  {
    name: LoginFields.email,
    label: 'Email',
    placeholder: 'Email',
    fullWidth: true,
  },
  {
    name: LoginFields.password,
    label: 'Password',
    placeholder: 'Password',
    fullWidth: true,
  },
];
