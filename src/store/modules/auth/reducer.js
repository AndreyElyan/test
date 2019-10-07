export const Types = {
  SIGN_REQUEST: '@auth/SIGN_REQUEST',
  SIGN_REQUEST_SUCESS: '@auth/SIGN_REQUEST_SUCESS',
};

const INITIAL_STATE = {
  user: null,
};

export default function auth(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.SIGN_REQUEST_SUCESS:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
}
