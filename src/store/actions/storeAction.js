export const setStore = (store) => {
  return {
    type: "SET_STORE",
    payload: store,
  };
};
