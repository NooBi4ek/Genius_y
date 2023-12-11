import * as Yup from 'yup';
import { LoginFields } from './types';

export const loginSchema = Yup.object().shape({
  [LoginFields.email]: Yup.string().email('Invalid email address').required(),
  [LoginFields.password]: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .required(),
});
