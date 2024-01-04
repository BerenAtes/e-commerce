import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

export const reducers = combineReducers({});
const middleware = [thunk, logger];

export const store = createStore(reducers, applyMiddleware(...middleware));
