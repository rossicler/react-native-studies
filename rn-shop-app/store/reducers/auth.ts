import { SIGNIN, SIGNUP } from "@store/actions/auth";

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      state = { token: action.token, userId: action.userId };
      break;
    case SIGNUP:
      state = { token: action.token, userId: action.userId };
      break;
    default:
      break;
  }
  return state;
};
