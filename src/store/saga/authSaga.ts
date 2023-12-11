import { put, takeEvery } from 'redux-saga/effects';
import { failAction, successAction } from '../../lib/actionType';
import {
  LOGIN_USER_SERVER,
  REGISTER_USER_SERVER,
} from '../actions/authActions';
import { changeModalStatus } from '../actions/modalActions';
import { toast } from 'react-toastify';

export const authSaga = [
  takeEvery(successAction(LOGIN_USER_SERVER), loginSuccessHandler),
  takeEvery(failAction(LOGIN_USER_SERVER), loginFailHandler),
  takeEvery(successAction(REGISTER_USER_SERVER), registerSuccessHandler),
  takeEvery(failAction(REGISTER_USER_SERVER), registerFailHandler),
];

function* loginSuccessHandler() {
  yield put(changeModalStatus({ status: false, content: null }));
  toast.success('Login success');
}

function* loginFailHandler(action: any) {
  yield toast.error(action.error.response.data.error || 'Error while login');
}

function* registerSuccessHandler() {
  yield put(changeModalStatus({ status: false, content: null }));
  toast.success('Register success');
}

function* registerFailHandler(action: any) {
  yield toast.error(action.error.response.data.error || 'Error while register');
}
