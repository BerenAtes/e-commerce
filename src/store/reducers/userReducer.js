import { LOGIN_USER, LOGOUT_USER } from "../actions/userAction";

const initialState = {
  user: {
    name: null,
    email: null,
    token: null,
    role_id: "3",
  },
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
