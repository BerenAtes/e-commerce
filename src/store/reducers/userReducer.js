//{Object} all about user

const userInitial = {
  userName: null,
  userMail: null,
  userPicture: null,
  login: false,
  error: null,
  token: null,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userName: action.payload.name,
        userMail: action.payload.email,
        login: action.payload.login,
        userPicture: action.payload.gravatar,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,

        token: action.payload.token,
        login: true,
      };

    case "LOGIN_UNSUCCESS":
      return {
        ...state,
        error: action.payload,
        login: false,
      };

    case "LOGOUT":
      return {
        ...state,
        userName: null,
        userMail: null,
        userPicture: null,
        login: false,
      };

    default:
      return state;
  }
};
