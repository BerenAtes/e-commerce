import { AxiosInstance, renewAxiosInstance } from "../../components/Api/api";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const login = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const userLogout = () => {
  return {
    type: "LOGOUT",
  };
};

export const userLogin = (login) => {
  return async (dispatch) => {
    return AxiosInstance.post("/login", login)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(login(response.data));
        renewAxiosInstance();
        return response;
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_UNSUCCESS", payload: error });
        throw error;
      });
  };
};
