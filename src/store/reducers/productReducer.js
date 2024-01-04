export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};

const productInitialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
};

export function productReducer(state = productInitialState, action) {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_TOTAL_PRODUCT_COUNT":
      return { ...state, totalProductCount: action.payload };
    case "SET_PAGE_COUNT":
      return { ...state, pageCount: action.payload };
    case "SET_ACTIVE_PAGE":
      return { ...state, activePage: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
}

//- product list: {Object Array}
//- total product count: {Number}
//- page count: {Number}
//- active page: {Number}
//- fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED”//
