import { LoginFormValues } from '../../form/login/types';
import { RegisterFormValues } from '../../form/register/types';

export const LOGIN_USER_SERVER = 'LOGIN_USER_SERVER';
export const REGISTER_USER_SERVER = 'REGISTER_USER_SERVER';

export const loginUserServer = (formData: LoginFormValues) => ({
  type: LOGIN_USER_SERVER,
  payload: {
    request: {
      method: 'POST',
      url: '/api/auth/login',
      data: { ...formData },
    },
  },
});

export const registerUserServer = (formData: RegisterFormValues) => ({
  type: REGISTER_USER_SERVER,
  payload: {
    request: {
      method: 'POST',
      url: '/api/auth/register',
      data: { ...formData },
    },
  },
});
