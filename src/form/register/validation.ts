import * as Yup from 'yup';
import { RegisterFields } from './types';

export const registerSchema = Yup.object().shape({
  [RegisterFields.firstName]: Yup.string().matches(/^[a-zA-Z ]+$/),
  [RegisterFields.lastName]: Yup.string().matches(/^[a-zA-Z ]+$/),
  [RegisterFields.email]: Yup.string()
    .email('Invalid email address')
    .required(),
  [RegisterFields.password]: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .required(),
});
