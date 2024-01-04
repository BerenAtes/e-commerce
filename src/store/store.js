import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

import { globalReducer } from "./reducers/globalReducer";
import userReducer from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  products: productReducer,
  shoppingCart: shoppingCartReducer,
});
const middleware = [thunk, logger];

export const store = createStore(reducers, applyMiddleware(...middleware));
