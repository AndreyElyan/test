import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import { error } from '../../../services/notifier';
import { signInSucces } from './actions';
import { Types } from './reducer';

import { makeLogin } from './api';

export function* signIn({ payload }) {
  try {
    const response = yield call(makeLogin(payload));
    const { token } = response.data;

    localStorage.setItem('@Omni:token', token);
    yield put(signInSucces(token));

    history.push('/');
  } catch (err) {
    error('Usuário ou senha incorretos');
  }
}

export default all([takeLatest(Types.SIGN_REQUEST, signIn)]);
