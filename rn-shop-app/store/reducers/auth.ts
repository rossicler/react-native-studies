import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from "@store/actions/auth";

const initialState = {
  token: null,
  userId: null,
  didTryAutoLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      state = {
        token: action.token,
        userId: action.userId,
        didTryAutoLogin: true,
      };
      break;
    case LOGOUT:
      state = { ...initialState, didTryAutoLogin: true };
      break;
    case SET_DID_TRY_AL:
      state = { ...state, didTryAutoLogin: true };
      break;
    default:
      break;
  }
  return state;
};
