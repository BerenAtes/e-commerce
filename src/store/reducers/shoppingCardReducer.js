const shoppingCartInitial = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCardReducer = (state = shoppingCartInitial, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CARD":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

//- cart: {Object Array} will keep products are being bought
//[
//  {  count: 1, product: { id: “1235”, … }  },
// {  count: 3, product: { id: “1236”, … }  },
//]
//- payment {Object} will keep payment information
//- address {Object} will keep address information
