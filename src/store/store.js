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

export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  products: productReducer,
  shoppingCart: shoppingCardReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));
