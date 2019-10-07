import { Types } from './reducer';

export function signInRequest(email, password) {
  return {
    type: Types.SIGN_REQUEST,
    payload: { email, password },
  };
}

export function signInSucces(payload) {
  return {
    type: Types.SIGN_REQUEST_SUCESS,
    payload,
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
