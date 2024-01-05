export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADSRESS";

export const addShoppingCard = (product) => {
  return { type: ADD_CARD, payload: product };
};
export const deleteShoppingCard = (productID) => {
  return { type: REMOVE_CARD, payload: productID };
};

export const setPayment = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddress = (address) => {
  return {
    type: "SET_ADDRESS",
    payload: address,
  };
};
