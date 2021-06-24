import { AUTHENTICATE, LOGOUT } from "@store/actions/auth";

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      state = { token: action.token, userId: action.userId };
      break;
    case LOGOUT:
      state = initialState;
      break;
    default:
      break;
  }
  return state;
};
