const initialState = {
  filter: "",
  sort: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

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
      return {
        ...state,
        productList: action.payload,
        fetchState: FETCH_STATES.fetched,
      };
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
