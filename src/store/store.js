import { thunk } from "redux-thunk";
import logger from "redux-logger";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCardReducer } from "./reducers/shoppingCardReducer";
import { storeReducer } from "./reducers/storeReducer";
import { filterReducer } from "./reducers/productReducer";

export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCardReducer,
  store: storeReducer,
  filter: filterReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
