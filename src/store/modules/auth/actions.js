import { Types } from './reducer';

export function signInRequest(email, password) {
  return {
    type: Types.SIGN_REQUEST,
    payload: { email, password },
  };
}

export function signInSucces(bearer) {
  return {
    type: '@auth/SIGN_IN_SUCCES',
    token: { bearer },
    signedIn: true,
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
