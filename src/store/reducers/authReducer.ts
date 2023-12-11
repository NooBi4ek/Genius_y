import { successAction } from '../../lib/actionType';
import {
  LOGIN_USER_SERVER,
  REGISTER_USER_SERVER,
} from '../actions/authActions';

export interface AuthInitialType {
  isAuth: boolean;
  isHydrated: boolean;
  token: string;
}

const authInitialState: AuthInitialType = {
  isAuth: false,
  isHydrated: false,
  token: '',
};

export const authReducer = (state = authInitialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case successAction(LOGIN_USER_SERVER): {
      return { ...state, isAuth: true, token: action.payload.data.token };
    }
    case successAction(REGISTER_USER_SERVER): {
      return { ...state, isAuth: true, token: action.payload.data.token };
    }
    default:
      return state;
  }
};
